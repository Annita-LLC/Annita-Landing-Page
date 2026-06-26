
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ContactSubmission
 * 
 */
export type ContactSubmission = $Result.DefaultSelection<Prisma.$ContactSubmissionPayload>
/**
 * Model ContactSalesSubmission
 * 
 */
export type ContactSalesSubmission = $Result.DefaultSelection<Prisma.$ContactSalesSubmissionPayload>
/**
 * Model SolutionsRequest
 * 
 */
export type SolutionsRequest = $Result.DefaultSelection<Prisma.$SolutionsRequestPayload>
/**
 * Model NewsletterSubscription
 * 
 */
export type NewsletterSubscription = $Result.DefaultSelection<Prisma.$NewsletterSubscriptionPayload>
/**
 * Model AnalyticsEvent
 * 
 */
export type AnalyticsEvent = $Result.DefaultSelection<Prisma.$AnalyticsEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more ContactSubmissions
 * const contactSubmissions = await prisma.contactSubmission.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more ContactSubmissions
   * const contactSubmissions = await prisma.contactSubmission.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contactSubmission`: Exposes CRUD operations for the **ContactSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactSubmissions
    * const contactSubmissions = await prisma.contactSubmission.findMany()
    * ```
    */
  get contactSubmission(): Prisma.ContactSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactSalesSubmission`: Exposes CRUD operations for the **ContactSalesSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactSalesSubmissions
    * const contactSalesSubmissions = await prisma.contactSalesSubmission.findMany()
    * ```
    */
  get contactSalesSubmission(): Prisma.ContactSalesSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solutionsRequest`: Exposes CRUD operations for the **SolutionsRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolutionsRequests
    * const solutionsRequests = await prisma.solutionsRequest.findMany()
    * ```
    */
  get solutionsRequest(): Prisma.SolutionsRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsletterSubscription`: Exposes CRUD operations for the **NewsletterSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsletterSubscriptions
    * const newsletterSubscriptions = await prisma.newsletterSubscription.findMany()
    * ```
    */
  get newsletterSubscription(): Prisma.NewsletterSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyticsEvent`: Exposes CRUD operations for the **AnalyticsEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyticsEvents
    * const analyticsEvents = await prisma.analyticsEvent.findMany()
    * ```
    */
  get analyticsEvent(): Prisma.AnalyticsEventDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    ContactSubmission: 'ContactSubmission',
    ContactSalesSubmission: 'ContactSalesSubmission',
    SolutionsRequest: 'SolutionsRequest',
    NewsletterSubscription: 'NewsletterSubscription',
    AnalyticsEvent: 'AnalyticsEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contactSubmission" | "contactSalesSubmission" | "solutionsRequest" | "newsletterSubscription" | "analyticsEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ContactSubmission: {
        payload: Prisma.$ContactSubmissionPayload<ExtArgs>
        fields: Prisma.ContactSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ContactSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          findMany: {
            args: Prisma.ContactSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          create: {
            args: Prisma.ContactSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          createMany: {
            args: Prisma.ContactSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ContactSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          update: {
            args: Prisma.ContactSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ContactSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ContactSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ContactSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactSubmission>
          }
          groupBy: {
            args: Prisma.ContactSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ContactSubmissionCountAggregateOutputType> | number
          }
        }
      }
      ContactSalesSubmission: {
        payload: Prisma.$ContactSalesSubmissionPayload<ExtArgs>
        fields: Prisma.ContactSalesSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactSalesSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSalesSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactSalesSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSalesSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ContactSalesSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSalesSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactSalesSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSalesSubmissionPayload>
          }
          findMany: {
            args: Prisma.ContactSalesSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSalesSubmissionPayload>[]
          }
          create: {
            args: Prisma.ContactSalesSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSalesSubmissionPayload>
          }
          createMany: {
            args: Prisma.ContactSalesSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactSalesSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSalesSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ContactSalesSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSalesSubmissionPayload>
          }
          update: {
            args: Prisma.ContactSalesSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSalesSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ContactSalesSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactSalesSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactSalesSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSalesSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ContactSalesSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSalesSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ContactSalesSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactSalesSubmission>
          }
          groupBy: {
            args: Prisma.ContactSalesSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactSalesSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactSalesSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ContactSalesSubmissionCountAggregateOutputType> | number
          }
        }
      }
      SolutionsRequest: {
        payload: Prisma.$SolutionsRequestPayload<ExtArgs>
        fields: Prisma.SolutionsRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolutionsRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionsRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolutionsRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionsRequestPayload>
          }
          findFirst: {
            args: Prisma.SolutionsRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionsRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolutionsRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionsRequestPayload>
          }
          findMany: {
            args: Prisma.SolutionsRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionsRequestPayload>[]
          }
          create: {
            args: Prisma.SolutionsRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionsRequestPayload>
          }
          createMany: {
            args: Prisma.SolutionsRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolutionsRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionsRequestPayload>[]
          }
          delete: {
            args: Prisma.SolutionsRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionsRequestPayload>
          }
          update: {
            args: Prisma.SolutionsRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionsRequestPayload>
          }
          deleteMany: {
            args: Prisma.SolutionsRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolutionsRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolutionsRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionsRequestPayload>[]
          }
          upsert: {
            args: Prisma.SolutionsRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionsRequestPayload>
          }
          aggregate: {
            args: Prisma.SolutionsRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolutionsRequest>
          }
          groupBy: {
            args: Prisma.SolutionsRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolutionsRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolutionsRequestCountArgs<ExtArgs>
            result: $Utils.Optional<SolutionsRequestCountAggregateOutputType> | number
          }
        }
      }
      NewsletterSubscription: {
        payload: Prisma.$NewsletterSubscriptionPayload<ExtArgs>
        fields: Prisma.NewsletterSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.NewsletterSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          findMany: {
            args: Prisma.NewsletterSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>[]
          }
          create: {
            args: Prisma.NewsletterSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          createMany: {
            args: Prisma.NewsletterSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsletterSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.NewsletterSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          update: {
            args: Prisma.NewsletterSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.NewsletterSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsletterSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.NewsletterSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.NewsletterSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletterSubscription>
          }
          groupBy: {
            args: Prisma.NewsletterSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      AnalyticsEvent: {
        payload: Prisma.$AnalyticsEventPayload<ExtArgs>
        fields: Prisma.AnalyticsEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          findMany: {
            args: Prisma.AnalyticsEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          create: {
            args: Prisma.AnalyticsEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          createMany: {
            args: Prisma.AnalyticsEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          update: {
            args: Prisma.AnalyticsEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyticsEvent>
          }
          groupBy: {
            args: Prisma.AnalyticsEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsEventCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsEventCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    contactSubmission?: ContactSubmissionOmit
    contactSalesSubmission?: ContactSalesSubmissionOmit
    solutionsRequest?: SolutionsRequestOmit
    newsletterSubscription?: NewsletterSubscriptionOmit
    analyticsEvent?: AnalyticsEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model ContactSubmission
   */

  export type AggregateContactSubmission = {
    _count: ContactSubmissionCountAggregateOutputType | null
    _avg: ContactSubmissionAvgAggregateOutputType | null
    _sum: ContactSubmissionSumAggregateOutputType | null
    _min: ContactSubmissionMinAggregateOutputType | null
    _max: ContactSubmissionMaxAggregateOutputType | null
  }

  export type ContactSubmissionAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSubmissionSumAggregateOutputType = {
    id: number | null
  }

  export type ContactSubmissionMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    subject: string | null
    ipAddress: string | null
    userAgent: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactSubmissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    subject: string | null
    ipAddress: string | null
    userAgent: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactSubmissionCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    message: number
    subject: number
    ipAddress: number
    userAgent: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactSubmissionAvgAggregateInputType = {
    id?: true
  }

  export type ContactSubmissionSumAggregateInputType = {
    id?: true
  }

  export type ContactSubmissionMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    subject?: true
    ipAddress?: true
    userAgent?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactSubmissionMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    subject?: true
    ipAddress?: true
    userAgent?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactSubmissionCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    subject?: true
    ipAddress?: true
    userAgent?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSubmission to aggregate.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactSubmissions
    **/
    _count?: true | ContactSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactSubmissionMaxAggregateInputType
  }

  export type GetContactSubmissionAggregateType<T extends ContactSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateContactSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactSubmission[P]>
      : GetScalarType<T[P], AggregateContactSubmission[P]>
  }




  export type ContactSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactSubmissionWhereInput
    orderBy?: ContactSubmissionOrderByWithAggregationInput | ContactSubmissionOrderByWithAggregationInput[]
    by: ContactSubmissionScalarFieldEnum[] | ContactSubmissionScalarFieldEnum
    having?: ContactSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactSubmissionCountAggregateInputType | true
    _avg?: ContactSubmissionAvgAggregateInputType
    _sum?: ContactSubmissionSumAggregateInputType
    _min?: ContactSubmissionMinAggregateInputType
    _max?: ContactSubmissionMaxAggregateInputType
  }

  export type ContactSubmissionGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    message: string
    subject: string | null
    ipAddress: string | null
    userAgent: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ContactSubmissionCountAggregateOutputType | null
    _avg: ContactSubmissionAvgAggregateOutputType | null
    _sum: ContactSubmissionSumAggregateOutputType | null
    _min: ContactSubmissionMinAggregateOutputType | null
    _max: ContactSubmissionMaxAggregateOutputType | null
  }

  type GetContactSubmissionGroupByPayload<T extends ContactSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ContactSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    subject?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    subject?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    subject?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    subject?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "message" | "subject" | "ipAddress" | "userAgent" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["contactSubmission"]>

  export type $ContactSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      message: string
      subject: string | null
      ipAddress: string | null
      userAgent: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactSubmission"]>
    composites: {}
  }

  type ContactSubmissionGetPayload<S extends boolean | null | undefined | ContactSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ContactSubmissionPayload, S>

  type ContactSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactSubmissionCountAggregateInputType | true
    }

  export interface ContactSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactSubmission'], meta: { name: 'ContactSubmission' } }
    /**
     * Find zero or one ContactSubmission that matches the filter.
     * @param {ContactSubmissionFindUniqueArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactSubmissionFindUniqueArgs>(args: SelectSubset<T, ContactSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindFirstArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactSubmissionFindFirstArgs>(args?: SelectSubset<T, ContactSubmissionFindFirstArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindFirstOrThrowArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactSubmissions
     * const contactSubmissions = await prisma.contactSubmission.findMany()
     * 
     * // Get first 10 ContactSubmissions
     * const contactSubmissions = await prisma.contactSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactSubmissionFindManyArgs>(args?: SelectSubset<T, ContactSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactSubmission.
     * @param {ContactSubmissionCreateArgs} args - Arguments to create a ContactSubmission.
     * @example
     * // Create one ContactSubmission
     * const ContactSubmission = await prisma.contactSubmission.create({
     *   data: {
     *     // ... data to create a ContactSubmission
     *   }
     * })
     * 
     */
    create<T extends ContactSubmissionCreateArgs>(args: SelectSubset<T, ContactSubmissionCreateArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactSubmissions.
     * @param {ContactSubmissionCreateManyArgs} args - Arguments to create many ContactSubmissions.
     * @example
     * // Create many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactSubmissionCreateManyArgs>(args?: SelectSubset<T, ContactSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactSubmissions and returns the data saved in the database.
     * @param {ContactSubmissionCreateManyAndReturnArgs} args - Arguments to create many ContactSubmissions.
     * @example
     * // Create many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactSubmissions and only return the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactSubmission.
     * @param {ContactSubmissionDeleteArgs} args - Arguments to delete one ContactSubmission.
     * @example
     * // Delete one ContactSubmission
     * const ContactSubmission = await prisma.contactSubmission.delete({
     *   where: {
     *     // ... filter to delete one ContactSubmission
     *   }
     * })
     * 
     */
    delete<T extends ContactSubmissionDeleteArgs>(args: SelectSubset<T, ContactSubmissionDeleteArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactSubmission.
     * @param {ContactSubmissionUpdateArgs} args - Arguments to update one ContactSubmission.
     * @example
     * // Update one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactSubmissionUpdateArgs>(args: SelectSubset<T, ContactSubmissionUpdateArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactSubmissions.
     * @param {ContactSubmissionDeleteManyArgs} args - Arguments to filter ContactSubmissions to delete.
     * @example
     * // Delete a few ContactSubmissions
     * const { count } = await prisma.contactSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactSubmissionDeleteManyArgs>(args?: SelectSubset<T, ContactSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactSubmissionUpdateManyArgs>(args: SelectSubset<T, ContactSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSubmissions and returns the data updated in the database.
     * @param {ContactSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ContactSubmissions.
     * @example
     * // Update many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactSubmissions and only return the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactSubmission.
     * @param {ContactSubmissionUpsertArgs} args - Arguments to update or create a ContactSubmission.
     * @example
     * // Update or create a ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.upsert({
     *   create: {
     *     // ... data to create a ContactSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ContactSubmissionUpsertArgs>(args: SelectSubset<T, ContactSubmissionUpsertArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionCountArgs} args - Arguments to filter ContactSubmissions to count.
     * @example
     * // Count the number of ContactSubmissions
     * const count = await prisma.contactSubmission.count({
     *   where: {
     *     // ... the filter for the ContactSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ContactSubmissionCountArgs>(
      args?: Subset<T, ContactSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactSubmissionAggregateArgs>(args: Subset<T, ContactSubmissionAggregateArgs>): Prisma.PrismaPromise<GetContactSubmissionAggregateType<T>>

    /**
     * Group by ContactSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionGroupByArgs} args - Group by arguments.
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
      T extends ContactSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ContactSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactSubmission model
   */
  readonly fields: ContactSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactSubmission model
   */
  interface ContactSubmissionFieldRefs {
    readonly id: FieldRef<"ContactSubmission", 'Int'>
    readonly name: FieldRef<"ContactSubmission", 'String'>
    readonly email: FieldRef<"ContactSubmission", 'String'>
    readonly phone: FieldRef<"ContactSubmission", 'String'>
    readonly message: FieldRef<"ContactSubmission", 'String'>
    readonly subject: FieldRef<"ContactSubmission", 'String'>
    readonly ipAddress: FieldRef<"ContactSubmission", 'String'>
    readonly userAgent: FieldRef<"ContactSubmission", 'String'>
    readonly status: FieldRef<"ContactSubmission", 'String'>
    readonly createdAt: FieldRef<"ContactSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactSubmission findUnique
   */
  export type ContactSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission findUniqueOrThrow
   */
  export type ContactSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission findFirst
   */
  export type ContactSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission findFirstOrThrow
   */
  export type ContactSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission findMany
   */
  export type ContactSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmissions to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission create
   */
  export type ContactSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactSubmission.
     */
    data: XOR<ContactSubmissionCreateInput, ContactSubmissionUncheckedCreateInput>
  }

  /**
   * ContactSubmission createMany
   */
  export type ContactSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactSubmissions.
     */
    data: ContactSubmissionCreateManyInput | ContactSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactSubmission createManyAndReturn
   */
  export type ContactSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ContactSubmissions.
     */
    data: ContactSubmissionCreateManyInput | ContactSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactSubmission update
   */
  export type ContactSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactSubmission.
     */
    data: XOR<ContactSubmissionUpdateInput, ContactSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ContactSubmission to update.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission updateMany
   */
  export type ContactSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactSubmissions.
     */
    data: XOR<ContactSubmissionUpdateManyMutationInput, ContactSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSubmissions to update
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSubmission updateManyAndReturn
   */
  export type ContactSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ContactSubmissions.
     */
    data: XOR<ContactSubmissionUpdateManyMutationInput, ContactSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSubmissions to update
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSubmission upsert
   */
  export type ContactSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactSubmission to update in case it exists.
     */
    where: ContactSubmissionWhereUniqueInput
    /**
     * In case the ContactSubmission found by the `where` argument doesn't exist, create a new ContactSubmission with this data.
     */
    create: XOR<ContactSubmissionCreateInput, ContactSubmissionUncheckedCreateInput>
    /**
     * In case the ContactSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactSubmissionUpdateInput, ContactSubmissionUncheckedUpdateInput>
  }

  /**
   * ContactSubmission delete
   */
  export type ContactSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter which ContactSubmission to delete.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission deleteMany
   */
  export type ContactSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSubmissions to delete
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ContactSubmission without action
   */
  export type ContactSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model ContactSalesSubmission
   */

  export type AggregateContactSalesSubmission = {
    _count: ContactSalesSubmissionCountAggregateOutputType | null
    _avg: ContactSalesSubmissionAvgAggregateOutputType | null
    _sum: ContactSalesSubmissionSumAggregateOutputType | null
    _min: ContactSalesSubmissionMinAggregateOutputType | null
    _max: ContactSalesSubmissionMaxAggregateOutputType | null
  }

  export type ContactSalesSubmissionAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSalesSubmissionSumAggregateOutputType = {
    id: number | null
  }

  export type ContactSalesSubmissionMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    companyName: string | null
    projectDescription: string | null
    budget: string | null
    ipAddress: string | null
    userAgent: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactSalesSubmissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    companyName: string | null
    projectDescription: string | null
    budget: string | null
    ipAddress: string | null
    userAgent: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactSalesSubmissionCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    companyName: number
    projectDescription: number
    budget: number
    ipAddress: number
    userAgent: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactSalesSubmissionAvgAggregateInputType = {
    id?: true
  }

  export type ContactSalesSubmissionSumAggregateInputType = {
    id?: true
  }

  export type ContactSalesSubmissionMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    companyName?: true
    projectDescription?: true
    budget?: true
    ipAddress?: true
    userAgent?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactSalesSubmissionMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    companyName?: true
    projectDescription?: true
    budget?: true
    ipAddress?: true
    userAgent?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactSalesSubmissionCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    companyName?: true
    projectDescription?: true
    budget?: true
    ipAddress?: true
    userAgent?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactSalesSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSalesSubmission to aggregate.
     */
    where?: ContactSalesSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSalesSubmissions to fetch.
     */
    orderBy?: ContactSalesSubmissionOrderByWithRelationInput | ContactSalesSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactSalesSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSalesSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSalesSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactSalesSubmissions
    **/
    _count?: true | ContactSalesSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactSalesSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSalesSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactSalesSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactSalesSubmissionMaxAggregateInputType
  }

  export type GetContactSalesSubmissionAggregateType<T extends ContactSalesSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateContactSalesSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactSalesSubmission[P]>
      : GetScalarType<T[P], AggregateContactSalesSubmission[P]>
  }




  export type ContactSalesSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactSalesSubmissionWhereInput
    orderBy?: ContactSalesSubmissionOrderByWithAggregationInput | ContactSalesSubmissionOrderByWithAggregationInput[]
    by: ContactSalesSubmissionScalarFieldEnum[] | ContactSalesSubmissionScalarFieldEnum
    having?: ContactSalesSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactSalesSubmissionCountAggregateInputType | true
    _avg?: ContactSalesSubmissionAvgAggregateInputType
    _sum?: ContactSalesSubmissionSumAggregateInputType
    _min?: ContactSalesSubmissionMinAggregateInputType
    _max?: ContactSalesSubmissionMaxAggregateInputType
  }

  export type ContactSalesSubmissionGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    companyName: string
    projectDescription: string
    budget: string
    ipAddress: string | null
    userAgent: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ContactSalesSubmissionCountAggregateOutputType | null
    _avg: ContactSalesSubmissionAvgAggregateOutputType | null
    _sum: ContactSalesSubmissionSumAggregateOutputType | null
    _min: ContactSalesSubmissionMinAggregateOutputType | null
    _max: ContactSalesSubmissionMaxAggregateOutputType | null
  }

  type GetContactSalesSubmissionGroupByPayload<T extends ContactSalesSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactSalesSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactSalesSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactSalesSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ContactSalesSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ContactSalesSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    companyName?: boolean
    projectDescription?: boolean
    budget?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactSalesSubmission"]>

  export type ContactSalesSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    companyName?: boolean
    projectDescription?: boolean
    budget?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactSalesSubmission"]>

  export type ContactSalesSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    companyName?: boolean
    projectDescription?: boolean
    budget?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactSalesSubmission"]>

  export type ContactSalesSubmissionSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    companyName?: boolean
    projectDescription?: boolean
    budget?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactSalesSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "companyName" | "projectDescription" | "budget" | "ipAddress" | "userAgent" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["contactSalesSubmission"]>

  export type $ContactSalesSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactSalesSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      companyName: string
      projectDescription: string
      budget: string
      ipAddress: string | null
      userAgent: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactSalesSubmission"]>
    composites: {}
  }

  type ContactSalesSubmissionGetPayload<S extends boolean | null | undefined | ContactSalesSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ContactSalesSubmissionPayload, S>

  type ContactSalesSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactSalesSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactSalesSubmissionCountAggregateInputType | true
    }

  export interface ContactSalesSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactSalesSubmission'], meta: { name: 'ContactSalesSubmission' } }
    /**
     * Find zero or one ContactSalesSubmission that matches the filter.
     * @param {ContactSalesSubmissionFindUniqueArgs} args - Arguments to find a ContactSalesSubmission
     * @example
     * // Get one ContactSalesSubmission
     * const contactSalesSubmission = await prisma.contactSalesSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactSalesSubmissionFindUniqueArgs>(args: SelectSubset<T, ContactSalesSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ContactSalesSubmissionClient<$Result.GetResult<Prisma.$ContactSalesSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactSalesSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactSalesSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ContactSalesSubmission
     * @example
     * // Get one ContactSalesSubmission
     * const contactSalesSubmission = await prisma.contactSalesSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactSalesSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactSalesSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactSalesSubmissionClient<$Result.GetResult<Prisma.$ContactSalesSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSalesSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSalesSubmissionFindFirstArgs} args - Arguments to find a ContactSalesSubmission
     * @example
     * // Get one ContactSalesSubmission
     * const contactSalesSubmission = await prisma.contactSalesSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactSalesSubmissionFindFirstArgs>(args?: SelectSubset<T, ContactSalesSubmissionFindFirstArgs<ExtArgs>>): Prisma__ContactSalesSubmissionClient<$Result.GetResult<Prisma.$ContactSalesSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSalesSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSalesSubmissionFindFirstOrThrowArgs} args - Arguments to find a ContactSalesSubmission
     * @example
     * // Get one ContactSalesSubmission
     * const contactSalesSubmission = await prisma.contactSalesSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactSalesSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactSalesSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactSalesSubmissionClient<$Result.GetResult<Prisma.$ContactSalesSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactSalesSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSalesSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactSalesSubmissions
     * const contactSalesSubmissions = await prisma.contactSalesSubmission.findMany()
     * 
     * // Get first 10 ContactSalesSubmissions
     * const contactSalesSubmissions = await prisma.contactSalesSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactSalesSubmissionWithIdOnly = await prisma.contactSalesSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactSalesSubmissionFindManyArgs>(args?: SelectSubset<T, ContactSalesSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSalesSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactSalesSubmission.
     * @param {ContactSalesSubmissionCreateArgs} args - Arguments to create a ContactSalesSubmission.
     * @example
     * // Create one ContactSalesSubmission
     * const ContactSalesSubmission = await prisma.contactSalesSubmission.create({
     *   data: {
     *     // ... data to create a ContactSalesSubmission
     *   }
     * })
     * 
     */
    create<T extends ContactSalesSubmissionCreateArgs>(args: SelectSubset<T, ContactSalesSubmissionCreateArgs<ExtArgs>>): Prisma__ContactSalesSubmissionClient<$Result.GetResult<Prisma.$ContactSalesSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactSalesSubmissions.
     * @param {ContactSalesSubmissionCreateManyArgs} args - Arguments to create many ContactSalesSubmissions.
     * @example
     * // Create many ContactSalesSubmissions
     * const contactSalesSubmission = await prisma.contactSalesSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactSalesSubmissionCreateManyArgs>(args?: SelectSubset<T, ContactSalesSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactSalesSubmissions and returns the data saved in the database.
     * @param {ContactSalesSubmissionCreateManyAndReturnArgs} args - Arguments to create many ContactSalesSubmissions.
     * @example
     * // Create many ContactSalesSubmissions
     * const contactSalesSubmission = await prisma.contactSalesSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactSalesSubmissions and only return the `id`
     * const contactSalesSubmissionWithIdOnly = await prisma.contactSalesSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactSalesSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactSalesSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSalesSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactSalesSubmission.
     * @param {ContactSalesSubmissionDeleteArgs} args - Arguments to delete one ContactSalesSubmission.
     * @example
     * // Delete one ContactSalesSubmission
     * const ContactSalesSubmission = await prisma.contactSalesSubmission.delete({
     *   where: {
     *     // ... filter to delete one ContactSalesSubmission
     *   }
     * })
     * 
     */
    delete<T extends ContactSalesSubmissionDeleteArgs>(args: SelectSubset<T, ContactSalesSubmissionDeleteArgs<ExtArgs>>): Prisma__ContactSalesSubmissionClient<$Result.GetResult<Prisma.$ContactSalesSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactSalesSubmission.
     * @param {ContactSalesSubmissionUpdateArgs} args - Arguments to update one ContactSalesSubmission.
     * @example
     * // Update one ContactSalesSubmission
     * const contactSalesSubmission = await prisma.contactSalesSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactSalesSubmissionUpdateArgs>(args: SelectSubset<T, ContactSalesSubmissionUpdateArgs<ExtArgs>>): Prisma__ContactSalesSubmissionClient<$Result.GetResult<Prisma.$ContactSalesSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactSalesSubmissions.
     * @param {ContactSalesSubmissionDeleteManyArgs} args - Arguments to filter ContactSalesSubmissions to delete.
     * @example
     * // Delete a few ContactSalesSubmissions
     * const { count } = await prisma.contactSalesSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactSalesSubmissionDeleteManyArgs>(args?: SelectSubset<T, ContactSalesSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSalesSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSalesSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactSalesSubmissions
     * const contactSalesSubmission = await prisma.contactSalesSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactSalesSubmissionUpdateManyArgs>(args: SelectSubset<T, ContactSalesSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSalesSubmissions and returns the data updated in the database.
     * @param {ContactSalesSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ContactSalesSubmissions.
     * @example
     * // Update many ContactSalesSubmissions
     * const contactSalesSubmission = await prisma.contactSalesSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactSalesSubmissions and only return the `id`
     * const contactSalesSubmissionWithIdOnly = await prisma.contactSalesSubmission.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactSalesSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactSalesSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSalesSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactSalesSubmission.
     * @param {ContactSalesSubmissionUpsertArgs} args - Arguments to update or create a ContactSalesSubmission.
     * @example
     * // Update or create a ContactSalesSubmission
     * const contactSalesSubmission = await prisma.contactSalesSubmission.upsert({
     *   create: {
     *     // ... data to create a ContactSalesSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactSalesSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ContactSalesSubmissionUpsertArgs>(args: SelectSubset<T, ContactSalesSubmissionUpsertArgs<ExtArgs>>): Prisma__ContactSalesSubmissionClient<$Result.GetResult<Prisma.$ContactSalesSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactSalesSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSalesSubmissionCountArgs} args - Arguments to filter ContactSalesSubmissions to count.
     * @example
     * // Count the number of ContactSalesSubmissions
     * const count = await prisma.contactSalesSubmission.count({
     *   where: {
     *     // ... the filter for the ContactSalesSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ContactSalesSubmissionCountArgs>(
      args?: Subset<T, ContactSalesSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactSalesSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactSalesSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSalesSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactSalesSubmissionAggregateArgs>(args: Subset<T, ContactSalesSubmissionAggregateArgs>): Prisma.PrismaPromise<GetContactSalesSubmissionAggregateType<T>>

    /**
     * Group by ContactSalesSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSalesSubmissionGroupByArgs} args - Group by arguments.
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
      T extends ContactSalesSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactSalesSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ContactSalesSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactSalesSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactSalesSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactSalesSubmission model
   */
  readonly fields: ContactSalesSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactSalesSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactSalesSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactSalesSubmission model
   */
  interface ContactSalesSubmissionFieldRefs {
    readonly id: FieldRef<"ContactSalesSubmission", 'Int'>
    readonly name: FieldRef<"ContactSalesSubmission", 'String'>
    readonly email: FieldRef<"ContactSalesSubmission", 'String'>
    readonly phone: FieldRef<"ContactSalesSubmission", 'String'>
    readonly companyName: FieldRef<"ContactSalesSubmission", 'String'>
    readonly projectDescription: FieldRef<"ContactSalesSubmission", 'String'>
    readonly budget: FieldRef<"ContactSalesSubmission", 'String'>
    readonly ipAddress: FieldRef<"ContactSalesSubmission", 'String'>
    readonly userAgent: FieldRef<"ContactSalesSubmission", 'String'>
    readonly status: FieldRef<"ContactSalesSubmission", 'String'>
    readonly createdAt: FieldRef<"ContactSalesSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactSalesSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactSalesSubmission findUnique
   */
  export type ContactSalesSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSalesSubmission
     */
    select?: ContactSalesSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSalesSubmission
     */
    omit?: ContactSalesSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSalesSubmission to fetch.
     */
    where: ContactSalesSubmissionWhereUniqueInput
  }

  /**
   * ContactSalesSubmission findUniqueOrThrow
   */
  export type ContactSalesSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSalesSubmission
     */
    select?: ContactSalesSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSalesSubmission
     */
    omit?: ContactSalesSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSalesSubmission to fetch.
     */
    where: ContactSalesSubmissionWhereUniqueInput
  }

  /**
   * ContactSalesSubmission findFirst
   */
  export type ContactSalesSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSalesSubmission
     */
    select?: ContactSalesSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSalesSubmission
     */
    omit?: ContactSalesSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSalesSubmission to fetch.
     */
    where?: ContactSalesSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSalesSubmissions to fetch.
     */
    orderBy?: ContactSalesSubmissionOrderByWithRelationInput | ContactSalesSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSalesSubmissions.
     */
    cursor?: ContactSalesSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSalesSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSalesSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSalesSubmissions.
     */
    distinct?: ContactSalesSubmissionScalarFieldEnum | ContactSalesSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSalesSubmission findFirstOrThrow
   */
  export type ContactSalesSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSalesSubmission
     */
    select?: ContactSalesSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSalesSubmission
     */
    omit?: ContactSalesSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSalesSubmission to fetch.
     */
    where?: ContactSalesSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSalesSubmissions to fetch.
     */
    orderBy?: ContactSalesSubmissionOrderByWithRelationInput | ContactSalesSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSalesSubmissions.
     */
    cursor?: ContactSalesSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSalesSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSalesSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSalesSubmissions.
     */
    distinct?: ContactSalesSubmissionScalarFieldEnum | ContactSalesSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSalesSubmission findMany
   */
  export type ContactSalesSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSalesSubmission
     */
    select?: ContactSalesSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSalesSubmission
     */
    omit?: ContactSalesSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSalesSubmissions to fetch.
     */
    where?: ContactSalesSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSalesSubmissions to fetch.
     */
    orderBy?: ContactSalesSubmissionOrderByWithRelationInput | ContactSalesSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactSalesSubmissions.
     */
    cursor?: ContactSalesSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSalesSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSalesSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSalesSubmissions.
     */
    distinct?: ContactSalesSubmissionScalarFieldEnum | ContactSalesSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSalesSubmission create
   */
  export type ContactSalesSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSalesSubmission
     */
    select?: ContactSalesSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSalesSubmission
     */
    omit?: ContactSalesSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactSalesSubmission.
     */
    data: XOR<ContactSalesSubmissionCreateInput, ContactSalesSubmissionUncheckedCreateInput>
  }

  /**
   * ContactSalesSubmission createMany
   */
  export type ContactSalesSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactSalesSubmissions.
     */
    data: ContactSalesSubmissionCreateManyInput | ContactSalesSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactSalesSubmission createManyAndReturn
   */
  export type ContactSalesSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSalesSubmission
     */
    select?: ContactSalesSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSalesSubmission
     */
    omit?: ContactSalesSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ContactSalesSubmissions.
     */
    data: ContactSalesSubmissionCreateManyInput | ContactSalesSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactSalesSubmission update
   */
  export type ContactSalesSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSalesSubmission
     */
    select?: ContactSalesSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSalesSubmission
     */
    omit?: ContactSalesSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactSalesSubmission.
     */
    data: XOR<ContactSalesSubmissionUpdateInput, ContactSalesSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ContactSalesSubmission to update.
     */
    where: ContactSalesSubmissionWhereUniqueInput
  }

  /**
   * ContactSalesSubmission updateMany
   */
  export type ContactSalesSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactSalesSubmissions.
     */
    data: XOR<ContactSalesSubmissionUpdateManyMutationInput, ContactSalesSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSalesSubmissions to update
     */
    where?: ContactSalesSubmissionWhereInput
    /**
     * Limit how many ContactSalesSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSalesSubmission updateManyAndReturn
   */
  export type ContactSalesSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSalesSubmission
     */
    select?: ContactSalesSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSalesSubmission
     */
    omit?: ContactSalesSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ContactSalesSubmissions.
     */
    data: XOR<ContactSalesSubmissionUpdateManyMutationInput, ContactSalesSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSalesSubmissions to update
     */
    where?: ContactSalesSubmissionWhereInput
    /**
     * Limit how many ContactSalesSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSalesSubmission upsert
   */
  export type ContactSalesSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSalesSubmission
     */
    select?: ContactSalesSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSalesSubmission
     */
    omit?: ContactSalesSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactSalesSubmission to update in case it exists.
     */
    where: ContactSalesSubmissionWhereUniqueInput
    /**
     * In case the ContactSalesSubmission found by the `where` argument doesn't exist, create a new ContactSalesSubmission with this data.
     */
    create: XOR<ContactSalesSubmissionCreateInput, ContactSalesSubmissionUncheckedCreateInput>
    /**
     * In case the ContactSalesSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactSalesSubmissionUpdateInput, ContactSalesSubmissionUncheckedUpdateInput>
  }

  /**
   * ContactSalesSubmission delete
   */
  export type ContactSalesSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSalesSubmission
     */
    select?: ContactSalesSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSalesSubmission
     */
    omit?: ContactSalesSubmissionOmit<ExtArgs> | null
    /**
     * Filter which ContactSalesSubmission to delete.
     */
    where: ContactSalesSubmissionWhereUniqueInput
  }

  /**
   * ContactSalesSubmission deleteMany
   */
  export type ContactSalesSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSalesSubmissions to delete
     */
    where?: ContactSalesSubmissionWhereInput
    /**
     * Limit how many ContactSalesSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ContactSalesSubmission without action
   */
  export type ContactSalesSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSalesSubmission
     */
    select?: ContactSalesSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSalesSubmission
     */
    omit?: ContactSalesSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model SolutionsRequest
   */

  export type AggregateSolutionsRequest = {
    _count: SolutionsRequestCountAggregateOutputType | null
    _avg: SolutionsRequestAvgAggregateOutputType | null
    _sum: SolutionsRequestSumAggregateOutputType | null
    _min: SolutionsRequestMinAggregateOutputType | null
    _max: SolutionsRequestMaxAggregateOutputType | null
  }

  export type SolutionsRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type SolutionsRequestSumAggregateOutputType = {
    id: number | null
  }

  export type SolutionsRequestMinAggregateOutputType = {
    fullName: string | null
    email: string | null
    phone: string | null
    organization: string | null
    jobTitle: string | null
    organizationType: string | null
    country: string | null
    city: string | null
    contactMethod: string | null
    howDidYouHear: string | null
    referrerName: string | null
    projectName: string | null
    projectSummary: string | null
    solutionTypeOther: string | null
    targetUsers: string | null
    userCount: string | null
    geographicCountry: string | null
    offlineRequired: string | null
    existingSystem: string | null
    existingSystemDescription: string | null
    coreFeatures: string | null
    thirdPartyIntegrations: string | null
    techStackOther: string | null
    brandIdentity: string | null
    wireframes: string | null
    wireframesUrl: string | null
    designStyle: string | null
    additionalNotes: string | null
    budget: string | null
    fundingContext: string | null
    budgetFlexibility: string | null
    timeline: string | null
    specificDeadline: string | null
    projectStartDate: string | null
    engagementStyle: string | null
    maintenanceNeeded: string | null
    finalThoughts: string | null
    agreement: boolean | null
    ipAddress: string | null
    userAgent: string | null
    status: string | null
    priority: string | null
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolutionsRequestMaxAggregateOutputType = {
    fullName: string | null
    email: string | null
    phone: string | null
    organization: string | null
    jobTitle: string | null
    organizationType: string | null
    country: string | null
    city: string | null
    contactMethod: string | null
    howDidYouHear: string | null
    referrerName: string | null
    projectName: string | null
    projectSummary: string | null
    solutionTypeOther: string | null
    targetUsers: string | null
    userCount: string | null
    geographicCountry: string | null
    offlineRequired: string | null
    existingSystem: string | null
    existingSystemDescription: string | null
    coreFeatures: string | null
    thirdPartyIntegrations: string | null
    techStackOther: string | null
    brandIdentity: string | null
    wireframes: string | null
    wireframesUrl: string | null
    designStyle: string | null
    additionalNotes: string | null
    budget: string | null
    fundingContext: string | null
    budgetFlexibility: string | null
    timeline: string | null
    specificDeadline: string | null
    projectStartDate: string | null
    engagementStyle: string | null
    maintenanceNeeded: string | null
    finalThoughts: string | null
    agreement: boolean | null
    ipAddress: string | null
    userAgent: string | null
    status: string | null
    priority: string | null
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolutionsRequestCountAggregateOutputType = {
    fullName: number
    email: number
    phone: number
    organization: number
    jobTitle: number
    organizationType: number
    country: number
    city: number
    contactMethod: number
    howDidYouHear: number
    referrerName: number
    projectName: number
    projectSummary: number
    solutionTypes: number
    solutionTypeOther: number
    targetUsers: number
    userCount: number
    geographicDeployment: number
    geographicCountry: number
    languages: number
    offlineRequired: number
    existingSystem: number
    existingSystemDescription: number
    coreFeatures: number
    importantFeatures: number
    thirdPartyIntegrations: number
    techStack: number
    techStackOther: number
    brandIdentity: number
    brandAssets: number
    wireframes: number
    wireframesFiles: number
    wireframesUrl: number
    designStyle: number
    securityRequirements: number
    additionalNotes: number
    budget: number
    fundingContext: number
    budgetFlexibility: number
    timeline: number
    specificDeadline: number
    projectStartDate: number
    engagementStyle: number
    maintenanceNeeded: number
    finalThoughts: number
    agreement: number
    ipAddress: number
    userAgent: number
    status: number
    priority: number
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SolutionsRequestAvgAggregateInputType = {
    id?: true
  }

  export type SolutionsRequestSumAggregateInputType = {
    id?: true
  }

  export type SolutionsRequestMinAggregateInputType = {
    fullName?: true
    email?: true
    phone?: true
    organization?: true
    jobTitle?: true
    organizationType?: true
    country?: true
    city?: true
    contactMethod?: true
    howDidYouHear?: true
    referrerName?: true
    projectName?: true
    projectSummary?: true
    solutionTypeOther?: true
    targetUsers?: true
    userCount?: true
    geographicCountry?: true
    offlineRequired?: true
    existingSystem?: true
    existingSystemDescription?: true
    coreFeatures?: true
    thirdPartyIntegrations?: true
    techStackOther?: true
    brandIdentity?: true
    wireframes?: true
    wireframesUrl?: true
    designStyle?: true
    additionalNotes?: true
    budget?: true
    fundingContext?: true
    budgetFlexibility?: true
    timeline?: true
    specificDeadline?: true
    projectStartDate?: true
    engagementStyle?: true
    maintenanceNeeded?: true
    finalThoughts?: true
    agreement?: true
    ipAddress?: true
    userAgent?: true
    status?: true
    priority?: true
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolutionsRequestMaxAggregateInputType = {
    fullName?: true
    email?: true
    phone?: true
    organization?: true
    jobTitle?: true
    organizationType?: true
    country?: true
    city?: true
    contactMethod?: true
    howDidYouHear?: true
    referrerName?: true
    projectName?: true
    projectSummary?: true
    solutionTypeOther?: true
    targetUsers?: true
    userCount?: true
    geographicCountry?: true
    offlineRequired?: true
    existingSystem?: true
    existingSystemDescription?: true
    coreFeatures?: true
    thirdPartyIntegrations?: true
    techStackOther?: true
    brandIdentity?: true
    wireframes?: true
    wireframesUrl?: true
    designStyle?: true
    additionalNotes?: true
    budget?: true
    fundingContext?: true
    budgetFlexibility?: true
    timeline?: true
    specificDeadline?: true
    projectStartDate?: true
    engagementStyle?: true
    maintenanceNeeded?: true
    finalThoughts?: true
    agreement?: true
    ipAddress?: true
    userAgent?: true
    status?: true
    priority?: true
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolutionsRequestCountAggregateInputType = {
    fullName?: true
    email?: true
    phone?: true
    organization?: true
    jobTitle?: true
    organizationType?: true
    country?: true
    city?: true
    contactMethod?: true
    howDidYouHear?: true
    referrerName?: true
    projectName?: true
    projectSummary?: true
    solutionTypes?: true
    solutionTypeOther?: true
    targetUsers?: true
    userCount?: true
    geographicDeployment?: true
    geographicCountry?: true
    languages?: true
    offlineRequired?: true
    existingSystem?: true
    existingSystemDescription?: true
    coreFeatures?: true
    importantFeatures?: true
    thirdPartyIntegrations?: true
    techStack?: true
    techStackOther?: true
    brandIdentity?: true
    brandAssets?: true
    wireframes?: true
    wireframesFiles?: true
    wireframesUrl?: true
    designStyle?: true
    securityRequirements?: true
    additionalNotes?: true
    budget?: true
    fundingContext?: true
    budgetFlexibility?: true
    timeline?: true
    specificDeadline?: true
    projectStartDate?: true
    engagementStyle?: true
    maintenanceNeeded?: true
    finalThoughts?: true
    agreement?: true
    ipAddress?: true
    userAgent?: true
    status?: true
    priority?: true
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SolutionsRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolutionsRequest to aggregate.
     */
    where?: SolutionsRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolutionsRequests to fetch.
     */
    orderBy?: SolutionsRequestOrderByWithRelationInput | SolutionsRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolutionsRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolutionsRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolutionsRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolutionsRequests
    **/
    _count?: true | SolutionsRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolutionsRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolutionsRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolutionsRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolutionsRequestMaxAggregateInputType
  }

  export type GetSolutionsRequestAggregateType<T extends SolutionsRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateSolutionsRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolutionsRequest[P]>
      : GetScalarType<T[P], AggregateSolutionsRequest[P]>
  }




  export type SolutionsRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolutionsRequestWhereInput
    orderBy?: SolutionsRequestOrderByWithAggregationInput | SolutionsRequestOrderByWithAggregationInput[]
    by: SolutionsRequestScalarFieldEnum[] | SolutionsRequestScalarFieldEnum
    having?: SolutionsRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolutionsRequestCountAggregateInputType | true
    _avg?: SolutionsRequestAvgAggregateInputType
    _sum?: SolutionsRequestSumAggregateInputType
    _min?: SolutionsRequestMinAggregateInputType
    _max?: SolutionsRequestMaxAggregateInputType
  }

  export type SolutionsRequestGroupByOutputType = {
    fullName: string
    email: string
    phone: string
    organization: string
    jobTitle: string
    organizationType: string
    country: string
    city: string | null
    contactMethod: string
    howDidYouHear: string | null
    referrerName: string | null
    projectName: string
    projectSummary: string
    solutionTypes: string[]
    solutionTypeOther: string | null
    targetUsers: string
    userCount: string
    geographicDeployment: string[]
    geographicCountry: string | null
    languages: string[]
    offlineRequired: string
    existingSystem: string | null
    existingSystemDescription: string | null
    coreFeatures: string | null
    importantFeatures: string[]
    thirdPartyIntegrations: string | null
    techStack: string[]
    techStackOther: string | null
    brandIdentity: string | null
    brandAssets: JsonValue | null
    wireframes: string | null
    wireframesFiles: JsonValue | null
    wireframesUrl: string | null
    designStyle: string | null
    securityRequirements: string[]
    additionalNotes: string | null
    budget: string
    fundingContext: string | null
    budgetFlexibility: string | null
    timeline: string
    specificDeadline: string | null
    projectStartDate: string | null
    engagementStyle: string | null
    maintenanceNeeded: string | null
    finalThoughts: string | null
    agreement: boolean
    ipAddress: string | null
    userAgent: string | null
    status: string
    priority: string
    id: number
    createdAt: Date
    updatedAt: Date
    _count: SolutionsRequestCountAggregateOutputType | null
    _avg: SolutionsRequestAvgAggregateOutputType | null
    _sum: SolutionsRequestSumAggregateOutputType | null
    _min: SolutionsRequestMinAggregateOutputType | null
    _max: SolutionsRequestMaxAggregateOutputType | null
  }

  type GetSolutionsRequestGroupByPayload<T extends SolutionsRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolutionsRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolutionsRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolutionsRequestGroupByOutputType[P]>
            : GetScalarType<T[P], SolutionsRequestGroupByOutputType[P]>
        }
      >
    >


  export type SolutionsRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fullName?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    jobTitle?: boolean
    organizationType?: boolean
    country?: boolean
    city?: boolean
    contactMethod?: boolean
    howDidYouHear?: boolean
    referrerName?: boolean
    projectName?: boolean
    projectSummary?: boolean
    solutionTypes?: boolean
    solutionTypeOther?: boolean
    targetUsers?: boolean
    userCount?: boolean
    geographicDeployment?: boolean
    geographicCountry?: boolean
    languages?: boolean
    offlineRequired?: boolean
    existingSystem?: boolean
    existingSystemDescription?: boolean
    coreFeatures?: boolean
    importantFeatures?: boolean
    thirdPartyIntegrations?: boolean
    techStack?: boolean
    techStackOther?: boolean
    brandIdentity?: boolean
    brandAssets?: boolean
    wireframes?: boolean
    wireframesFiles?: boolean
    wireframesUrl?: boolean
    designStyle?: boolean
    securityRequirements?: boolean
    additionalNotes?: boolean
    budget?: boolean
    fundingContext?: boolean
    budgetFlexibility?: boolean
    timeline?: boolean
    specificDeadline?: boolean
    projectStartDate?: boolean
    engagementStyle?: boolean
    maintenanceNeeded?: boolean
    finalThoughts?: boolean
    agreement?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    priority?: boolean
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["solutionsRequest"]>

  export type SolutionsRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fullName?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    jobTitle?: boolean
    organizationType?: boolean
    country?: boolean
    city?: boolean
    contactMethod?: boolean
    howDidYouHear?: boolean
    referrerName?: boolean
    projectName?: boolean
    projectSummary?: boolean
    solutionTypes?: boolean
    solutionTypeOther?: boolean
    targetUsers?: boolean
    userCount?: boolean
    geographicDeployment?: boolean
    geographicCountry?: boolean
    languages?: boolean
    offlineRequired?: boolean
    existingSystem?: boolean
    existingSystemDescription?: boolean
    coreFeatures?: boolean
    importantFeatures?: boolean
    thirdPartyIntegrations?: boolean
    techStack?: boolean
    techStackOther?: boolean
    brandIdentity?: boolean
    brandAssets?: boolean
    wireframes?: boolean
    wireframesFiles?: boolean
    wireframesUrl?: boolean
    designStyle?: boolean
    securityRequirements?: boolean
    additionalNotes?: boolean
    budget?: boolean
    fundingContext?: boolean
    budgetFlexibility?: boolean
    timeline?: boolean
    specificDeadline?: boolean
    projectStartDate?: boolean
    engagementStyle?: boolean
    maintenanceNeeded?: boolean
    finalThoughts?: boolean
    agreement?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    priority?: boolean
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["solutionsRequest"]>

  export type SolutionsRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fullName?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    jobTitle?: boolean
    organizationType?: boolean
    country?: boolean
    city?: boolean
    contactMethod?: boolean
    howDidYouHear?: boolean
    referrerName?: boolean
    projectName?: boolean
    projectSummary?: boolean
    solutionTypes?: boolean
    solutionTypeOther?: boolean
    targetUsers?: boolean
    userCount?: boolean
    geographicDeployment?: boolean
    geographicCountry?: boolean
    languages?: boolean
    offlineRequired?: boolean
    existingSystem?: boolean
    existingSystemDescription?: boolean
    coreFeatures?: boolean
    importantFeatures?: boolean
    thirdPartyIntegrations?: boolean
    techStack?: boolean
    techStackOther?: boolean
    brandIdentity?: boolean
    brandAssets?: boolean
    wireframes?: boolean
    wireframesFiles?: boolean
    wireframesUrl?: boolean
    designStyle?: boolean
    securityRequirements?: boolean
    additionalNotes?: boolean
    budget?: boolean
    fundingContext?: boolean
    budgetFlexibility?: boolean
    timeline?: boolean
    specificDeadline?: boolean
    projectStartDate?: boolean
    engagementStyle?: boolean
    maintenanceNeeded?: boolean
    finalThoughts?: boolean
    agreement?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    priority?: boolean
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["solutionsRequest"]>

  export type SolutionsRequestSelectScalar = {
    fullName?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    jobTitle?: boolean
    organizationType?: boolean
    country?: boolean
    city?: boolean
    contactMethod?: boolean
    howDidYouHear?: boolean
    referrerName?: boolean
    projectName?: boolean
    projectSummary?: boolean
    solutionTypes?: boolean
    solutionTypeOther?: boolean
    targetUsers?: boolean
    userCount?: boolean
    geographicDeployment?: boolean
    geographicCountry?: boolean
    languages?: boolean
    offlineRequired?: boolean
    existingSystem?: boolean
    existingSystemDescription?: boolean
    coreFeatures?: boolean
    importantFeatures?: boolean
    thirdPartyIntegrations?: boolean
    techStack?: boolean
    techStackOther?: boolean
    brandIdentity?: boolean
    brandAssets?: boolean
    wireframes?: boolean
    wireframesFiles?: boolean
    wireframesUrl?: boolean
    designStyle?: boolean
    securityRequirements?: boolean
    additionalNotes?: boolean
    budget?: boolean
    fundingContext?: boolean
    budgetFlexibility?: boolean
    timeline?: boolean
    specificDeadline?: boolean
    projectStartDate?: boolean
    engagementStyle?: boolean
    maintenanceNeeded?: boolean
    finalThoughts?: boolean
    agreement?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    priority?: boolean
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SolutionsRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fullName" | "email" | "phone" | "organization" | "jobTitle" | "organizationType" | "country" | "city" | "contactMethod" | "howDidYouHear" | "referrerName" | "projectName" | "projectSummary" | "solutionTypes" | "solutionTypeOther" | "targetUsers" | "userCount" | "geographicDeployment" | "geographicCountry" | "languages" | "offlineRequired" | "existingSystem" | "existingSystemDescription" | "coreFeatures" | "importantFeatures" | "thirdPartyIntegrations" | "techStack" | "techStackOther" | "brandIdentity" | "brandAssets" | "wireframes" | "wireframesFiles" | "wireframesUrl" | "designStyle" | "securityRequirements" | "additionalNotes" | "budget" | "fundingContext" | "budgetFlexibility" | "timeline" | "specificDeadline" | "projectStartDate" | "engagementStyle" | "maintenanceNeeded" | "finalThoughts" | "agreement" | "ipAddress" | "userAgent" | "status" | "priority" | "id" | "createdAt" | "updatedAt", ExtArgs["result"]["solutionsRequest"]>

  export type $SolutionsRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SolutionsRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      fullName: string
      email: string
      phone: string
      organization: string
      jobTitle: string
      organizationType: string
      country: string
      city: string | null
      contactMethod: string
      howDidYouHear: string | null
      referrerName: string | null
      projectName: string
      projectSummary: string
      solutionTypes: string[]
      solutionTypeOther: string | null
      targetUsers: string
      userCount: string
      geographicDeployment: string[]
      geographicCountry: string | null
      languages: string[]
      offlineRequired: string
      existingSystem: string | null
      existingSystemDescription: string | null
      coreFeatures: string | null
      importantFeatures: string[]
      thirdPartyIntegrations: string | null
      techStack: string[]
      techStackOther: string | null
      brandIdentity: string | null
      brandAssets: Prisma.JsonValue | null
      wireframes: string | null
      wireframesFiles: Prisma.JsonValue | null
      wireframesUrl: string | null
      designStyle: string | null
      securityRequirements: string[]
      additionalNotes: string | null
      budget: string
      fundingContext: string | null
      budgetFlexibility: string | null
      timeline: string
      specificDeadline: string | null
      projectStartDate: string | null
      engagementStyle: string | null
      maintenanceNeeded: string | null
      finalThoughts: string | null
      agreement: boolean
      ipAddress: string | null
      userAgent: string | null
      status: string
      priority: string
      id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["solutionsRequest"]>
    composites: {}
  }

  type SolutionsRequestGetPayload<S extends boolean | null | undefined | SolutionsRequestDefaultArgs> = $Result.GetResult<Prisma.$SolutionsRequestPayload, S>

  type SolutionsRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolutionsRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolutionsRequestCountAggregateInputType | true
    }

  export interface SolutionsRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SolutionsRequest'], meta: { name: 'SolutionsRequest' } }
    /**
     * Find zero or one SolutionsRequest that matches the filter.
     * @param {SolutionsRequestFindUniqueArgs} args - Arguments to find a SolutionsRequest
     * @example
     * // Get one SolutionsRequest
     * const solutionsRequest = await prisma.solutionsRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolutionsRequestFindUniqueArgs>(args: SelectSubset<T, SolutionsRequestFindUniqueArgs<ExtArgs>>): Prisma__SolutionsRequestClient<$Result.GetResult<Prisma.$SolutionsRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolutionsRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolutionsRequestFindUniqueOrThrowArgs} args - Arguments to find a SolutionsRequest
     * @example
     * // Get one SolutionsRequest
     * const solutionsRequest = await prisma.solutionsRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolutionsRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, SolutionsRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolutionsRequestClient<$Result.GetResult<Prisma.$SolutionsRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolutionsRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionsRequestFindFirstArgs} args - Arguments to find a SolutionsRequest
     * @example
     * // Get one SolutionsRequest
     * const solutionsRequest = await prisma.solutionsRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolutionsRequestFindFirstArgs>(args?: SelectSubset<T, SolutionsRequestFindFirstArgs<ExtArgs>>): Prisma__SolutionsRequestClient<$Result.GetResult<Prisma.$SolutionsRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolutionsRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionsRequestFindFirstOrThrowArgs} args - Arguments to find a SolutionsRequest
     * @example
     * // Get one SolutionsRequest
     * const solutionsRequest = await prisma.solutionsRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolutionsRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, SolutionsRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolutionsRequestClient<$Result.GetResult<Prisma.$SolutionsRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolutionsRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionsRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolutionsRequests
     * const solutionsRequests = await prisma.solutionsRequest.findMany()
     * 
     * // Get first 10 SolutionsRequests
     * const solutionsRequests = await prisma.solutionsRequest.findMany({ take: 10 })
     * 
     * // Only select the `fullName`
     * const solutionsRequestWithFullNameOnly = await prisma.solutionsRequest.findMany({ select: { fullName: true } })
     * 
     */
    findMany<T extends SolutionsRequestFindManyArgs>(args?: SelectSubset<T, SolutionsRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionsRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolutionsRequest.
     * @param {SolutionsRequestCreateArgs} args - Arguments to create a SolutionsRequest.
     * @example
     * // Create one SolutionsRequest
     * const SolutionsRequest = await prisma.solutionsRequest.create({
     *   data: {
     *     // ... data to create a SolutionsRequest
     *   }
     * })
     * 
     */
    create<T extends SolutionsRequestCreateArgs>(args: SelectSubset<T, SolutionsRequestCreateArgs<ExtArgs>>): Prisma__SolutionsRequestClient<$Result.GetResult<Prisma.$SolutionsRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolutionsRequests.
     * @param {SolutionsRequestCreateManyArgs} args - Arguments to create many SolutionsRequests.
     * @example
     * // Create many SolutionsRequests
     * const solutionsRequest = await prisma.solutionsRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolutionsRequestCreateManyArgs>(args?: SelectSubset<T, SolutionsRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SolutionsRequests and returns the data saved in the database.
     * @param {SolutionsRequestCreateManyAndReturnArgs} args - Arguments to create many SolutionsRequests.
     * @example
     * // Create many SolutionsRequests
     * const solutionsRequest = await prisma.solutionsRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SolutionsRequests and only return the `fullName`
     * const solutionsRequestWithFullNameOnly = await prisma.solutionsRequest.createManyAndReturn({
     *   select: { fullName: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolutionsRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, SolutionsRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionsRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SolutionsRequest.
     * @param {SolutionsRequestDeleteArgs} args - Arguments to delete one SolutionsRequest.
     * @example
     * // Delete one SolutionsRequest
     * const SolutionsRequest = await prisma.solutionsRequest.delete({
     *   where: {
     *     // ... filter to delete one SolutionsRequest
     *   }
     * })
     * 
     */
    delete<T extends SolutionsRequestDeleteArgs>(args: SelectSubset<T, SolutionsRequestDeleteArgs<ExtArgs>>): Prisma__SolutionsRequestClient<$Result.GetResult<Prisma.$SolutionsRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolutionsRequest.
     * @param {SolutionsRequestUpdateArgs} args - Arguments to update one SolutionsRequest.
     * @example
     * // Update one SolutionsRequest
     * const solutionsRequest = await prisma.solutionsRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolutionsRequestUpdateArgs>(args: SelectSubset<T, SolutionsRequestUpdateArgs<ExtArgs>>): Prisma__SolutionsRequestClient<$Result.GetResult<Prisma.$SolutionsRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolutionsRequests.
     * @param {SolutionsRequestDeleteManyArgs} args - Arguments to filter SolutionsRequests to delete.
     * @example
     * // Delete a few SolutionsRequests
     * const { count } = await prisma.solutionsRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolutionsRequestDeleteManyArgs>(args?: SelectSubset<T, SolutionsRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolutionsRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionsRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolutionsRequests
     * const solutionsRequest = await prisma.solutionsRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolutionsRequestUpdateManyArgs>(args: SelectSubset<T, SolutionsRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolutionsRequests and returns the data updated in the database.
     * @param {SolutionsRequestUpdateManyAndReturnArgs} args - Arguments to update many SolutionsRequests.
     * @example
     * // Update many SolutionsRequests
     * const solutionsRequest = await prisma.solutionsRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SolutionsRequests and only return the `fullName`
     * const solutionsRequestWithFullNameOnly = await prisma.solutionsRequest.updateManyAndReturn({
     *   select: { fullName: true },
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
    updateManyAndReturn<T extends SolutionsRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, SolutionsRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionsRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SolutionsRequest.
     * @param {SolutionsRequestUpsertArgs} args - Arguments to update or create a SolutionsRequest.
     * @example
     * // Update or create a SolutionsRequest
     * const solutionsRequest = await prisma.solutionsRequest.upsert({
     *   create: {
     *     // ... data to create a SolutionsRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolutionsRequest we want to update
     *   }
     * })
     */
    upsert<T extends SolutionsRequestUpsertArgs>(args: SelectSubset<T, SolutionsRequestUpsertArgs<ExtArgs>>): Prisma__SolutionsRequestClient<$Result.GetResult<Prisma.$SolutionsRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SolutionsRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionsRequestCountArgs} args - Arguments to filter SolutionsRequests to count.
     * @example
     * // Count the number of SolutionsRequests
     * const count = await prisma.solutionsRequest.count({
     *   where: {
     *     // ... the filter for the SolutionsRequests we want to count
     *   }
     * })
    **/
    count<T extends SolutionsRequestCountArgs>(
      args?: Subset<T, SolutionsRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolutionsRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolutionsRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionsRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolutionsRequestAggregateArgs>(args: Subset<T, SolutionsRequestAggregateArgs>): Prisma.PrismaPromise<GetSolutionsRequestAggregateType<T>>

    /**
     * Group by SolutionsRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionsRequestGroupByArgs} args - Group by arguments.
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
      T extends SolutionsRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolutionsRequestGroupByArgs['orderBy'] }
        : { orderBy?: SolutionsRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolutionsRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolutionsRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SolutionsRequest model
   */
  readonly fields: SolutionsRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolutionsRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolutionsRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SolutionsRequest model
   */
  interface SolutionsRequestFieldRefs {
    readonly fullName: FieldRef<"SolutionsRequest", 'String'>
    readonly email: FieldRef<"SolutionsRequest", 'String'>
    readonly phone: FieldRef<"SolutionsRequest", 'String'>
    readonly organization: FieldRef<"SolutionsRequest", 'String'>
    readonly jobTitle: FieldRef<"SolutionsRequest", 'String'>
    readonly organizationType: FieldRef<"SolutionsRequest", 'String'>
    readonly country: FieldRef<"SolutionsRequest", 'String'>
    readonly city: FieldRef<"SolutionsRequest", 'String'>
    readonly contactMethod: FieldRef<"SolutionsRequest", 'String'>
    readonly howDidYouHear: FieldRef<"SolutionsRequest", 'String'>
    readonly referrerName: FieldRef<"SolutionsRequest", 'String'>
    readonly projectName: FieldRef<"SolutionsRequest", 'String'>
    readonly projectSummary: FieldRef<"SolutionsRequest", 'String'>
    readonly solutionTypes: FieldRef<"SolutionsRequest", 'String[]'>
    readonly solutionTypeOther: FieldRef<"SolutionsRequest", 'String'>
    readonly targetUsers: FieldRef<"SolutionsRequest", 'String'>
    readonly userCount: FieldRef<"SolutionsRequest", 'String'>
    readonly geographicDeployment: FieldRef<"SolutionsRequest", 'String[]'>
    readonly geographicCountry: FieldRef<"SolutionsRequest", 'String'>
    readonly languages: FieldRef<"SolutionsRequest", 'String[]'>
    readonly offlineRequired: FieldRef<"SolutionsRequest", 'String'>
    readonly existingSystem: FieldRef<"SolutionsRequest", 'String'>
    readonly existingSystemDescription: FieldRef<"SolutionsRequest", 'String'>
    readonly coreFeatures: FieldRef<"SolutionsRequest", 'String'>
    readonly importantFeatures: FieldRef<"SolutionsRequest", 'String[]'>
    readonly thirdPartyIntegrations: FieldRef<"SolutionsRequest", 'String'>
    readonly techStack: FieldRef<"SolutionsRequest", 'String[]'>
    readonly techStackOther: FieldRef<"SolutionsRequest", 'String'>
    readonly brandIdentity: FieldRef<"SolutionsRequest", 'String'>
    readonly brandAssets: FieldRef<"SolutionsRequest", 'Json'>
    readonly wireframes: FieldRef<"SolutionsRequest", 'String'>
    readonly wireframesFiles: FieldRef<"SolutionsRequest", 'Json'>
    readonly wireframesUrl: FieldRef<"SolutionsRequest", 'String'>
    readonly designStyle: FieldRef<"SolutionsRequest", 'String'>
    readonly securityRequirements: FieldRef<"SolutionsRequest", 'String[]'>
    readonly additionalNotes: FieldRef<"SolutionsRequest", 'String'>
    readonly budget: FieldRef<"SolutionsRequest", 'String'>
    readonly fundingContext: FieldRef<"SolutionsRequest", 'String'>
    readonly budgetFlexibility: FieldRef<"SolutionsRequest", 'String'>
    readonly timeline: FieldRef<"SolutionsRequest", 'String'>
    readonly specificDeadline: FieldRef<"SolutionsRequest", 'String'>
    readonly projectStartDate: FieldRef<"SolutionsRequest", 'String'>
    readonly engagementStyle: FieldRef<"SolutionsRequest", 'String'>
    readonly maintenanceNeeded: FieldRef<"SolutionsRequest", 'String'>
    readonly finalThoughts: FieldRef<"SolutionsRequest", 'String'>
    readonly agreement: FieldRef<"SolutionsRequest", 'Boolean'>
    readonly ipAddress: FieldRef<"SolutionsRequest", 'String'>
    readonly userAgent: FieldRef<"SolutionsRequest", 'String'>
    readonly status: FieldRef<"SolutionsRequest", 'String'>
    readonly priority: FieldRef<"SolutionsRequest", 'String'>
    readonly id: FieldRef<"SolutionsRequest", 'Int'>
    readonly createdAt: FieldRef<"SolutionsRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"SolutionsRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SolutionsRequest findUnique
   */
  export type SolutionsRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionsRequest
     */
    select?: SolutionsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionsRequest
     */
    omit?: SolutionsRequestOmit<ExtArgs> | null
    /**
     * Filter, which SolutionsRequest to fetch.
     */
    where: SolutionsRequestWhereUniqueInput
  }

  /**
   * SolutionsRequest findUniqueOrThrow
   */
  export type SolutionsRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionsRequest
     */
    select?: SolutionsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionsRequest
     */
    omit?: SolutionsRequestOmit<ExtArgs> | null
    /**
     * Filter, which SolutionsRequest to fetch.
     */
    where: SolutionsRequestWhereUniqueInput
  }

  /**
   * SolutionsRequest findFirst
   */
  export type SolutionsRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionsRequest
     */
    select?: SolutionsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionsRequest
     */
    omit?: SolutionsRequestOmit<ExtArgs> | null
    /**
     * Filter, which SolutionsRequest to fetch.
     */
    where?: SolutionsRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolutionsRequests to fetch.
     */
    orderBy?: SolutionsRequestOrderByWithRelationInput | SolutionsRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolutionsRequests.
     */
    cursor?: SolutionsRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolutionsRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolutionsRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolutionsRequests.
     */
    distinct?: SolutionsRequestScalarFieldEnum | SolutionsRequestScalarFieldEnum[]
  }

  /**
   * SolutionsRequest findFirstOrThrow
   */
  export type SolutionsRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionsRequest
     */
    select?: SolutionsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionsRequest
     */
    omit?: SolutionsRequestOmit<ExtArgs> | null
    /**
     * Filter, which SolutionsRequest to fetch.
     */
    where?: SolutionsRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolutionsRequests to fetch.
     */
    orderBy?: SolutionsRequestOrderByWithRelationInput | SolutionsRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolutionsRequests.
     */
    cursor?: SolutionsRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolutionsRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolutionsRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolutionsRequests.
     */
    distinct?: SolutionsRequestScalarFieldEnum | SolutionsRequestScalarFieldEnum[]
  }

  /**
   * SolutionsRequest findMany
   */
  export type SolutionsRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionsRequest
     */
    select?: SolutionsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionsRequest
     */
    omit?: SolutionsRequestOmit<ExtArgs> | null
    /**
     * Filter, which SolutionsRequests to fetch.
     */
    where?: SolutionsRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolutionsRequests to fetch.
     */
    orderBy?: SolutionsRequestOrderByWithRelationInput | SolutionsRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolutionsRequests.
     */
    cursor?: SolutionsRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolutionsRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolutionsRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolutionsRequests.
     */
    distinct?: SolutionsRequestScalarFieldEnum | SolutionsRequestScalarFieldEnum[]
  }

  /**
   * SolutionsRequest create
   */
  export type SolutionsRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionsRequest
     */
    select?: SolutionsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionsRequest
     */
    omit?: SolutionsRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a SolutionsRequest.
     */
    data: XOR<SolutionsRequestCreateInput, SolutionsRequestUncheckedCreateInput>
  }

  /**
   * SolutionsRequest createMany
   */
  export type SolutionsRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SolutionsRequests.
     */
    data: SolutionsRequestCreateManyInput | SolutionsRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolutionsRequest createManyAndReturn
   */
  export type SolutionsRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionsRequest
     */
    select?: SolutionsRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionsRequest
     */
    omit?: SolutionsRequestOmit<ExtArgs> | null
    /**
     * The data used to create many SolutionsRequests.
     */
    data: SolutionsRequestCreateManyInput | SolutionsRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolutionsRequest update
   */
  export type SolutionsRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionsRequest
     */
    select?: SolutionsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionsRequest
     */
    omit?: SolutionsRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a SolutionsRequest.
     */
    data: XOR<SolutionsRequestUpdateInput, SolutionsRequestUncheckedUpdateInput>
    /**
     * Choose, which SolutionsRequest to update.
     */
    where: SolutionsRequestWhereUniqueInput
  }

  /**
   * SolutionsRequest updateMany
   */
  export type SolutionsRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SolutionsRequests.
     */
    data: XOR<SolutionsRequestUpdateManyMutationInput, SolutionsRequestUncheckedUpdateManyInput>
    /**
     * Filter which SolutionsRequests to update
     */
    where?: SolutionsRequestWhereInput
    /**
     * Limit how many SolutionsRequests to update.
     */
    limit?: number
  }

  /**
   * SolutionsRequest updateManyAndReturn
   */
  export type SolutionsRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionsRequest
     */
    select?: SolutionsRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionsRequest
     */
    omit?: SolutionsRequestOmit<ExtArgs> | null
    /**
     * The data used to update SolutionsRequests.
     */
    data: XOR<SolutionsRequestUpdateManyMutationInput, SolutionsRequestUncheckedUpdateManyInput>
    /**
     * Filter which SolutionsRequests to update
     */
    where?: SolutionsRequestWhereInput
    /**
     * Limit how many SolutionsRequests to update.
     */
    limit?: number
  }

  /**
   * SolutionsRequest upsert
   */
  export type SolutionsRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionsRequest
     */
    select?: SolutionsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionsRequest
     */
    omit?: SolutionsRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the SolutionsRequest to update in case it exists.
     */
    where: SolutionsRequestWhereUniqueInput
    /**
     * In case the SolutionsRequest found by the `where` argument doesn't exist, create a new SolutionsRequest with this data.
     */
    create: XOR<SolutionsRequestCreateInput, SolutionsRequestUncheckedCreateInput>
    /**
     * In case the SolutionsRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolutionsRequestUpdateInput, SolutionsRequestUncheckedUpdateInput>
  }

  /**
   * SolutionsRequest delete
   */
  export type SolutionsRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionsRequest
     */
    select?: SolutionsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionsRequest
     */
    omit?: SolutionsRequestOmit<ExtArgs> | null
    /**
     * Filter which SolutionsRequest to delete.
     */
    where: SolutionsRequestWhereUniqueInput
  }

  /**
   * SolutionsRequest deleteMany
   */
  export type SolutionsRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolutionsRequests to delete
     */
    where?: SolutionsRequestWhereInput
    /**
     * Limit how many SolutionsRequests to delete.
     */
    limit?: number
  }

  /**
   * SolutionsRequest without action
   */
  export type SolutionsRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionsRequest
     */
    select?: SolutionsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionsRequest
     */
    omit?: SolutionsRequestOmit<ExtArgs> | null
  }


  /**
   * Model NewsletterSubscription
   */

  export type AggregateNewsletterSubscription = {
    _count: NewsletterSubscriptionCountAggregateOutputType | null
    _avg: NewsletterSubscriptionAvgAggregateOutputType | null
    _sum: NewsletterSubscriptionSumAggregateOutputType | null
    _min: NewsletterSubscriptionMinAggregateOutputType | null
    _max: NewsletterSubscriptionMaxAggregateOutputType | null
  }

  export type NewsletterSubscriptionAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsletterSubscriptionSumAggregateOutputType = {
    id: number | null
  }

  export type NewsletterSubscriptionMinAggregateOutputType = {
    id: number | null
    email: string | null
    status: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsletterSubscriptionMaxAggregateOutputType = {
    id: number | null
    email: string | null
    status: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsletterSubscriptionCountAggregateOutputType = {
    id: number
    email: number
    status: number
    ipAddress: number
    userAgent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsletterSubscriptionAvgAggregateInputType = {
    id?: true
  }

  export type NewsletterSubscriptionSumAggregateInputType = {
    id?: true
  }

  export type NewsletterSubscriptionMinAggregateInputType = {
    id?: true
    email?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsletterSubscriptionMaxAggregateInputType = {
    id?: true
    email?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsletterSubscriptionCountAggregateInputType = {
    id?: true
    email?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsletterSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterSubscription to aggregate.
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscriptions to fetch.
     */
    orderBy?: NewsletterSubscriptionOrderByWithRelationInput | NewsletterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsletterSubscriptions
    **/
    _count?: true | NewsletterSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsletterSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsletterSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterSubscriptionMaxAggregateInputType
  }

  export type GetNewsletterSubscriptionAggregateType<T extends NewsletterSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletterSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletterSubscription[P]>
      : GetScalarType<T[P], AggregateNewsletterSubscription[P]>
  }




  export type NewsletterSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterSubscriptionWhereInput
    orderBy?: NewsletterSubscriptionOrderByWithAggregationInput | NewsletterSubscriptionOrderByWithAggregationInput[]
    by: NewsletterSubscriptionScalarFieldEnum[] | NewsletterSubscriptionScalarFieldEnum
    having?: NewsletterSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterSubscriptionCountAggregateInputType | true
    _avg?: NewsletterSubscriptionAvgAggregateInputType
    _sum?: NewsletterSubscriptionSumAggregateInputType
    _min?: NewsletterSubscriptionMinAggregateInputType
    _max?: NewsletterSubscriptionMaxAggregateInputType
  }

  export type NewsletterSubscriptionGroupByOutputType = {
    id: number
    email: string
    status: string
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    _count: NewsletterSubscriptionCountAggregateOutputType | null
    _avg: NewsletterSubscriptionAvgAggregateOutputType | null
    _sum: NewsletterSubscriptionSumAggregateOutputType | null
    _min: NewsletterSubscriptionMinAggregateOutputType | null
    _max: NewsletterSubscriptionMaxAggregateOutputType | null
  }

  type GetNewsletterSubscriptionGroupByPayload<T extends NewsletterSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsletterSubscription"]>

  export type NewsletterSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsletterSubscription"]>

  export type NewsletterSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsletterSubscription"]>

  export type NewsletterSubscriptionSelectScalar = {
    id?: boolean
    email?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsletterSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "status" | "ipAddress" | "userAgent" | "createdAt" | "updatedAt", ExtArgs["result"]["newsletterSubscription"]>

  export type $NewsletterSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsletterSubscription"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      status: string
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsletterSubscription"]>
    composites: {}
  }

  type NewsletterSubscriptionGetPayload<S extends boolean | null | undefined | NewsletterSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$NewsletterSubscriptionPayload, S>

  type NewsletterSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsletterSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsletterSubscriptionCountAggregateInputType | true
    }

  export interface NewsletterSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsletterSubscription'], meta: { name: 'NewsletterSubscription' } }
    /**
     * Find zero or one NewsletterSubscription that matches the filter.
     * @param {NewsletterSubscriptionFindUniqueArgs} args - Arguments to find a NewsletterSubscription
     * @example
     * // Get one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterSubscriptionFindUniqueArgs>(args: SelectSubset<T, NewsletterSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsletterSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsletterSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a NewsletterSubscription
     * @example
     * // Get one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionFindFirstArgs} args - Arguments to find a NewsletterSubscription
     * @example
     * // Get one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterSubscriptionFindFirstArgs>(args?: SelectSubset<T, NewsletterSubscriptionFindFirstArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionFindFirstOrThrowArgs} args - Arguments to find a NewsletterSubscription
     * @example
     * // Get one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsletterSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsletterSubscriptions
     * const newsletterSubscriptions = await prisma.newsletterSubscription.findMany()
     * 
     * // Get first 10 NewsletterSubscriptions
     * const newsletterSubscriptions = await prisma.newsletterSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterSubscriptionWithIdOnly = await prisma.newsletterSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterSubscriptionFindManyArgs>(args?: SelectSubset<T, NewsletterSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsletterSubscription.
     * @param {NewsletterSubscriptionCreateArgs} args - Arguments to create a NewsletterSubscription.
     * @example
     * // Create one NewsletterSubscription
     * const NewsletterSubscription = await prisma.newsletterSubscription.create({
     *   data: {
     *     // ... data to create a NewsletterSubscription
     *   }
     * })
     * 
     */
    create<T extends NewsletterSubscriptionCreateArgs>(args: SelectSubset<T, NewsletterSubscriptionCreateArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsletterSubscriptions.
     * @param {NewsletterSubscriptionCreateManyArgs} args - Arguments to create many NewsletterSubscriptions.
     * @example
     * // Create many NewsletterSubscriptions
     * const newsletterSubscription = await prisma.newsletterSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterSubscriptionCreateManyArgs>(args?: SelectSubset<T, NewsletterSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsletterSubscriptions and returns the data saved in the database.
     * @param {NewsletterSubscriptionCreateManyAndReturnArgs} args - Arguments to create many NewsletterSubscriptions.
     * @example
     * // Create many NewsletterSubscriptions
     * const newsletterSubscription = await prisma.newsletterSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsletterSubscriptions and only return the `id`
     * const newsletterSubscriptionWithIdOnly = await prisma.newsletterSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsletterSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsletterSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsletterSubscription.
     * @param {NewsletterSubscriptionDeleteArgs} args - Arguments to delete one NewsletterSubscription.
     * @example
     * // Delete one NewsletterSubscription
     * const NewsletterSubscription = await prisma.newsletterSubscription.delete({
     *   where: {
     *     // ... filter to delete one NewsletterSubscription
     *   }
     * })
     * 
     */
    delete<T extends NewsletterSubscriptionDeleteArgs>(args: SelectSubset<T, NewsletterSubscriptionDeleteArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsletterSubscription.
     * @param {NewsletterSubscriptionUpdateArgs} args - Arguments to update one NewsletterSubscription.
     * @example
     * // Update one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterSubscriptionUpdateArgs>(args: SelectSubset<T, NewsletterSubscriptionUpdateArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsletterSubscriptions.
     * @param {NewsletterSubscriptionDeleteManyArgs} args - Arguments to filter NewsletterSubscriptions to delete.
     * @example
     * // Delete a few NewsletterSubscriptions
     * const { count } = await prisma.newsletterSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterSubscriptionDeleteManyArgs>(args?: SelectSubset<T, NewsletterSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsletterSubscriptions
     * const newsletterSubscription = await prisma.newsletterSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterSubscriptionUpdateManyArgs>(args: SelectSubset<T, NewsletterSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterSubscriptions and returns the data updated in the database.
     * @param {NewsletterSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many NewsletterSubscriptions.
     * @example
     * // Update many NewsletterSubscriptions
     * const newsletterSubscription = await prisma.newsletterSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsletterSubscriptions and only return the `id`
     * const newsletterSubscriptionWithIdOnly = await prisma.newsletterSubscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsletterSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsletterSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsletterSubscription.
     * @param {NewsletterSubscriptionUpsertArgs} args - Arguments to update or create a NewsletterSubscription.
     * @example
     * // Update or create a NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.upsert({
     *   create: {
     *     // ... data to create a NewsletterSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsletterSubscription we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterSubscriptionUpsertArgs>(args: SelectSubset<T, NewsletterSubscriptionUpsertArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsletterSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionCountArgs} args - Arguments to filter NewsletterSubscriptions to count.
     * @example
     * // Count the number of NewsletterSubscriptions
     * const count = await prisma.newsletterSubscription.count({
     *   where: {
     *     // ... the filter for the NewsletterSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends NewsletterSubscriptionCountArgs>(
      args?: Subset<T, NewsletterSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsletterSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsletterSubscriptionAggregateArgs>(args: Subset<T, NewsletterSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetNewsletterSubscriptionAggregateType<T>>

    /**
     * Group by NewsletterSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends NewsletterSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsletterSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsletterSubscription model
   */
  readonly fields: NewsletterSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsletterSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NewsletterSubscription model
   */
  interface NewsletterSubscriptionFieldRefs {
    readonly id: FieldRef<"NewsletterSubscription", 'Int'>
    readonly email: FieldRef<"NewsletterSubscription", 'String'>
    readonly status: FieldRef<"NewsletterSubscription", 'String'>
    readonly ipAddress: FieldRef<"NewsletterSubscription", 'String'>
    readonly userAgent: FieldRef<"NewsletterSubscription", 'String'>
    readonly createdAt: FieldRef<"NewsletterSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsletterSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsletterSubscription findUnique
   */
  export type NewsletterSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscription to fetch.
     */
    where: NewsletterSubscriptionWhereUniqueInput
  }

  /**
   * NewsletterSubscription findUniqueOrThrow
   */
  export type NewsletterSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscription to fetch.
     */
    where: NewsletterSubscriptionWhereUniqueInput
  }

  /**
   * NewsletterSubscription findFirst
   */
  export type NewsletterSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscription to fetch.
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscriptions to fetch.
     */
    orderBy?: NewsletterSubscriptionOrderByWithRelationInput | NewsletterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterSubscriptions.
     */
    cursor?: NewsletterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterSubscriptions.
     */
    distinct?: NewsletterSubscriptionScalarFieldEnum | NewsletterSubscriptionScalarFieldEnum[]
  }

  /**
   * NewsletterSubscription findFirstOrThrow
   */
  export type NewsletterSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscription to fetch.
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscriptions to fetch.
     */
    orderBy?: NewsletterSubscriptionOrderByWithRelationInput | NewsletterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterSubscriptions.
     */
    cursor?: NewsletterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterSubscriptions.
     */
    distinct?: NewsletterSubscriptionScalarFieldEnum | NewsletterSubscriptionScalarFieldEnum[]
  }

  /**
   * NewsletterSubscription findMany
   */
  export type NewsletterSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscriptions to fetch.
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscriptions to fetch.
     */
    orderBy?: NewsletterSubscriptionOrderByWithRelationInput | NewsletterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsletterSubscriptions.
     */
    cursor?: NewsletterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterSubscriptions.
     */
    distinct?: NewsletterSubscriptionScalarFieldEnum | NewsletterSubscriptionScalarFieldEnum[]
  }

  /**
   * NewsletterSubscription create
   */
  export type NewsletterSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to create a NewsletterSubscription.
     */
    data: XOR<NewsletterSubscriptionCreateInput, NewsletterSubscriptionUncheckedCreateInput>
  }

  /**
   * NewsletterSubscription createMany
   */
  export type NewsletterSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsletterSubscriptions.
     */
    data: NewsletterSubscriptionCreateManyInput | NewsletterSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterSubscription createManyAndReturn
   */
  export type NewsletterSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many NewsletterSubscriptions.
     */
    data: NewsletterSubscriptionCreateManyInput | NewsletterSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterSubscription update
   */
  export type NewsletterSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to update a NewsletterSubscription.
     */
    data: XOR<NewsletterSubscriptionUpdateInput, NewsletterSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which NewsletterSubscription to update.
     */
    where: NewsletterSubscriptionWhereUniqueInput
  }

  /**
   * NewsletterSubscription updateMany
   */
  export type NewsletterSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsletterSubscriptions.
     */
    data: XOR<NewsletterSubscriptionUpdateManyMutationInput, NewsletterSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterSubscriptions to update
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * Limit how many NewsletterSubscriptions to update.
     */
    limit?: number
  }

  /**
   * NewsletterSubscription updateManyAndReturn
   */
  export type NewsletterSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update NewsletterSubscriptions.
     */
    data: XOR<NewsletterSubscriptionUpdateManyMutationInput, NewsletterSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterSubscriptions to update
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * Limit how many NewsletterSubscriptions to update.
     */
    limit?: number
  }

  /**
   * NewsletterSubscription upsert
   */
  export type NewsletterSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * The filter to search for the NewsletterSubscription to update in case it exists.
     */
    where: NewsletterSubscriptionWhereUniqueInput
    /**
     * In case the NewsletterSubscription found by the `where` argument doesn't exist, create a new NewsletterSubscription with this data.
     */
    create: XOR<NewsletterSubscriptionCreateInput, NewsletterSubscriptionUncheckedCreateInput>
    /**
     * In case the NewsletterSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterSubscriptionUpdateInput, NewsletterSubscriptionUncheckedUpdateInput>
  }

  /**
   * NewsletterSubscription delete
   */
  export type NewsletterSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter which NewsletterSubscription to delete.
     */
    where: NewsletterSubscriptionWhereUniqueInput
  }

  /**
   * NewsletterSubscription deleteMany
   */
  export type NewsletterSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterSubscriptions to delete
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * Limit how many NewsletterSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * NewsletterSubscription without action
   */
  export type NewsletterSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
  }


  /**
   * Model AnalyticsEvent
   */

  export type AggregateAnalyticsEvent = {
    _count: AnalyticsEventCountAggregateOutputType | null
    _avg: AnalyticsEventAvgAggregateOutputType | null
    _sum: AnalyticsEventSumAggregateOutputType | null
    _min: AnalyticsEventMinAggregateOutputType | null
    _max: AnalyticsEventMaxAggregateOutputType | null
  }

  export type AnalyticsEventAvgAggregateOutputType = {
    id: number | null
  }

  export type AnalyticsEventSumAggregateOutputType = {
    id: number | null
  }

  export type AnalyticsEventMinAggregateOutputType = {
    id: number | null
    eventType: string | null
    ipAddress: string | null
    userAgent: string | null
    referrer: string | null
    path: string | null
    createdAt: Date | null
  }

  export type AnalyticsEventMaxAggregateOutputType = {
    id: number | null
    eventType: string | null
    ipAddress: string | null
    userAgent: string | null
    referrer: string | null
    path: string | null
    createdAt: Date | null
  }

  export type AnalyticsEventCountAggregateOutputType = {
    id: number
    eventType: number
    eventData: number
    ipAddress: number
    userAgent: number
    referrer: number
    path: number
    createdAt: number
    _all: number
  }


  export type AnalyticsEventAvgAggregateInputType = {
    id?: true
  }

  export type AnalyticsEventSumAggregateInputType = {
    id?: true
  }

  export type AnalyticsEventMinAggregateInputType = {
    id?: true
    eventType?: true
    ipAddress?: true
    userAgent?: true
    referrer?: true
    path?: true
    createdAt?: true
  }

  export type AnalyticsEventMaxAggregateInputType = {
    id?: true
    eventType?: true
    ipAddress?: true
    userAgent?: true
    referrer?: true
    path?: true
    createdAt?: true
  }

  export type AnalyticsEventCountAggregateInputType = {
    id?: true
    eventType?: true
    eventData?: true
    ipAddress?: true
    userAgent?: true
    referrer?: true
    path?: true
    createdAt?: true
    _all?: true
  }

  export type AnalyticsEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsEvent to aggregate.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyticsEvents
    **/
    _count?: true | AnalyticsEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsEventMaxAggregateInputType
  }

  export type GetAnalyticsEventAggregateType<T extends AnalyticsEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyticsEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyticsEvent[P]>
      : GetScalarType<T[P], AggregateAnalyticsEvent[P]>
  }




  export type AnalyticsEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsEventWhereInput
    orderBy?: AnalyticsEventOrderByWithAggregationInput | AnalyticsEventOrderByWithAggregationInput[]
    by: AnalyticsEventScalarFieldEnum[] | AnalyticsEventScalarFieldEnum
    having?: AnalyticsEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsEventCountAggregateInputType | true
    _avg?: AnalyticsEventAvgAggregateInputType
    _sum?: AnalyticsEventSumAggregateInputType
    _min?: AnalyticsEventMinAggregateInputType
    _max?: AnalyticsEventMaxAggregateInputType
  }

  export type AnalyticsEventGroupByOutputType = {
    id: number
    eventType: string
    eventData: JsonValue | null
    ipAddress: string | null
    userAgent: string | null
    referrer: string | null
    path: string | null
    createdAt: Date
    _count: AnalyticsEventCountAggregateOutputType | null
    _avg: AnalyticsEventAvgAggregateOutputType | null
    _sum: AnalyticsEventSumAggregateOutputType | null
    _min: AnalyticsEventMinAggregateOutputType | null
    _max: AnalyticsEventMaxAggregateOutputType | null
  }

  type GetAnalyticsEventGroupByPayload<T extends AnalyticsEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsEventGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsEventGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    eventData?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    referrer?: boolean
    path?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    eventData?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    referrer?: boolean
    path?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    eventData?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    referrer?: boolean
    path?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectScalar = {
    id?: boolean
    eventType?: boolean
    eventData?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    referrer?: boolean
    path?: boolean
    createdAt?: boolean
  }

  export type AnalyticsEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventType" | "eventData" | "ipAddress" | "userAgent" | "referrer" | "path" | "createdAt", ExtArgs["result"]["analyticsEvent"]>

  export type $AnalyticsEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyticsEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventType: string
      eventData: Prisma.JsonValue | null
      ipAddress: string | null
      userAgent: string | null
      referrer: string | null
      path: string | null
      createdAt: Date
    }, ExtArgs["result"]["analyticsEvent"]>
    composites: {}
  }

  type AnalyticsEventGetPayload<S extends boolean | null | undefined | AnalyticsEventDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsEventPayload, S>

  type AnalyticsEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsEventCountAggregateInputType | true
    }

  export interface AnalyticsEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsEvent'], meta: { name: 'AnalyticsEvent' } }
    /**
     * Find zero or one AnalyticsEvent that matches the filter.
     * @param {AnalyticsEventFindUniqueArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsEventFindUniqueArgs>(args: SelectSubset<T, AnalyticsEventFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalyticsEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsEventFindUniqueOrThrowArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindFirstArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsEventFindFirstArgs>(args?: SelectSubset<T, AnalyticsEventFindFirstArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindFirstOrThrowArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalyticsEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyticsEvents
     * const analyticsEvents = await prisma.analyticsEvent.findMany()
     * 
     * // Get first 10 AnalyticsEvents
     * const analyticsEvents = await prisma.analyticsEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsEventFindManyArgs>(args?: SelectSubset<T, AnalyticsEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalyticsEvent.
     * @param {AnalyticsEventCreateArgs} args - Arguments to create a AnalyticsEvent.
     * @example
     * // Create one AnalyticsEvent
     * const AnalyticsEvent = await prisma.analyticsEvent.create({
     *   data: {
     *     // ... data to create a AnalyticsEvent
     *   }
     * })
     * 
     */
    create<T extends AnalyticsEventCreateArgs>(args: SelectSubset<T, AnalyticsEventCreateArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalyticsEvents.
     * @param {AnalyticsEventCreateManyArgs} args - Arguments to create many AnalyticsEvents.
     * @example
     * // Create many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsEventCreateManyArgs>(args?: SelectSubset<T, AnalyticsEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalyticsEvents and returns the data saved in the database.
     * @param {AnalyticsEventCreateManyAndReturnArgs} args - Arguments to create many AnalyticsEvents.
     * @example
     * // Create many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalyticsEvents and only return the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalyticsEvent.
     * @param {AnalyticsEventDeleteArgs} args - Arguments to delete one AnalyticsEvent.
     * @example
     * // Delete one AnalyticsEvent
     * const AnalyticsEvent = await prisma.analyticsEvent.delete({
     *   where: {
     *     // ... filter to delete one AnalyticsEvent
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsEventDeleteArgs>(args: SelectSubset<T, AnalyticsEventDeleteArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalyticsEvent.
     * @param {AnalyticsEventUpdateArgs} args - Arguments to update one AnalyticsEvent.
     * @example
     * // Update one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsEventUpdateArgs>(args: SelectSubset<T, AnalyticsEventUpdateArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalyticsEvents.
     * @param {AnalyticsEventDeleteManyArgs} args - Arguments to filter AnalyticsEvents to delete.
     * @example
     * // Delete a few AnalyticsEvents
     * const { count } = await prisma.analyticsEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsEventDeleteManyArgs>(args?: SelectSubset<T, AnalyticsEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsEventUpdateManyArgs>(args: SelectSubset<T, AnalyticsEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsEvents and returns the data updated in the database.
     * @param {AnalyticsEventUpdateManyAndReturnArgs} args - Arguments to update many AnalyticsEvents.
     * @example
     * // Update many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalyticsEvents and only return the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalyticsEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalyticsEvent.
     * @param {AnalyticsEventUpsertArgs} args - Arguments to update or create a AnalyticsEvent.
     * @example
     * // Update or create a AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.upsert({
     *   create: {
     *     // ... data to create a AnalyticsEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyticsEvent we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsEventUpsertArgs>(args: SelectSubset<T, AnalyticsEventUpsertArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalyticsEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventCountArgs} args - Arguments to filter AnalyticsEvents to count.
     * @example
     * // Count the number of AnalyticsEvents
     * const count = await prisma.analyticsEvent.count({
     *   where: {
     *     // ... the filter for the AnalyticsEvents we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsEventCountArgs>(
      args?: Subset<T, AnalyticsEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyticsEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsEventAggregateArgs>(args: Subset<T, AnalyticsEventAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsEventAggregateType<T>>

    /**
     * Group by AnalyticsEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsEventGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyticsEvent model
   */
  readonly fields: AnalyticsEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyticsEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AnalyticsEvent model
   */
  interface AnalyticsEventFieldRefs {
    readonly id: FieldRef<"AnalyticsEvent", 'Int'>
    readonly eventType: FieldRef<"AnalyticsEvent", 'String'>
    readonly eventData: FieldRef<"AnalyticsEvent", 'Json'>
    readonly ipAddress: FieldRef<"AnalyticsEvent", 'String'>
    readonly userAgent: FieldRef<"AnalyticsEvent", 'String'>
    readonly referrer: FieldRef<"AnalyticsEvent", 'String'>
    readonly path: FieldRef<"AnalyticsEvent", 'String'>
    readonly createdAt: FieldRef<"AnalyticsEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalyticsEvent findUnique
   */
  export type AnalyticsEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent findUniqueOrThrow
   */
  export type AnalyticsEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent findFirst
   */
  export type AnalyticsEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsEvents.
     */
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent findFirstOrThrow
   */
  export type AnalyticsEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsEvents.
     */
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent findMany
   */
  export type AnalyticsEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvents to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsEvents.
     */
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent create
   */
  export type AnalyticsEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data needed to create a AnalyticsEvent.
     */
    data: XOR<AnalyticsEventCreateInput, AnalyticsEventUncheckedCreateInput>
  }

  /**
   * AnalyticsEvent createMany
   */
  export type AnalyticsEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyticsEvents.
     */
    data: AnalyticsEventCreateManyInput | AnalyticsEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsEvent createManyAndReturn
   */
  export type AnalyticsEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data used to create many AnalyticsEvents.
     */
    data: AnalyticsEventCreateManyInput | AnalyticsEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsEvent update
   */
  export type AnalyticsEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data needed to update a AnalyticsEvent.
     */
    data: XOR<AnalyticsEventUpdateInput, AnalyticsEventUncheckedUpdateInput>
    /**
     * Choose, which AnalyticsEvent to update.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent updateMany
   */
  export type AnalyticsEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyticsEvents.
     */
    data: XOR<AnalyticsEventUpdateManyMutationInput, AnalyticsEventUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsEvents to update
     */
    where?: AnalyticsEventWhereInput
    /**
     * Limit how many AnalyticsEvents to update.
     */
    limit?: number
  }

  /**
   * AnalyticsEvent updateManyAndReturn
   */
  export type AnalyticsEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data used to update AnalyticsEvents.
     */
    data: XOR<AnalyticsEventUpdateManyMutationInput, AnalyticsEventUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsEvents to update
     */
    where?: AnalyticsEventWhereInput
    /**
     * Limit how many AnalyticsEvents to update.
     */
    limit?: number
  }

  /**
   * AnalyticsEvent upsert
   */
  export type AnalyticsEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The filter to search for the AnalyticsEvent to update in case it exists.
     */
    where: AnalyticsEventWhereUniqueInput
    /**
     * In case the AnalyticsEvent found by the `where` argument doesn't exist, create a new AnalyticsEvent with this data.
     */
    create: XOR<AnalyticsEventCreateInput, AnalyticsEventUncheckedCreateInput>
    /**
     * In case the AnalyticsEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsEventUpdateInput, AnalyticsEventUncheckedUpdateInput>
  }

  /**
   * AnalyticsEvent delete
   */
  export type AnalyticsEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter which AnalyticsEvent to delete.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent deleteMany
   */
  export type AnalyticsEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsEvents to delete
     */
    where?: AnalyticsEventWhereInput
    /**
     * Limit how many AnalyticsEvents to delete.
     */
    limit?: number
  }

  /**
   * AnalyticsEvent without action
   */
  export type AnalyticsEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
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


  export const ContactSubmissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    subject: 'subject',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactSubmissionScalarFieldEnum = (typeof ContactSubmissionScalarFieldEnum)[keyof typeof ContactSubmissionScalarFieldEnum]


  export const ContactSalesSubmissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    companyName: 'companyName',
    projectDescription: 'projectDescription',
    budget: 'budget',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactSalesSubmissionScalarFieldEnum = (typeof ContactSalesSubmissionScalarFieldEnum)[keyof typeof ContactSalesSubmissionScalarFieldEnum]


  export const SolutionsRequestScalarFieldEnum: {
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    organization: 'organization',
    jobTitle: 'jobTitle',
    organizationType: 'organizationType',
    country: 'country',
    city: 'city',
    contactMethod: 'contactMethod',
    howDidYouHear: 'howDidYouHear',
    referrerName: 'referrerName',
    projectName: 'projectName',
    projectSummary: 'projectSummary',
    solutionTypes: 'solutionTypes',
    solutionTypeOther: 'solutionTypeOther',
    targetUsers: 'targetUsers',
    userCount: 'userCount',
    geographicDeployment: 'geographicDeployment',
    geographicCountry: 'geographicCountry',
    languages: 'languages',
    offlineRequired: 'offlineRequired',
    existingSystem: 'existingSystem',
    existingSystemDescription: 'existingSystemDescription',
    coreFeatures: 'coreFeatures',
    importantFeatures: 'importantFeatures',
    thirdPartyIntegrations: 'thirdPartyIntegrations',
    techStack: 'techStack',
    techStackOther: 'techStackOther',
    brandIdentity: 'brandIdentity',
    brandAssets: 'brandAssets',
    wireframes: 'wireframes',
    wireframesFiles: 'wireframesFiles',
    wireframesUrl: 'wireframesUrl',
    designStyle: 'designStyle',
    securityRequirements: 'securityRequirements',
    additionalNotes: 'additionalNotes',
    budget: 'budget',
    fundingContext: 'fundingContext',
    budgetFlexibility: 'budgetFlexibility',
    timeline: 'timeline',
    specificDeadline: 'specificDeadline',
    projectStartDate: 'projectStartDate',
    engagementStyle: 'engagementStyle',
    maintenanceNeeded: 'maintenanceNeeded',
    finalThoughts: 'finalThoughts',
    agreement: 'agreement',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    status: 'status',
    priority: 'priority',
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SolutionsRequestScalarFieldEnum = (typeof SolutionsRequestScalarFieldEnum)[keyof typeof SolutionsRequestScalarFieldEnum]


  export const NewsletterSubscriptionScalarFieldEnum: {
    id: 'id',
    email: 'email',
    status: 'status',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsletterSubscriptionScalarFieldEnum = (typeof NewsletterSubscriptionScalarFieldEnum)[keyof typeof NewsletterSubscriptionScalarFieldEnum]


  export const AnalyticsEventScalarFieldEnum: {
    id: 'id',
    eventType: 'eventType',
    eventData: 'eventData',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    referrer: 'referrer',
    path: 'path',
    createdAt: 'createdAt'
  };

  export type AnalyticsEventScalarFieldEnum = (typeof AnalyticsEventScalarFieldEnum)[keyof typeof AnalyticsEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ContactSubmissionWhereInput = {
    AND?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    OR?: ContactSubmissionWhereInput[]
    NOT?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    id?: IntFilter<"ContactSubmission"> | number
    name?: StringFilter<"ContactSubmission"> | string
    email?: StringFilter<"ContactSubmission"> | string
    phone?: StringNullableFilter<"ContactSubmission"> | string | null
    message?: StringFilter<"ContactSubmission"> | string
    subject?: StringNullableFilter<"ContactSubmission"> | string | null
    ipAddress?: StringNullableFilter<"ContactSubmission"> | string | null
    userAgent?: StringNullableFilter<"ContactSubmission"> | string | null
    status?: StringFilter<"ContactSubmission"> | string
    createdAt?: DateTimeFilter<"ContactSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"ContactSubmission"> | Date | string
  }

  export type ContactSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrder
    subject?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    OR?: ContactSubmissionWhereInput[]
    NOT?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    name?: StringFilter<"ContactSubmission"> | string
    email?: StringFilter<"ContactSubmission"> | string
    phone?: StringNullableFilter<"ContactSubmission"> | string | null
    message?: StringFilter<"ContactSubmission"> | string
    subject?: StringNullableFilter<"ContactSubmission"> | string | null
    ipAddress?: StringNullableFilter<"ContactSubmission"> | string | null
    userAgent?: StringNullableFilter<"ContactSubmission"> | string | null
    status?: StringFilter<"ContactSubmission"> | string
    createdAt?: DateTimeFilter<"ContactSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"ContactSubmission"> | Date | string
  }, "id">

  export type ContactSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrder
    subject?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactSubmissionCountOrderByAggregateInput
    _avg?: ContactSubmissionAvgOrderByAggregateInput
    _max?: ContactSubmissionMaxOrderByAggregateInput
    _min?: ContactSubmissionMinOrderByAggregateInput
    _sum?: ContactSubmissionSumOrderByAggregateInput
  }

  export type ContactSubmissionScalarWhereWithAggregatesInput = {
    AND?: ContactSubmissionScalarWhereWithAggregatesInput | ContactSubmissionScalarWhereWithAggregatesInput[]
    OR?: ContactSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ContactSubmissionScalarWhereWithAggregatesInput | ContactSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactSubmission"> | number
    name?: StringWithAggregatesFilter<"ContactSubmission"> | string
    email?: StringWithAggregatesFilter<"ContactSubmission"> | string
    phone?: StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null
    message?: StringWithAggregatesFilter<"ContactSubmission"> | string
    subject?: StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null
    status?: StringWithAggregatesFilter<"ContactSubmission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactSubmission"> | Date | string
  }

  export type ContactSalesSubmissionWhereInput = {
    AND?: ContactSalesSubmissionWhereInput | ContactSalesSubmissionWhereInput[]
    OR?: ContactSalesSubmissionWhereInput[]
    NOT?: ContactSalesSubmissionWhereInput | ContactSalesSubmissionWhereInput[]
    id?: IntFilter<"ContactSalesSubmission"> | number
    name?: StringFilter<"ContactSalesSubmission"> | string
    email?: StringFilter<"ContactSalesSubmission"> | string
    phone?: StringNullableFilter<"ContactSalesSubmission"> | string | null
    companyName?: StringFilter<"ContactSalesSubmission"> | string
    projectDescription?: StringFilter<"ContactSalesSubmission"> | string
    budget?: StringFilter<"ContactSalesSubmission"> | string
    ipAddress?: StringNullableFilter<"ContactSalesSubmission"> | string | null
    userAgent?: StringNullableFilter<"ContactSalesSubmission"> | string | null
    status?: StringFilter<"ContactSalesSubmission"> | string
    createdAt?: DateTimeFilter<"ContactSalesSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"ContactSalesSubmission"> | Date | string
  }

  export type ContactSalesSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    companyName?: SortOrder
    projectDescription?: SortOrder
    budget?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSalesSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactSalesSubmissionWhereInput | ContactSalesSubmissionWhereInput[]
    OR?: ContactSalesSubmissionWhereInput[]
    NOT?: ContactSalesSubmissionWhereInput | ContactSalesSubmissionWhereInput[]
    name?: StringFilter<"ContactSalesSubmission"> | string
    email?: StringFilter<"ContactSalesSubmission"> | string
    phone?: StringNullableFilter<"ContactSalesSubmission"> | string | null
    companyName?: StringFilter<"ContactSalesSubmission"> | string
    projectDescription?: StringFilter<"ContactSalesSubmission"> | string
    budget?: StringFilter<"ContactSalesSubmission"> | string
    ipAddress?: StringNullableFilter<"ContactSalesSubmission"> | string | null
    userAgent?: StringNullableFilter<"ContactSalesSubmission"> | string | null
    status?: StringFilter<"ContactSalesSubmission"> | string
    createdAt?: DateTimeFilter<"ContactSalesSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"ContactSalesSubmission"> | Date | string
  }, "id">

  export type ContactSalesSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    companyName?: SortOrder
    projectDescription?: SortOrder
    budget?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactSalesSubmissionCountOrderByAggregateInput
    _avg?: ContactSalesSubmissionAvgOrderByAggregateInput
    _max?: ContactSalesSubmissionMaxOrderByAggregateInput
    _min?: ContactSalesSubmissionMinOrderByAggregateInput
    _sum?: ContactSalesSubmissionSumOrderByAggregateInput
  }

  export type ContactSalesSubmissionScalarWhereWithAggregatesInput = {
    AND?: ContactSalesSubmissionScalarWhereWithAggregatesInput | ContactSalesSubmissionScalarWhereWithAggregatesInput[]
    OR?: ContactSalesSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ContactSalesSubmissionScalarWhereWithAggregatesInput | ContactSalesSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactSalesSubmission"> | number
    name?: StringWithAggregatesFilter<"ContactSalesSubmission"> | string
    email?: StringWithAggregatesFilter<"ContactSalesSubmission"> | string
    phone?: StringNullableWithAggregatesFilter<"ContactSalesSubmission"> | string | null
    companyName?: StringWithAggregatesFilter<"ContactSalesSubmission"> | string
    projectDescription?: StringWithAggregatesFilter<"ContactSalesSubmission"> | string
    budget?: StringWithAggregatesFilter<"ContactSalesSubmission"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"ContactSalesSubmission"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ContactSalesSubmission"> | string | null
    status?: StringWithAggregatesFilter<"ContactSalesSubmission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactSalesSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactSalesSubmission"> | Date | string
  }

  export type SolutionsRequestWhereInput = {
    AND?: SolutionsRequestWhereInput | SolutionsRequestWhereInput[]
    OR?: SolutionsRequestWhereInput[]
    NOT?: SolutionsRequestWhereInput | SolutionsRequestWhereInput[]
    fullName?: StringFilter<"SolutionsRequest"> | string
    email?: StringFilter<"SolutionsRequest"> | string
    phone?: StringFilter<"SolutionsRequest"> | string
    organization?: StringFilter<"SolutionsRequest"> | string
    jobTitle?: StringFilter<"SolutionsRequest"> | string
    organizationType?: StringFilter<"SolutionsRequest"> | string
    country?: StringFilter<"SolutionsRequest"> | string
    city?: StringNullableFilter<"SolutionsRequest"> | string | null
    contactMethod?: StringFilter<"SolutionsRequest"> | string
    howDidYouHear?: StringNullableFilter<"SolutionsRequest"> | string | null
    referrerName?: StringNullableFilter<"SolutionsRequest"> | string | null
    projectName?: StringFilter<"SolutionsRequest"> | string
    projectSummary?: StringFilter<"SolutionsRequest"> | string
    solutionTypes?: StringNullableListFilter<"SolutionsRequest">
    solutionTypeOther?: StringNullableFilter<"SolutionsRequest"> | string | null
    targetUsers?: StringFilter<"SolutionsRequest"> | string
    userCount?: StringFilter<"SolutionsRequest"> | string
    geographicDeployment?: StringNullableListFilter<"SolutionsRequest">
    geographicCountry?: StringNullableFilter<"SolutionsRequest"> | string | null
    languages?: StringNullableListFilter<"SolutionsRequest">
    offlineRequired?: StringFilter<"SolutionsRequest"> | string
    existingSystem?: StringNullableFilter<"SolutionsRequest"> | string | null
    existingSystemDescription?: StringNullableFilter<"SolutionsRequest"> | string | null
    coreFeatures?: StringNullableFilter<"SolutionsRequest"> | string | null
    importantFeatures?: StringNullableListFilter<"SolutionsRequest">
    thirdPartyIntegrations?: StringNullableFilter<"SolutionsRequest"> | string | null
    techStack?: StringNullableListFilter<"SolutionsRequest">
    techStackOther?: StringNullableFilter<"SolutionsRequest"> | string | null
    brandIdentity?: StringNullableFilter<"SolutionsRequest"> | string | null
    brandAssets?: JsonNullableFilter<"SolutionsRequest">
    wireframes?: StringNullableFilter<"SolutionsRequest"> | string | null
    wireframesFiles?: JsonNullableFilter<"SolutionsRequest">
    wireframesUrl?: StringNullableFilter<"SolutionsRequest"> | string | null
    designStyle?: StringNullableFilter<"SolutionsRequest"> | string | null
    securityRequirements?: StringNullableListFilter<"SolutionsRequest">
    additionalNotes?: StringNullableFilter<"SolutionsRequest"> | string | null
    budget?: StringFilter<"SolutionsRequest"> | string
    fundingContext?: StringNullableFilter<"SolutionsRequest"> | string | null
    budgetFlexibility?: StringNullableFilter<"SolutionsRequest"> | string | null
    timeline?: StringFilter<"SolutionsRequest"> | string
    specificDeadline?: StringNullableFilter<"SolutionsRequest"> | string | null
    projectStartDate?: StringNullableFilter<"SolutionsRequest"> | string | null
    engagementStyle?: StringNullableFilter<"SolutionsRequest"> | string | null
    maintenanceNeeded?: StringNullableFilter<"SolutionsRequest"> | string | null
    finalThoughts?: StringNullableFilter<"SolutionsRequest"> | string | null
    agreement?: BoolFilter<"SolutionsRequest"> | boolean
    ipAddress?: StringNullableFilter<"SolutionsRequest"> | string | null
    userAgent?: StringNullableFilter<"SolutionsRequest"> | string | null
    status?: StringFilter<"SolutionsRequest"> | string
    priority?: StringFilter<"SolutionsRequest"> | string
    id?: IntFilter<"SolutionsRequest"> | number
    createdAt?: DateTimeFilter<"SolutionsRequest"> | Date | string
    updatedAt?: DateTimeFilter<"SolutionsRequest"> | Date | string
  }

  export type SolutionsRequestOrderByWithRelationInput = {
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    jobTitle?: SortOrder
    organizationType?: SortOrder
    country?: SortOrder
    city?: SortOrderInput | SortOrder
    contactMethod?: SortOrder
    howDidYouHear?: SortOrderInput | SortOrder
    referrerName?: SortOrderInput | SortOrder
    projectName?: SortOrder
    projectSummary?: SortOrder
    solutionTypes?: SortOrder
    solutionTypeOther?: SortOrderInput | SortOrder
    targetUsers?: SortOrder
    userCount?: SortOrder
    geographicDeployment?: SortOrder
    geographicCountry?: SortOrderInput | SortOrder
    languages?: SortOrder
    offlineRequired?: SortOrder
    existingSystem?: SortOrderInput | SortOrder
    existingSystemDescription?: SortOrderInput | SortOrder
    coreFeatures?: SortOrderInput | SortOrder
    importantFeatures?: SortOrder
    thirdPartyIntegrations?: SortOrderInput | SortOrder
    techStack?: SortOrder
    techStackOther?: SortOrderInput | SortOrder
    brandIdentity?: SortOrderInput | SortOrder
    brandAssets?: SortOrderInput | SortOrder
    wireframes?: SortOrderInput | SortOrder
    wireframesFiles?: SortOrderInput | SortOrder
    wireframesUrl?: SortOrderInput | SortOrder
    designStyle?: SortOrderInput | SortOrder
    securityRequirements?: SortOrder
    additionalNotes?: SortOrderInput | SortOrder
    budget?: SortOrder
    fundingContext?: SortOrderInput | SortOrder
    budgetFlexibility?: SortOrderInput | SortOrder
    timeline?: SortOrder
    specificDeadline?: SortOrderInput | SortOrder
    projectStartDate?: SortOrderInput | SortOrder
    engagementStyle?: SortOrderInput | SortOrder
    maintenanceNeeded?: SortOrderInput | SortOrder
    finalThoughts?: SortOrderInput | SortOrder
    agreement?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolutionsRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SolutionsRequestWhereInput | SolutionsRequestWhereInput[]
    OR?: SolutionsRequestWhereInput[]
    NOT?: SolutionsRequestWhereInput | SolutionsRequestWhereInput[]
    fullName?: StringFilter<"SolutionsRequest"> | string
    email?: StringFilter<"SolutionsRequest"> | string
    phone?: StringFilter<"SolutionsRequest"> | string
    organization?: StringFilter<"SolutionsRequest"> | string
    jobTitle?: StringFilter<"SolutionsRequest"> | string
    organizationType?: StringFilter<"SolutionsRequest"> | string
    country?: StringFilter<"SolutionsRequest"> | string
    city?: StringNullableFilter<"SolutionsRequest"> | string | null
    contactMethod?: StringFilter<"SolutionsRequest"> | string
    howDidYouHear?: StringNullableFilter<"SolutionsRequest"> | string | null
    referrerName?: StringNullableFilter<"SolutionsRequest"> | string | null
    projectName?: StringFilter<"SolutionsRequest"> | string
    projectSummary?: StringFilter<"SolutionsRequest"> | string
    solutionTypes?: StringNullableListFilter<"SolutionsRequest">
    solutionTypeOther?: StringNullableFilter<"SolutionsRequest"> | string | null
    targetUsers?: StringFilter<"SolutionsRequest"> | string
    userCount?: StringFilter<"SolutionsRequest"> | string
    geographicDeployment?: StringNullableListFilter<"SolutionsRequest">
    geographicCountry?: StringNullableFilter<"SolutionsRequest"> | string | null
    languages?: StringNullableListFilter<"SolutionsRequest">
    offlineRequired?: StringFilter<"SolutionsRequest"> | string
    existingSystem?: StringNullableFilter<"SolutionsRequest"> | string | null
    existingSystemDescription?: StringNullableFilter<"SolutionsRequest"> | string | null
    coreFeatures?: StringNullableFilter<"SolutionsRequest"> | string | null
    importantFeatures?: StringNullableListFilter<"SolutionsRequest">
    thirdPartyIntegrations?: StringNullableFilter<"SolutionsRequest"> | string | null
    techStack?: StringNullableListFilter<"SolutionsRequest">
    techStackOther?: StringNullableFilter<"SolutionsRequest"> | string | null
    brandIdentity?: StringNullableFilter<"SolutionsRequest"> | string | null
    brandAssets?: JsonNullableFilter<"SolutionsRequest">
    wireframes?: StringNullableFilter<"SolutionsRequest"> | string | null
    wireframesFiles?: JsonNullableFilter<"SolutionsRequest">
    wireframesUrl?: StringNullableFilter<"SolutionsRequest"> | string | null
    designStyle?: StringNullableFilter<"SolutionsRequest"> | string | null
    securityRequirements?: StringNullableListFilter<"SolutionsRequest">
    additionalNotes?: StringNullableFilter<"SolutionsRequest"> | string | null
    budget?: StringFilter<"SolutionsRequest"> | string
    fundingContext?: StringNullableFilter<"SolutionsRequest"> | string | null
    budgetFlexibility?: StringNullableFilter<"SolutionsRequest"> | string | null
    timeline?: StringFilter<"SolutionsRequest"> | string
    specificDeadline?: StringNullableFilter<"SolutionsRequest"> | string | null
    projectStartDate?: StringNullableFilter<"SolutionsRequest"> | string | null
    engagementStyle?: StringNullableFilter<"SolutionsRequest"> | string | null
    maintenanceNeeded?: StringNullableFilter<"SolutionsRequest"> | string | null
    finalThoughts?: StringNullableFilter<"SolutionsRequest"> | string | null
    agreement?: BoolFilter<"SolutionsRequest"> | boolean
    ipAddress?: StringNullableFilter<"SolutionsRequest"> | string | null
    userAgent?: StringNullableFilter<"SolutionsRequest"> | string | null
    status?: StringFilter<"SolutionsRequest"> | string
    priority?: StringFilter<"SolutionsRequest"> | string
    createdAt?: DateTimeFilter<"SolutionsRequest"> | Date | string
    updatedAt?: DateTimeFilter<"SolutionsRequest"> | Date | string
  }, "id">

  export type SolutionsRequestOrderByWithAggregationInput = {
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    jobTitle?: SortOrder
    organizationType?: SortOrder
    country?: SortOrder
    city?: SortOrderInput | SortOrder
    contactMethod?: SortOrder
    howDidYouHear?: SortOrderInput | SortOrder
    referrerName?: SortOrderInput | SortOrder
    projectName?: SortOrder
    projectSummary?: SortOrder
    solutionTypes?: SortOrder
    solutionTypeOther?: SortOrderInput | SortOrder
    targetUsers?: SortOrder
    userCount?: SortOrder
    geographicDeployment?: SortOrder
    geographicCountry?: SortOrderInput | SortOrder
    languages?: SortOrder
    offlineRequired?: SortOrder
    existingSystem?: SortOrderInput | SortOrder
    existingSystemDescription?: SortOrderInput | SortOrder
    coreFeatures?: SortOrderInput | SortOrder
    importantFeatures?: SortOrder
    thirdPartyIntegrations?: SortOrderInput | SortOrder
    techStack?: SortOrder
    techStackOther?: SortOrderInput | SortOrder
    brandIdentity?: SortOrderInput | SortOrder
    brandAssets?: SortOrderInput | SortOrder
    wireframes?: SortOrderInput | SortOrder
    wireframesFiles?: SortOrderInput | SortOrder
    wireframesUrl?: SortOrderInput | SortOrder
    designStyle?: SortOrderInput | SortOrder
    securityRequirements?: SortOrder
    additionalNotes?: SortOrderInput | SortOrder
    budget?: SortOrder
    fundingContext?: SortOrderInput | SortOrder
    budgetFlexibility?: SortOrderInput | SortOrder
    timeline?: SortOrder
    specificDeadline?: SortOrderInput | SortOrder
    projectStartDate?: SortOrderInput | SortOrder
    engagementStyle?: SortOrderInput | SortOrder
    maintenanceNeeded?: SortOrderInput | SortOrder
    finalThoughts?: SortOrderInput | SortOrder
    agreement?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SolutionsRequestCountOrderByAggregateInput
    _avg?: SolutionsRequestAvgOrderByAggregateInput
    _max?: SolutionsRequestMaxOrderByAggregateInput
    _min?: SolutionsRequestMinOrderByAggregateInput
    _sum?: SolutionsRequestSumOrderByAggregateInput
  }

  export type SolutionsRequestScalarWhereWithAggregatesInput = {
    AND?: SolutionsRequestScalarWhereWithAggregatesInput | SolutionsRequestScalarWhereWithAggregatesInput[]
    OR?: SolutionsRequestScalarWhereWithAggregatesInput[]
    NOT?: SolutionsRequestScalarWhereWithAggregatesInput | SolutionsRequestScalarWhereWithAggregatesInput[]
    fullName?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    email?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    phone?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    organization?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    jobTitle?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    organizationType?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    country?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    city?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    contactMethod?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    howDidYouHear?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    referrerName?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    projectName?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    projectSummary?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    solutionTypes?: StringNullableListFilter<"SolutionsRequest">
    solutionTypeOther?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    targetUsers?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    userCount?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    geographicDeployment?: StringNullableListFilter<"SolutionsRequest">
    geographicCountry?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    languages?: StringNullableListFilter<"SolutionsRequest">
    offlineRequired?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    existingSystem?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    existingSystemDescription?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    coreFeatures?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    importantFeatures?: StringNullableListFilter<"SolutionsRequest">
    thirdPartyIntegrations?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    techStack?: StringNullableListFilter<"SolutionsRequest">
    techStackOther?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    brandIdentity?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    brandAssets?: JsonNullableWithAggregatesFilter<"SolutionsRequest">
    wireframes?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    wireframesFiles?: JsonNullableWithAggregatesFilter<"SolutionsRequest">
    wireframesUrl?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    designStyle?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    securityRequirements?: StringNullableListFilter<"SolutionsRequest">
    additionalNotes?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    budget?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    fundingContext?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    budgetFlexibility?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    timeline?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    specificDeadline?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    projectStartDate?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    engagementStyle?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    maintenanceNeeded?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    finalThoughts?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    agreement?: BoolWithAggregatesFilter<"SolutionsRequest"> | boolean
    ipAddress?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"SolutionsRequest"> | string | null
    status?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    priority?: StringWithAggregatesFilter<"SolutionsRequest"> | string
    id?: IntWithAggregatesFilter<"SolutionsRequest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SolutionsRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SolutionsRequest"> | Date | string
  }

  export type NewsletterSubscriptionWhereInput = {
    AND?: NewsletterSubscriptionWhereInput | NewsletterSubscriptionWhereInput[]
    OR?: NewsletterSubscriptionWhereInput[]
    NOT?: NewsletterSubscriptionWhereInput | NewsletterSubscriptionWhereInput[]
    id?: IntFilter<"NewsletterSubscription"> | number
    email?: StringFilter<"NewsletterSubscription"> | string
    status?: StringFilter<"NewsletterSubscription"> | string
    ipAddress?: StringNullableFilter<"NewsletterSubscription"> | string | null
    userAgent?: StringNullableFilter<"NewsletterSubscription"> | string | null
    createdAt?: DateTimeFilter<"NewsletterSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"NewsletterSubscription"> | Date | string
  }

  export type NewsletterSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsletterSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: NewsletterSubscriptionWhereInput | NewsletterSubscriptionWhereInput[]
    OR?: NewsletterSubscriptionWhereInput[]
    NOT?: NewsletterSubscriptionWhereInput | NewsletterSubscriptionWhereInput[]
    status?: StringFilter<"NewsletterSubscription"> | string
    ipAddress?: StringNullableFilter<"NewsletterSubscription"> | string | null
    userAgent?: StringNullableFilter<"NewsletterSubscription"> | string | null
    createdAt?: DateTimeFilter<"NewsletterSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"NewsletterSubscription"> | Date | string
  }, "id" | "email">

  export type NewsletterSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsletterSubscriptionCountOrderByAggregateInput
    _avg?: NewsletterSubscriptionAvgOrderByAggregateInput
    _max?: NewsletterSubscriptionMaxOrderByAggregateInput
    _min?: NewsletterSubscriptionMinOrderByAggregateInput
    _sum?: NewsletterSubscriptionSumOrderByAggregateInput
  }

  export type NewsletterSubscriptionScalarWhereWithAggregatesInput = {
    AND?: NewsletterSubscriptionScalarWhereWithAggregatesInput | NewsletterSubscriptionScalarWhereWithAggregatesInput[]
    OR?: NewsletterSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: NewsletterSubscriptionScalarWhereWithAggregatesInput | NewsletterSubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewsletterSubscription"> | number
    email?: StringWithAggregatesFilter<"NewsletterSubscription"> | string
    status?: StringWithAggregatesFilter<"NewsletterSubscription"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"NewsletterSubscription"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"NewsletterSubscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NewsletterSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsletterSubscription"> | Date | string
  }

  export type AnalyticsEventWhereInput = {
    AND?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    OR?: AnalyticsEventWhereInput[]
    NOT?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    id?: IntFilter<"AnalyticsEvent"> | number
    eventType?: StringFilter<"AnalyticsEvent"> | string
    eventData?: JsonNullableFilter<"AnalyticsEvent">
    ipAddress?: StringNullableFilter<"AnalyticsEvent"> | string | null
    userAgent?: StringNullableFilter<"AnalyticsEvent"> | string | null
    referrer?: StringNullableFilter<"AnalyticsEvent"> | string | null
    path?: StringNullableFilter<"AnalyticsEvent"> | string | null
    createdAt?: DateTimeFilter<"AnalyticsEvent"> | Date | string
  }

  export type AnalyticsEventOrderByWithRelationInput = {
    id?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    OR?: AnalyticsEventWhereInput[]
    NOT?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    eventType?: StringFilter<"AnalyticsEvent"> | string
    eventData?: JsonNullableFilter<"AnalyticsEvent">
    ipAddress?: StringNullableFilter<"AnalyticsEvent"> | string | null
    userAgent?: StringNullableFilter<"AnalyticsEvent"> | string | null
    referrer?: StringNullableFilter<"AnalyticsEvent"> | string | null
    path?: StringNullableFilter<"AnalyticsEvent"> | string | null
    createdAt?: DateTimeFilter<"AnalyticsEvent"> | Date | string
  }, "id">

  export type AnalyticsEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnalyticsEventCountOrderByAggregateInput
    _avg?: AnalyticsEventAvgOrderByAggregateInput
    _max?: AnalyticsEventMaxOrderByAggregateInput
    _min?: AnalyticsEventMinOrderByAggregateInput
    _sum?: AnalyticsEventSumOrderByAggregateInput
  }

  export type AnalyticsEventScalarWhereWithAggregatesInput = {
    AND?: AnalyticsEventScalarWhereWithAggregatesInput | AnalyticsEventScalarWhereWithAggregatesInput[]
    OR?: AnalyticsEventScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsEventScalarWhereWithAggregatesInput | AnalyticsEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AnalyticsEvent"> | number
    eventType?: StringWithAggregatesFilter<"AnalyticsEvent"> | string
    eventData?: JsonNullableWithAggregatesFilter<"AnalyticsEvent">
    ipAddress?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    referrer?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    path?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnalyticsEvent"> | Date | string
  }

  export type ContactSubmissionCreateInput = {
    name: string
    email: string
    phone?: string | null
    message: string
    subject?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactSubmissionUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    message: string
    subject?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactSubmissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    message: string
    subject?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactSubmissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSalesSubmissionCreateInput = {
    name: string
    email: string
    phone?: string | null
    companyName: string
    projectDescription: string
    budget: string
    ipAddress?: string | null
    userAgent?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactSalesSubmissionUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    companyName: string
    projectDescription: string
    budget: string
    ipAddress?: string | null
    userAgent?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactSalesSubmissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    projectDescription?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSalesSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    projectDescription?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSalesSubmissionCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    companyName: string
    projectDescription: string
    budget: string
    ipAddress?: string | null
    userAgent?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactSalesSubmissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    projectDescription?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSalesSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    projectDescription?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionsRequestCreateInput = {
    fullName: string
    email: string
    phone: string
    organization: string
    jobTitle: string
    organizationType: string
    country: string
    city?: string | null
    contactMethod: string
    howDidYouHear?: string | null
    referrerName?: string | null
    projectName: string
    projectSummary: string
    solutionTypes?: SolutionsRequestCreatesolutionTypesInput | string[]
    solutionTypeOther?: string | null
    targetUsers: string
    userCount: string
    geographicDeployment?: SolutionsRequestCreategeographicDeploymentInput | string[]
    geographicCountry?: string | null
    languages?: SolutionsRequestCreatelanguagesInput | string[]
    offlineRequired: string
    existingSystem?: string | null
    existingSystemDescription?: string | null
    coreFeatures?: string | null
    importantFeatures?: SolutionsRequestCreateimportantFeaturesInput | string[]
    thirdPartyIntegrations?: string | null
    techStack?: SolutionsRequestCreatetechStackInput | string[]
    techStackOther?: string | null
    brandIdentity?: string | null
    brandAssets?: NullableJsonNullValueInput | InputJsonValue
    wireframes?: string | null
    wireframesFiles?: NullableJsonNullValueInput | InputJsonValue
    wireframesUrl?: string | null
    designStyle?: string | null
    securityRequirements?: SolutionsRequestCreatesecurityRequirementsInput | string[]
    additionalNotes?: string | null
    budget: string
    fundingContext?: string | null
    budgetFlexibility?: string | null
    timeline: string
    specificDeadline?: string | null
    projectStartDate?: string | null
    engagementStyle?: string | null
    maintenanceNeeded?: string | null
    finalThoughts?: string | null
    agreement: boolean
    ipAddress?: string | null
    userAgent?: string | null
    status?: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolutionsRequestUncheckedCreateInput = {
    fullName: string
    email: string
    phone: string
    organization: string
    jobTitle: string
    organizationType: string
    country: string
    city?: string | null
    contactMethod: string
    howDidYouHear?: string | null
    referrerName?: string | null
    projectName: string
    projectSummary: string
    solutionTypes?: SolutionsRequestCreatesolutionTypesInput | string[]
    solutionTypeOther?: string | null
    targetUsers: string
    userCount: string
    geographicDeployment?: SolutionsRequestCreategeographicDeploymentInput | string[]
    geographicCountry?: string | null
    languages?: SolutionsRequestCreatelanguagesInput | string[]
    offlineRequired: string
    existingSystem?: string | null
    existingSystemDescription?: string | null
    coreFeatures?: string | null
    importantFeatures?: SolutionsRequestCreateimportantFeaturesInput | string[]
    thirdPartyIntegrations?: string | null
    techStack?: SolutionsRequestCreatetechStackInput | string[]
    techStackOther?: string | null
    brandIdentity?: string | null
    brandAssets?: NullableJsonNullValueInput | InputJsonValue
    wireframes?: string | null
    wireframesFiles?: NullableJsonNullValueInput | InputJsonValue
    wireframesUrl?: string | null
    designStyle?: string | null
    securityRequirements?: SolutionsRequestCreatesecurityRequirementsInput | string[]
    additionalNotes?: string | null
    budget: string
    fundingContext?: string | null
    budgetFlexibility?: string | null
    timeline: string
    specificDeadline?: string | null
    projectStartDate?: string | null
    engagementStyle?: string | null
    maintenanceNeeded?: string | null
    finalThoughts?: string | null
    agreement: boolean
    ipAddress?: string | null
    userAgent?: string | null
    status?: string
    priority?: string
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolutionsRequestUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    contactMethod?: StringFieldUpdateOperationsInput | string
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    referrerName?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    projectSummary?: StringFieldUpdateOperationsInput | string
    solutionTypes?: SolutionsRequestUpdatesolutionTypesInput | string[]
    solutionTypeOther?: NullableStringFieldUpdateOperationsInput | string | null
    targetUsers?: StringFieldUpdateOperationsInput | string
    userCount?: StringFieldUpdateOperationsInput | string
    geographicDeployment?: SolutionsRequestUpdategeographicDeploymentInput | string[]
    geographicCountry?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: SolutionsRequestUpdatelanguagesInput | string[]
    offlineRequired?: StringFieldUpdateOperationsInput | string
    existingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    existingSystemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coreFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    importantFeatures?: SolutionsRequestUpdateimportantFeaturesInput | string[]
    thirdPartyIntegrations?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: SolutionsRequestUpdatetechStackInput | string[]
    techStackOther?: NullableStringFieldUpdateOperationsInput | string | null
    brandIdentity?: NullableStringFieldUpdateOperationsInput | string | null
    brandAssets?: NullableJsonNullValueInput | InputJsonValue
    wireframes?: NullableStringFieldUpdateOperationsInput | string | null
    wireframesFiles?: NullableJsonNullValueInput | InputJsonValue
    wireframesUrl?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    securityRequirements?: SolutionsRequestUpdatesecurityRequirementsInput | string[]
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: StringFieldUpdateOperationsInput | string
    fundingContext?: NullableStringFieldUpdateOperationsInput | string | null
    budgetFlexibility?: NullableStringFieldUpdateOperationsInput | string | null
    timeline?: StringFieldUpdateOperationsInput | string
    specificDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    projectStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    engagementStyle?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    finalThoughts?: NullableStringFieldUpdateOperationsInput | string | null
    agreement?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionsRequestUncheckedUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    contactMethod?: StringFieldUpdateOperationsInput | string
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    referrerName?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    projectSummary?: StringFieldUpdateOperationsInput | string
    solutionTypes?: SolutionsRequestUpdatesolutionTypesInput | string[]
    solutionTypeOther?: NullableStringFieldUpdateOperationsInput | string | null
    targetUsers?: StringFieldUpdateOperationsInput | string
    userCount?: StringFieldUpdateOperationsInput | string
    geographicDeployment?: SolutionsRequestUpdategeographicDeploymentInput | string[]
    geographicCountry?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: SolutionsRequestUpdatelanguagesInput | string[]
    offlineRequired?: StringFieldUpdateOperationsInput | string
    existingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    existingSystemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coreFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    importantFeatures?: SolutionsRequestUpdateimportantFeaturesInput | string[]
    thirdPartyIntegrations?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: SolutionsRequestUpdatetechStackInput | string[]
    techStackOther?: NullableStringFieldUpdateOperationsInput | string | null
    brandIdentity?: NullableStringFieldUpdateOperationsInput | string | null
    brandAssets?: NullableJsonNullValueInput | InputJsonValue
    wireframes?: NullableStringFieldUpdateOperationsInput | string | null
    wireframesFiles?: NullableJsonNullValueInput | InputJsonValue
    wireframesUrl?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    securityRequirements?: SolutionsRequestUpdatesecurityRequirementsInput | string[]
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: StringFieldUpdateOperationsInput | string
    fundingContext?: NullableStringFieldUpdateOperationsInput | string | null
    budgetFlexibility?: NullableStringFieldUpdateOperationsInput | string | null
    timeline?: StringFieldUpdateOperationsInput | string
    specificDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    projectStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    engagementStyle?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    finalThoughts?: NullableStringFieldUpdateOperationsInput | string | null
    agreement?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionsRequestCreateManyInput = {
    fullName: string
    email: string
    phone: string
    organization: string
    jobTitle: string
    organizationType: string
    country: string
    city?: string | null
    contactMethod: string
    howDidYouHear?: string | null
    referrerName?: string | null
    projectName: string
    projectSummary: string
    solutionTypes?: SolutionsRequestCreatesolutionTypesInput | string[]
    solutionTypeOther?: string | null
    targetUsers: string
    userCount: string
    geographicDeployment?: SolutionsRequestCreategeographicDeploymentInput | string[]
    geographicCountry?: string | null
    languages?: SolutionsRequestCreatelanguagesInput | string[]
    offlineRequired: string
    existingSystem?: string | null
    existingSystemDescription?: string | null
    coreFeatures?: string | null
    importantFeatures?: SolutionsRequestCreateimportantFeaturesInput | string[]
    thirdPartyIntegrations?: string | null
    techStack?: SolutionsRequestCreatetechStackInput | string[]
    techStackOther?: string | null
    brandIdentity?: string | null
    brandAssets?: NullableJsonNullValueInput | InputJsonValue
    wireframes?: string | null
    wireframesFiles?: NullableJsonNullValueInput | InputJsonValue
    wireframesUrl?: string | null
    designStyle?: string | null
    securityRequirements?: SolutionsRequestCreatesecurityRequirementsInput | string[]
    additionalNotes?: string | null
    budget: string
    fundingContext?: string | null
    budgetFlexibility?: string | null
    timeline: string
    specificDeadline?: string | null
    projectStartDate?: string | null
    engagementStyle?: string | null
    maintenanceNeeded?: string | null
    finalThoughts?: string | null
    agreement: boolean
    ipAddress?: string | null
    userAgent?: string | null
    status?: string
    priority?: string
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolutionsRequestUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    contactMethod?: StringFieldUpdateOperationsInput | string
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    referrerName?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    projectSummary?: StringFieldUpdateOperationsInput | string
    solutionTypes?: SolutionsRequestUpdatesolutionTypesInput | string[]
    solutionTypeOther?: NullableStringFieldUpdateOperationsInput | string | null
    targetUsers?: StringFieldUpdateOperationsInput | string
    userCount?: StringFieldUpdateOperationsInput | string
    geographicDeployment?: SolutionsRequestUpdategeographicDeploymentInput | string[]
    geographicCountry?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: SolutionsRequestUpdatelanguagesInput | string[]
    offlineRequired?: StringFieldUpdateOperationsInput | string
    existingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    existingSystemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coreFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    importantFeatures?: SolutionsRequestUpdateimportantFeaturesInput | string[]
    thirdPartyIntegrations?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: SolutionsRequestUpdatetechStackInput | string[]
    techStackOther?: NullableStringFieldUpdateOperationsInput | string | null
    brandIdentity?: NullableStringFieldUpdateOperationsInput | string | null
    brandAssets?: NullableJsonNullValueInput | InputJsonValue
    wireframes?: NullableStringFieldUpdateOperationsInput | string | null
    wireframesFiles?: NullableJsonNullValueInput | InputJsonValue
    wireframesUrl?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    securityRequirements?: SolutionsRequestUpdatesecurityRequirementsInput | string[]
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: StringFieldUpdateOperationsInput | string
    fundingContext?: NullableStringFieldUpdateOperationsInput | string | null
    budgetFlexibility?: NullableStringFieldUpdateOperationsInput | string | null
    timeline?: StringFieldUpdateOperationsInput | string
    specificDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    projectStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    engagementStyle?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    finalThoughts?: NullableStringFieldUpdateOperationsInput | string | null
    agreement?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionsRequestUncheckedUpdateManyInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    contactMethod?: StringFieldUpdateOperationsInput | string
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    referrerName?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    projectSummary?: StringFieldUpdateOperationsInput | string
    solutionTypes?: SolutionsRequestUpdatesolutionTypesInput | string[]
    solutionTypeOther?: NullableStringFieldUpdateOperationsInput | string | null
    targetUsers?: StringFieldUpdateOperationsInput | string
    userCount?: StringFieldUpdateOperationsInput | string
    geographicDeployment?: SolutionsRequestUpdategeographicDeploymentInput | string[]
    geographicCountry?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: SolutionsRequestUpdatelanguagesInput | string[]
    offlineRequired?: StringFieldUpdateOperationsInput | string
    existingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    existingSystemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coreFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    importantFeatures?: SolutionsRequestUpdateimportantFeaturesInput | string[]
    thirdPartyIntegrations?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: SolutionsRequestUpdatetechStackInput | string[]
    techStackOther?: NullableStringFieldUpdateOperationsInput | string | null
    brandIdentity?: NullableStringFieldUpdateOperationsInput | string | null
    brandAssets?: NullableJsonNullValueInput | InputJsonValue
    wireframes?: NullableStringFieldUpdateOperationsInput | string | null
    wireframesFiles?: NullableJsonNullValueInput | InputJsonValue
    wireframesUrl?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    securityRequirements?: SolutionsRequestUpdatesecurityRequirementsInput | string[]
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: StringFieldUpdateOperationsInput | string
    fundingContext?: NullableStringFieldUpdateOperationsInput | string | null
    budgetFlexibility?: NullableStringFieldUpdateOperationsInput | string | null
    timeline?: StringFieldUpdateOperationsInput | string
    specificDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    projectStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    engagementStyle?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    finalThoughts?: NullableStringFieldUpdateOperationsInput | string | null
    agreement?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriptionCreateInput = {
    email: string
    status?: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsletterSubscriptionUncheckedCreateInput = {
    id?: number
    email: string
    status?: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsletterSubscriptionUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriptionCreateManyInput = {
    id?: number
    email: string
    status?: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsletterSubscriptionUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventCreateInput = {
    eventType: string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
    path?: string | null
    createdAt?: Date | string
  }

  export type AnalyticsEventUncheckedCreateInput = {
    id?: number
    eventType: string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
    path?: string | null
    createdAt?: Date | string
  }

  export type AnalyticsEventUpdateInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventCreateManyInput = {
    id?: number
    eventType: string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
    path?: string | null
    createdAt?: Date | string
  }

  export type AnalyticsEventUpdateManyMutationInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContactSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ContactSalesSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    companyName?: SortOrder
    projectDescription?: SortOrder
    budget?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSalesSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactSalesSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    companyName?: SortOrder
    projectDescription?: SortOrder
    budget?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSalesSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    companyName?: SortOrder
    projectDescription?: SortOrder
    budget?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSalesSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SolutionsRequestCountOrderByAggregateInput = {
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    jobTitle?: SortOrder
    organizationType?: SortOrder
    country?: SortOrder
    city?: SortOrder
    contactMethod?: SortOrder
    howDidYouHear?: SortOrder
    referrerName?: SortOrder
    projectName?: SortOrder
    projectSummary?: SortOrder
    solutionTypes?: SortOrder
    solutionTypeOther?: SortOrder
    targetUsers?: SortOrder
    userCount?: SortOrder
    geographicDeployment?: SortOrder
    geographicCountry?: SortOrder
    languages?: SortOrder
    offlineRequired?: SortOrder
    existingSystem?: SortOrder
    existingSystemDescription?: SortOrder
    coreFeatures?: SortOrder
    importantFeatures?: SortOrder
    thirdPartyIntegrations?: SortOrder
    techStack?: SortOrder
    techStackOther?: SortOrder
    brandIdentity?: SortOrder
    brandAssets?: SortOrder
    wireframes?: SortOrder
    wireframesFiles?: SortOrder
    wireframesUrl?: SortOrder
    designStyle?: SortOrder
    securityRequirements?: SortOrder
    additionalNotes?: SortOrder
    budget?: SortOrder
    fundingContext?: SortOrder
    budgetFlexibility?: SortOrder
    timeline?: SortOrder
    specificDeadline?: SortOrder
    projectStartDate?: SortOrder
    engagementStyle?: SortOrder
    maintenanceNeeded?: SortOrder
    finalThoughts?: SortOrder
    agreement?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolutionsRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SolutionsRequestMaxOrderByAggregateInput = {
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    jobTitle?: SortOrder
    organizationType?: SortOrder
    country?: SortOrder
    city?: SortOrder
    contactMethod?: SortOrder
    howDidYouHear?: SortOrder
    referrerName?: SortOrder
    projectName?: SortOrder
    projectSummary?: SortOrder
    solutionTypeOther?: SortOrder
    targetUsers?: SortOrder
    userCount?: SortOrder
    geographicCountry?: SortOrder
    offlineRequired?: SortOrder
    existingSystem?: SortOrder
    existingSystemDescription?: SortOrder
    coreFeatures?: SortOrder
    thirdPartyIntegrations?: SortOrder
    techStackOther?: SortOrder
    brandIdentity?: SortOrder
    wireframes?: SortOrder
    wireframesUrl?: SortOrder
    designStyle?: SortOrder
    additionalNotes?: SortOrder
    budget?: SortOrder
    fundingContext?: SortOrder
    budgetFlexibility?: SortOrder
    timeline?: SortOrder
    specificDeadline?: SortOrder
    projectStartDate?: SortOrder
    engagementStyle?: SortOrder
    maintenanceNeeded?: SortOrder
    finalThoughts?: SortOrder
    agreement?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolutionsRequestMinOrderByAggregateInput = {
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    jobTitle?: SortOrder
    organizationType?: SortOrder
    country?: SortOrder
    city?: SortOrder
    contactMethod?: SortOrder
    howDidYouHear?: SortOrder
    referrerName?: SortOrder
    projectName?: SortOrder
    projectSummary?: SortOrder
    solutionTypeOther?: SortOrder
    targetUsers?: SortOrder
    userCount?: SortOrder
    geographicCountry?: SortOrder
    offlineRequired?: SortOrder
    existingSystem?: SortOrder
    existingSystemDescription?: SortOrder
    coreFeatures?: SortOrder
    thirdPartyIntegrations?: SortOrder
    techStackOther?: SortOrder
    brandIdentity?: SortOrder
    wireframes?: SortOrder
    wireframesUrl?: SortOrder
    designStyle?: SortOrder
    additionalNotes?: SortOrder
    budget?: SortOrder
    fundingContext?: SortOrder
    budgetFlexibility?: SortOrder
    timeline?: SortOrder
    specificDeadline?: SortOrder
    projectStartDate?: SortOrder
    engagementStyle?: SortOrder
    maintenanceNeeded?: SortOrder
    finalThoughts?: SortOrder
    agreement?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolutionsRequestSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NewsletterSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsletterSubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsletterSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsletterSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsletterSubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnalyticsEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnalyticsEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SolutionsRequestCreatesolutionTypesInput = {
    set: string[]
  }

  export type SolutionsRequestCreategeographicDeploymentInput = {
    set: string[]
  }

  export type SolutionsRequestCreatelanguagesInput = {
    set: string[]
  }

  export type SolutionsRequestCreateimportantFeaturesInput = {
    set: string[]
  }

  export type SolutionsRequestCreatetechStackInput = {
    set: string[]
  }

  export type SolutionsRequestCreatesecurityRequirementsInput = {
    set: string[]
  }

  export type SolutionsRequestUpdatesolutionTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SolutionsRequestUpdategeographicDeploymentInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SolutionsRequestUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SolutionsRequestUpdateimportantFeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SolutionsRequestUpdatetechStackInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SolutionsRequestUpdatesecurityRequirementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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