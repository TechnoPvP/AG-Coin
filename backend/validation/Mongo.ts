
export interface BaseMongoError {
    index: number;
    code: number;
    keyPattern?: { [key: string]: number };
    keyValue?: { [key: string]: any };
}

const getFirstKey = (value: object) => Object.keys( value )[0]

export default (error: BaseMongoError | Error): string => {
    if (error instanceof Error) return error.message
    const mongooseError = error as BaseMongoError
    // Duplicate unique key value
    if (mongooseError.code === 11000) {
        const key = getFirstKey( mongooseError.keyPattern ?? {} )
        if (!key) return `Server Error, Cannot Proccess Error code ${mongooseError.code}`
        const value = mongooseError.keyValue?.[key]
        if (!value) return `Server Error, Cannot Proccess Error code ${mongooseError.code}`
        return `${value} is a already taken ${key}`
    }

    return `Unknown Error - ${mongooseError.code}`
}