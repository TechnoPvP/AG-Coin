
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Tag
 * 
 */
export type Tag = {
  id: number
  name: string
}

/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  password: string
  first_name: string
  last_name: string
  avatar: string
  role: Role
  phone: string | null
}

/**
 * Model Blog
 * 
 */
export type Blog = {
  id: number
  title: string
  body: string
  thumbnail: string
  difficulty: Difficulty
  status: Status
  created_at: Date
}

/**
 * Model Feed
 * 
 */
export type Feed = {
  id: number
  caption: string
  thumbnail: string | null
  userId: number
  created_at: Date
}

/**
 * Model FeedComment
 * 
 */
export type FeedComment = {
  id: number
  content: string
  feedId: number
  userID: number
  created_at: Date
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  sid: string
  data: string
  expiresAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  ADMIN: 'ADMIN',
  DEFAULT: 'DEFAULT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const Status: {
  DRAFT: 'DRAFT',
  PUBLISH: 'PUBLISH'
};

export type Status = (typeof Status)[keyof typeof Status]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tags
 * const tags = await prisma.tag.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tags
   * const tags = await prisma.tag.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<GlobalReject>;

  /**
   * `prisma.feed`: Exposes CRUD operations for the **Feed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feeds
    * const feeds = await prisma.feed.findMany()
    * ```
    */
  get feed(): Prisma.FeedDelegate<GlobalReject>;

  /**
   * `prisma.feedComment`: Exposes CRUD operations for the **FeedComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedComments
    * const feedComments = await prisma.feedComment.findMany()
    * ```
    */
  get feedComment(): Prisma.FeedCommentDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.6.0
   * Query Engine version: dc520b92b1ebb2d28dc3161f9f82e875bd35d727
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Tag: 'Tag',
    User: 'User',
    Blog: 'Blog',
    Feed: 'Feed',
    FeedComment: 'FeedComment',
    Session: 'Session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TagCountOutputType
   */


  export type TagCountOutputType = {
    blog: number
  }

  export type TagCountOutputTypeSelect = {
    blog?: boolean
  }

  export type TagCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TagCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TagCountOutputType
    : S extends undefined
    ? never
    : S extends TagCountOutputTypeArgs
    ?'include' extends U
    ? TagCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof TagCountOutputType ?TagCountOutputType [P]
  : 
     never
  } 
    : TagCountOutputType
  : TagCountOutputType




  // Custom InputTypes

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     * 
    **/
    select?: TagCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    feeds: number
    feedComments: number
  }

  export type UserCountOutputTypeSelect = {
    feeds?: boolean
    feedComments?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type BlogCountOutputType
   */


  export type BlogCountOutputType = {
    tags: number
  }

  export type BlogCountOutputTypeSelect = {
    tags?: boolean
  }

  export type BlogCountOutputTypeGetPayload<
    S extends boolean | null | undefined | BlogCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? BlogCountOutputType
    : S extends undefined
    ? never
    : S extends BlogCountOutputTypeArgs
    ?'include' extends U
    ? BlogCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof BlogCountOutputType ?BlogCountOutputType [P]
  : 
     never
  } 
    : BlogCountOutputType
  : BlogCountOutputType




  // Custom InputTypes

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BlogCountOutputType
     * 
    **/
    select?: BlogCountOutputTypeSelect | null
  }



  /**
   * Count Type FeedCountOutputType
   */


  export type FeedCountOutputType = {
    comments: number
  }

  export type FeedCountOutputTypeSelect = {
    comments?: boolean
  }

  export type FeedCountOutputTypeGetPayload<
    S extends boolean | null | undefined | FeedCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? FeedCountOutputType
    : S extends undefined
    ? never
    : S extends FeedCountOutputTypeArgs
    ?'include' extends U
    ? FeedCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof FeedCountOutputType ?FeedCountOutputType [P]
  : 
     never
  } 
    : FeedCountOutputType
  : FeedCountOutputType




  // Custom InputTypes

  /**
   * FeedCountOutputType without action
   */
  export type FeedCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FeedCountOutputType
     * 
    **/
    select?: FeedCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Tag
   */


  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs = {
    /**
     * Filter which Tag to aggregate.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs = {
    where?: TagWhereInput
    orderBy?: Enumerable<TagOrderByWithAggregationInput>
    by: Array<TagScalarFieldEnum>
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }


  export type TagGroupByOutputType = {
    id: number
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Promise<
    Array<
      PickArray<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect = {
    id?: boolean
    name?: boolean
    blog?: boolean | BlogFindManyArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type TagInclude = {
    blog?: boolean | BlogFindManyArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type TagGetPayload<
    S extends boolean | null | undefined | TagArgs,
    U = keyof S
      > = S extends true
        ? Tag
    : S extends undefined
    ? never
    : S extends TagArgs | TagFindManyArgs
    ?'include' extends U
    ? Tag  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'blog'
        ? Array < BlogGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? TagCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Tag ?Tag [P]
  : 
          P extends 'blog'
        ? Array < BlogGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? TagCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Tag
  : Tag


  type TagCountArgs = Merge<
    Omit<TagFindManyArgs, 'select' | 'include'> & {
      select?: TagCountAggregateInputType | true
    }
  >

  export interface TagDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Tag>>, PrismaPromise<Array<TagGetPayload<T>>>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
    **/
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Create many Tags.
     *     @param {TagCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tag = await prisma.tag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
    **/
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
    **/
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TagClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    blog<T extends BlogFindManyArgs = {}>(args?: Subset<T, BlogFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Blog>>, PrismaPromise<Array<BlogGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Throw an Error if a Tag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tag to fetch.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Throw an Error if a Tag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tag to fetch.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     * 
    **/
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag findMany
   */
  export type TagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter, which Tags to fetch.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag create
   */
  export type TagCreateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The data needed to create a Tag.
     * 
    **/
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }


  /**
   * Tag createMany
   */
  export type TagCreateManyArgs = {
    data: Enumerable<TagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tag update
   */
  export type TagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The data needed to update a Tag.
     * 
    **/
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs = {
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    where?: TagWhereInput
  }


  /**
   * Tag upsert
   */
  export type TagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The filter to search for the Tag to update in case it exists.
     * 
    **/
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     * 
    **/
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }


  /**
   * Tag delete
   */
  export type TagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter which Tag to delete.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs = {
    where?: TagWhereInput
  }


  /**
   * Tag without action
   */
  export type TagArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    avatar: string | null
    role: Role | null
    phone: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    avatar: string | null
    role: Role | null
    phone: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    first_name: number
    last_name: number
    avatar: number
    role: number
    phone: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    avatar?: true
    role?: true
    phone?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    avatar?: true
    role?: true
    phone?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    avatar?: true
    role?: true
    phone?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    first_name: string
    last_name: string
    avatar: string
    role: Role
    phone: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar?: boolean
    role?: boolean
    phone?: boolean
    feeds?: boolean | FeedFindManyArgs
    feedComments?: boolean | FeedCommentFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    feeds?: boolean | FeedFindManyArgs
    feedComments?: boolean | FeedCommentFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'feeds'
        ? Array < FeedGetPayload<S['include'][P]>>  :
        P extends 'feedComments'
        ? Array < FeedCommentGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'feeds'
        ? Array < FeedGetPayload<S['select'][P]>>  :
        P extends 'feedComments'
        ? Array < FeedCommentGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    feeds<T extends FeedFindManyArgs = {}>(args?: Subset<T, FeedFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Feed>>, PrismaPromise<Array<FeedGetPayload<T>>>>;

    feedComments<T extends FeedCommentFindManyArgs = {}>(args?: Subset<T, FeedCommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<FeedComment>>, PrismaPromise<Array<FeedCommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Blog
   */


  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    id: number | null
  }

  export type BlogSumAggregateOutputType = {
    id: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    thumbnail: string | null
    difficulty: Difficulty | null
    status: Status | null
    created_at: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    thumbnail: string | null
    difficulty: Difficulty | null
    status: Status | null
    created_at: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    body: number
    thumbnail: number
    difficulty: number
    status: number
    created_at: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    id?: true
  }

  export type BlogSumAggregateInputType = {
    id?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    thumbnail?: true
    difficulty?: true
    status?: true
    created_at?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    thumbnail?: true
    difficulty?: true
    status?: true
    created_at?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    thumbnail?: true
    difficulty?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type BlogAggregateArgs = {
    /**
     * Filter which Blog to aggregate.
     * 
    **/
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs = {
    where?: BlogWhereInput
    orderBy?: Enumerable<BlogOrderByWithAggregationInput>
    by: Array<BlogScalarFieldEnum>
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }


  export type BlogGroupByOutputType = {
    id: number
    title: string
    body: string
    thumbnail: string
    difficulty: Difficulty
    status: Status
    created_at: Date
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Promise<
    Array<
      PickArray<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect = {
    id?: boolean
    title?: boolean
    body?: boolean
    thumbnail?: boolean
    tags?: boolean | TagFindManyArgs
    difficulty?: boolean
    status?: boolean
    created_at?: boolean
    _count?: boolean | BlogCountOutputTypeArgs
  }

  export type BlogInclude = {
    tags?: boolean | TagFindManyArgs
    _count?: boolean | BlogCountOutputTypeArgs
  }

  export type BlogGetPayload<
    S extends boolean | null | undefined | BlogArgs,
    U = keyof S
      > = S extends true
        ? Blog
    : S extends undefined
    ? never
    : S extends BlogArgs | BlogFindManyArgs
    ?'include' extends U
    ? Blog  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'tags'
        ? Array < TagGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? BlogCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Blog ?Blog [P]
  : 
          P extends 'tags'
        ? Array < TagGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? BlogCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Blog
  : Blog


  type BlogCountArgs = Merge<
    Omit<BlogFindManyArgs, 'select' | 'include'> & {
      select?: BlogCountAggregateInputType | true
    }
  >

  export interface BlogDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlogFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BlogFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Blog'> extends True ? CheckSelect<T, Prisma__BlogClient<Blog>, Prisma__BlogClient<BlogGetPayload<T>>> : CheckSelect<T, Prisma__BlogClient<Blog | null >, Prisma__BlogClient<BlogGetPayload<T> | null >>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlogFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BlogFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Blog'> extends True ? CheckSelect<T, Prisma__BlogClient<Blog>, Prisma__BlogClient<BlogGetPayload<T>>> : CheckSelect<T, Prisma__BlogClient<Blog | null >, Prisma__BlogClient<BlogGetPayload<T> | null >>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlogFindManyArgs>(
      args?: SelectSubset<T, BlogFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Blog>>, PrismaPromise<Array<BlogGetPayload<T>>>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
    **/
    create<T extends BlogCreateArgs>(
      args: SelectSubset<T, BlogCreateArgs>
    ): CheckSelect<T, Prisma__BlogClient<Blog>, Prisma__BlogClient<BlogGetPayload<T>>>

    /**
     * Create many Blogs.
     *     @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     *     @example
     *     // Create many Blogs
     *     const blog = await prisma.blog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlogCreateManyArgs>(
      args?: SelectSubset<T, BlogCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
    **/
    delete<T extends BlogDeleteArgs>(
      args: SelectSubset<T, BlogDeleteArgs>
    ): CheckSelect<T, Prisma__BlogClient<Blog>, Prisma__BlogClient<BlogGetPayload<T>>>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlogUpdateArgs>(
      args: SelectSubset<T, BlogUpdateArgs>
    ): CheckSelect<T, Prisma__BlogClient<Blog>, Prisma__BlogClient<BlogGetPayload<T>>>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlogDeleteManyArgs>(
      args?: SelectSubset<T, BlogDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlogUpdateManyArgs>(
      args: SelectSubset<T, BlogUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
    **/
    upsert<T extends BlogUpsertArgs>(
      args: SelectSubset<T, BlogUpsertArgs>
    ): CheckSelect<T, Prisma__BlogClient<Blog>, Prisma__BlogClient<BlogGetPayload<T>>>

    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BlogClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tags<T extends TagFindManyArgs = {}>(args?: Subset<T, TagFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Tag>>, PrismaPromise<Array<TagGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * Throw an Error if a Blog can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Blog to fetch.
     * 
    **/
    where: BlogWhereUniqueInput
  }


  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * Throw an Error if a Blog can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Blog to fetch.
     * 
    **/
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     * 
    **/
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     * 
    **/
    distinct?: Enumerable<BlogScalarFieldEnum>
  }


  /**
   * Blog findMany
   */
  export type BlogFindManyArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * Filter, which Blogs to fetch.
     * 
    **/
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     * 
    **/
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BlogScalarFieldEnum>
  }


  /**
   * Blog create
   */
  export type BlogCreateArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * The data needed to create a Blog.
     * 
    **/
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }


  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs = {
    data: Enumerable<BlogCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Blog update
   */
  export type BlogUpdateArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * The data needed to update a Blog.
     * 
    **/
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     * 
    **/
    where: BlogWhereUniqueInput
  }


  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs = {
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    where?: BlogWhereInput
  }


  /**
   * Blog upsert
   */
  export type BlogUpsertArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * The filter to search for the Blog to update in case it exists.
     * 
    **/
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     * 
    **/
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }


  /**
   * Blog delete
   */
  export type BlogDeleteArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * Filter which Blog to delete.
     * 
    **/
    where: BlogWhereUniqueInput
  }


  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs = {
    where?: BlogWhereInput
  }


  /**
   * Blog without action
   */
  export type BlogArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
  }



  /**
   * Model Feed
   */


  export type AggregateFeed = {
    _count: FeedCountAggregateOutputType | null
    _avg: FeedAvgAggregateOutputType | null
    _sum: FeedSumAggregateOutputType | null
    _min: FeedMinAggregateOutputType | null
    _max: FeedMaxAggregateOutputType | null
  }

  export type FeedAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FeedSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FeedMinAggregateOutputType = {
    id: number | null
    caption: string | null
    thumbnail: string | null
    userId: number | null
    created_at: Date | null
  }

  export type FeedMaxAggregateOutputType = {
    id: number | null
    caption: string | null
    thumbnail: string | null
    userId: number | null
    created_at: Date | null
  }

  export type FeedCountAggregateOutputType = {
    id: number
    caption: number
    thumbnail: number
    userId: number
    created_at: number
    _all: number
  }


  export type FeedAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FeedSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FeedMinAggregateInputType = {
    id?: true
    caption?: true
    thumbnail?: true
    userId?: true
    created_at?: true
  }

  export type FeedMaxAggregateInputType = {
    id?: true
    caption?: true
    thumbnail?: true
    userId?: true
    created_at?: true
  }

  export type FeedCountAggregateInputType = {
    id?: true
    caption?: true
    thumbnail?: true
    userId?: true
    created_at?: true
    _all?: true
  }

  export type FeedAggregateArgs = {
    /**
     * Filter which Feed to aggregate.
     * 
    **/
    where?: FeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feeds
    **/
    _count?: true | FeedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedMaxAggregateInputType
  }

  export type GetFeedAggregateType<T extends FeedAggregateArgs> = {
        [P in keyof T & keyof AggregateFeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeed[P]>
      : GetScalarType<T[P], AggregateFeed[P]>
  }




  export type FeedGroupByArgs = {
    where?: FeedWhereInput
    orderBy?: Enumerable<FeedOrderByWithAggregationInput>
    by: Array<FeedScalarFieldEnum>
    having?: FeedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedCountAggregateInputType | true
    _avg?: FeedAvgAggregateInputType
    _sum?: FeedSumAggregateInputType
    _min?: FeedMinAggregateInputType
    _max?: FeedMaxAggregateInputType
  }


  export type FeedGroupByOutputType = {
    id: number
    caption: string
    thumbnail: string | null
    userId: number
    created_at: Date
    _count: FeedCountAggregateOutputType | null
    _avg: FeedAvgAggregateOutputType | null
    _sum: FeedSumAggregateOutputType | null
    _min: FeedMinAggregateOutputType | null
    _max: FeedMaxAggregateOutputType | null
  }

  type GetFeedGroupByPayload<T extends FeedGroupByArgs> = Promise<
    Array<
      PickArray<FeedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedGroupByOutputType[P]>
            : GetScalarType<T[P], FeedGroupByOutputType[P]>
        }
      >
    >


  export type FeedSelect = {
    id?: boolean
    caption?: boolean
    thumbnail?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    created_at?: boolean
    comments?: boolean | FeedCommentFindManyArgs
    _count?: boolean | FeedCountOutputTypeArgs
  }

  export type FeedInclude = {
    user?: boolean | UserArgs
    comments?: boolean | FeedCommentFindManyArgs
    _count?: boolean | FeedCountOutputTypeArgs
  }

  export type FeedGetPayload<
    S extends boolean | null | undefined | FeedArgs,
    U = keyof S
      > = S extends true
        ? Feed
    : S extends undefined
    ? never
    : S extends FeedArgs | FeedFindManyArgs
    ?'include' extends U
    ? Feed  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> :
        P extends 'comments'
        ? Array < FeedCommentGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? FeedCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Feed ?Feed [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'comments'
        ? Array < FeedCommentGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? FeedCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Feed
  : Feed


  type FeedCountArgs = Merge<
    Omit<FeedFindManyArgs, 'select' | 'include'> & {
      select?: FeedCountAggregateInputType | true
    }
  >

  export interface FeedDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Feed that matches the filter.
     * @param {FeedFindUniqueArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeedFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FeedFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Feed'> extends True ? CheckSelect<T, Prisma__FeedClient<Feed>, Prisma__FeedClient<FeedGetPayload<T>>> : CheckSelect<T, Prisma__FeedClient<Feed | null >, Prisma__FeedClient<FeedGetPayload<T> | null >>

    /**
     * Find the first Feed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedFindFirstArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeedFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FeedFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Feed'> extends True ? CheckSelect<T, Prisma__FeedClient<Feed>, Prisma__FeedClient<FeedGetPayload<T>>> : CheckSelect<T, Prisma__FeedClient<Feed | null >, Prisma__FeedClient<FeedGetPayload<T> | null >>

    /**
     * Find zero or more Feeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feeds
     * const feeds = await prisma.feed.findMany()
     * 
     * // Get first 10 Feeds
     * const feeds = await prisma.feed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedWithIdOnly = await prisma.feed.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FeedFindManyArgs>(
      args?: SelectSubset<T, FeedFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Feed>>, PrismaPromise<Array<FeedGetPayload<T>>>>

    /**
     * Create a Feed.
     * @param {FeedCreateArgs} args - Arguments to create a Feed.
     * @example
     * // Create one Feed
     * const Feed = await prisma.feed.create({
     *   data: {
     *     // ... data to create a Feed
     *   }
     * })
     * 
    **/
    create<T extends FeedCreateArgs>(
      args: SelectSubset<T, FeedCreateArgs>
    ): CheckSelect<T, Prisma__FeedClient<Feed>, Prisma__FeedClient<FeedGetPayload<T>>>

    /**
     * Create many Feeds.
     *     @param {FeedCreateManyArgs} args - Arguments to create many Feeds.
     *     @example
     *     // Create many Feeds
     *     const feed = await prisma.feed.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeedCreateManyArgs>(
      args?: SelectSubset<T, FeedCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Feed.
     * @param {FeedDeleteArgs} args - Arguments to delete one Feed.
     * @example
     * // Delete one Feed
     * const Feed = await prisma.feed.delete({
     *   where: {
     *     // ... filter to delete one Feed
     *   }
     * })
     * 
    **/
    delete<T extends FeedDeleteArgs>(
      args: SelectSubset<T, FeedDeleteArgs>
    ): CheckSelect<T, Prisma__FeedClient<Feed>, Prisma__FeedClient<FeedGetPayload<T>>>

    /**
     * Update one Feed.
     * @param {FeedUpdateArgs} args - Arguments to update one Feed.
     * @example
     * // Update one Feed
     * const feed = await prisma.feed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeedUpdateArgs>(
      args: SelectSubset<T, FeedUpdateArgs>
    ): CheckSelect<T, Prisma__FeedClient<Feed>, Prisma__FeedClient<FeedGetPayload<T>>>

    /**
     * Delete zero or more Feeds.
     * @param {FeedDeleteManyArgs} args - Arguments to filter Feeds to delete.
     * @example
     * // Delete a few Feeds
     * const { count } = await prisma.feed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeedDeleteManyArgs>(
      args?: SelectSubset<T, FeedDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feeds
     * const feed = await prisma.feed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeedUpdateManyArgs>(
      args: SelectSubset<T, FeedUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Feed.
     * @param {FeedUpsertArgs} args - Arguments to update or create a Feed.
     * @example
     * // Update or create a Feed
     * const feed = await prisma.feed.upsert({
     *   create: {
     *     // ... data to create a Feed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feed we want to update
     *   }
     * })
    **/
    upsert<T extends FeedUpsertArgs>(
      args: SelectSubset<T, FeedUpsertArgs>
    ): CheckSelect<T, Prisma__FeedClient<Feed>, Prisma__FeedClient<FeedGetPayload<T>>>

    /**
     * Count the number of Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCountArgs} args - Arguments to filter Feeds to count.
     * @example
     * // Count the number of Feeds
     * const count = await prisma.feed.count({
     *   where: {
     *     // ... the filter for the Feeds we want to count
     *   }
     * })
    **/
    count<T extends FeedCountArgs>(
      args?: Subset<T, FeedCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedAggregateArgs>(args: Subset<T, FeedAggregateArgs>): PrismaPromise<GetFeedAggregateType<T>>

    /**
     * Group by Feed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedGroupByArgs['orderBy'] }
        : { orderBy?: FeedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FeedClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    comments<T extends FeedCommentFindManyArgs = {}>(args?: Subset<T, FeedCommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<FeedComment>>, PrismaPromise<Array<FeedCommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Feed findUnique
   */
  export type FeedFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Feed
     * 
    **/
    select?: FeedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedInclude | null
    /**
     * Throw an Error if a Feed can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Feed to fetch.
     * 
    **/
    where: FeedWhereUniqueInput
  }


  /**
   * Feed findFirst
   */
  export type FeedFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Feed
     * 
    **/
    select?: FeedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedInclude | null
    /**
     * Throw an Error if a Feed can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Feed to fetch.
     * 
    **/
    where?: FeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feeds.
     * 
    **/
    cursor?: FeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feeds.
     * 
    **/
    distinct?: Enumerable<FeedScalarFieldEnum>
  }


  /**
   * Feed findMany
   */
  export type FeedFindManyArgs = {
    /**
     * Select specific fields to fetch from the Feed
     * 
    **/
    select?: FeedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedInclude | null
    /**
     * Filter, which Feeds to fetch.
     * 
    **/
    where?: FeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feeds.
     * 
    **/
    cursor?: FeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FeedScalarFieldEnum>
  }


  /**
   * Feed create
   */
  export type FeedCreateArgs = {
    /**
     * Select specific fields to fetch from the Feed
     * 
    **/
    select?: FeedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedInclude | null
    /**
     * The data needed to create a Feed.
     * 
    **/
    data: XOR<FeedCreateInput, FeedUncheckedCreateInput>
  }


  /**
   * Feed createMany
   */
  export type FeedCreateManyArgs = {
    data: Enumerable<FeedCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Feed update
   */
  export type FeedUpdateArgs = {
    /**
     * Select specific fields to fetch from the Feed
     * 
    **/
    select?: FeedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedInclude | null
    /**
     * The data needed to update a Feed.
     * 
    **/
    data: XOR<FeedUpdateInput, FeedUncheckedUpdateInput>
    /**
     * Choose, which Feed to update.
     * 
    **/
    where: FeedWhereUniqueInput
  }


  /**
   * Feed updateMany
   */
  export type FeedUpdateManyArgs = {
    data: XOR<FeedUpdateManyMutationInput, FeedUncheckedUpdateManyInput>
    where?: FeedWhereInput
  }


  /**
   * Feed upsert
   */
  export type FeedUpsertArgs = {
    /**
     * Select specific fields to fetch from the Feed
     * 
    **/
    select?: FeedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedInclude | null
    /**
     * The filter to search for the Feed to update in case it exists.
     * 
    **/
    where: FeedWhereUniqueInput
    /**
     * In case the Feed found by the `where` argument doesn't exist, create a new Feed with this data.
     * 
    **/
    create: XOR<FeedCreateInput, FeedUncheckedCreateInput>
    /**
     * In case the Feed was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FeedUpdateInput, FeedUncheckedUpdateInput>
  }


  /**
   * Feed delete
   */
  export type FeedDeleteArgs = {
    /**
     * Select specific fields to fetch from the Feed
     * 
    **/
    select?: FeedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedInclude | null
    /**
     * Filter which Feed to delete.
     * 
    **/
    where: FeedWhereUniqueInput
  }


  /**
   * Feed deleteMany
   */
  export type FeedDeleteManyArgs = {
    where?: FeedWhereInput
  }


  /**
   * Feed without action
   */
  export type FeedArgs = {
    /**
     * Select specific fields to fetch from the Feed
     * 
    **/
    select?: FeedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedInclude | null
  }



  /**
   * Model FeedComment
   */


  export type AggregateFeedComment = {
    _count: FeedCommentCountAggregateOutputType | null
    _avg: FeedCommentAvgAggregateOutputType | null
    _sum: FeedCommentSumAggregateOutputType | null
    _min: FeedCommentMinAggregateOutputType | null
    _max: FeedCommentMaxAggregateOutputType | null
  }

  export type FeedCommentAvgAggregateOutputType = {
    id: number | null
    feedId: number | null
    userID: number | null
  }

  export type FeedCommentSumAggregateOutputType = {
    id: number | null
    feedId: number | null
    userID: number | null
  }

  export type FeedCommentMinAggregateOutputType = {
    id: number | null
    content: string | null
    feedId: number | null
    userID: number | null
    created_at: Date | null
  }

  export type FeedCommentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    feedId: number | null
    userID: number | null
    created_at: Date | null
  }

  export type FeedCommentCountAggregateOutputType = {
    id: number
    content: number
    feedId: number
    userID: number
    created_at: number
    _all: number
  }


  export type FeedCommentAvgAggregateInputType = {
    id?: true
    feedId?: true
    userID?: true
  }

  export type FeedCommentSumAggregateInputType = {
    id?: true
    feedId?: true
    userID?: true
  }

  export type FeedCommentMinAggregateInputType = {
    id?: true
    content?: true
    feedId?: true
    userID?: true
    created_at?: true
  }

  export type FeedCommentMaxAggregateInputType = {
    id?: true
    content?: true
    feedId?: true
    userID?: true
    created_at?: true
  }

  export type FeedCommentCountAggregateInputType = {
    id?: true
    content?: true
    feedId?: true
    userID?: true
    created_at?: true
    _all?: true
  }

  export type FeedCommentAggregateArgs = {
    /**
     * Filter which FeedComment to aggregate.
     * 
    **/
    where?: FeedCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedComments to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedCommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FeedCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedComments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedComments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedComments
    **/
    _count?: true | FeedCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedCommentMaxAggregateInputType
  }

  export type GetFeedCommentAggregateType<T extends FeedCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedComment[P]>
      : GetScalarType<T[P], AggregateFeedComment[P]>
  }




  export type FeedCommentGroupByArgs = {
    where?: FeedCommentWhereInput
    orderBy?: Enumerable<FeedCommentOrderByWithAggregationInput>
    by: Array<FeedCommentScalarFieldEnum>
    having?: FeedCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedCommentCountAggregateInputType | true
    _avg?: FeedCommentAvgAggregateInputType
    _sum?: FeedCommentSumAggregateInputType
    _min?: FeedCommentMinAggregateInputType
    _max?: FeedCommentMaxAggregateInputType
  }


  export type FeedCommentGroupByOutputType = {
    id: number
    content: string
    feedId: number
    userID: number
    created_at: Date
    _count: FeedCommentCountAggregateOutputType | null
    _avg: FeedCommentAvgAggregateOutputType | null
    _sum: FeedCommentSumAggregateOutputType | null
    _min: FeedCommentMinAggregateOutputType | null
    _max: FeedCommentMaxAggregateOutputType | null
  }

  type GetFeedCommentGroupByPayload<T extends FeedCommentGroupByArgs> = Promise<
    Array<
      PickArray<FeedCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedCommentGroupByOutputType[P]>
            : GetScalarType<T[P], FeedCommentGroupByOutputType[P]>
        }
      >
    >


  export type FeedCommentSelect = {
    id?: boolean
    content?: boolean
    feed?: boolean | FeedArgs
    feedId?: boolean
    user?: boolean | UserArgs
    userID?: boolean
    created_at?: boolean
  }

  export type FeedCommentInclude = {
    feed?: boolean | FeedArgs
    user?: boolean | UserArgs
  }

  export type FeedCommentGetPayload<
    S extends boolean | null | undefined | FeedCommentArgs,
    U = keyof S
      > = S extends true
        ? FeedComment
    : S extends undefined
    ? never
    : S extends FeedCommentArgs | FeedCommentFindManyArgs
    ?'include' extends U
    ? FeedComment  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'feed'
        ? FeedGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof FeedComment ?FeedComment [P]
  : 
          P extends 'feed'
        ? FeedGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : FeedComment
  : FeedComment


  type FeedCommentCountArgs = Merge<
    Omit<FeedCommentFindManyArgs, 'select' | 'include'> & {
      select?: FeedCommentCountAggregateInputType | true
    }
  >

  export interface FeedCommentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one FeedComment that matches the filter.
     * @param {FeedCommentFindUniqueArgs} args - Arguments to find a FeedComment
     * @example
     * // Get one FeedComment
     * const feedComment = await prisma.feedComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeedCommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FeedCommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FeedComment'> extends True ? CheckSelect<T, Prisma__FeedCommentClient<FeedComment>, Prisma__FeedCommentClient<FeedCommentGetPayload<T>>> : CheckSelect<T, Prisma__FeedCommentClient<FeedComment | null >, Prisma__FeedCommentClient<FeedCommentGetPayload<T> | null >>

    /**
     * Find the first FeedComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentFindFirstArgs} args - Arguments to find a FeedComment
     * @example
     * // Get one FeedComment
     * const feedComment = await prisma.feedComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeedCommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FeedCommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FeedComment'> extends True ? CheckSelect<T, Prisma__FeedCommentClient<FeedComment>, Prisma__FeedCommentClient<FeedCommentGetPayload<T>>> : CheckSelect<T, Prisma__FeedCommentClient<FeedComment | null >, Prisma__FeedCommentClient<FeedCommentGetPayload<T> | null >>

    /**
     * Find zero or more FeedComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedComments
     * const feedComments = await prisma.feedComment.findMany()
     * 
     * // Get first 10 FeedComments
     * const feedComments = await prisma.feedComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedCommentWithIdOnly = await prisma.feedComment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FeedCommentFindManyArgs>(
      args?: SelectSubset<T, FeedCommentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<FeedComment>>, PrismaPromise<Array<FeedCommentGetPayload<T>>>>

    /**
     * Create a FeedComment.
     * @param {FeedCommentCreateArgs} args - Arguments to create a FeedComment.
     * @example
     * // Create one FeedComment
     * const FeedComment = await prisma.feedComment.create({
     *   data: {
     *     // ... data to create a FeedComment
     *   }
     * })
     * 
    **/
    create<T extends FeedCommentCreateArgs>(
      args: SelectSubset<T, FeedCommentCreateArgs>
    ): CheckSelect<T, Prisma__FeedCommentClient<FeedComment>, Prisma__FeedCommentClient<FeedCommentGetPayload<T>>>

    /**
     * Create many FeedComments.
     *     @param {FeedCommentCreateManyArgs} args - Arguments to create many FeedComments.
     *     @example
     *     // Create many FeedComments
     *     const feedComment = await prisma.feedComment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeedCommentCreateManyArgs>(
      args?: SelectSubset<T, FeedCommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FeedComment.
     * @param {FeedCommentDeleteArgs} args - Arguments to delete one FeedComment.
     * @example
     * // Delete one FeedComment
     * const FeedComment = await prisma.feedComment.delete({
     *   where: {
     *     // ... filter to delete one FeedComment
     *   }
     * })
     * 
    **/
    delete<T extends FeedCommentDeleteArgs>(
      args: SelectSubset<T, FeedCommentDeleteArgs>
    ): CheckSelect<T, Prisma__FeedCommentClient<FeedComment>, Prisma__FeedCommentClient<FeedCommentGetPayload<T>>>

    /**
     * Update one FeedComment.
     * @param {FeedCommentUpdateArgs} args - Arguments to update one FeedComment.
     * @example
     * // Update one FeedComment
     * const feedComment = await prisma.feedComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeedCommentUpdateArgs>(
      args: SelectSubset<T, FeedCommentUpdateArgs>
    ): CheckSelect<T, Prisma__FeedCommentClient<FeedComment>, Prisma__FeedCommentClient<FeedCommentGetPayload<T>>>

    /**
     * Delete zero or more FeedComments.
     * @param {FeedCommentDeleteManyArgs} args - Arguments to filter FeedComments to delete.
     * @example
     * // Delete a few FeedComments
     * const { count } = await prisma.feedComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeedCommentDeleteManyArgs>(
      args?: SelectSubset<T, FeedCommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedComments
     * const feedComment = await prisma.feedComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeedCommentUpdateManyArgs>(
      args: SelectSubset<T, FeedCommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FeedComment.
     * @param {FeedCommentUpsertArgs} args - Arguments to update or create a FeedComment.
     * @example
     * // Update or create a FeedComment
     * const feedComment = await prisma.feedComment.upsert({
     *   create: {
     *     // ... data to create a FeedComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedComment we want to update
     *   }
     * })
    **/
    upsert<T extends FeedCommentUpsertArgs>(
      args: SelectSubset<T, FeedCommentUpsertArgs>
    ): CheckSelect<T, Prisma__FeedCommentClient<FeedComment>, Prisma__FeedCommentClient<FeedCommentGetPayload<T>>>

    /**
     * Count the number of FeedComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentCountArgs} args - Arguments to filter FeedComments to count.
     * @example
     * // Count the number of FeedComments
     * const count = await prisma.feedComment.count({
     *   where: {
     *     // ... the filter for the FeedComments we want to count
     *   }
     * })
    **/
    count<T extends FeedCommentCountArgs>(
      args?: Subset<T, FeedCommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedCommentAggregateArgs>(args: Subset<T, FeedCommentAggregateArgs>): PrismaPromise<GetFeedCommentAggregateType<T>>

    /**
     * Group by FeedComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedCommentGroupByArgs['orderBy'] }
        : { orderBy?: FeedCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedCommentGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FeedCommentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    feed<T extends FeedArgs = {}>(args?: Subset<T, FeedArgs>): CheckSelect<T, Prisma__FeedClient<Feed | null >, Prisma__FeedClient<FeedGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * FeedComment findUnique
   */
  export type FeedCommentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the FeedComment
     * 
    **/
    select?: FeedCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedCommentInclude | null
    /**
     * Throw an Error if a FeedComment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FeedComment to fetch.
     * 
    **/
    where: FeedCommentWhereUniqueInput
  }


  /**
   * FeedComment findFirst
   */
  export type FeedCommentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the FeedComment
     * 
    **/
    select?: FeedCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedCommentInclude | null
    /**
     * Throw an Error if a FeedComment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FeedComment to fetch.
     * 
    **/
    where?: FeedCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedComments to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedCommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedComments.
     * 
    **/
    cursor?: FeedCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedComments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedComments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedComments.
     * 
    **/
    distinct?: Enumerable<FeedCommentScalarFieldEnum>
  }


  /**
   * FeedComment findMany
   */
  export type FeedCommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the FeedComment
     * 
    **/
    select?: FeedCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedCommentInclude | null
    /**
     * Filter, which FeedComments to fetch.
     * 
    **/
    where?: FeedCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedComments to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedCommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedComments.
     * 
    **/
    cursor?: FeedCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedComments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedComments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FeedCommentScalarFieldEnum>
  }


  /**
   * FeedComment create
   */
  export type FeedCommentCreateArgs = {
    /**
     * Select specific fields to fetch from the FeedComment
     * 
    **/
    select?: FeedCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedCommentInclude | null
    /**
     * The data needed to create a FeedComment.
     * 
    **/
    data: XOR<FeedCommentCreateInput, FeedCommentUncheckedCreateInput>
  }


  /**
   * FeedComment createMany
   */
  export type FeedCommentCreateManyArgs = {
    data: Enumerable<FeedCommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FeedComment update
   */
  export type FeedCommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the FeedComment
     * 
    **/
    select?: FeedCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedCommentInclude | null
    /**
     * The data needed to update a FeedComment.
     * 
    **/
    data: XOR<FeedCommentUpdateInput, FeedCommentUncheckedUpdateInput>
    /**
     * Choose, which FeedComment to update.
     * 
    **/
    where: FeedCommentWhereUniqueInput
  }


  /**
   * FeedComment updateMany
   */
  export type FeedCommentUpdateManyArgs = {
    data: XOR<FeedCommentUpdateManyMutationInput, FeedCommentUncheckedUpdateManyInput>
    where?: FeedCommentWhereInput
  }


  /**
   * FeedComment upsert
   */
  export type FeedCommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the FeedComment
     * 
    **/
    select?: FeedCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedCommentInclude | null
    /**
     * The filter to search for the FeedComment to update in case it exists.
     * 
    **/
    where: FeedCommentWhereUniqueInput
    /**
     * In case the FeedComment found by the `where` argument doesn't exist, create a new FeedComment with this data.
     * 
    **/
    create: XOR<FeedCommentCreateInput, FeedCommentUncheckedCreateInput>
    /**
     * In case the FeedComment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FeedCommentUpdateInput, FeedCommentUncheckedUpdateInput>
  }


  /**
   * FeedComment delete
   */
  export type FeedCommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the FeedComment
     * 
    **/
    select?: FeedCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedCommentInclude | null
    /**
     * Filter which FeedComment to delete.
     * 
    **/
    where: FeedCommentWhereUniqueInput
  }


  /**
   * FeedComment deleteMany
   */
  export type FeedCommentDeleteManyArgs = {
    where?: FeedCommentWhereInput
  }


  /**
   * FeedComment without action
   */
  export type FeedCommentArgs = {
    /**
     * Select specific fields to fetch from the FeedComment
     * 
    **/
    select?: FeedCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedCommentInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Promise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S
      > = S extends true
        ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ?'include' extends U
    ? Session 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Session ?Session [P]
  : 
     never
  } 
    : Session
  : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    first_name: 'first_name',
    last_name: 'last_name',
    avatar: 'avatar',
    role: 'role',
    phone: 'phone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    thumbnail: 'thumbnail',
    difficulty: 'difficulty',
    status: 'status',
    created_at: 'created_at'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const FeedScalarFieldEnum: {
    id: 'id',
    caption: 'caption',
    thumbnail: 'thumbnail',
    userId: 'userId',
    created_at: 'created_at'
  };

  export type FeedScalarFieldEnum = (typeof FeedScalarFieldEnum)[keyof typeof FeedScalarFieldEnum]


  export const FeedCommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    feedId: 'feedId',
    userID: 'userID',
    created_at: 'created_at'
  };

  export type FeedCommentScalarFieldEnum = (typeof FeedCommentScalarFieldEnum)[keyof typeof FeedCommentScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type TagWhereInput = {
    AND?: Enumerable<TagWhereInput>
    OR?: Enumerable<TagWhereInput>
    NOT?: Enumerable<TagWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    blog?: BlogListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    blog?: BlogOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TagScalarWhereWithAggregatesInput>
    OR?: Enumerable<TagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    avatar?: StringFilter | string
    role?: EnumRoleFilter | Role
    phone?: StringNullableFilter | string | null
    feeds?: FeedListRelationFilter
    feedComments?: FeedCommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    feeds?: FeedOrderByRelationAggregateInput
    feedComments?: FeedCommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    first_name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    avatar?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
    phone?: StringNullableWithAggregatesFilter | string | null
  }

  export type BlogWhereInput = {
    AND?: Enumerable<BlogWhereInput>
    OR?: Enumerable<BlogWhereInput>
    NOT?: Enumerable<BlogWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    body?: StringFilter | string
    thumbnail?: StringFilter | string
    tags?: TagListRelationFilter
    difficulty?: EnumDifficultyFilter | Difficulty
    status?: EnumStatusFilter | Status
    created_at?: DateTimeFilter | Date | string
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    thumbnail?: SortOrder
    tags?: TagOrderByRelationAggregateInput
    difficulty?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type BlogWhereUniqueInput = {
    id?: number
  }

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    thumbnail?: SortOrder
    difficulty?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BlogScalarWhereWithAggregatesInput>
    OR?: Enumerable<BlogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BlogScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    body?: StringWithAggregatesFilter | string
    thumbnail?: StringWithAggregatesFilter | string
    difficulty?: EnumDifficultyWithAggregatesFilter | Difficulty
    status?: EnumStatusWithAggregatesFilter | Status
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FeedWhereInput = {
    AND?: Enumerable<FeedWhereInput>
    OR?: Enumerable<FeedWhereInput>
    NOT?: Enumerable<FeedWhereInput>
    id?: IntFilter | number
    caption?: StringFilter | string
    thumbnail?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    comments?: FeedCommentListRelationFilter
  }

  export type FeedOrderByWithRelationInput = {
    id?: SortOrder
    caption?: SortOrder
    thumbnail?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    created_at?: SortOrder
    comments?: FeedCommentOrderByRelationAggregateInput
  }

  export type FeedWhereUniqueInput = {
    id?: number
  }

  export type FeedOrderByWithAggregationInput = {
    id?: SortOrder
    caption?: SortOrder
    thumbnail?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    _count?: FeedCountOrderByAggregateInput
    _avg?: FeedAvgOrderByAggregateInput
    _max?: FeedMaxOrderByAggregateInput
    _min?: FeedMinOrderByAggregateInput
    _sum?: FeedSumOrderByAggregateInput
  }

  export type FeedScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FeedScalarWhereWithAggregatesInput>
    OR?: Enumerable<FeedScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FeedScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    caption?: StringWithAggregatesFilter | string
    thumbnail?: StringNullableWithAggregatesFilter | string | null
    userId?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FeedCommentWhereInput = {
    AND?: Enumerable<FeedCommentWhereInput>
    OR?: Enumerable<FeedCommentWhereInput>
    NOT?: Enumerable<FeedCommentWhereInput>
    id?: IntFilter | number
    content?: StringFilter | string
    feed?: XOR<FeedRelationFilter, FeedWhereInput>
    feedId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userID?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
  }

  export type FeedCommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    feed?: FeedOrderByWithRelationInput
    feedId?: SortOrder
    user?: UserOrderByWithRelationInput
    userID?: SortOrder
    created_at?: SortOrder
  }

  export type FeedCommentWhereUniqueInput = {
    id?: number
  }

  export type FeedCommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    feedId?: SortOrder
    userID?: SortOrder
    created_at?: SortOrder
    _count?: FeedCommentCountOrderByAggregateInput
    _avg?: FeedCommentAvgOrderByAggregateInput
    _max?: FeedCommentMaxOrderByAggregateInput
    _min?: FeedCommentMinOrderByAggregateInput
    _sum?: FeedCommentSumOrderByAggregateInput
  }

  export type FeedCommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FeedCommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<FeedCommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FeedCommentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    content?: StringWithAggregatesFilter | string
    feedId?: IntWithAggregatesFilter | number
    userID?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sid?: StringFilter | string
    data?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sid?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sid?: StringWithAggregatesFilter | string
    data?: StringWithAggregatesFilter | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TagCreateInput = {
    name: string
    blog?: BlogCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    blog?: BlogUpdateManyWithoutTagsInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    avatar?: string
    role?: Role
    phone?: string | null
    feeds?: FeedCreateNestedManyWithoutUserInput
    feedComments?: FeedCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    avatar?: string
    role?: Role
    phone?: string | null
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
    feedComments?: FeedCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    feeds?: FeedUpdateManyWithoutUserInput
    feedComments?: FeedCommentUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    feeds?: FeedUncheckedUpdateManyWithoutUserInput
    feedComments?: FeedCommentUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    avatar?: string
    role?: Role
    phone?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogCreateInput = {
    title: string
    body: string
    thumbnail: string
    difficulty?: Difficulty
    status: Status
    created_at?: Date | string
    tags?: TagCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateInput = {
    id?: number
    title: string
    body: string
    thumbnail: string
    difficulty?: Difficulty
    status: Status
    created_at?: Date | string
  }

  export type BlogUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | Difficulty
    status?: EnumStatusFieldUpdateOperationsInput | Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutBlogInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | Difficulty
    status?: EnumStatusFieldUpdateOperationsInput | Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyInput = {
    id?: number
    title: string
    body: string
    thumbnail: string
    difficulty?: Difficulty
    status: Status
    created_at?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | Difficulty
    status?: EnumStatusFieldUpdateOperationsInput | Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | Difficulty
    status?: EnumStatusFieldUpdateOperationsInput | Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedCreateInput = {
    caption: string
    thumbnail?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutFeedsInput
    comments?: FeedCommentCreateNestedManyWithoutFeedInput
  }

  export type FeedUncheckedCreateInput = {
    id?: number
    caption: string
    thumbnail?: string | null
    userId: number
    created_at?: Date | string
    comments?: FeedCommentUncheckedCreateNestedManyWithoutFeedInput
  }

  export type FeedUpdateInput = {
    caption?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedsInput
    comments?: FeedCommentUpdateManyWithoutFeedInput
  }

  export type FeedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: FeedCommentUncheckedUpdateManyWithoutFeedInput
  }

  export type FeedCreateManyInput = {
    id?: number
    caption: string
    thumbnail?: string | null
    userId: number
    created_at?: Date | string
  }

  export type FeedUpdateManyMutationInput = {
    caption?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedCommentCreateInput = {
    content: string
    created_at?: Date | string
    feed: FeedCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutFeedCommentsInput
  }

  export type FeedCommentUncheckedCreateInput = {
    id?: number
    content: string
    feedId: number
    userID: number
    created_at?: Date | string
  }

  export type FeedCommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feed?: FeedUpdateOneRequiredWithoutCommentsInput
    user?: UserUpdateOneRequiredWithoutFeedCommentsInput
  }

  export type FeedCommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    feedId?: IntFieldUpdateOperationsInput | number
    userID?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedCommentCreateManyInput = {
    id?: number
    content: string
    feedId: number
    userID: number
    created_at?: Date | string
  }

  export type FeedCommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedCommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    feedId?: IntFieldUpdateOperationsInput | number
    userID?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type FeedListRelationFilter = {
    every?: FeedWhereInput
    some?: FeedWhereInput
    none?: FeedWhereInput
  }

  export type FeedCommentListRelationFilter = {
    every?: FeedCommentWhereInput
    some?: FeedCommentWhereInput
    none?: FeedCommentWhereInput
  }

  export type FeedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    phone?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    phone?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    phone?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type EnumDifficultyFilter = {
    equals?: Difficulty
    in?: Enumerable<Difficulty>
    notIn?: Enumerable<Difficulty>
    not?: NestedEnumDifficultyFilter | Difficulty
  }

  export type EnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    thumbnail?: SortOrder
    difficulty?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    thumbnail?: SortOrder
    difficulty?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    thumbnail?: SortOrder
    difficulty?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter = {
    equals?: Difficulty
    in?: Enumerable<Difficulty>
    notIn?: Enumerable<Difficulty>
    not?: NestedEnumDifficultyWithAggregatesFilter | Difficulty
    _count?: NestedIntFilter
    _min?: NestedEnumDifficultyFilter
    _max?: NestedEnumDifficultyFilter
  }

  export type EnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FeedCountOrderByAggregateInput = {
    id?: SortOrder
    caption?: SortOrder
    thumbnail?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
  }

  export type FeedAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FeedMaxOrderByAggregateInput = {
    id?: SortOrder
    caption?: SortOrder
    thumbnail?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
  }

  export type FeedMinOrderByAggregateInput = {
    id?: SortOrder
    caption?: SortOrder
    thumbnail?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
  }

  export type FeedSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FeedRelationFilter = {
    is?: FeedWhereInput
    isNot?: FeedWhereInput
  }

  export type FeedCommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    feedId?: SortOrder
    userID?: SortOrder
    created_at?: SortOrder
  }

  export type FeedCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    feedId?: SortOrder
    userID?: SortOrder
  }

  export type FeedCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    feedId?: SortOrder
    userID?: SortOrder
    created_at?: SortOrder
  }

  export type FeedCommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    feedId?: SortOrder
    userID?: SortOrder
    created_at?: SortOrder
  }

  export type FeedCommentSumOrderByAggregateInput = {
    id?: SortOrder
    feedId?: SortOrder
    userID?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type BlogCreateNestedManyWithoutTagsInput = {
    create?: XOR<Enumerable<BlogCreateWithoutTagsInput>, Enumerable<BlogUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<BlogCreateOrConnectWithoutTagsInput>
    connect?: Enumerable<BlogWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BlogUpdateManyWithoutTagsInput = {
    create?: XOR<Enumerable<BlogCreateWithoutTagsInput>, Enumerable<BlogUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<BlogCreateOrConnectWithoutTagsInput>
    upsert?: Enumerable<BlogUpsertWithWhereUniqueWithoutTagsInput>
    set?: Enumerable<BlogWhereUniqueInput>
    disconnect?: Enumerable<BlogWhereUniqueInput>
    delete?: Enumerable<BlogWhereUniqueInput>
    connect?: Enumerable<BlogWhereUniqueInput>
    update?: Enumerable<BlogUpdateWithWhereUniqueWithoutTagsInput>
    updateMany?: Enumerable<BlogUpdateManyWithWhereWithoutTagsInput>
    deleteMany?: Enumerable<BlogScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FeedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedCreateWithoutUserInput>, Enumerable<FeedUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCreateOrConnectWithoutUserInput>
    createMany?: FeedCreateManyUserInputEnvelope
    connect?: Enumerable<FeedWhereUniqueInput>
  }

  export type FeedCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedCommentCreateWithoutUserInput>, Enumerable<FeedCommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCommentCreateOrConnectWithoutUserInput>
    createMany?: FeedCommentCreateManyUserInputEnvelope
    connect?: Enumerable<FeedCommentWhereUniqueInput>
  }

  export type FeedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedCreateWithoutUserInput>, Enumerable<FeedUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCreateOrConnectWithoutUserInput>
    createMany?: FeedCreateManyUserInputEnvelope
    connect?: Enumerable<FeedWhereUniqueInput>
  }

  export type FeedCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedCommentCreateWithoutUserInput>, Enumerable<FeedCommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCommentCreateOrConnectWithoutUserInput>
    createMany?: FeedCommentCreateManyUserInputEnvelope
    connect?: Enumerable<FeedCommentWhereUniqueInput>
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FeedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedCreateWithoutUserInput>, Enumerable<FeedUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FeedUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FeedCreateManyUserInputEnvelope
    set?: Enumerable<FeedWhereUniqueInput>
    disconnect?: Enumerable<FeedWhereUniqueInput>
    delete?: Enumerable<FeedWhereUniqueInput>
    connect?: Enumerable<FeedWhereUniqueInput>
    update?: Enumerable<FeedUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FeedUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FeedScalarWhereInput>
  }

  export type FeedCommentUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedCommentCreateWithoutUserInput>, Enumerable<FeedCommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FeedCommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FeedCommentCreateManyUserInputEnvelope
    set?: Enumerable<FeedCommentWhereUniqueInput>
    disconnect?: Enumerable<FeedCommentWhereUniqueInput>
    delete?: Enumerable<FeedCommentWhereUniqueInput>
    connect?: Enumerable<FeedCommentWhereUniqueInput>
    update?: Enumerable<FeedCommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FeedCommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FeedCommentScalarWhereInput>
  }

  export type FeedUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedCreateWithoutUserInput>, Enumerable<FeedUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FeedUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FeedCreateManyUserInputEnvelope
    set?: Enumerable<FeedWhereUniqueInput>
    disconnect?: Enumerable<FeedWhereUniqueInput>
    delete?: Enumerable<FeedWhereUniqueInput>
    connect?: Enumerable<FeedWhereUniqueInput>
    update?: Enumerable<FeedUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FeedUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FeedScalarWhereInput>
  }

  export type FeedCommentUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedCommentCreateWithoutUserInput>, Enumerable<FeedCommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FeedCommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FeedCommentCreateManyUserInputEnvelope
    set?: Enumerable<FeedCommentWhereUniqueInput>
    disconnect?: Enumerable<FeedCommentWhereUniqueInput>
    delete?: Enumerable<FeedCommentWhereUniqueInput>
    connect?: Enumerable<FeedCommentWhereUniqueInput>
    update?: Enumerable<FeedCommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FeedCommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FeedCommentScalarWhereInput>
  }

  export type TagCreateNestedManyWithoutBlogInput = {
    create?: XOR<Enumerable<TagCreateWithoutBlogInput>, Enumerable<TagUncheckedCreateWithoutBlogInput>>
    connectOrCreate?: Enumerable<TagCreateOrConnectWithoutBlogInput>
    connect?: Enumerable<TagWhereUniqueInput>
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: Difficulty
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TagUpdateManyWithoutBlogInput = {
    create?: XOR<Enumerable<TagCreateWithoutBlogInput>, Enumerable<TagUncheckedCreateWithoutBlogInput>>
    connectOrCreate?: Enumerable<TagCreateOrConnectWithoutBlogInput>
    upsert?: Enumerable<TagUpsertWithWhereUniqueWithoutBlogInput>
    set?: Enumerable<TagWhereUniqueInput>
    disconnect?: Enumerable<TagWhereUniqueInput>
    delete?: Enumerable<TagWhereUniqueInput>
    connect?: Enumerable<TagWhereUniqueInput>
    update?: Enumerable<TagUpdateWithWhereUniqueWithoutBlogInput>
    updateMany?: Enumerable<TagUpdateManyWithWhereWithoutBlogInput>
    deleteMany?: Enumerable<TagScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutFeedsInput = {
    create?: XOR<UserCreateWithoutFeedsInput, UserUncheckedCreateWithoutFeedsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedsInput
    connect?: UserWhereUniqueInput
  }

  export type FeedCommentCreateNestedManyWithoutFeedInput = {
    create?: XOR<Enumerable<FeedCommentCreateWithoutFeedInput>, Enumerable<FeedCommentUncheckedCreateWithoutFeedInput>>
    connectOrCreate?: Enumerable<FeedCommentCreateOrConnectWithoutFeedInput>
    createMany?: FeedCommentCreateManyFeedInputEnvelope
    connect?: Enumerable<FeedCommentWhereUniqueInput>
  }

  export type FeedCommentUncheckedCreateNestedManyWithoutFeedInput = {
    create?: XOR<Enumerable<FeedCommentCreateWithoutFeedInput>, Enumerable<FeedCommentUncheckedCreateWithoutFeedInput>>
    connectOrCreate?: Enumerable<FeedCommentCreateOrConnectWithoutFeedInput>
    createMany?: FeedCommentCreateManyFeedInputEnvelope
    connect?: Enumerable<FeedCommentWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutFeedsInput = {
    create?: XOR<UserCreateWithoutFeedsInput, UserUncheckedCreateWithoutFeedsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedsInput
    upsert?: UserUpsertWithoutFeedsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFeedsInput, UserUncheckedUpdateWithoutFeedsInput>
  }

  export type FeedCommentUpdateManyWithoutFeedInput = {
    create?: XOR<Enumerable<FeedCommentCreateWithoutFeedInput>, Enumerable<FeedCommentUncheckedCreateWithoutFeedInput>>
    connectOrCreate?: Enumerable<FeedCommentCreateOrConnectWithoutFeedInput>
    upsert?: Enumerable<FeedCommentUpsertWithWhereUniqueWithoutFeedInput>
    createMany?: FeedCommentCreateManyFeedInputEnvelope
    set?: Enumerable<FeedCommentWhereUniqueInput>
    disconnect?: Enumerable<FeedCommentWhereUniqueInput>
    delete?: Enumerable<FeedCommentWhereUniqueInput>
    connect?: Enumerable<FeedCommentWhereUniqueInput>
    update?: Enumerable<FeedCommentUpdateWithWhereUniqueWithoutFeedInput>
    updateMany?: Enumerable<FeedCommentUpdateManyWithWhereWithoutFeedInput>
    deleteMany?: Enumerable<FeedCommentScalarWhereInput>
  }

  export type FeedCommentUncheckedUpdateManyWithoutFeedInput = {
    create?: XOR<Enumerable<FeedCommentCreateWithoutFeedInput>, Enumerable<FeedCommentUncheckedCreateWithoutFeedInput>>
    connectOrCreate?: Enumerable<FeedCommentCreateOrConnectWithoutFeedInput>
    upsert?: Enumerable<FeedCommentUpsertWithWhereUniqueWithoutFeedInput>
    createMany?: FeedCommentCreateManyFeedInputEnvelope
    set?: Enumerable<FeedCommentWhereUniqueInput>
    disconnect?: Enumerable<FeedCommentWhereUniqueInput>
    delete?: Enumerable<FeedCommentWhereUniqueInput>
    connect?: Enumerable<FeedCommentWhereUniqueInput>
    update?: Enumerable<FeedCommentUpdateWithWhereUniqueWithoutFeedInput>
    updateMany?: Enumerable<FeedCommentUpdateManyWithWhereWithoutFeedInput>
    deleteMany?: Enumerable<FeedCommentScalarWhereInput>
  }

  export type FeedCreateNestedOneWithoutCommentsInput = {
    create?: XOR<FeedCreateWithoutCommentsInput, FeedUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: FeedCreateOrConnectWithoutCommentsInput
    connect?: FeedWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedCommentsInput = {
    create?: XOR<UserCreateWithoutFeedCommentsInput, UserUncheckedCreateWithoutFeedCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type FeedUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<FeedCreateWithoutCommentsInput, FeedUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: FeedCreateOrConnectWithoutCommentsInput
    upsert?: FeedUpsertWithoutCommentsInput
    connect?: FeedWhereUniqueInput
    update?: XOR<FeedUpdateWithoutCommentsInput, FeedUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutFeedCommentsInput = {
    create?: XOR<UserCreateWithoutFeedCommentsInput, UserUncheckedCreateWithoutFeedCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedCommentsInput
    upsert?: UserUpsertWithoutFeedCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFeedCommentsInput, UserUncheckedUpdateWithoutFeedCommentsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumDifficultyFilter = {
    equals?: Difficulty
    in?: Enumerable<Difficulty>
    notIn?: Enumerable<Difficulty>
    not?: NestedEnumDifficultyFilter | Difficulty
  }

  export type NestedEnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumDifficultyWithAggregatesFilter = {
    equals?: Difficulty
    in?: Enumerable<Difficulty>
    notIn?: Enumerable<Difficulty>
    not?: NestedEnumDifficultyWithAggregatesFilter | Difficulty
    _count?: NestedIntFilter
    _min?: NestedEnumDifficultyFilter
    _max?: NestedEnumDifficultyFilter
  }

  export type NestedEnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BlogCreateWithoutTagsInput = {
    title: string
    body: string
    thumbnail: string
    difficulty?: Difficulty
    status: Status
    created_at?: Date | string
  }

  export type BlogUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    body: string
    thumbnail: string
    difficulty?: Difficulty
    status: Status
    created_at?: Date | string
  }

  export type BlogCreateOrConnectWithoutTagsInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutTagsInput, BlogUncheckedCreateWithoutTagsInput>
  }

  export type BlogUpsertWithWhereUniqueWithoutTagsInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutTagsInput, BlogUncheckedUpdateWithoutTagsInput>
    create: XOR<BlogCreateWithoutTagsInput, BlogUncheckedCreateWithoutTagsInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutTagsInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutTagsInput, BlogUncheckedUpdateWithoutTagsInput>
  }

  export type BlogUpdateManyWithWhereWithoutTagsInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutBlogInput>
  }

  export type BlogScalarWhereInput = {
    AND?: Enumerable<BlogScalarWhereInput>
    OR?: Enumerable<BlogScalarWhereInput>
    NOT?: Enumerable<BlogScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    body?: StringFilter | string
    thumbnail?: StringFilter | string
    difficulty?: EnumDifficultyFilter | Difficulty
    status?: EnumStatusFilter | Status
    created_at?: DateTimeFilter | Date | string
  }

  export type FeedCreateWithoutUserInput = {
    caption: string
    thumbnail?: string | null
    created_at?: Date | string
    comments?: FeedCommentCreateNestedManyWithoutFeedInput
  }

  export type FeedUncheckedCreateWithoutUserInput = {
    id?: number
    caption: string
    thumbnail?: string | null
    created_at?: Date | string
    comments?: FeedCommentUncheckedCreateNestedManyWithoutFeedInput
  }

  export type FeedCreateOrConnectWithoutUserInput = {
    where: FeedWhereUniqueInput
    create: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput>
  }

  export type FeedCreateManyUserInputEnvelope = {
    data: Enumerable<FeedCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type FeedCommentCreateWithoutUserInput = {
    content: string
    created_at?: Date | string
    feed: FeedCreateNestedOneWithoutCommentsInput
  }

  export type FeedCommentUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    feedId: number
    created_at?: Date | string
  }

  export type FeedCommentCreateOrConnectWithoutUserInput = {
    where: FeedCommentWhereUniqueInput
    create: XOR<FeedCommentCreateWithoutUserInput, FeedCommentUncheckedCreateWithoutUserInput>
  }

  export type FeedCommentCreateManyUserInputEnvelope = {
    data: Enumerable<FeedCommentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type FeedUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedWhereUniqueInput
    update: XOR<FeedUpdateWithoutUserInput, FeedUncheckedUpdateWithoutUserInput>
    create: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput>
  }

  export type FeedUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedWhereUniqueInput
    data: XOR<FeedUpdateWithoutUserInput, FeedUncheckedUpdateWithoutUserInput>
  }

  export type FeedUpdateManyWithWhereWithoutUserInput = {
    where: FeedScalarWhereInput
    data: XOR<FeedUpdateManyMutationInput, FeedUncheckedUpdateManyWithoutFeedsInput>
  }

  export type FeedScalarWhereInput = {
    AND?: Enumerable<FeedScalarWhereInput>
    OR?: Enumerable<FeedScalarWhereInput>
    NOT?: Enumerable<FeedScalarWhereInput>
    id?: IntFilter | number
    caption?: StringFilter | string
    thumbnail?: StringNullableFilter | string | null
    userId?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
  }

  export type FeedCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedCommentWhereUniqueInput
    update: XOR<FeedCommentUpdateWithoutUserInput, FeedCommentUncheckedUpdateWithoutUserInput>
    create: XOR<FeedCommentCreateWithoutUserInput, FeedCommentUncheckedCreateWithoutUserInput>
  }

  export type FeedCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedCommentWhereUniqueInput
    data: XOR<FeedCommentUpdateWithoutUserInput, FeedCommentUncheckedUpdateWithoutUserInput>
  }

  export type FeedCommentUpdateManyWithWhereWithoutUserInput = {
    where: FeedCommentScalarWhereInput
    data: XOR<FeedCommentUpdateManyMutationInput, FeedCommentUncheckedUpdateManyWithoutFeedCommentsInput>
  }

  export type FeedCommentScalarWhereInput = {
    AND?: Enumerable<FeedCommentScalarWhereInput>
    OR?: Enumerable<FeedCommentScalarWhereInput>
    NOT?: Enumerable<FeedCommentScalarWhereInput>
    id?: IntFilter | number
    content?: StringFilter | string
    feedId?: IntFilter | number
    userID?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
  }

  export type TagCreateWithoutBlogInput = {
    name: string
  }

  export type TagUncheckedCreateWithoutBlogInput = {
    id?: number
    name: string
  }

  export type TagCreateOrConnectWithoutBlogInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutBlogInput, TagUncheckedCreateWithoutBlogInput>
  }

  export type TagUpsertWithWhereUniqueWithoutBlogInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutBlogInput, TagUncheckedUpdateWithoutBlogInput>
    create: XOR<TagCreateWithoutBlogInput, TagUncheckedCreateWithoutBlogInput>
  }

  export type TagUpdateWithWhereUniqueWithoutBlogInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutBlogInput, TagUncheckedUpdateWithoutBlogInput>
  }

  export type TagUpdateManyWithWhereWithoutBlogInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutTagsInput>
  }

  export type TagScalarWhereInput = {
    AND?: Enumerable<TagScalarWhereInput>
    OR?: Enumerable<TagScalarWhereInput>
    NOT?: Enumerable<TagScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type UserCreateWithoutFeedsInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    avatar?: string
    role?: Role
    phone?: string | null
    feedComments?: FeedCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedsInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    avatar?: string
    role?: Role
    phone?: string | null
    feedComments?: FeedCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedsInput, UserUncheckedCreateWithoutFeedsInput>
  }

  export type FeedCommentCreateWithoutFeedInput = {
    content: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutFeedCommentsInput
  }

  export type FeedCommentUncheckedCreateWithoutFeedInput = {
    id?: number
    content: string
    userID: number
    created_at?: Date | string
  }

  export type FeedCommentCreateOrConnectWithoutFeedInput = {
    where: FeedCommentWhereUniqueInput
    create: XOR<FeedCommentCreateWithoutFeedInput, FeedCommentUncheckedCreateWithoutFeedInput>
  }

  export type FeedCommentCreateManyFeedInputEnvelope = {
    data: Enumerable<FeedCommentCreateManyFeedInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFeedsInput = {
    update: XOR<UserUpdateWithoutFeedsInput, UserUncheckedUpdateWithoutFeedsInput>
    create: XOR<UserCreateWithoutFeedsInput, UserUncheckedCreateWithoutFeedsInput>
  }

  export type UserUpdateWithoutFeedsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    feedComments?: FeedCommentUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutFeedsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    feedComments?: FeedCommentUncheckedUpdateManyWithoutUserInput
  }

  export type FeedCommentUpsertWithWhereUniqueWithoutFeedInput = {
    where: FeedCommentWhereUniqueInput
    update: XOR<FeedCommentUpdateWithoutFeedInput, FeedCommentUncheckedUpdateWithoutFeedInput>
    create: XOR<FeedCommentCreateWithoutFeedInput, FeedCommentUncheckedCreateWithoutFeedInput>
  }

  export type FeedCommentUpdateWithWhereUniqueWithoutFeedInput = {
    where: FeedCommentWhereUniqueInput
    data: XOR<FeedCommentUpdateWithoutFeedInput, FeedCommentUncheckedUpdateWithoutFeedInput>
  }

  export type FeedCommentUpdateManyWithWhereWithoutFeedInput = {
    where: FeedCommentScalarWhereInput
    data: XOR<FeedCommentUpdateManyMutationInput, FeedCommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type FeedCreateWithoutCommentsInput = {
    caption: string
    thumbnail?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutFeedsInput
  }

  export type FeedUncheckedCreateWithoutCommentsInput = {
    id?: number
    caption: string
    thumbnail?: string | null
    userId: number
    created_at?: Date | string
  }

  export type FeedCreateOrConnectWithoutCommentsInput = {
    where: FeedWhereUniqueInput
    create: XOR<FeedCreateWithoutCommentsInput, FeedUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutFeedCommentsInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    avatar?: string
    role?: Role
    phone?: string | null
    feeds?: FeedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedCommentsInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    avatar?: string
    role?: Role
    phone?: string | null
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedCommentsInput, UserUncheckedCreateWithoutFeedCommentsInput>
  }

  export type FeedUpsertWithoutCommentsInput = {
    update: XOR<FeedUpdateWithoutCommentsInput, FeedUncheckedUpdateWithoutCommentsInput>
    create: XOR<FeedCreateWithoutCommentsInput, FeedUncheckedCreateWithoutCommentsInput>
  }

  export type FeedUpdateWithoutCommentsInput = {
    caption?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedsInput
  }

  export type FeedUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutFeedCommentsInput = {
    update: XOR<UserUpdateWithoutFeedCommentsInput, UserUncheckedUpdateWithoutFeedCommentsInput>
    create: XOR<UserCreateWithoutFeedCommentsInput, UserUncheckedCreateWithoutFeedCommentsInput>
  }

  export type UserUpdateWithoutFeedCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    feeds?: FeedUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutFeedCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    feeds?: FeedUncheckedUpdateManyWithoutUserInput
  }

  export type BlogUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | Difficulty
    status?: EnumStatusFieldUpdateOperationsInput | Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | Difficulty
    status?: EnumStatusFieldUpdateOperationsInput | Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | Difficulty
    status?: EnumStatusFieldUpdateOperationsInput | Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedCreateManyUserInput = {
    id?: number
    caption: string
    thumbnail?: string | null
    created_at?: Date | string
  }

  export type FeedCommentCreateManyUserInput = {
    id?: number
    content: string
    feedId: number
    created_at?: Date | string
  }

  export type FeedUpdateWithoutUserInput = {
    caption?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: FeedCommentUpdateManyWithoutFeedInput
  }

  export type FeedUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: FeedCommentUncheckedUpdateManyWithoutFeedInput
  }

  export type FeedUncheckedUpdateManyWithoutFeedsInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedCommentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feed?: FeedUpdateOneRequiredWithoutCommentsInput
  }

  export type FeedCommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    feedId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedCommentUncheckedUpdateManyWithoutFeedCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    feedId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutBlogInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeedCommentCreateManyFeedInput = {
    id?: number
    content: string
    userID: number
    created_at?: Date | string
  }

  export type FeedCommentUpdateWithoutFeedInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedCommentsInput
  }

  export type FeedCommentUncheckedUpdateWithoutFeedInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userID?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedCommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userID?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}