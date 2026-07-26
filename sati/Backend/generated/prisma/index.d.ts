
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Clients
 * 
 */
export type Clients = $Result.DefaultSelection<Prisma.$ClientsPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model sati_users
 * 
 */
export type sati_users = $Result.DefaultSelection<Prisma.$sati_usersPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.clients.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clients
   * const clients = await prisma.clients.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.clients`: Exposes CRUD operations for the **Clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.ClientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sati_users`: Exposes CRUD operations for the **sati_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sati_users
    * const sati_users = await prisma.sati_users.findMany()
    * ```
    */
  get sati_users(): Prisma.sati_usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Clients: 'Clients',
    Job: 'Job',
    Task: 'Task',
    sati_users: 'sati_users',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "clients" | "job" | "task" | "sati_users" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Clients: {
        payload: Prisma.$ClientsPayload<ExtArgs>
        fields: Prisma.ClientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findFirst: {
            args: Prisma.ClientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findMany: {
            args: Prisma.ClientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          create: {
            args: Prisma.ClientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          createMany: {
            args: Prisma.ClientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          delete: {
            args: Prisma.ClientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          update: {
            args: Prisma.ClientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          deleteMany: {
            args: Prisma.ClientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          upsert: {
            args: Prisma.ClientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.ClientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      sati_users: {
        payload: Prisma.$sati_usersPayload<ExtArgs>
        fields: Prisma.sati_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sati_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sati_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sati_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sati_usersPayload>
          }
          findFirst: {
            args: Prisma.sati_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sati_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sati_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sati_usersPayload>
          }
          findMany: {
            args: Prisma.sati_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sati_usersPayload>[]
          }
          create: {
            args: Prisma.sati_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sati_usersPayload>
          }
          createMany: {
            args: Prisma.sati_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sati_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sati_usersPayload>[]
          }
          delete: {
            args: Prisma.sati_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sati_usersPayload>
          }
          update: {
            args: Prisma.sati_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sati_usersPayload>
          }
          deleteMany: {
            args: Prisma.sati_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sati_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sati_usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sati_usersPayload>[]
          }
          upsert: {
            args: Prisma.sati_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sati_usersPayload>
          }
          aggregate: {
            args: Prisma.Sati_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSati_users>
          }
          groupBy: {
            args: Prisma.sati_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sati_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.sati_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Sati_usersCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    clients?: ClientsOmit
    job?: JobOmit
    task?: TaskOmit
    sati_users?: sati_usersOmit
    users?: UsersOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientsCountOutputType
   */

  export type ClientsCountOutputType = {
    jobs: number
  }

  export type ClientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | ClientsCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsCountOutputType
     */
    select?: ClientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    task: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | JobCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    jobs: number
    task: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | UsersCountOutputTypeCountJobsArgs
    task?: boolean | UsersCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsAvgAggregateOutputType = {
    total_spent: Decimal | null
    feedback_score: Decimal | null
  }

  export type ClientsSumAggregateOutputType = {
    total_spent: Decimal | null
    feedback_score: Decimal | null
  }

  export type ClientsMinAggregateOutputType = {
    id: string | null
    company_name: string | null
    country: string | null
    total_spent: Decimal | null
    feedback_score: Decimal | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: string | null
    company_name: string | null
    country: string | null
    total_spent: Decimal | null
    feedback_score: Decimal | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    company_name: number
    country: number
    total_spent: number
    feedback_score: number
    _all: number
  }


  export type ClientsAvgAggregateInputType = {
    total_spent?: true
    feedback_score?: true
  }

  export type ClientsSumAggregateInputType = {
    total_spent?: true
    feedback_score?: true
  }

  export type ClientsMinAggregateInputType = {
    id?: true
    company_name?: true
    country?: true
    total_spent?: true
    feedback_score?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    company_name?: true
    country?: true
    total_spent?: true
    feedback_score?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    company_name?: true
    country?: true
    total_spent?: true
    feedback_score?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to aggregate.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type ClientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsWhereInput
    orderBy?: ClientsOrderByWithAggregationInput | ClientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: ClientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _avg?: ClientsAvgAggregateInputType
    _sum?: ClientsSumAggregateInputType
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    id: string
    company_name: string | null
    country: string | null
    total_spent: Decimal | null
    feedback_score: Decimal | null
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends ClientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type ClientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    country?: boolean
    total_spent?: boolean
    feedback_score?: boolean
    jobs?: boolean | Clients$jobsArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type ClientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    country?: boolean
    total_spent?: boolean
    feedback_score?: boolean
  }, ExtArgs["result"]["clients"]>

  export type ClientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    country?: boolean
    total_spent?: boolean
    feedback_score?: boolean
  }, ExtArgs["result"]["clients"]>

  export type ClientsSelectScalar = {
    id?: boolean
    company_name?: boolean
    country?: boolean
    total_spent?: boolean
    feedback_score?: boolean
  }

  export type ClientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_name" | "country" | "total_spent" | "feedback_score", ExtArgs["result"]["clients"]>
  export type ClientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | Clients$jobsArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clients"
    objects: {
      jobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_name: string | null
      country: string | null
      total_spent: Prisma.Decimal | null
      feedback_score: Prisma.Decimal | null
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type ClientsGetPayload<S extends boolean | null | undefined | ClientsDefaultArgs> = $Result.GetResult<Prisma.$ClientsPayload, S>

  type ClientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface ClientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clients'], meta: { name: 'Clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {ClientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientsFindUniqueArgs>(args: SelectSubset<T, ClientsFindUniqueArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientsFindFirstArgs>(args?: SelectSubset<T, ClientsFindFirstArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientsFindManyArgs>(args?: SelectSubset<T, ClientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clients.
     * @param {ClientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends ClientsCreateArgs>(args: SelectSubset<T, ClientsCreateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientsCreateManyArgs>(args?: SelectSubset<T, ClientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientsCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clients.
     * @param {ClientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends ClientsDeleteArgs>(args: SelectSubset<T, ClientsDeleteArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clients.
     * @param {ClientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientsUpdateArgs>(args: SelectSubset<T, ClientsUpdateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientsDeleteManyArgs>(args?: SelectSubset<T, ClientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientsUpdateManyArgs>(args: SelectSubset<T, ClientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientsUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientsUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clients.
     * @param {ClientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends ClientsUpsertArgs>(args: SelectSubset<T, ClientsUpsertArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientsCountArgs>(
      args?: Subset<T, ClientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsGroupByArgs} args - Group by arguments.
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
      T extends ClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientsGroupByArgs['orderBy'] }
        : { orderBy?: ClientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ClientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clients model
   */
  readonly fields: ClientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends Clients$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Clients$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clients model
   */
  interface ClientsFieldRefs {
    readonly id: FieldRef<"Clients", 'String'>
    readonly company_name: FieldRef<"Clients", 'String'>
    readonly country: FieldRef<"Clients", 'String'>
    readonly total_spent: FieldRef<"Clients", 'Decimal'>
    readonly feedback_score: FieldRef<"Clients", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Clients findUnique
   */
  export type ClientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findUniqueOrThrow
   */
  export type ClientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findFirst
   */
  export type ClientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findFirstOrThrow
   */
  export type ClientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findMany
   */
  export type ClientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients create
   */
  export type ClientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Clients.
     */
    data: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
  }

  /**
   * Clients createMany
   */
  export type ClientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clients createManyAndReturn
   */
  export type ClientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clients update
   */
  export type ClientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Clients.
     */
    data: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
    /**
     * Choose, which Clients to update.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients updateMany
   */
  export type ClientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Clients updateManyAndReturn
   */
  export type ClientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Clients upsert
   */
  export type ClientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Clients to update in case it exists.
     */
    where: ClientsWhereUniqueInput
    /**
     * In case the Clients found by the `where` argument doesn't exist, create a new Clients with this data.
     */
    create: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
    /**
     * In case the Clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
  }

  /**
   * Clients delete
   */
  export type ClientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter which Clients to delete.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients deleteMany
   */
  export type ClientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Clients.jobs
   */
  export type Clients$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Clients without action
   */
  export type ClientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    budget: Decimal | null
    rate: Decimal | null
  }

  export type JobSumAggregateOutputType = {
    budget: Decimal | null
    rate: Decimal | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    job_type: string | null
    budget: Decimal | null
    duration: string | null
    workload: string | null
    client_id: string | null
    created_at: Date | null
    rate: Decimal | null
    user_id: string | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    job_type: string | null
    budget: Decimal | null
    duration: string | null
    workload: string | null
    client_id: string | null
    created_at: Date | null
    rate: Decimal | null
    user_id: string | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    description: number
    skills: number
    job_type: number
    budget: number
    duration: number
    workload: number
    client_id: number
    created_at: number
    rate: number
    user_id: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    budget?: true
    rate?: true
  }

  export type JobSumAggregateInputType = {
    budget?: true
    rate?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    job_type?: true
    budget?: true
    duration?: true
    workload?: true
    client_id?: true
    created_at?: true
    rate?: true
    user_id?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    job_type?: true
    budget?: true
    duration?: true
    workload?: true
    client_id?: true
    created_at?: true
    rate?: true
    user_id?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    skills?: true
    job_type?: true
    budget?: true
    duration?: true
    workload?: true
    client_id?: true
    created_at?: true
    rate?: true
    user_id?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    title: string | null
    description: string | null
    skills: string[]
    job_type: string | null
    budget: Decimal | null
    duration: string | null
    workload: string | null
    client_id: string | null
    created_at: Date | null
    rate: Decimal | null
    user_id: string | null
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    skills?: boolean
    job_type?: boolean
    budget?: boolean
    duration?: boolean
    workload?: boolean
    client_id?: boolean
    created_at?: boolean
    rate?: boolean
    user_id?: boolean
    clients?: boolean | Job$clientsArgs<ExtArgs>
    users?: boolean | Job$usersArgs<ExtArgs>
    task?: boolean | Job$taskArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    skills?: boolean
    job_type?: boolean
    budget?: boolean
    duration?: boolean
    workload?: boolean
    client_id?: boolean
    created_at?: boolean
    rate?: boolean
    user_id?: boolean
    clients?: boolean | Job$clientsArgs<ExtArgs>
    users?: boolean | Job$usersArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    skills?: boolean
    job_type?: boolean
    budget?: boolean
    duration?: boolean
    workload?: boolean
    client_id?: boolean
    created_at?: boolean
    rate?: boolean
    user_id?: boolean
    clients?: boolean | Job$clientsArgs<ExtArgs>
    users?: boolean | Job$usersArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    skills?: boolean
    job_type?: boolean
    budget?: boolean
    duration?: boolean
    workload?: boolean
    client_id?: boolean
    created_at?: boolean
    rate?: boolean
    user_id?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "skills" | "job_type" | "budget" | "duration" | "workload" | "client_id" | "created_at" | "rate" | "user_id", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | Job$clientsArgs<ExtArgs>
    users?: boolean | Job$usersArgs<ExtArgs>
    task?: boolean | Job$taskArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | Job$clientsArgs<ExtArgs>
    users?: boolean | Job$usersArgs<ExtArgs>
  }
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | Job$clientsArgs<ExtArgs>
    users?: boolean | Job$usersArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      clients: Prisma.$ClientsPayload<ExtArgs> | null
      users: Prisma.$UsersPayload<ExtArgs> | null
      task: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      description: string | null
      skills: string[]
      job_type: string | null
      budget: Prisma.Decimal | null
      duration: string | null
      workload: string | null
      client_id: string | null
      created_at: Date | null
      rate: Prisma.Decimal | null
      user_id: string | null
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
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
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends Job$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Job$clientsArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Job$usersArgs<ExtArgs> = {}>(args?: Subset<T, Job$usersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    task<T extends Job$taskArgs<ExtArgs> = {}>(args?: Subset<T, Job$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly title: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
    readonly skills: FieldRef<"Job", 'String[]'>
    readonly job_type: FieldRef<"Job", 'String'>
    readonly budget: FieldRef<"Job", 'Decimal'>
    readonly duration: FieldRef<"Job", 'String'>
    readonly workload: FieldRef<"Job", 'String'>
    readonly client_id: FieldRef<"Job", 'String'>
    readonly created_at: FieldRef<"Job", 'DateTime'>
    readonly rate: FieldRef<"Job", 'Decimal'>
    readonly user_id: FieldRef<"Job", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.clients
   */
  export type Job$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    where?: ClientsWhereInput
  }

  /**
   * Job.users
   */
  export type Job$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Job.task
   */
  export type Job$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    priority: string | null
    status: string | null
    due: Date | null
    reviewer: string | null
    user_id: string | null
    job_id: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    priority: string | null
    status: string | null
    due: Date | null
    reviewer: string | null
    user_id: string | null
    job_id: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    priority: number
    status: number
    due: number
    reviewer: number
    user_id: number
    job_id: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    priority?: true
    status?: true
    due?: true
    reviewer?: true
    user_id?: true
    job_id?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    priority?: true
    status?: true
    due?: true
    reviewer?: true
    user_id?: true
    job_id?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    priority?: true
    status?: true
    due?: true
    reviewer?: true
    user_id?: true
    job_id?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    priority: string
    status: string
    due: Date | null
    reviewer: string
    user_id: string
    job_id: string
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    priority?: boolean
    status?: boolean
    due?: boolean
    reviewer?: boolean
    user_id?: boolean
    job_id?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    priority?: boolean
    status?: boolean
    due?: boolean
    reviewer?: boolean
    user_id?: boolean
    job_id?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    priority?: boolean
    status?: boolean
    due?: boolean
    reviewer?: boolean
    user_id?: boolean
    job_id?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    priority?: boolean
    status?: boolean
    due?: boolean
    reviewer?: boolean
    user_id?: boolean
    job_id?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "priority" | "status" | "due" | "reviewer" | "user_id" | "job_id", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      priority: string
      status: string
      due: Date | null
      reviewer: string
      user_id: string
      job_id: string
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly due: FieldRef<"Task", 'DateTime'>
    readonly reviewer: FieldRef<"Task", 'String'>
    readonly user_id: FieldRef<"Task", 'String'>
    readonly job_id: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model sati_users
   */

  export type AggregateSati_users = {
    _count: Sati_usersCountAggregateOutputType | null
    _min: Sati_usersMinAggregateOutputType | null
    _max: Sati_usersMaxAggregateOutputType | null
  }

  export type Sati_usersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type Sati_usersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type Sati_usersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type Sati_usersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type Sati_usersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type Sati_usersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type Sati_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sati_users to aggregate.
     */
    where?: sati_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sati_users to fetch.
     */
    orderBy?: sati_usersOrderByWithRelationInput | sati_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sati_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sati_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sati_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sati_users
    **/
    _count?: true | Sati_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sati_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sati_usersMaxAggregateInputType
  }

  export type GetSati_usersAggregateType<T extends Sati_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateSati_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSati_users[P]>
      : GetScalarType<T[P], AggregateSati_users[P]>
  }




  export type sati_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sati_usersWhereInput
    orderBy?: sati_usersOrderByWithAggregationInput | sati_usersOrderByWithAggregationInput[]
    by: Sati_usersScalarFieldEnum[] | Sati_usersScalarFieldEnum
    having?: sati_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sati_usersCountAggregateInputType | true
    _min?: Sati_usersMinAggregateInputType
    _max?: Sati_usersMaxAggregateInputType
  }

  export type Sati_usersGroupByOutputType = {
    id: string
    email: string | null
    password: string | null
    _count: Sati_usersCountAggregateOutputType | null
    _min: Sati_usersMinAggregateOutputType | null
    _max: Sati_usersMaxAggregateOutputType | null
  }

  type GetSati_usersGroupByPayload<T extends sati_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sati_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sati_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sati_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Sati_usersGroupByOutputType[P]>
        }
      >
    >


  export type sati_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["sati_users"]>

  export type sati_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["sati_users"]>

  export type sati_usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["sati_users"]>

  export type sati_usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type sati_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["sati_users"]>

  export type $sati_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sati_users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      password: string | null
    }, ExtArgs["result"]["sati_users"]>
    composites: {}
  }

  type sati_usersGetPayload<S extends boolean | null | undefined | sati_usersDefaultArgs> = $Result.GetResult<Prisma.$sati_usersPayload, S>

  type sati_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sati_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sati_usersCountAggregateInputType | true
    }

  export interface sati_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sati_users'], meta: { name: 'sati_users' } }
    /**
     * Find zero or one Sati_users that matches the filter.
     * @param {sati_usersFindUniqueArgs} args - Arguments to find a Sati_users
     * @example
     * // Get one Sati_users
     * const sati_users = await prisma.sati_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sati_usersFindUniqueArgs>(args: SelectSubset<T, sati_usersFindUniqueArgs<ExtArgs>>): Prisma__sati_usersClient<$Result.GetResult<Prisma.$sati_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sati_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sati_usersFindUniqueOrThrowArgs} args - Arguments to find a Sati_users
     * @example
     * // Get one Sati_users
     * const sati_users = await prisma.sati_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sati_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, sati_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sati_usersClient<$Result.GetResult<Prisma.$sati_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sati_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sati_usersFindFirstArgs} args - Arguments to find a Sati_users
     * @example
     * // Get one Sati_users
     * const sati_users = await prisma.sati_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sati_usersFindFirstArgs>(args?: SelectSubset<T, sati_usersFindFirstArgs<ExtArgs>>): Prisma__sati_usersClient<$Result.GetResult<Prisma.$sati_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sati_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sati_usersFindFirstOrThrowArgs} args - Arguments to find a Sati_users
     * @example
     * // Get one Sati_users
     * const sati_users = await prisma.sati_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sati_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, sati_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__sati_usersClient<$Result.GetResult<Prisma.$sati_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sati_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sati_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sati_users
     * const sati_users = await prisma.sati_users.findMany()
     * 
     * // Get first 10 Sati_users
     * const sati_users = await prisma.sati_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sati_usersWithIdOnly = await prisma.sati_users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sati_usersFindManyArgs>(args?: SelectSubset<T, sati_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sati_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sati_users.
     * @param {sati_usersCreateArgs} args - Arguments to create a Sati_users.
     * @example
     * // Create one Sati_users
     * const Sati_users = await prisma.sati_users.create({
     *   data: {
     *     // ... data to create a Sati_users
     *   }
     * })
     * 
     */
    create<T extends sati_usersCreateArgs>(args: SelectSubset<T, sati_usersCreateArgs<ExtArgs>>): Prisma__sati_usersClient<$Result.GetResult<Prisma.$sati_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sati_users.
     * @param {sati_usersCreateManyArgs} args - Arguments to create many Sati_users.
     * @example
     * // Create many Sati_users
     * const sati_users = await prisma.sati_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sati_usersCreateManyArgs>(args?: SelectSubset<T, sati_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sati_users and returns the data saved in the database.
     * @param {sati_usersCreateManyAndReturnArgs} args - Arguments to create many Sati_users.
     * @example
     * // Create many Sati_users
     * const sati_users = await prisma.sati_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sati_users and only return the `id`
     * const sati_usersWithIdOnly = await prisma.sati_users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sati_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, sati_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sati_usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sati_users.
     * @param {sati_usersDeleteArgs} args - Arguments to delete one Sati_users.
     * @example
     * // Delete one Sati_users
     * const Sati_users = await prisma.sati_users.delete({
     *   where: {
     *     // ... filter to delete one Sati_users
     *   }
     * })
     * 
     */
    delete<T extends sati_usersDeleteArgs>(args: SelectSubset<T, sati_usersDeleteArgs<ExtArgs>>): Prisma__sati_usersClient<$Result.GetResult<Prisma.$sati_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sati_users.
     * @param {sati_usersUpdateArgs} args - Arguments to update one Sati_users.
     * @example
     * // Update one Sati_users
     * const sati_users = await prisma.sati_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sati_usersUpdateArgs>(args: SelectSubset<T, sati_usersUpdateArgs<ExtArgs>>): Prisma__sati_usersClient<$Result.GetResult<Prisma.$sati_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sati_users.
     * @param {sati_usersDeleteManyArgs} args - Arguments to filter Sati_users to delete.
     * @example
     * // Delete a few Sati_users
     * const { count } = await prisma.sati_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sati_usersDeleteManyArgs>(args?: SelectSubset<T, sati_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sati_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sati_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sati_users
     * const sati_users = await prisma.sati_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sati_usersUpdateManyArgs>(args: SelectSubset<T, sati_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sati_users and returns the data updated in the database.
     * @param {sati_usersUpdateManyAndReturnArgs} args - Arguments to update many Sati_users.
     * @example
     * // Update many Sati_users
     * const sati_users = await prisma.sati_users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sati_users and only return the `id`
     * const sati_usersWithIdOnly = await prisma.sati_users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sati_usersUpdateManyAndReturnArgs>(args: SelectSubset<T, sati_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sati_usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sati_users.
     * @param {sati_usersUpsertArgs} args - Arguments to update or create a Sati_users.
     * @example
     * // Update or create a Sati_users
     * const sati_users = await prisma.sati_users.upsert({
     *   create: {
     *     // ... data to create a Sati_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sati_users we want to update
     *   }
     * })
     */
    upsert<T extends sati_usersUpsertArgs>(args: SelectSubset<T, sati_usersUpsertArgs<ExtArgs>>): Prisma__sati_usersClient<$Result.GetResult<Prisma.$sati_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sati_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sati_usersCountArgs} args - Arguments to filter Sati_users to count.
     * @example
     * // Count the number of Sati_users
     * const count = await prisma.sati_users.count({
     *   where: {
     *     // ... the filter for the Sati_users we want to count
     *   }
     * })
    **/
    count<T extends sati_usersCountArgs>(
      args?: Subset<T, sati_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sati_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sati_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sati_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sati_usersAggregateArgs>(args: Subset<T, Sati_usersAggregateArgs>): Prisma.PrismaPromise<GetSati_usersAggregateType<T>>

    /**
     * Group by Sati_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sati_usersGroupByArgs} args - Group by arguments.
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
      T extends sati_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sati_usersGroupByArgs['orderBy'] }
        : { orderBy?: sati_usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, sati_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSati_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sati_users model
   */
  readonly fields: sati_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sati_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sati_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sati_users model
   */
  interface sati_usersFieldRefs {
    readonly id: FieldRef<"sati_users", 'String'>
    readonly email: FieldRef<"sati_users", 'String'>
    readonly password: FieldRef<"sati_users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sati_users findUnique
   */
  export type sati_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sati_users
     */
    select?: sati_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sati_users
     */
    omit?: sati_usersOmit<ExtArgs> | null
    /**
     * Filter, which sati_users to fetch.
     */
    where: sati_usersWhereUniqueInput
  }

  /**
   * sati_users findUniqueOrThrow
   */
  export type sati_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sati_users
     */
    select?: sati_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sati_users
     */
    omit?: sati_usersOmit<ExtArgs> | null
    /**
     * Filter, which sati_users to fetch.
     */
    where: sati_usersWhereUniqueInput
  }

  /**
   * sati_users findFirst
   */
  export type sati_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sati_users
     */
    select?: sati_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sati_users
     */
    omit?: sati_usersOmit<ExtArgs> | null
    /**
     * Filter, which sati_users to fetch.
     */
    where?: sati_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sati_users to fetch.
     */
    orderBy?: sati_usersOrderByWithRelationInput | sati_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sati_users.
     */
    cursor?: sati_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sati_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sati_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sati_users.
     */
    distinct?: Sati_usersScalarFieldEnum | Sati_usersScalarFieldEnum[]
  }

  /**
   * sati_users findFirstOrThrow
   */
  export type sati_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sati_users
     */
    select?: sati_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sati_users
     */
    omit?: sati_usersOmit<ExtArgs> | null
    /**
     * Filter, which sati_users to fetch.
     */
    where?: sati_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sati_users to fetch.
     */
    orderBy?: sati_usersOrderByWithRelationInput | sati_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sati_users.
     */
    cursor?: sati_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sati_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sati_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sati_users.
     */
    distinct?: Sati_usersScalarFieldEnum | Sati_usersScalarFieldEnum[]
  }

  /**
   * sati_users findMany
   */
  export type sati_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sati_users
     */
    select?: sati_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sati_users
     */
    omit?: sati_usersOmit<ExtArgs> | null
    /**
     * Filter, which sati_users to fetch.
     */
    where?: sati_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sati_users to fetch.
     */
    orderBy?: sati_usersOrderByWithRelationInput | sati_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sati_users.
     */
    cursor?: sati_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sati_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sati_users.
     */
    skip?: number
    distinct?: Sati_usersScalarFieldEnum | Sati_usersScalarFieldEnum[]
  }

  /**
   * sati_users create
   */
  export type sati_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sati_users
     */
    select?: sati_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sati_users
     */
    omit?: sati_usersOmit<ExtArgs> | null
    /**
     * The data needed to create a sati_users.
     */
    data: XOR<sati_usersCreateInput, sati_usersUncheckedCreateInput>
  }

  /**
   * sati_users createMany
   */
  export type sati_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sati_users.
     */
    data: sati_usersCreateManyInput | sati_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sati_users createManyAndReturn
   */
  export type sati_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sati_users
     */
    select?: sati_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sati_users
     */
    omit?: sati_usersOmit<ExtArgs> | null
    /**
     * The data used to create many sati_users.
     */
    data: sati_usersCreateManyInput | sati_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sati_users update
   */
  export type sati_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sati_users
     */
    select?: sati_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sati_users
     */
    omit?: sati_usersOmit<ExtArgs> | null
    /**
     * The data needed to update a sati_users.
     */
    data: XOR<sati_usersUpdateInput, sati_usersUncheckedUpdateInput>
    /**
     * Choose, which sati_users to update.
     */
    where: sati_usersWhereUniqueInput
  }

  /**
   * sati_users updateMany
   */
  export type sati_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sati_users.
     */
    data: XOR<sati_usersUpdateManyMutationInput, sati_usersUncheckedUpdateManyInput>
    /**
     * Filter which sati_users to update
     */
    where?: sati_usersWhereInput
    /**
     * Limit how many sati_users to update.
     */
    limit?: number
  }

  /**
   * sati_users updateManyAndReturn
   */
  export type sati_usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sati_users
     */
    select?: sati_usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sati_users
     */
    omit?: sati_usersOmit<ExtArgs> | null
    /**
     * The data used to update sati_users.
     */
    data: XOR<sati_usersUpdateManyMutationInput, sati_usersUncheckedUpdateManyInput>
    /**
     * Filter which sati_users to update
     */
    where?: sati_usersWhereInput
    /**
     * Limit how many sati_users to update.
     */
    limit?: number
  }

  /**
   * sati_users upsert
   */
  export type sati_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sati_users
     */
    select?: sati_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sati_users
     */
    omit?: sati_usersOmit<ExtArgs> | null
    /**
     * The filter to search for the sati_users to update in case it exists.
     */
    where: sati_usersWhereUniqueInput
    /**
     * In case the sati_users found by the `where` argument doesn't exist, create a new sati_users with this data.
     */
    create: XOR<sati_usersCreateInput, sati_usersUncheckedCreateInput>
    /**
     * In case the sati_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sati_usersUpdateInput, sati_usersUncheckedUpdateInput>
  }

  /**
   * sati_users delete
   */
  export type sati_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sati_users
     */
    select?: sati_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sati_users
     */
    omit?: sati_usersOmit<ExtArgs> | null
    /**
     * Filter which sati_users to delete.
     */
    where: sati_usersWhereUniqueInput
  }

  /**
   * sati_users deleteMany
   */
  export type sati_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sati_users to delete
     */
    where?: sati_usersWhereInput
    /**
     * Limit how many sati_users to delete.
     */
    limit?: number
  }

  /**
   * sati_users without action
   */
  export type sati_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sati_users
     */
    select?: sati_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sati_users
     */
    omit?: sati_usersOmit<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    rate: Decimal | null
  }

  export type UsersSumAggregateOutputType = {
    rate: Decimal | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    title: string | null
    rate: Decimal | null
    location: string | null
    overview: string | null
    admin: boolean | null
    email: string | null
    profile_url: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    title: string | null
    rate: Decimal | null
    location: string | null
    overview: string | null
    admin: boolean | null
    email: string | null
    profile_url: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    full_name: number
    title: number
    rate: number
    location: number
    skills: number
    overview: number
    admin: number
    email: number
    profile_url: number
    reviews: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    rate?: true
  }

  export type UsersSumAggregateInputType = {
    rate?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    full_name?: true
    title?: true
    rate?: true
    location?: true
    overview?: true
    admin?: true
    email?: true
    profile_url?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    full_name?: true
    title?: true
    rate?: true
    location?: true
    overview?: true
    admin?: true
    email?: true
    profile_url?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    full_name?: true
    title?: true
    rate?: true
    location?: true
    skills?: true
    overview?: true
    admin?: true
    email?: true
    profile_url?: true
    reviews?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    full_name: string | null
    title: string | null
    rate: Decimal | null
    location: string | null
    skills: string[]
    overview: string | null
    admin: boolean | null
    email: string | null
    profile_url: string | null
    reviews: string[]
    password: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    title?: boolean
    rate?: boolean
    location?: boolean
    skills?: boolean
    overview?: boolean
    admin?: boolean
    email?: boolean
    profile_url?: boolean
    reviews?: boolean
    password?: boolean
    jobs?: boolean | Users$jobsArgs<ExtArgs>
    task?: boolean | Users$taskArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    title?: boolean
    rate?: boolean
    location?: boolean
    skills?: boolean
    overview?: boolean
    admin?: boolean
    email?: boolean
    profile_url?: boolean
    reviews?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    title?: boolean
    rate?: boolean
    location?: boolean
    skills?: boolean
    overview?: boolean
    admin?: boolean
    email?: boolean
    profile_url?: boolean
    reviews?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    full_name?: boolean
    title?: boolean
    rate?: boolean
    location?: boolean
    skills?: boolean
    overview?: boolean
    admin?: boolean
    email?: boolean
    profile_url?: boolean
    reviews?: boolean
    password?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "title" | "rate" | "location" | "skills" | "overview" | "admin" | "email" | "profile_url" | "reviews" | "password", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | Users$jobsArgs<ExtArgs>
    task?: boolean | Users$taskArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      jobs: Prisma.$JobPayload<ExtArgs>[]
      task: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string | null
      title: string | null
      rate: Prisma.Decimal | null
      location: string | null
      skills: string[]
      overview: string | null
      admin: boolean | null
      email: string | null
      profile_url: string | null
      reviews: string[]
      password: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends Users$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Users$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task<T extends Users$taskArgs<ExtArgs> = {}>(args?: Subset<T, Users$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly full_name: FieldRef<"Users", 'String'>
    readonly title: FieldRef<"Users", 'String'>
    readonly rate: FieldRef<"Users", 'Decimal'>
    readonly location: FieldRef<"Users", 'String'>
    readonly skills: FieldRef<"Users", 'String[]'>
    readonly overview: FieldRef<"Users", 'String'>
    readonly admin: FieldRef<"Users", 'Boolean'>
    readonly email: FieldRef<"Users", 'String'>
    readonly profile_url: FieldRef<"Users", 'String'>
    readonly reviews: FieldRef<"Users", 'String[]'>
    readonly password: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data?: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.jobs
   */
  export type Users$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Users.task
   */
  export type Users$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientsScalarFieldEnum: {
    id: 'id',
    company_name: 'company_name',
    country: 'country',
    total_spent: 'total_spent',
    feedback_score: 'feedback_score'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    skills: 'skills',
    job_type: 'job_type',
    budget: 'budget',
    duration: 'duration',
    workload: 'workload',
    client_id: 'client_id',
    created_at: 'created_at',
    rate: 'rate',
    user_id: 'user_id'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    priority: 'priority',
    status: 'status',
    due: 'due',
    reviewer: 'reviewer',
    user_id: 'user_id',
    job_id: 'job_id'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const Sati_usersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type Sati_usersScalarFieldEnum = (typeof Sati_usersScalarFieldEnum)[keyof typeof Sati_usersScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    title: 'title',
    rate: 'rate',
    location: 'location',
    skills: 'skills',
    overview: 'overview',
    admin: 'admin',
    email: 'email',
    profile_url: 'profile_url',
    reviews: 'reviews',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ClientsWhereInput = {
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    id?: StringFilter<"Clients"> | string
    company_name?: StringNullableFilter<"Clients"> | string | null
    country?: StringNullableFilter<"Clients"> | string | null
    total_spent?: DecimalNullableFilter<"Clients"> | Decimal | DecimalJsLike | number | string | null
    feedback_score?: DecimalNullableFilter<"Clients"> | Decimal | DecimalJsLike | number | string | null
    jobs?: JobListRelationFilter
  }

  export type ClientsOrderByWithRelationInput = {
    id?: SortOrder
    company_name?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    total_spent?: SortOrderInput | SortOrder
    feedback_score?: SortOrderInput | SortOrder
    jobs?: JobOrderByRelationAggregateInput
  }

  export type ClientsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    company_name?: StringNullableFilter<"Clients"> | string | null
    country?: StringNullableFilter<"Clients"> | string | null
    total_spent?: DecimalNullableFilter<"Clients"> | Decimal | DecimalJsLike | number | string | null
    feedback_score?: DecimalNullableFilter<"Clients"> | Decimal | DecimalJsLike | number | string | null
    jobs?: JobListRelationFilter
  }, "id">

  export type ClientsOrderByWithAggregationInput = {
    id?: SortOrder
    company_name?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    total_spent?: SortOrderInput | SortOrder
    feedback_score?: SortOrderInput | SortOrder
    _count?: ClientsCountOrderByAggregateInput
    _avg?: ClientsAvgOrderByAggregateInput
    _max?: ClientsMaxOrderByAggregateInput
    _min?: ClientsMinOrderByAggregateInput
    _sum?: ClientsSumOrderByAggregateInput
  }

  export type ClientsScalarWhereWithAggregatesInput = {
    AND?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    OR?: ClientsScalarWhereWithAggregatesInput[]
    NOT?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clients"> | string
    company_name?: StringNullableWithAggregatesFilter<"Clients"> | string | null
    country?: StringNullableWithAggregatesFilter<"Clients"> | string | null
    total_spent?: DecimalNullableWithAggregatesFilter<"Clients"> | Decimal | DecimalJsLike | number | string | null
    feedback_score?: DecimalNullableWithAggregatesFilter<"Clients"> | Decimal | DecimalJsLike | number | string | null
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    title?: StringNullableFilter<"Job"> | string | null
    description?: StringNullableFilter<"Job"> | string | null
    skills?: StringNullableListFilter<"Job">
    job_type?: StringNullableFilter<"Job"> | string | null
    budget?: DecimalNullableFilter<"Job"> | Decimal | DecimalJsLike | number | string | null
    duration?: StringNullableFilter<"Job"> | string | null
    workload?: StringNullableFilter<"Job"> | string | null
    client_id?: StringNullableFilter<"Job"> | string | null
    created_at?: DateTimeNullableFilter<"Job"> | Date | string | null
    rate?: DecimalNullableFilter<"Job"> | Decimal | DecimalJsLike | number | string | null
    user_id?: StringNullableFilter<"Job"> | string | null
    clients?: XOR<ClientsNullableScalarRelationFilter, ClientsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    task?: TaskListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    skills?: SortOrder
    job_type?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    workload?: SortOrderInput | SortOrder
    client_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    rate?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    clients?: ClientsOrderByWithRelationInput
    users?: UsersOrderByWithRelationInput
    task?: TaskOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    title?: StringNullableFilter<"Job"> | string | null
    description?: StringNullableFilter<"Job"> | string | null
    skills?: StringNullableListFilter<"Job">
    job_type?: StringNullableFilter<"Job"> | string | null
    budget?: DecimalNullableFilter<"Job"> | Decimal | DecimalJsLike | number | string | null
    duration?: StringNullableFilter<"Job"> | string | null
    workload?: StringNullableFilter<"Job"> | string | null
    client_id?: StringNullableFilter<"Job"> | string | null
    created_at?: DateTimeNullableFilter<"Job"> | Date | string | null
    rate?: DecimalNullableFilter<"Job"> | Decimal | DecimalJsLike | number | string | null
    user_id?: StringNullableFilter<"Job"> | string | null
    clients?: XOR<ClientsNullableScalarRelationFilter, ClientsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    task?: TaskListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    skills?: SortOrder
    job_type?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    workload?: SortOrderInput | SortOrder
    client_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    rate?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    title?: StringNullableWithAggregatesFilter<"Job"> | string | null
    description?: StringNullableWithAggregatesFilter<"Job"> | string | null
    skills?: StringNullableListFilter<"Job">
    job_type?: StringNullableWithAggregatesFilter<"Job"> | string | null
    budget?: DecimalNullableWithAggregatesFilter<"Job"> | Decimal | DecimalJsLike | number | string | null
    duration?: StringNullableWithAggregatesFilter<"Job"> | string | null
    workload?: StringNullableWithAggregatesFilter<"Job"> | string | null
    client_id?: StringNullableWithAggregatesFilter<"Job"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Job"> | Date | string | null
    rate?: DecimalNullableWithAggregatesFilter<"Job"> | Decimal | DecimalJsLike | number | string | null
    user_id?: StringNullableWithAggregatesFilter<"Job"> | string | null
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    due?: DateTimeNullableFilter<"Task"> | Date | string | null
    reviewer?: StringFilter<"Task"> | string
    user_id?: StringFilter<"Task"> | string
    job_id?: StringFilter<"Task"> | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    due?: SortOrderInput | SortOrder
    reviewer?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    users?: UsersOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    due?: DateTimeNullableFilter<"Task"> | Date | string | null
    reviewer?: StringFilter<"Task"> | string
    user_id?: StringFilter<"Task"> | string
    job_id?: StringFilter<"Task"> | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    due?: SortOrderInput | SortOrder
    reviewer?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    priority?: StringWithAggregatesFilter<"Task"> | string
    status?: StringWithAggregatesFilter<"Task"> | string
    due?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    reviewer?: StringWithAggregatesFilter<"Task"> | string
    user_id?: StringWithAggregatesFilter<"Task"> | string
    job_id?: StringWithAggregatesFilter<"Task"> | string
  }

  export type sati_usersWhereInput = {
    AND?: sati_usersWhereInput | sati_usersWhereInput[]
    OR?: sati_usersWhereInput[]
    NOT?: sati_usersWhereInput | sati_usersWhereInput[]
    id?: StringFilter<"sati_users"> | string
    email?: StringNullableFilter<"sati_users"> | string | null
    password?: StringNullableFilter<"sati_users"> | string | null
  }

  export type sati_usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
  }

  export type sati_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sati_usersWhereInput | sati_usersWhereInput[]
    OR?: sati_usersWhereInput[]
    NOT?: sati_usersWhereInput | sati_usersWhereInput[]
    email?: StringNullableFilter<"sati_users"> | string | null
    password?: StringNullableFilter<"sati_users"> | string | null
  }, "id">

  export type sati_usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: sati_usersCountOrderByAggregateInput
    _max?: sati_usersMaxOrderByAggregateInput
    _min?: sati_usersMinOrderByAggregateInput
  }

  export type sati_usersScalarWhereWithAggregatesInput = {
    AND?: sati_usersScalarWhereWithAggregatesInput | sati_usersScalarWhereWithAggregatesInput[]
    OR?: sati_usersScalarWhereWithAggregatesInput[]
    NOT?: sati_usersScalarWhereWithAggregatesInput | sati_usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sati_users"> | string
    email?: StringNullableWithAggregatesFilter<"sati_users"> | string | null
    password?: StringNullableWithAggregatesFilter<"sati_users"> | string | null
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    full_name?: StringNullableFilter<"Users"> | string | null
    title?: StringNullableFilter<"Users"> | string | null
    rate?: DecimalNullableFilter<"Users"> | Decimal | DecimalJsLike | number | string | null
    location?: StringNullableFilter<"Users"> | string | null
    skills?: StringNullableListFilter<"Users">
    overview?: StringNullableFilter<"Users"> | string | null
    admin?: BoolNullableFilter<"Users"> | boolean | null
    email?: StringNullableFilter<"Users"> | string | null
    profile_url?: StringNullableFilter<"Users"> | string | null
    reviews?: StringNullableListFilter<"Users">
    password?: StringNullableFilter<"Users"> | string | null
    jobs?: JobListRelationFilter
    task?: TaskListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    rate?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    skills?: SortOrder
    overview?: SortOrderInput | SortOrder
    admin?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    profile_url?: SortOrderInput | SortOrder
    reviews?: SortOrder
    password?: SortOrderInput | SortOrder
    jobs?: JobOrderByRelationAggregateInput
    task?: TaskOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    full_name?: StringNullableFilter<"Users"> | string | null
    title?: StringNullableFilter<"Users"> | string | null
    rate?: DecimalNullableFilter<"Users"> | Decimal | DecimalJsLike | number | string | null
    location?: StringNullableFilter<"Users"> | string | null
    skills?: StringNullableListFilter<"Users">
    overview?: StringNullableFilter<"Users"> | string | null
    admin?: BoolNullableFilter<"Users"> | boolean | null
    profile_url?: StringNullableFilter<"Users"> | string | null
    reviews?: StringNullableListFilter<"Users">
    password?: StringNullableFilter<"Users"> | string | null
    jobs?: JobListRelationFilter
    task?: TaskListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    rate?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    skills?: SortOrder
    overview?: SortOrderInput | SortOrder
    admin?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    profile_url?: SortOrderInput | SortOrder
    reviews?: SortOrder
    password?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    full_name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    title?: StringNullableWithAggregatesFilter<"Users"> | string | null
    rate?: DecimalNullableWithAggregatesFilter<"Users"> | Decimal | DecimalJsLike | number | string | null
    location?: StringNullableWithAggregatesFilter<"Users"> | string | null
    skills?: StringNullableListFilter<"Users">
    overview?: StringNullableWithAggregatesFilter<"Users"> | string | null
    admin?: BoolNullableWithAggregatesFilter<"Users"> | boolean | null
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    profile_url?: StringNullableWithAggregatesFilter<"Users"> | string | null
    reviews?: StringNullableListFilter<"Users">
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type ClientsCreateInput = {
    id: string
    company_name?: string | null
    country?: string | null
    total_spent?: Decimal | DecimalJsLike | number | string | null
    feedback_score?: Decimal | DecimalJsLike | number | string | null
    jobs?: JobCreateNestedManyWithoutClientsInput
  }

  export type ClientsUncheckedCreateInput = {
    id: string
    company_name?: string | null
    country?: string | null
    total_spent?: Decimal | DecimalJsLike | number | string | null
    feedback_score?: Decimal | DecimalJsLike | number | string | null
    jobs?: JobUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    total_spent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feedback_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jobs?: JobUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    total_spent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feedback_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jobs?: JobUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientsCreateManyInput = {
    id: string
    company_name?: string | null
    country?: string | null
    total_spent?: Decimal | DecimalJsLike | number | string | null
    feedback_score?: Decimal | DecimalJsLike | number | string | null
  }

  export type ClientsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    total_spent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feedback_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ClientsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    total_spent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feedback_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type JobCreateInput = {
    id: string
    title?: string | null
    description?: string | null
    skills?: JobCreateskillsInput | string[]
    job_type?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    duration?: string | null
    workload?: string | null
    created_at?: Date | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    clients?: ClientsCreateNestedOneWithoutJobsInput
    users?: UsersCreateNestedOneWithoutJobsInput
    task?: TaskCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id: string
    title?: string | null
    description?: string | null
    skills?: JobCreateskillsInput | string[]
    job_type?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    duration?: string | null
    workload?: string | null
    client_id?: string | null
    created_at?: Date | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    user_id?: string | null
    task?: TaskUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobUpdateskillsInput | string[]
    job_type?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clients?: ClientsUpdateOneWithoutJobsNestedInput
    users?: UsersUpdateOneWithoutJobsNestedInput
    task?: TaskUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobUpdateskillsInput | string[]
    job_type?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TaskUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id: string
    title?: string | null
    description?: string | null
    skills?: JobCreateskillsInput | string[]
    job_type?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    duration?: string | null
    workload?: string | null
    client_id?: string | null
    created_at?: Date | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    user_id?: string | null
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobUpdateskillsInput | string[]
    job_type?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobUpdateskillsInput | string[]
    job_type?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateInput = {
    id: string
    title: string
    priority: string
    status: string
    due?: Date | string | null
    reviewer: string
    users: UsersCreateNestedOneWithoutTaskInput
    job: JobCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id: string
    title: string
    priority: string
    status: string
    due?: Date | string | null
    reviewer: string
    user_id: string
    job_id: string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewer?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateOneRequiredWithoutTaskNestedInput
    job?: JobUpdateOneRequiredWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewer?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyInput = {
    id: string
    title: string
    priority: string
    status: string
    due?: Date | string | null
    reviewer: string
    user_id: string
    job_id: string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewer?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewer?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
  }

  export type sati_usersCreateInput = {
    id: string
    email?: string | null
    password?: string | null
  }

  export type sati_usersUncheckedCreateInput = {
    id: string
    email?: string | null
    password?: string | null
  }

  export type sati_usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sati_usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sati_usersCreateManyInput = {
    id: string
    email?: string | null
    password?: string | null
  }

  export type sati_usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sati_usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateInput = {
    id?: string
    full_name?: string | null
    title?: string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    location?: string | null
    skills?: UsersCreateskillsInput | string[]
    overview?: string | null
    admin?: boolean | null
    email?: string | null
    profile_url?: string | null
    reviews?: UsersCreatereviewsInput | string[]
    password?: string | null
    jobs?: JobCreateNestedManyWithoutUsersInput
    task?: TaskCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    full_name?: string | null
    title?: string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    location?: string | null
    skills?: UsersCreateskillsInput | string[]
    overview?: string | null
    admin?: boolean | null
    email?: string | null
    profile_url?: string | null
    reviews?: UsersCreatereviewsInput | string[]
    password?: string | null
    jobs?: JobUncheckedCreateNestedManyWithoutUsersInput
    task?: TaskUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UsersUpdateskillsInput | string[]
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: UsersUpdatereviewsInput | string[]
    password?: NullableStringFieldUpdateOperationsInput | string | null
    jobs?: JobUpdateManyWithoutUsersNestedInput
    task?: TaskUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UsersUpdateskillsInput | string[]
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: UsersUpdatereviewsInput | string[]
    password?: NullableStringFieldUpdateOperationsInput | string | null
    jobs?: JobUncheckedUpdateManyWithoutUsersNestedInput
    task?: TaskUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    full_name?: string | null
    title?: string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    location?: string | null
    skills?: UsersCreateskillsInput | string[]
    overview?: string | null
    admin?: boolean | null
    email?: string | null
    profile_url?: string | null
    reviews?: UsersCreatereviewsInput | string[]
    password?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UsersUpdateskillsInput | string[]
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: UsersUpdatereviewsInput | string[]
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UsersUpdateskillsInput | string[]
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: UsersUpdatereviewsInput | string[]
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientsCountOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    country?: SortOrder
    total_spent?: SortOrder
    feedback_score?: SortOrder
  }

  export type ClientsAvgOrderByAggregateInput = {
    total_spent?: SortOrder
    feedback_score?: SortOrder
  }

  export type ClientsMaxOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    country?: SortOrder
    total_spent?: SortOrder
    feedback_score?: SortOrder
  }

  export type ClientsMinOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    country?: SortOrder
    total_spent?: SortOrder
    feedback_score?: SortOrder
  }

  export type ClientsSumOrderByAggregateInput = {
    total_spent?: SortOrder
    feedback_score?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClientsNullableScalarRelationFilter = {
    is?: ClientsWhereInput | null
    isNot?: ClientsWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    skills?: SortOrder
    job_type?: SortOrder
    budget?: SortOrder
    duration?: SortOrder
    workload?: SortOrder
    client_id?: SortOrder
    created_at?: SortOrder
    rate?: SortOrder
    user_id?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    budget?: SortOrder
    rate?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    budget?: SortOrder
    duration?: SortOrder
    workload?: SortOrder
    client_id?: SortOrder
    created_at?: SortOrder
    rate?: SortOrder
    user_id?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    budget?: SortOrder
    duration?: SortOrder
    workload?: SortOrder
    client_id?: SortOrder
    created_at?: SortOrder
    rate?: SortOrder
    user_id?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    budget?: SortOrder
    rate?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    due?: SortOrder
    reviewer?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    due?: SortOrder
    reviewer?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    due?: SortOrder
    reviewer?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type sati_usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type sati_usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type sati_usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    title?: SortOrder
    rate?: SortOrder
    location?: SortOrder
    skills?: SortOrder
    overview?: SortOrder
    admin?: SortOrder
    email?: SortOrder
    profile_url?: SortOrder
    reviews?: SortOrder
    password?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    title?: SortOrder
    rate?: SortOrder
    location?: SortOrder
    overview?: SortOrder
    admin?: SortOrder
    email?: SortOrder
    profile_url?: SortOrder
    password?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    title?: SortOrder
    rate?: SortOrder
    location?: SortOrder
    overview?: SortOrder
    admin?: SortOrder
    email?: SortOrder
    profile_url?: SortOrder
    password?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type JobCreateNestedManyWithoutClientsInput = {
    create?: XOR<JobCreateWithoutClientsInput, JobUncheckedCreateWithoutClientsInput> | JobCreateWithoutClientsInput[] | JobUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: JobCreateOrConnectWithoutClientsInput | JobCreateOrConnectWithoutClientsInput[]
    createMany?: JobCreateManyClientsInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<JobCreateWithoutClientsInput, JobUncheckedCreateWithoutClientsInput> | JobCreateWithoutClientsInput[] | JobUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: JobCreateOrConnectWithoutClientsInput | JobCreateOrConnectWithoutClientsInput[]
    createMany?: JobCreateManyClientsInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type JobUpdateManyWithoutClientsNestedInput = {
    create?: XOR<JobCreateWithoutClientsInput, JobUncheckedCreateWithoutClientsInput> | JobCreateWithoutClientsInput[] | JobUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: JobCreateOrConnectWithoutClientsInput | JobCreateOrConnectWithoutClientsInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutClientsInput | JobUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: JobCreateManyClientsInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutClientsInput | JobUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: JobUpdateManyWithWhereWithoutClientsInput | JobUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<JobCreateWithoutClientsInput, JobUncheckedCreateWithoutClientsInput> | JobCreateWithoutClientsInput[] | JobUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: JobCreateOrConnectWithoutClientsInput | JobCreateOrConnectWithoutClientsInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutClientsInput | JobUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: JobCreateManyClientsInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutClientsInput | JobUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: JobUpdateManyWithWhereWithoutClientsInput | JobUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobCreateskillsInput = {
    set: string[]
  }

  export type ClientsCreateNestedOneWithoutJobsInput = {
    create?: XOR<ClientsCreateWithoutJobsInput, ClientsUncheckedCreateWithoutJobsInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutJobsInput
    connect?: ClientsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutJobsInput = {
    create?: XOR<UsersCreateWithoutJobsInput, UsersUncheckedCreateWithoutJobsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutJobsInput
    connect?: UsersWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutJobInput = {
    create?: XOR<TaskCreateWithoutJobInput, TaskUncheckedCreateWithoutJobInput> | TaskCreateWithoutJobInput[] | TaskUncheckedCreateWithoutJobInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutJobInput | TaskCreateOrConnectWithoutJobInput[]
    createMany?: TaskCreateManyJobInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<TaskCreateWithoutJobInput, TaskUncheckedCreateWithoutJobInput> | TaskCreateWithoutJobInput[] | TaskUncheckedCreateWithoutJobInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutJobInput | TaskCreateOrConnectWithoutJobInput[]
    createMany?: TaskCreateManyJobInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type JobUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClientsUpdateOneWithoutJobsNestedInput = {
    create?: XOR<ClientsCreateWithoutJobsInput, ClientsUncheckedCreateWithoutJobsInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutJobsInput
    upsert?: ClientsUpsertWithoutJobsInput
    disconnect?: ClientsWhereInput | boolean
    delete?: ClientsWhereInput | boolean
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutJobsInput, ClientsUpdateWithoutJobsInput>, ClientsUncheckedUpdateWithoutJobsInput>
  }

  export type UsersUpdateOneWithoutJobsNestedInput = {
    create?: XOR<UsersCreateWithoutJobsInput, UsersUncheckedCreateWithoutJobsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutJobsInput
    upsert?: UsersUpsertWithoutJobsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutJobsInput, UsersUpdateWithoutJobsInput>, UsersUncheckedUpdateWithoutJobsInput>
  }

  export type TaskUpdateManyWithoutJobNestedInput = {
    create?: XOR<TaskCreateWithoutJobInput, TaskUncheckedCreateWithoutJobInput> | TaskCreateWithoutJobInput[] | TaskUncheckedCreateWithoutJobInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutJobInput | TaskCreateOrConnectWithoutJobInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutJobInput | TaskUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: TaskCreateManyJobInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutJobInput | TaskUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutJobInput | TaskUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<TaskCreateWithoutJobInput, TaskUncheckedCreateWithoutJobInput> | TaskCreateWithoutJobInput[] | TaskUncheckedCreateWithoutJobInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutJobInput | TaskCreateOrConnectWithoutJobInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutJobInput | TaskUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: TaskCreateManyJobInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutJobInput | TaskUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutJobInput | TaskUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutTaskInput = {
    create?: XOR<UsersCreateWithoutTaskInput, UsersUncheckedCreateWithoutTaskInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTaskInput
    connect?: UsersWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutTaskInput = {
    create?: XOR<JobCreateWithoutTaskInput, JobUncheckedCreateWithoutTaskInput>
    connectOrCreate?: JobCreateOrConnectWithoutTaskInput
    connect?: JobWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<UsersCreateWithoutTaskInput, UsersUncheckedCreateWithoutTaskInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTaskInput
    upsert?: UsersUpsertWithoutTaskInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTaskInput, UsersUpdateWithoutTaskInput>, UsersUncheckedUpdateWithoutTaskInput>
  }

  export type JobUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<JobCreateWithoutTaskInput, JobUncheckedCreateWithoutTaskInput>
    connectOrCreate?: JobCreateOrConnectWithoutTaskInput
    upsert?: JobUpsertWithoutTaskInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutTaskInput, JobUpdateWithoutTaskInput>, JobUncheckedUpdateWithoutTaskInput>
  }

  export type UsersCreateskillsInput = {
    set: string[]
  }

  export type UsersCreatereviewsInput = {
    set: string[]
  }

  export type JobCreateNestedManyWithoutUsersInput = {
    create?: XOR<JobCreateWithoutUsersInput, JobUncheckedCreateWithoutUsersInput> | JobCreateWithoutUsersInput[] | JobUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUsersInput | JobCreateOrConnectWithoutUsersInput[]
    createMany?: JobCreateManyUsersInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUsersInput = {
    create?: XOR<TaskCreateWithoutUsersInput, TaskUncheckedCreateWithoutUsersInput> | TaskCreateWithoutUsersInput[] | TaskUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUsersInput | TaskCreateOrConnectWithoutUsersInput[]
    createMany?: TaskCreateManyUsersInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<JobCreateWithoutUsersInput, JobUncheckedCreateWithoutUsersInput> | JobCreateWithoutUsersInput[] | JobUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUsersInput | JobCreateOrConnectWithoutUsersInput[]
    createMany?: JobCreateManyUsersInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<TaskCreateWithoutUsersInput, TaskUncheckedCreateWithoutUsersInput> | TaskCreateWithoutUsersInput[] | TaskUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUsersInput | TaskCreateOrConnectWithoutUsersInput[]
    createMany?: TaskCreateManyUsersInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UsersUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UsersUpdatereviewsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type JobUpdateManyWithoutUsersNestedInput = {
    create?: XOR<JobCreateWithoutUsersInput, JobUncheckedCreateWithoutUsersInput> | JobCreateWithoutUsersInput[] | JobUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUsersInput | JobCreateOrConnectWithoutUsersInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutUsersInput | JobUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: JobCreateManyUsersInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutUsersInput | JobUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: JobUpdateManyWithWhereWithoutUsersInput | JobUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TaskCreateWithoutUsersInput, TaskUncheckedCreateWithoutUsersInput> | TaskCreateWithoutUsersInput[] | TaskUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUsersInput | TaskCreateOrConnectWithoutUsersInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUsersInput | TaskUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TaskCreateManyUsersInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUsersInput | TaskUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUsersInput | TaskUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<JobCreateWithoutUsersInput, JobUncheckedCreateWithoutUsersInput> | JobCreateWithoutUsersInput[] | JobUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUsersInput | JobCreateOrConnectWithoutUsersInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutUsersInput | JobUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: JobCreateManyUsersInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutUsersInput | JobUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: JobUpdateManyWithWhereWithoutUsersInput | JobUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TaskCreateWithoutUsersInput, TaskUncheckedCreateWithoutUsersInput> | TaskCreateWithoutUsersInput[] | TaskUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUsersInput | TaskCreateOrConnectWithoutUsersInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUsersInput | TaskUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TaskCreateManyUsersInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUsersInput | TaskUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUsersInput | TaskUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type JobCreateWithoutClientsInput = {
    id: string
    title?: string | null
    description?: string | null
    skills?: JobCreateskillsInput | string[]
    job_type?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    duration?: string | null
    workload?: string | null
    created_at?: Date | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    users?: UsersCreateNestedOneWithoutJobsInput
    task?: TaskCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutClientsInput = {
    id: string
    title?: string | null
    description?: string | null
    skills?: JobCreateskillsInput | string[]
    job_type?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    duration?: string | null
    workload?: string | null
    created_at?: Date | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    user_id?: string | null
    task?: TaskUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutClientsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutClientsInput, JobUncheckedCreateWithoutClientsInput>
  }

  export type JobCreateManyClientsInputEnvelope = {
    data: JobCreateManyClientsInput | JobCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithWhereUniqueWithoutClientsInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutClientsInput, JobUncheckedUpdateWithoutClientsInput>
    create: XOR<JobCreateWithoutClientsInput, JobUncheckedCreateWithoutClientsInput>
  }

  export type JobUpdateWithWhereUniqueWithoutClientsInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutClientsInput, JobUncheckedUpdateWithoutClientsInput>
  }

  export type JobUpdateManyWithWhereWithoutClientsInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutClientsInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: StringFilter<"Job"> | string
    title?: StringNullableFilter<"Job"> | string | null
    description?: StringNullableFilter<"Job"> | string | null
    skills?: StringNullableListFilter<"Job">
    job_type?: StringNullableFilter<"Job"> | string | null
    budget?: DecimalNullableFilter<"Job"> | Decimal | DecimalJsLike | number | string | null
    duration?: StringNullableFilter<"Job"> | string | null
    workload?: StringNullableFilter<"Job"> | string | null
    client_id?: StringNullableFilter<"Job"> | string | null
    created_at?: DateTimeNullableFilter<"Job"> | Date | string | null
    rate?: DecimalNullableFilter<"Job"> | Decimal | DecimalJsLike | number | string | null
    user_id?: StringNullableFilter<"Job"> | string | null
  }

  export type ClientsCreateWithoutJobsInput = {
    id: string
    company_name?: string | null
    country?: string | null
    total_spent?: Decimal | DecimalJsLike | number | string | null
    feedback_score?: Decimal | DecimalJsLike | number | string | null
  }

  export type ClientsUncheckedCreateWithoutJobsInput = {
    id: string
    company_name?: string | null
    country?: string | null
    total_spent?: Decimal | DecimalJsLike | number | string | null
    feedback_score?: Decimal | DecimalJsLike | number | string | null
  }

  export type ClientsCreateOrConnectWithoutJobsInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutJobsInput, ClientsUncheckedCreateWithoutJobsInput>
  }

  export type UsersCreateWithoutJobsInput = {
    id?: string
    full_name?: string | null
    title?: string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    location?: string | null
    skills?: UsersCreateskillsInput | string[]
    overview?: string | null
    admin?: boolean | null
    email?: string | null
    profile_url?: string | null
    reviews?: UsersCreatereviewsInput | string[]
    password?: string | null
    task?: TaskCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutJobsInput = {
    id?: string
    full_name?: string | null
    title?: string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    location?: string | null
    skills?: UsersCreateskillsInput | string[]
    overview?: string | null
    admin?: boolean | null
    email?: string | null
    profile_url?: string | null
    reviews?: UsersCreatereviewsInput | string[]
    password?: string | null
    task?: TaskUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutJobsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutJobsInput, UsersUncheckedCreateWithoutJobsInput>
  }

  export type TaskCreateWithoutJobInput = {
    id: string
    title: string
    priority: string
    status: string
    due?: Date | string | null
    reviewer: string
    users: UsersCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutJobInput = {
    id: string
    title: string
    priority: string
    status: string
    due?: Date | string | null
    reviewer: string
    user_id: string
  }

  export type TaskCreateOrConnectWithoutJobInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutJobInput, TaskUncheckedCreateWithoutJobInput>
  }

  export type TaskCreateManyJobInputEnvelope = {
    data: TaskCreateManyJobInput | TaskCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type ClientsUpsertWithoutJobsInput = {
    update: XOR<ClientsUpdateWithoutJobsInput, ClientsUncheckedUpdateWithoutJobsInput>
    create: XOR<ClientsCreateWithoutJobsInput, ClientsUncheckedCreateWithoutJobsInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutJobsInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutJobsInput, ClientsUncheckedUpdateWithoutJobsInput>
  }

  export type ClientsUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    total_spent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feedback_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ClientsUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    total_spent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feedback_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type UsersUpsertWithoutJobsInput = {
    update: XOR<UsersUpdateWithoutJobsInput, UsersUncheckedUpdateWithoutJobsInput>
    create: XOR<UsersCreateWithoutJobsInput, UsersUncheckedCreateWithoutJobsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutJobsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutJobsInput, UsersUncheckedUpdateWithoutJobsInput>
  }

  export type UsersUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UsersUpdateskillsInput | string[]
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: UsersUpdatereviewsInput | string[]
    password?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TaskUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UsersUpdateskillsInput | string[]
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: UsersUpdatereviewsInput | string[]
    password?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TaskUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutJobInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutJobInput, TaskUncheckedUpdateWithoutJobInput>
    create: XOR<TaskCreateWithoutJobInput, TaskUncheckedCreateWithoutJobInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutJobInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutJobInput, TaskUncheckedUpdateWithoutJobInput>
  }

  export type TaskUpdateManyWithWhereWithoutJobInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutJobInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    due?: DateTimeNullableFilter<"Task"> | Date | string | null
    reviewer?: StringFilter<"Task"> | string
    user_id?: StringFilter<"Task"> | string
    job_id?: StringFilter<"Task"> | string
  }

  export type UsersCreateWithoutTaskInput = {
    id?: string
    full_name?: string | null
    title?: string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    location?: string | null
    skills?: UsersCreateskillsInput | string[]
    overview?: string | null
    admin?: boolean | null
    email?: string | null
    profile_url?: string | null
    reviews?: UsersCreatereviewsInput | string[]
    password?: string | null
    jobs?: JobCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutTaskInput = {
    id?: string
    full_name?: string | null
    title?: string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    location?: string | null
    skills?: UsersCreateskillsInput | string[]
    overview?: string | null
    admin?: boolean | null
    email?: string | null
    profile_url?: string | null
    reviews?: UsersCreatereviewsInput | string[]
    password?: string | null
    jobs?: JobUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutTaskInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTaskInput, UsersUncheckedCreateWithoutTaskInput>
  }

  export type JobCreateWithoutTaskInput = {
    id: string
    title?: string | null
    description?: string | null
    skills?: JobCreateskillsInput | string[]
    job_type?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    duration?: string | null
    workload?: string | null
    created_at?: Date | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    clients?: ClientsCreateNestedOneWithoutJobsInput
    users?: UsersCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateWithoutTaskInput = {
    id: string
    title?: string | null
    description?: string | null
    skills?: JobCreateskillsInput | string[]
    job_type?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    duration?: string | null
    workload?: string | null
    client_id?: string | null
    created_at?: Date | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    user_id?: string | null
  }

  export type JobCreateOrConnectWithoutTaskInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutTaskInput, JobUncheckedCreateWithoutTaskInput>
  }

  export type UsersUpsertWithoutTaskInput = {
    update: XOR<UsersUpdateWithoutTaskInput, UsersUncheckedUpdateWithoutTaskInput>
    create: XOR<UsersCreateWithoutTaskInput, UsersUncheckedCreateWithoutTaskInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTaskInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTaskInput, UsersUncheckedUpdateWithoutTaskInput>
  }

  export type UsersUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UsersUpdateskillsInput | string[]
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: UsersUpdatereviewsInput | string[]
    password?: NullableStringFieldUpdateOperationsInput | string | null
    jobs?: JobUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UsersUpdateskillsInput | string[]
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: UsersUpdatereviewsInput | string[]
    password?: NullableStringFieldUpdateOperationsInput | string | null
    jobs?: JobUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type JobUpsertWithoutTaskInput = {
    update: XOR<JobUpdateWithoutTaskInput, JobUncheckedUpdateWithoutTaskInput>
    create: XOR<JobCreateWithoutTaskInput, JobUncheckedCreateWithoutTaskInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutTaskInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutTaskInput, JobUncheckedUpdateWithoutTaskInput>
  }

  export type JobUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobUpdateskillsInput | string[]
    job_type?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clients?: ClientsUpdateOneWithoutJobsNestedInput
    users?: UsersUpdateOneWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobUpdateskillsInput | string[]
    job_type?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobCreateWithoutUsersInput = {
    id: string
    title?: string | null
    description?: string | null
    skills?: JobCreateskillsInput | string[]
    job_type?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    duration?: string | null
    workload?: string | null
    created_at?: Date | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    clients?: ClientsCreateNestedOneWithoutJobsInput
    task?: TaskCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutUsersInput = {
    id: string
    title?: string | null
    description?: string | null
    skills?: JobCreateskillsInput | string[]
    job_type?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    duration?: string | null
    workload?: string | null
    client_id?: string | null
    created_at?: Date | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    task?: TaskUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutUsersInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutUsersInput, JobUncheckedCreateWithoutUsersInput>
  }

  export type JobCreateManyUsersInputEnvelope = {
    data: JobCreateManyUsersInput | JobCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUsersInput = {
    id: string
    title: string
    priority: string
    status: string
    due?: Date | string | null
    reviewer: string
    job: JobCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUsersInput = {
    id: string
    title: string
    priority: string
    status: string
    due?: Date | string | null
    reviewer: string
    job_id: string
  }

  export type TaskCreateOrConnectWithoutUsersInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUsersInput, TaskUncheckedCreateWithoutUsersInput>
  }

  export type TaskCreateManyUsersInputEnvelope = {
    data: TaskCreateManyUsersInput | TaskCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithWhereUniqueWithoutUsersInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutUsersInput, JobUncheckedUpdateWithoutUsersInput>
    create: XOR<JobCreateWithoutUsersInput, JobUncheckedCreateWithoutUsersInput>
  }

  export type JobUpdateWithWhereUniqueWithoutUsersInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutUsersInput, JobUncheckedUpdateWithoutUsersInput>
  }

  export type JobUpdateManyWithWhereWithoutUsersInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutUsersInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutUsersInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUsersInput, TaskUncheckedUpdateWithoutUsersInput>
    create: XOR<TaskCreateWithoutUsersInput, TaskUncheckedCreateWithoutUsersInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUsersInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUsersInput, TaskUncheckedUpdateWithoutUsersInput>
  }

  export type TaskUpdateManyWithWhereWithoutUsersInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUsersInput>
  }

  export type JobCreateManyClientsInput = {
    id: string
    title?: string | null
    description?: string | null
    skills?: JobCreateskillsInput | string[]
    job_type?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    duration?: string | null
    workload?: string | null
    created_at?: Date | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    user_id?: string | null
  }

  export type JobUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobUpdateskillsInput | string[]
    job_type?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: UsersUpdateOneWithoutJobsNestedInput
    task?: TaskUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobUpdateskillsInput | string[]
    job_type?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TaskUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobUpdateskillsInput | string[]
    job_type?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateManyJobInput = {
    id: string
    title: string
    priority: string
    status: string
    due?: Date | string | null
    reviewer: string
    user_id: string
  }

  export type TaskUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewer?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateOneRequiredWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewer?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewer?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type JobCreateManyUsersInput = {
    id: string
    title?: string | null
    description?: string | null
    skills?: JobCreateskillsInput | string[]
    job_type?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    duration?: string | null
    workload?: string | null
    client_id?: string | null
    created_at?: Date | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type TaskCreateManyUsersInput = {
    id: string
    title: string
    priority: string
    status: string
    due?: Date | string | null
    reviewer: string
    job_id: string
  }

  export type JobUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobUpdateskillsInput | string[]
    job_type?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clients?: ClientsUpdateOneWithoutJobsNestedInput
    task?: TaskUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobUpdateskillsInput | string[]
    job_type?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    task?: TaskUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobUpdateskillsInput | string[]
    job_type?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    workload?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TaskUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewer?: StringFieldUpdateOperationsInput | string
    job?: JobUpdateOneRequiredWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewer?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewer?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
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
  export const dmmf: runtime.BaseDMMF
}