
export interface BaseMongoError {
    index: number;
    code: number;
    keyPattern?: { [key: string]: number };
    keyValue?: { [key: string]: any };
}

const getFirstKey = (value: object) => Object.keys( value )[0]

export default (mongoError: BaseMongoError): string => {

    // Duplicate unique key value
    if (mongoError.code === 11000) {
        const key = getFirstKey( mongoError.keyPattern ?? {} )
        if (!key) return `Server Error, Cannot Proccess Error code ${mongoError.code}`
        const value = mongoError.keyValue?.[key]
        if (!value) return `Server Error, Cannot Proccess Error code ${mongoError.code}`
        return `${value} is an already taken ${key}`
    }

    return `Unknown Error - ${mongoError.code}`
}