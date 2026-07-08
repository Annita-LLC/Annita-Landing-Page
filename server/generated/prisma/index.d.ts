
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
 * Model BetaSignup
 * 
 */
export type BetaSignup = $Result.DefaultSelection<Prisma.$BetaSignupPayload>
/**
 * Model JobPosting
 * 
 */
export type JobPosting = $Result.DefaultSelection<Prisma.$JobPostingPayload>
/**
 * Model CareerApplication
 * 
 */
export type CareerApplication = $Result.DefaultSelection<Prisma.$CareerApplicationPayload>
/**
 * Model PartnershipSubmission
 * 
 */
export type PartnershipSubmission = $Result.DefaultSelection<Prisma.$PartnershipSubmissionPayload>
/**
 * Model MaintenanceWindow
 * 
 */
export type MaintenanceWindow = $Result.DefaultSelection<Prisma.$MaintenanceWindowPayload>
/**
 * Model SystemHealthReport
 * 
 */
export type SystemHealthReport = $Result.DefaultSelection<Prisma.$SystemHealthReportPayload>
/**
 * Model AdminToken
 * 
 */
export type AdminToken = $Result.DefaultSelection<Prisma.$AdminTokenPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model AccountDeletionRequest
 * 
 */
export type AccountDeletionRequest = $Result.DefaultSelection<Prisma.$AccountDeletionRequestPayload>

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

  /**
   * `prisma.betaSignup`: Exposes CRUD operations for the **BetaSignup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BetaSignups
    * const betaSignups = await prisma.betaSignup.findMany()
    * ```
    */
  get betaSignup(): Prisma.BetaSignupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobPosting`: Exposes CRUD operations for the **JobPosting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobPostings
    * const jobPostings = await prisma.jobPosting.findMany()
    * ```
    */
  get jobPosting(): Prisma.JobPostingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.careerApplication`: Exposes CRUD operations for the **CareerApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CareerApplications
    * const careerApplications = await prisma.careerApplication.findMany()
    * ```
    */
  get careerApplication(): Prisma.CareerApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partnershipSubmission`: Exposes CRUD operations for the **PartnershipSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartnershipSubmissions
    * const partnershipSubmissions = await prisma.partnershipSubmission.findMany()
    * ```
    */
  get partnershipSubmission(): Prisma.PartnershipSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceWindow`: Exposes CRUD operations for the **MaintenanceWindow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceWindows
    * const maintenanceWindows = await prisma.maintenanceWindow.findMany()
    * ```
    */
  get maintenanceWindow(): Prisma.MaintenanceWindowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemHealthReport`: Exposes CRUD operations for the **SystemHealthReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemHealthReports
    * const systemHealthReports = await prisma.systemHealthReport.findMany()
    * ```
    */
  get systemHealthReport(): Prisma.SystemHealthReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminToken`: Exposes CRUD operations for the **AdminToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminTokens
    * const adminTokens = await prisma.adminToken.findMany()
    * ```
    */
  get adminToken(): Prisma.AdminTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountDeletionRequest`: Exposes CRUD operations for the **AccountDeletionRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountDeletionRequests
    * const accountDeletionRequests = await prisma.accountDeletionRequest.findMany()
    * ```
    */
  get accountDeletionRequest(): Prisma.AccountDeletionRequestDelegate<ExtArgs, ClientOptions>;
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
    AnalyticsEvent: 'AnalyticsEvent',
    BetaSignup: 'BetaSignup',
    JobPosting: 'JobPosting',
    CareerApplication: 'CareerApplication',
    PartnershipSubmission: 'PartnershipSubmission',
    MaintenanceWindow: 'MaintenanceWindow',
    SystemHealthReport: 'SystemHealthReport',
    AdminToken: 'AdminToken',
    AuditLog: 'AuditLog',
    AccountDeletionRequest: 'AccountDeletionRequest'
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
      modelProps: "contactSubmission" | "contactSalesSubmission" | "solutionsRequest" | "newsletterSubscription" | "analyticsEvent" | "betaSignup" | "jobPosting" | "careerApplication" | "partnershipSubmission" | "maintenanceWindow" | "systemHealthReport" | "adminToken" | "auditLog" | "accountDeletionRequest"
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
      BetaSignup: {
        payload: Prisma.$BetaSignupPayload<ExtArgs>
        fields: Prisma.BetaSignupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetaSignupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetaSignupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>
          }
          findFirst: {
            args: Prisma.BetaSignupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetaSignupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>
          }
          findMany: {
            args: Prisma.BetaSignupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>[]
          }
          create: {
            args: Prisma.BetaSignupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>
          }
          createMany: {
            args: Prisma.BetaSignupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BetaSignupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>[]
          }
          delete: {
            args: Prisma.BetaSignupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>
          }
          update: {
            args: Prisma.BetaSignupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>
          }
          deleteMany: {
            args: Prisma.BetaSignupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetaSignupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BetaSignupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>[]
          }
          upsert: {
            args: Prisma.BetaSignupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>
          }
          aggregate: {
            args: Prisma.BetaSignupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBetaSignup>
          }
          groupBy: {
            args: Prisma.BetaSignupGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetaSignupGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetaSignupCountArgs<ExtArgs>
            result: $Utils.Optional<BetaSignupCountAggregateOutputType> | number
          }
        }
      }
      JobPosting: {
        payload: Prisma.$JobPostingPayload<ExtArgs>
        fields: Prisma.JobPostingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobPostingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobPostingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          findFirst: {
            args: Prisma.JobPostingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobPostingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          findMany: {
            args: Prisma.JobPostingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          create: {
            args: Prisma.JobPostingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          createMany: {
            args: Prisma.JobPostingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobPostingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          delete: {
            args: Prisma.JobPostingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          update: {
            args: Prisma.JobPostingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          deleteMany: {
            args: Prisma.JobPostingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobPostingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobPostingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          upsert: {
            args: Prisma.JobPostingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          aggregate: {
            args: Prisma.JobPostingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobPosting>
          }
          groupBy: {
            args: Prisma.JobPostingGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobPostingGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobPostingCountArgs<ExtArgs>
            result: $Utils.Optional<JobPostingCountAggregateOutputType> | number
          }
        }
      }
      CareerApplication: {
        payload: Prisma.$CareerApplicationPayload<ExtArgs>
        fields: Prisma.CareerApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerApplicationPayload>
          }
          findFirst: {
            args: Prisma.CareerApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerApplicationPayload>
          }
          findMany: {
            args: Prisma.CareerApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerApplicationPayload>[]
          }
          create: {
            args: Prisma.CareerApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerApplicationPayload>
          }
          createMany: {
            args: Prisma.CareerApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareerApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerApplicationPayload>[]
          }
          delete: {
            args: Prisma.CareerApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerApplicationPayload>
          }
          update: {
            args: Prisma.CareerApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerApplicationPayload>
          }
          deleteMany: {
            args: Prisma.CareerApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareerApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareerApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerApplicationPayload>[]
          }
          upsert: {
            args: Prisma.CareerApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerApplicationPayload>
          }
          aggregate: {
            args: Prisma.CareerApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareerApplication>
          }
          groupBy: {
            args: Prisma.CareerApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<CareerApplicationCountAggregateOutputType> | number
          }
        }
      }
      PartnershipSubmission: {
        payload: Prisma.$PartnershipSubmissionPayload<ExtArgs>
        fields: Prisma.PartnershipSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnershipSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnershipSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnershipSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnershipSubmissionPayload>
          }
          findFirst: {
            args: Prisma.PartnershipSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnershipSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnershipSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnershipSubmissionPayload>
          }
          findMany: {
            args: Prisma.PartnershipSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnershipSubmissionPayload>[]
          }
          create: {
            args: Prisma.PartnershipSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnershipSubmissionPayload>
          }
          createMany: {
            args: Prisma.PartnershipSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnershipSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnershipSubmissionPayload>[]
          }
          delete: {
            args: Prisma.PartnershipSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnershipSubmissionPayload>
          }
          update: {
            args: Prisma.PartnershipSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnershipSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.PartnershipSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnershipSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnershipSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnershipSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.PartnershipSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnershipSubmissionPayload>
          }
          aggregate: {
            args: Prisma.PartnershipSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartnershipSubmission>
          }
          groupBy: {
            args: Prisma.PartnershipSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnershipSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnershipSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<PartnershipSubmissionCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceWindow: {
        payload: Prisma.$MaintenanceWindowPayload<ExtArgs>
        fields: Prisma.MaintenanceWindowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceWindowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceWindowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceWindowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceWindowPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceWindowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceWindowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceWindowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceWindowPayload>
          }
          findMany: {
            args: Prisma.MaintenanceWindowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceWindowPayload>[]
          }
          create: {
            args: Prisma.MaintenanceWindowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceWindowPayload>
          }
          createMany: {
            args: Prisma.MaintenanceWindowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceWindowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceWindowPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceWindowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceWindowPayload>
          }
          update: {
            args: Prisma.MaintenanceWindowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceWindowPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceWindowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceWindowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceWindowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceWindowPayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceWindowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceWindowPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceWindowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceWindow>
          }
          groupBy: {
            args: Prisma.MaintenanceWindowGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceWindowGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceWindowCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceWindowCountAggregateOutputType> | number
          }
        }
      }
      SystemHealthReport: {
        payload: Prisma.$SystemHealthReportPayload<ExtArgs>
        fields: Prisma.SystemHealthReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemHealthReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemHealthReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemHealthReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemHealthReportPayload>
          }
          findFirst: {
            args: Prisma.SystemHealthReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemHealthReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemHealthReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemHealthReportPayload>
          }
          findMany: {
            args: Prisma.SystemHealthReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemHealthReportPayload>[]
          }
          create: {
            args: Prisma.SystemHealthReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemHealthReportPayload>
          }
          createMany: {
            args: Prisma.SystemHealthReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemHealthReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemHealthReportPayload>[]
          }
          delete: {
            args: Prisma.SystemHealthReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemHealthReportPayload>
          }
          update: {
            args: Prisma.SystemHealthReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemHealthReportPayload>
          }
          deleteMany: {
            args: Prisma.SystemHealthReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemHealthReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemHealthReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemHealthReportPayload>[]
          }
          upsert: {
            args: Prisma.SystemHealthReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemHealthReportPayload>
          }
          aggregate: {
            args: Prisma.SystemHealthReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemHealthReport>
          }
          groupBy: {
            args: Prisma.SystemHealthReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemHealthReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemHealthReportCountArgs<ExtArgs>
            result: $Utils.Optional<SystemHealthReportCountAggregateOutputType> | number
          }
        }
      }
      AdminToken: {
        payload: Prisma.$AdminTokenPayload<ExtArgs>
        fields: Prisma.AdminTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminTokenPayload>
          }
          findFirst: {
            args: Prisma.AdminTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminTokenPayload>
          }
          findMany: {
            args: Prisma.AdminTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminTokenPayload>[]
          }
          create: {
            args: Prisma.AdminTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminTokenPayload>
          }
          createMany: {
            args: Prisma.AdminTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminTokenPayload>[]
          }
          delete: {
            args: Prisma.AdminTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminTokenPayload>
          }
          update: {
            args: Prisma.AdminTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminTokenPayload>
          }
          deleteMany: {
            args: Prisma.AdminTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminTokenPayload>[]
          }
          upsert: {
            args: Prisma.AdminTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminTokenPayload>
          }
          aggregate: {
            args: Prisma.AdminTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminToken>
          }
          groupBy: {
            args: Prisma.AdminTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminTokenCountArgs<ExtArgs>
            result: $Utils.Optional<AdminTokenCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      AccountDeletionRequest: {
        payload: Prisma.$AccountDeletionRequestPayload<ExtArgs>
        fields: Prisma.AccountDeletionRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountDeletionRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountDeletionRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>
          }
          findFirst: {
            args: Prisma.AccountDeletionRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountDeletionRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>
          }
          findMany: {
            args: Prisma.AccountDeletionRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>[]
          }
          create: {
            args: Prisma.AccountDeletionRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>
          }
          createMany: {
            args: Prisma.AccountDeletionRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountDeletionRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>[]
          }
          delete: {
            args: Prisma.AccountDeletionRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>
          }
          update: {
            args: Prisma.AccountDeletionRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeletionRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountDeletionRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountDeletionRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>[]
          }
          upsert: {
            args: Prisma.AccountDeletionRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>
          }
          aggregate: {
            args: Prisma.AccountDeletionRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountDeletionRequest>
          }
          groupBy: {
            args: Prisma.AccountDeletionRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountDeletionRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountDeletionRequestCountArgs<ExtArgs>
            result: $Utils.Optional<AccountDeletionRequestCountAggregateOutputType> | number
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
    betaSignup?: BetaSignupOmit
    jobPosting?: JobPostingOmit
    careerApplication?: CareerApplicationOmit
    partnershipSubmission?: PartnershipSubmissionOmit
    maintenanceWindow?: MaintenanceWindowOmit
    systemHealthReport?: SystemHealthReportOmit
    adminToken?: AdminTokenOmit
    auditLog?: AuditLogOmit
    accountDeletionRequest?: AccountDeletionRequestOmit
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
   * Count Type JobPostingCountOutputType
   */

  export type JobPostingCountOutputType = {
    applications: number
  }

  export type JobPostingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobPostingCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * JobPostingCountOutputType without action
   */
  export type JobPostingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPostingCountOutputType
     */
    select?: JobPostingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobPostingCountOutputType without action
   */
  export type JobPostingCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerApplicationWhereInput
  }


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
   * Model BetaSignup
   */

  export type AggregateBetaSignup = {
    _count: BetaSignupCountAggregateOutputType | null
    _avg: BetaSignupAvgAggregateOutputType | null
    _sum: BetaSignupSumAggregateOutputType | null
    _min: BetaSignupMinAggregateOutputType | null
    _max: BetaSignupMaxAggregateOutputType | null
  }

  export type BetaSignupAvgAggregateOutputType = {
    id: number | null
    queuePosition: number | null
  }

  export type BetaSignupSumAggregateOutputType = {
    id: number | null
    queuePosition: number | null
  }

  export type BetaSignupMinAggregateOutputType = {
    id: number | null
    role: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    country: string | null
    device: string | null
    ipAddress: string | null
    userAgent: string | null
    status: string | null
    queuePosition: number | null
    payMethod: string | null
    age: string | null
    businessName: string | null
    businessCategory: string | null
    yearsInBusiness: string | null
    justStarting: string | null
    companyName: string | null
    areasCovered: string | null
    fleetSize: string | null
    yearsLogistics: string | null
    logisticsType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BetaSignupMaxAggregateOutputType = {
    id: number | null
    role: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    country: string | null
    device: string | null
    ipAddress: string | null
    userAgent: string | null
    status: string | null
    queuePosition: number | null
    payMethod: string | null
    age: string | null
    businessName: string | null
    businessCategory: string | null
    yearsInBusiness: string | null
    justStarting: string | null
    companyName: string | null
    areasCovered: string | null
    fleetSize: string | null
    yearsLogistics: string | null
    logisticsType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BetaSignupCountAggregateOutputType = {
    id: number
    role: number
    fullName: number
    email: number
    phone: number
    country: number
    device: number
    ipAddress: number
    userAgent: number
    status: number
    queuePosition: number
    shopsFor: number
    payMethod: number
    age: number
    businessName: number
    businessCategory: number
    needs: number
    yearsInBusiness: number
    justStarting: number
    companyName: number
    serviceTypes: number
    areasCovered: number
    fleetSize: number
    yearsLogistics: number
    logisticsType: number
    vehicleTypes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BetaSignupAvgAggregateInputType = {
    id?: true
    queuePosition?: true
  }

  export type BetaSignupSumAggregateInputType = {
    id?: true
    queuePosition?: true
  }

  export type BetaSignupMinAggregateInputType = {
    id?: true
    role?: true
    fullName?: true
    email?: true
    phone?: true
    country?: true
    device?: true
    ipAddress?: true
    userAgent?: true
    status?: true
    queuePosition?: true
    payMethod?: true
    age?: true
    businessName?: true
    businessCategory?: true
    yearsInBusiness?: true
    justStarting?: true
    companyName?: true
    areasCovered?: true
    fleetSize?: true
    yearsLogistics?: true
    logisticsType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BetaSignupMaxAggregateInputType = {
    id?: true
    role?: true
    fullName?: true
    email?: true
    phone?: true
    country?: true
    device?: true
    ipAddress?: true
    userAgent?: true
    status?: true
    queuePosition?: true
    payMethod?: true
    age?: true
    businessName?: true
    businessCategory?: true
    yearsInBusiness?: true
    justStarting?: true
    companyName?: true
    areasCovered?: true
    fleetSize?: true
    yearsLogistics?: true
    logisticsType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BetaSignupCountAggregateInputType = {
    id?: true
    role?: true
    fullName?: true
    email?: true
    phone?: true
    country?: true
    device?: true
    ipAddress?: true
    userAgent?: true
    status?: true
    queuePosition?: true
    shopsFor?: true
    payMethod?: true
    age?: true
    businessName?: true
    businessCategory?: true
    needs?: true
    yearsInBusiness?: true
    justStarting?: true
    companyName?: true
    serviceTypes?: true
    areasCovered?: true
    fleetSize?: true
    yearsLogistics?: true
    logisticsType?: true
    vehicleTypes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BetaSignupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetaSignup to aggregate.
     */
    where?: BetaSignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetaSignups to fetch.
     */
    orderBy?: BetaSignupOrderByWithRelationInput | BetaSignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetaSignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetaSignups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetaSignups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BetaSignups
    **/
    _count?: true | BetaSignupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetaSignupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetaSignupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetaSignupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetaSignupMaxAggregateInputType
  }

  export type GetBetaSignupAggregateType<T extends BetaSignupAggregateArgs> = {
        [P in keyof T & keyof AggregateBetaSignup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBetaSignup[P]>
      : GetScalarType<T[P], AggregateBetaSignup[P]>
  }




  export type BetaSignupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetaSignupWhereInput
    orderBy?: BetaSignupOrderByWithAggregationInput | BetaSignupOrderByWithAggregationInput[]
    by: BetaSignupScalarFieldEnum[] | BetaSignupScalarFieldEnum
    having?: BetaSignupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetaSignupCountAggregateInputType | true
    _avg?: BetaSignupAvgAggregateInputType
    _sum?: BetaSignupSumAggregateInputType
    _min?: BetaSignupMinAggregateInputType
    _max?: BetaSignupMaxAggregateInputType
  }

  export type BetaSignupGroupByOutputType = {
    id: number
    role: string
    fullName: string
    email: string
    phone: string | null
    country: string
    device: string | null
    ipAddress: string | null
    userAgent: string | null
    status: string
    queuePosition: number | null
    shopsFor: string[]
    payMethod: string | null
    age: string | null
    businessName: string | null
    businessCategory: string | null
    needs: string[]
    yearsInBusiness: string | null
    justStarting: string | null
    companyName: string | null
    serviceTypes: string[]
    areasCovered: string | null
    fleetSize: string | null
    yearsLogistics: string | null
    logisticsType: string | null
    vehicleTypes: string[]
    createdAt: Date
    updatedAt: Date
    _count: BetaSignupCountAggregateOutputType | null
    _avg: BetaSignupAvgAggregateOutputType | null
    _sum: BetaSignupSumAggregateOutputType | null
    _min: BetaSignupMinAggregateOutputType | null
    _max: BetaSignupMaxAggregateOutputType | null
  }

  type GetBetaSignupGroupByPayload<T extends BetaSignupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetaSignupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetaSignupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetaSignupGroupByOutputType[P]>
            : GetScalarType<T[P], BetaSignupGroupByOutputType[P]>
        }
      >
    >


  export type BetaSignupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    device?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    queuePosition?: boolean
    shopsFor?: boolean
    payMethod?: boolean
    age?: boolean
    businessName?: boolean
    businessCategory?: boolean
    needs?: boolean
    yearsInBusiness?: boolean
    justStarting?: boolean
    companyName?: boolean
    serviceTypes?: boolean
    areasCovered?: boolean
    fleetSize?: boolean
    yearsLogistics?: boolean
    logisticsType?: boolean
    vehicleTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["betaSignup"]>

  export type BetaSignupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    device?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    queuePosition?: boolean
    shopsFor?: boolean
    payMethod?: boolean
    age?: boolean
    businessName?: boolean
    businessCategory?: boolean
    needs?: boolean
    yearsInBusiness?: boolean
    justStarting?: boolean
    companyName?: boolean
    serviceTypes?: boolean
    areasCovered?: boolean
    fleetSize?: boolean
    yearsLogistics?: boolean
    logisticsType?: boolean
    vehicleTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["betaSignup"]>

  export type BetaSignupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    device?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    queuePosition?: boolean
    shopsFor?: boolean
    payMethod?: boolean
    age?: boolean
    businessName?: boolean
    businessCategory?: boolean
    needs?: boolean
    yearsInBusiness?: boolean
    justStarting?: boolean
    companyName?: boolean
    serviceTypes?: boolean
    areasCovered?: boolean
    fleetSize?: boolean
    yearsLogistics?: boolean
    logisticsType?: boolean
    vehicleTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["betaSignup"]>

  export type BetaSignupSelectScalar = {
    id?: boolean
    role?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    device?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    status?: boolean
    queuePosition?: boolean
    shopsFor?: boolean
    payMethod?: boolean
    age?: boolean
    businessName?: boolean
    businessCategory?: boolean
    needs?: boolean
    yearsInBusiness?: boolean
    justStarting?: boolean
    companyName?: boolean
    serviceTypes?: boolean
    areasCovered?: boolean
    fleetSize?: boolean
    yearsLogistics?: boolean
    logisticsType?: boolean
    vehicleTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BetaSignupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "fullName" | "email" | "phone" | "country" | "device" | "ipAddress" | "userAgent" | "status" | "queuePosition" | "shopsFor" | "payMethod" | "age" | "businessName" | "businessCategory" | "needs" | "yearsInBusiness" | "justStarting" | "companyName" | "serviceTypes" | "areasCovered" | "fleetSize" | "yearsLogistics" | "logisticsType" | "vehicleTypes" | "createdAt" | "updatedAt", ExtArgs["result"]["betaSignup"]>

  export type $BetaSignupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BetaSignup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: string
      fullName: string
      email: string
      phone: string | null
      country: string
      device: string | null
      ipAddress: string | null
      userAgent: string | null
      status: string
      queuePosition: number | null
      shopsFor: string[]
      payMethod: string | null
      age: string | null
      businessName: string | null
      businessCategory: string | null
      needs: string[]
      yearsInBusiness: string | null
      justStarting: string | null
      companyName: string | null
      serviceTypes: string[]
      areasCovered: string | null
      fleetSize: string | null
      yearsLogistics: string | null
      logisticsType: string | null
      vehicleTypes: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["betaSignup"]>
    composites: {}
  }

  type BetaSignupGetPayload<S extends boolean | null | undefined | BetaSignupDefaultArgs> = $Result.GetResult<Prisma.$BetaSignupPayload, S>

  type BetaSignupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BetaSignupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BetaSignupCountAggregateInputType | true
    }

  export interface BetaSignupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BetaSignup'], meta: { name: 'BetaSignup' } }
    /**
     * Find zero or one BetaSignup that matches the filter.
     * @param {BetaSignupFindUniqueArgs} args - Arguments to find a BetaSignup
     * @example
     * // Get one BetaSignup
     * const betaSignup = await prisma.betaSignup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetaSignupFindUniqueArgs>(args: SelectSubset<T, BetaSignupFindUniqueArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BetaSignup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BetaSignupFindUniqueOrThrowArgs} args - Arguments to find a BetaSignup
     * @example
     * // Get one BetaSignup
     * const betaSignup = await prisma.betaSignup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetaSignupFindUniqueOrThrowArgs>(args: SelectSubset<T, BetaSignupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BetaSignup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupFindFirstArgs} args - Arguments to find a BetaSignup
     * @example
     * // Get one BetaSignup
     * const betaSignup = await prisma.betaSignup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetaSignupFindFirstArgs>(args?: SelectSubset<T, BetaSignupFindFirstArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BetaSignup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupFindFirstOrThrowArgs} args - Arguments to find a BetaSignup
     * @example
     * // Get one BetaSignup
     * const betaSignup = await prisma.betaSignup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetaSignupFindFirstOrThrowArgs>(args?: SelectSubset<T, BetaSignupFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BetaSignups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BetaSignups
     * const betaSignups = await prisma.betaSignup.findMany()
     * 
     * // Get first 10 BetaSignups
     * const betaSignups = await prisma.betaSignup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betaSignupWithIdOnly = await prisma.betaSignup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetaSignupFindManyArgs>(args?: SelectSubset<T, BetaSignupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BetaSignup.
     * @param {BetaSignupCreateArgs} args - Arguments to create a BetaSignup.
     * @example
     * // Create one BetaSignup
     * const BetaSignup = await prisma.betaSignup.create({
     *   data: {
     *     // ... data to create a BetaSignup
     *   }
     * })
     * 
     */
    create<T extends BetaSignupCreateArgs>(args: SelectSubset<T, BetaSignupCreateArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BetaSignups.
     * @param {BetaSignupCreateManyArgs} args - Arguments to create many BetaSignups.
     * @example
     * // Create many BetaSignups
     * const betaSignup = await prisma.betaSignup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetaSignupCreateManyArgs>(args?: SelectSubset<T, BetaSignupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BetaSignups and returns the data saved in the database.
     * @param {BetaSignupCreateManyAndReturnArgs} args - Arguments to create many BetaSignups.
     * @example
     * // Create many BetaSignups
     * const betaSignup = await prisma.betaSignup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BetaSignups and only return the `id`
     * const betaSignupWithIdOnly = await prisma.betaSignup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BetaSignupCreateManyAndReturnArgs>(args?: SelectSubset<T, BetaSignupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BetaSignup.
     * @param {BetaSignupDeleteArgs} args - Arguments to delete one BetaSignup.
     * @example
     * // Delete one BetaSignup
     * const BetaSignup = await prisma.betaSignup.delete({
     *   where: {
     *     // ... filter to delete one BetaSignup
     *   }
     * })
     * 
     */
    delete<T extends BetaSignupDeleteArgs>(args: SelectSubset<T, BetaSignupDeleteArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BetaSignup.
     * @param {BetaSignupUpdateArgs} args - Arguments to update one BetaSignup.
     * @example
     * // Update one BetaSignup
     * const betaSignup = await prisma.betaSignup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetaSignupUpdateArgs>(args: SelectSubset<T, BetaSignupUpdateArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BetaSignups.
     * @param {BetaSignupDeleteManyArgs} args - Arguments to filter BetaSignups to delete.
     * @example
     * // Delete a few BetaSignups
     * const { count } = await prisma.betaSignup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetaSignupDeleteManyArgs>(args?: SelectSubset<T, BetaSignupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetaSignups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BetaSignups
     * const betaSignup = await prisma.betaSignup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetaSignupUpdateManyArgs>(args: SelectSubset<T, BetaSignupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetaSignups and returns the data updated in the database.
     * @param {BetaSignupUpdateManyAndReturnArgs} args - Arguments to update many BetaSignups.
     * @example
     * // Update many BetaSignups
     * const betaSignup = await prisma.betaSignup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BetaSignups and only return the `id`
     * const betaSignupWithIdOnly = await prisma.betaSignup.updateManyAndReturn({
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
    updateManyAndReturn<T extends BetaSignupUpdateManyAndReturnArgs>(args: SelectSubset<T, BetaSignupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BetaSignup.
     * @param {BetaSignupUpsertArgs} args - Arguments to update or create a BetaSignup.
     * @example
     * // Update or create a BetaSignup
     * const betaSignup = await prisma.betaSignup.upsert({
     *   create: {
     *     // ... data to create a BetaSignup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BetaSignup we want to update
     *   }
     * })
     */
    upsert<T extends BetaSignupUpsertArgs>(args: SelectSubset<T, BetaSignupUpsertArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BetaSignups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupCountArgs} args - Arguments to filter BetaSignups to count.
     * @example
     * // Count the number of BetaSignups
     * const count = await prisma.betaSignup.count({
     *   where: {
     *     // ... the filter for the BetaSignups we want to count
     *   }
     * })
    **/
    count<T extends BetaSignupCountArgs>(
      args?: Subset<T, BetaSignupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetaSignupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BetaSignup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BetaSignupAggregateArgs>(args: Subset<T, BetaSignupAggregateArgs>): Prisma.PrismaPromise<GetBetaSignupAggregateType<T>>

    /**
     * Group by BetaSignup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupGroupByArgs} args - Group by arguments.
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
      T extends BetaSignupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetaSignupGroupByArgs['orderBy'] }
        : { orderBy?: BetaSignupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BetaSignupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetaSignupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BetaSignup model
   */
  readonly fields: BetaSignupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BetaSignup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetaSignupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BetaSignup model
   */
  interface BetaSignupFieldRefs {
    readonly id: FieldRef<"BetaSignup", 'Int'>
    readonly role: FieldRef<"BetaSignup", 'String'>
    readonly fullName: FieldRef<"BetaSignup", 'String'>
    readonly email: FieldRef<"BetaSignup", 'String'>
    readonly phone: FieldRef<"BetaSignup", 'String'>
    readonly country: FieldRef<"BetaSignup", 'String'>
    readonly device: FieldRef<"BetaSignup", 'String'>
    readonly ipAddress: FieldRef<"BetaSignup", 'String'>
    readonly userAgent: FieldRef<"BetaSignup", 'String'>
    readonly status: FieldRef<"BetaSignup", 'String'>
    readonly queuePosition: FieldRef<"BetaSignup", 'Int'>
    readonly shopsFor: FieldRef<"BetaSignup", 'String[]'>
    readonly payMethod: FieldRef<"BetaSignup", 'String'>
    readonly age: FieldRef<"BetaSignup", 'String'>
    readonly businessName: FieldRef<"BetaSignup", 'String'>
    readonly businessCategory: FieldRef<"BetaSignup", 'String'>
    readonly needs: FieldRef<"BetaSignup", 'String[]'>
    readonly yearsInBusiness: FieldRef<"BetaSignup", 'String'>
    readonly justStarting: FieldRef<"BetaSignup", 'String'>
    readonly companyName: FieldRef<"BetaSignup", 'String'>
    readonly serviceTypes: FieldRef<"BetaSignup", 'String[]'>
    readonly areasCovered: FieldRef<"BetaSignup", 'String'>
    readonly fleetSize: FieldRef<"BetaSignup", 'String'>
    readonly yearsLogistics: FieldRef<"BetaSignup", 'String'>
    readonly logisticsType: FieldRef<"BetaSignup", 'String'>
    readonly vehicleTypes: FieldRef<"BetaSignup", 'String[]'>
    readonly createdAt: FieldRef<"BetaSignup", 'DateTime'>
    readonly updatedAt: FieldRef<"BetaSignup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BetaSignup findUnique
   */
  export type BetaSignupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetaSignup
     */
    omit?: BetaSignupOmit<ExtArgs> | null
    /**
     * Filter, which BetaSignup to fetch.
     */
    where: BetaSignupWhereUniqueInput
  }

  /**
   * BetaSignup findUniqueOrThrow
   */
  export type BetaSignupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetaSignup
     */
    omit?: BetaSignupOmit<ExtArgs> | null
    /**
     * Filter, which BetaSignup to fetch.
     */
    where: BetaSignupWhereUniqueInput
  }

  /**
   * BetaSignup findFirst
   */
  export type BetaSignupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetaSignup
     */
    omit?: BetaSignupOmit<ExtArgs> | null
    /**
     * Filter, which BetaSignup to fetch.
     */
    where?: BetaSignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetaSignups to fetch.
     */
    orderBy?: BetaSignupOrderByWithRelationInput | BetaSignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetaSignups.
     */
    cursor?: BetaSignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetaSignups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetaSignups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetaSignups.
     */
    distinct?: BetaSignupScalarFieldEnum | BetaSignupScalarFieldEnum[]
  }

  /**
   * BetaSignup findFirstOrThrow
   */
  export type BetaSignupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetaSignup
     */
    omit?: BetaSignupOmit<ExtArgs> | null
    /**
     * Filter, which BetaSignup to fetch.
     */
    where?: BetaSignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetaSignups to fetch.
     */
    orderBy?: BetaSignupOrderByWithRelationInput | BetaSignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetaSignups.
     */
    cursor?: BetaSignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetaSignups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetaSignups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetaSignups.
     */
    distinct?: BetaSignupScalarFieldEnum | BetaSignupScalarFieldEnum[]
  }

  /**
   * BetaSignup findMany
   */
  export type BetaSignupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetaSignup
     */
    omit?: BetaSignupOmit<ExtArgs> | null
    /**
     * Filter, which BetaSignups to fetch.
     */
    where?: BetaSignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetaSignups to fetch.
     */
    orderBy?: BetaSignupOrderByWithRelationInput | BetaSignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BetaSignups.
     */
    cursor?: BetaSignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetaSignups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetaSignups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetaSignups.
     */
    distinct?: BetaSignupScalarFieldEnum | BetaSignupScalarFieldEnum[]
  }

  /**
   * BetaSignup create
   */
  export type BetaSignupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetaSignup
     */
    omit?: BetaSignupOmit<ExtArgs> | null
    /**
     * The data needed to create a BetaSignup.
     */
    data: XOR<BetaSignupCreateInput, BetaSignupUncheckedCreateInput>
  }

  /**
   * BetaSignup createMany
   */
  export type BetaSignupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BetaSignups.
     */
    data: BetaSignupCreateManyInput | BetaSignupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BetaSignup createManyAndReturn
   */
  export type BetaSignupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BetaSignup
     */
    omit?: BetaSignupOmit<ExtArgs> | null
    /**
     * The data used to create many BetaSignups.
     */
    data: BetaSignupCreateManyInput | BetaSignupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BetaSignup update
   */
  export type BetaSignupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetaSignup
     */
    omit?: BetaSignupOmit<ExtArgs> | null
    /**
     * The data needed to update a BetaSignup.
     */
    data: XOR<BetaSignupUpdateInput, BetaSignupUncheckedUpdateInput>
    /**
     * Choose, which BetaSignup to update.
     */
    where: BetaSignupWhereUniqueInput
  }

  /**
   * BetaSignup updateMany
   */
  export type BetaSignupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BetaSignups.
     */
    data: XOR<BetaSignupUpdateManyMutationInput, BetaSignupUncheckedUpdateManyInput>
    /**
     * Filter which BetaSignups to update
     */
    where?: BetaSignupWhereInput
    /**
     * Limit how many BetaSignups to update.
     */
    limit?: number
  }

  /**
   * BetaSignup updateManyAndReturn
   */
  export type BetaSignupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BetaSignup
     */
    omit?: BetaSignupOmit<ExtArgs> | null
    /**
     * The data used to update BetaSignups.
     */
    data: XOR<BetaSignupUpdateManyMutationInput, BetaSignupUncheckedUpdateManyInput>
    /**
     * Filter which BetaSignups to update
     */
    where?: BetaSignupWhereInput
    /**
     * Limit how many BetaSignups to update.
     */
    limit?: number
  }

  /**
   * BetaSignup upsert
   */
  export type BetaSignupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetaSignup
     */
    omit?: BetaSignupOmit<ExtArgs> | null
    /**
     * The filter to search for the BetaSignup to update in case it exists.
     */
    where: BetaSignupWhereUniqueInput
    /**
     * In case the BetaSignup found by the `where` argument doesn't exist, create a new BetaSignup with this data.
     */
    create: XOR<BetaSignupCreateInput, BetaSignupUncheckedCreateInput>
    /**
     * In case the BetaSignup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetaSignupUpdateInput, BetaSignupUncheckedUpdateInput>
  }

  /**
   * BetaSignup delete
   */
  export type BetaSignupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetaSignup
     */
    omit?: BetaSignupOmit<ExtArgs> | null
    /**
     * Filter which BetaSignup to delete.
     */
    where: BetaSignupWhereUniqueInput
  }

  /**
   * BetaSignup deleteMany
   */
  export type BetaSignupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetaSignups to delete
     */
    where?: BetaSignupWhereInput
    /**
     * Limit how many BetaSignups to delete.
     */
    limit?: number
  }

  /**
   * BetaSignup without action
   */
  export type BetaSignupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetaSignup
     */
    omit?: BetaSignupOmit<ExtArgs> | null
  }


  /**
   * Model JobPosting
   */

  export type AggregateJobPosting = {
    _count: JobPostingCountAggregateOutputType | null
    _avg: JobPostingAvgAggregateOutputType | null
    _sum: JobPostingSumAggregateOutputType | null
    _min: JobPostingMinAggregateOutputType | null
    _max: JobPostingMaxAggregateOutputType | null
  }

  export type JobPostingAvgAggregateOutputType = {
    id: number | null
  }

  export type JobPostingSumAggregateOutputType = {
    id: number | null
  }

  export type JobPostingMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    requirements: string | null
    department: string | null
    location: string | null
    employmentType: string | null
    salaryRange: string | null
    experienceLevel: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobPostingMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    requirements: string | null
    department: string | null
    location: string | null
    employmentType: string | null
    salaryRange: string | null
    experienceLevel: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobPostingCountAggregateOutputType = {
    id: number
    title: number
    description: number
    requirements: number
    department: number
    location: number
    employmentType: number
    salaryRange: number
    experienceLevel: number
    status: number
    customFields: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobPostingAvgAggregateInputType = {
    id?: true
  }

  export type JobPostingSumAggregateInputType = {
    id?: true
  }

  export type JobPostingMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    requirements?: true
    department?: true
    location?: true
    employmentType?: true
    salaryRange?: true
    experienceLevel?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobPostingMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    requirements?: true
    department?: true
    location?: true
    employmentType?: true
    salaryRange?: true
    experienceLevel?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobPostingCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    requirements?: true
    department?: true
    location?: true
    employmentType?: true
    salaryRange?: true
    experienceLevel?: true
    status?: true
    customFields?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobPostingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPosting to aggregate.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobPostings
    **/
    _count?: true | JobPostingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobPostingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobPostingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobPostingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobPostingMaxAggregateInputType
  }

  export type GetJobPostingAggregateType<T extends JobPostingAggregateArgs> = {
        [P in keyof T & keyof AggregateJobPosting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobPosting[P]>
      : GetScalarType<T[P], AggregateJobPosting[P]>
  }




  export type JobPostingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostingWhereInput
    orderBy?: JobPostingOrderByWithAggregationInput | JobPostingOrderByWithAggregationInput[]
    by: JobPostingScalarFieldEnum[] | JobPostingScalarFieldEnum
    having?: JobPostingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobPostingCountAggregateInputType | true
    _avg?: JobPostingAvgAggregateInputType
    _sum?: JobPostingSumAggregateInputType
    _min?: JobPostingMinAggregateInputType
    _max?: JobPostingMaxAggregateInputType
  }

  export type JobPostingGroupByOutputType = {
    id: number
    title: string
    description: string
    requirements: string
    department: string
    location: string
    employmentType: string
    salaryRange: string | null
    experienceLevel: string
    status: string
    customFields: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: JobPostingCountAggregateOutputType | null
    _avg: JobPostingAvgAggregateOutputType | null
    _sum: JobPostingSumAggregateOutputType | null
    _min: JobPostingMinAggregateOutputType | null
    _max: JobPostingMaxAggregateOutputType | null
  }

  type GetJobPostingGroupByPayload<T extends JobPostingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobPostingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobPostingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
            : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
        }
      >
    >


  export type JobPostingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    requirements?: boolean
    department?: boolean
    location?: boolean
    employmentType?: boolean
    salaryRange?: boolean
    experienceLevel?: boolean
    status?: boolean
    customFields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applications?: boolean | JobPosting$applicationsArgs<ExtArgs>
    _count?: boolean | JobPostingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    requirements?: boolean
    department?: boolean
    location?: boolean
    employmentType?: boolean
    salaryRange?: boolean
    experienceLevel?: boolean
    status?: boolean
    customFields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    requirements?: boolean
    department?: boolean
    location?: boolean
    employmentType?: boolean
    salaryRange?: boolean
    experienceLevel?: boolean
    status?: boolean
    customFields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    requirements?: boolean
    department?: boolean
    location?: boolean
    employmentType?: boolean
    salaryRange?: boolean
    experienceLevel?: boolean
    status?: boolean
    customFields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobPostingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "requirements" | "department" | "location" | "employmentType" | "salaryRange" | "experienceLevel" | "status" | "customFields" | "createdAt" | "updatedAt", ExtArgs["result"]["jobPosting"]>
  export type JobPostingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobPosting$applicationsArgs<ExtArgs>
    _count?: boolean | JobPostingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobPostingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JobPostingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobPostingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobPosting"
    objects: {
      applications: Prisma.$CareerApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      requirements: string
      department: string
      location: string
      employmentType: string
      salaryRange: string | null
      experienceLevel: string
      status: string
      customFields: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobPosting"]>
    composites: {}
  }

  type JobPostingGetPayload<S extends boolean | null | undefined | JobPostingDefaultArgs> = $Result.GetResult<Prisma.$JobPostingPayload, S>

  type JobPostingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobPostingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobPostingCountAggregateInputType | true
    }

  export interface JobPostingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobPosting'], meta: { name: 'JobPosting' } }
    /**
     * Find zero or one JobPosting that matches the filter.
     * @param {JobPostingFindUniqueArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobPostingFindUniqueArgs>(args: SelectSubset<T, JobPostingFindUniqueArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobPosting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobPostingFindUniqueOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobPostingFindUniqueOrThrowArgs>(args: SelectSubset<T, JobPostingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPosting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobPostingFindFirstArgs>(args?: SelectSubset<T, JobPostingFindFirstArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPosting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobPostingFindFirstOrThrowArgs>(args?: SelectSubset<T, JobPostingFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobPostings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobPostings
     * const jobPostings = await prisma.jobPosting.findMany()
     * 
     * // Get first 10 JobPostings
     * const jobPostings = await prisma.jobPosting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobPostingFindManyArgs>(args?: SelectSubset<T, JobPostingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobPosting.
     * @param {JobPostingCreateArgs} args - Arguments to create a JobPosting.
     * @example
     * // Create one JobPosting
     * const JobPosting = await prisma.jobPosting.create({
     *   data: {
     *     // ... data to create a JobPosting
     *   }
     * })
     * 
     */
    create<T extends JobPostingCreateArgs>(args: SelectSubset<T, JobPostingCreateArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobPostings.
     * @param {JobPostingCreateManyArgs} args - Arguments to create many JobPostings.
     * @example
     * // Create many JobPostings
     * const jobPosting = await prisma.jobPosting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobPostingCreateManyArgs>(args?: SelectSubset<T, JobPostingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobPostings and returns the data saved in the database.
     * @param {JobPostingCreateManyAndReturnArgs} args - Arguments to create many JobPostings.
     * @example
     * // Create many JobPostings
     * const jobPosting = await prisma.jobPosting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobPostings and only return the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobPostingCreateManyAndReturnArgs>(args?: SelectSubset<T, JobPostingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobPosting.
     * @param {JobPostingDeleteArgs} args - Arguments to delete one JobPosting.
     * @example
     * // Delete one JobPosting
     * const JobPosting = await prisma.jobPosting.delete({
     *   where: {
     *     // ... filter to delete one JobPosting
     *   }
     * })
     * 
     */
    delete<T extends JobPostingDeleteArgs>(args: SelectSubset<T, JobPostingDeleteArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobPosting.
     * @param {JobPostingUpdateArgs} args - Arguments to update one JobPosting.
     * @example
     * // Update one JobPosting
     * const jobPosting = await prisma.jobPosting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobPostingUpdateArgs>(args: SelectSubset<T, JobPostingUpdateArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobPostings.
     * @param {JobPostingDeleteManyArgs} args - Arguments to filter JobPostings to delete.
     * @example
     * // Delete a few JobPostings
     * const { count } = await prisma.jobPosting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobPostingDeleteManyArgs>(args?: SelectSubset<T, JobPostingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobPostings
     * const jobPosting = await prisma.jobPosting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobPostingUpdateManyArgs>(args: SelectSubset<T, JobPostingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPostings and returns the data updated in the database.
     * @param {JobPostingUpdateManyAndReturnArgs} args - Arguments to update many JobPostings.
     * @example
     * // Update many JobPostings
     * const jobPosting = await prisma.jobPosting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobPostings and only return the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobPostingUpdateManyAndReturnArgs>(args: SelectSubset<T, JobPostingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobPosting.
     * @param {JobPostingUpsertArgs} args - Arguments to update or create a JobPosting.
     * @example
     * // Update or create a JobPosting
     * const jobPosting = await prisma.jobPosting.upsert({
     *   create: {
     *     // ... data to create a JobPosting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobPosting we want to update
     *   }
     * })
     */
    upsert<T extends JobPostingUpsertArgs>(args: SelectSubset<T, JobPostingUpsertArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingCountArgs} args - Arguments to filter JobPostings to count.
     * @example
     * // Count the number of JobPostings
     * const count = await prisma.jobPosting.count({
     *   where: {
     *     // ... the filter for the JobPostings we want to count
     *   }
     * })
    **/
    count<T extends JobPostingCountArgs>(
      args?: Subset<T, JobPostingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobPostingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobPostingAggregateArgs>(args: Subset<T, JobPostingAggregateArgs>): Prisma.PrismaPromise<GetJobPostingAggregateType<T>>

    /**
     * Group by JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingGroupByArgs} args - Group by arguments.
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
      T extends JobPostingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobPostingGroupByArgs['orderBy'] }
        : { orderBy?: JobPostingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobPostingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobPostingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobPosting model
   */
  readonly fields: JobPostingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobPosting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobPostingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends JobPosting$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, JobPosting$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the JobPosting model
   */
  interface JobPostingFieldRefs {
    readonly id: FieldRef<"JobPosting", 'Int'>
    readonly title: FieldRef<"JobPosting", 'String'>
    readonly description: FieldRef<"JobPosting", 'String'>
    readonly requirements: FieldRef<"JobPosting", 'String'>
    readonly department: FieldRef<"JobPosting", 'String'>
    readonly location: FieldRef<"JobPosting", 'String'>
    readonly employmentType: FieldRef<"JobPosting", 'String'>
    readonly salaryRange: FieldRef<"JobPosting", 'String'>
    readonly experienceLevel: FieldRef<"JobPosting", 'String'>
    readonly status: FieldRef<"JobPosting", 'String'>
    readonly customFields: FieldRef<"JobPosting", 'Json'>
    readonly createdAt: FieldRef<"JobPosting", 'DateTime'>
    readonly updatedAt: FieldRef<"JobPosting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobPosting findUnique
   */
  export type JobPostingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting findUniqueOrThrow
   */
  export type JobPostingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting findFirst
   */
  export type JobPostingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * JobPosting findFirstOrThrow
   */
  export type JobPostingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * JobPosting findMany
   */
  export type JobPostingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPostings to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * JobPosting create
   */
  export type JobPostingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The data needed to create a JobPosting.
     */
    data: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>
  }

  /**
   * JobPosting createMany
   */
  export type JobPostingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobPostings.
     */
    data: JobPostingCreateManyInput | JobPostingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobPosting createManyAndReturn
   */
  export type JobPostingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * The data used to create many JobPostings.
     */
    data: JobPostingCreateManyInput | JobPostingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobPosting update
   */
  export type JobPostingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The data needed to update a JobPosting.
     */
    data: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>
    /**
     * Choose, which JobPosting to update.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting updateMany
   */
  export type JobPostingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobPostings.
     */
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyInput>
    /**
     * Filter which JobPostings to update
     */
    where?: JobPostingWhereInput
    /**
     * Limit how many JobPostings to update.
     */
    limit?: number
  }

  /**
   * JobPosting updateManyAndReturn
   */
  export type JobPostingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * The data used to update JobPostings.
     */
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyInput>
    /**
     * Filter which JobPostings to update
     */
    where?: JobPostingWhereInput
    /**
     * Limit how many JobPostings to update.
     */
    limit?: number
  }

  /**
   * JobPosting upsert
   */
  export type JobPostingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The filter to search for the JobPosting to update in case it exists.
     */
    where: JobPostingWhereUniqueInput
    /**
     * In case the JobPosting found by the `where` argument doesn't exist, create a new JobPosting with this data.
     */
    create: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>
    /**
     * In case the JobPosting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>
  }

  /**
   * JobPosting delete
   */
  export type JobPostingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter which JobPosting to delete.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting deleteMany
   */
  export type JobPostingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPostings to delete
     */
    where?: JobPostingWhereInput
    /**
     * Limit how many JobPostings to delete.
     */
    limit?: number
  }

  /**
   * JobPosting.applications
   */
  export type JobPosting$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationInclude<ExtArgs> | null
    where?: CareerApplicationWhereInput
    orderBy?: CareerApplicationOrderByWithRelationInput | CareerApplicationOrderByWithRelationInput[]
    cursor?: CareerApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareerApplicationScalarFieldEnum | CareerApplicationScalarFieldEnum[]
  }

  /**
   * JobPosting without action
   */
  export type JobPostingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
  }


  /**
   * Model CareerApplication
   */

  export type AggregateCareerApplication = {
    _count: CareerApplicationCountAggregateOutputType | null
    _avg: CareerApplicationAvgAggregateOutputType | null
    _sum: CareerApplicationSumAggregateOutputType | null
    _min: CareerApplicationMinAggregateOutputType | null
    _max: CareerApplicationMaxAggregateOutputType | null
  }

  export type CareerApplicationAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
  }

  export type CareerApplicationSumAggregateOutputType = {
    id: number | null
    jobId: number | null
  }

  export type CareerApplicationMinAggregateOutputType = {
    id: number | null
    jobId: number | null
    applicantName: string | null
    email: string | null
    phone: string | null
    country: string | null
    address: string | null
    linkedInUrl: string | null
    portfolioUrl: string | null
    resumeUrl: string | null
    coverLetter: string | null
    status: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CareerApplicationMaxAggregateOutputType = {
    id: number | null
    jobId: number | null
    applicantName: string | null
    email: string | null
    phone: string | null
    country: string | null
    address: string | null
    linkedInUrl: string | null
    portfolioUrl: string | null
    resumeUrl: string | null
    coverLetter: string | null
    status: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CareerApplicationCountAggregateOutputType = {
    id: number
    jobId: number
    applicantName: number
    email: number
    phone: number
    country: number
    address: number
    linkedInUrl: number
    portfolioUrl: number
    resumeUrl: number
    coverLetter: number
    customResponses: number
    status: number
    ipAddress: number
    userAgent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CareerApplicationAvgAggregateInputType = {
    id?: true
    jobId?: true
  }

  export type CareerApplicationSumAggregateInputType = {
    id?: true
    jobId?: true
  }

  export type CareerApplicationMinAggregateInputType = {
    id?: true
    jobId?: true
    applicantName?: true
    email?: true
    phone?: true
    country?: true
    address?: true
    linkedInUrl?: true
    portfolioUrl?: true
    resumeUrl?: true
    coverLetter?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CareerApplicationMaxAggregateInputType = {
    id?: true
    jobId?: true
    applicantName?: true
    email?: true
    phone?: true
    country?: true
    address?: true
    linkedInUrl?: true
    portfolioUrl?: true
    resumeUrl?: true
    coverLetter?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CareerApplicationCountAggregateInputType = {
    id?: true
    jobId?: true
    applicantName?: true
    email?: true
    phone?: true
    country?: true
    address?: true
    linkedInUrl?: true
    portfolioUrl?: true
    resumeUrl?: true
    coverLetter?: true
    customResponses?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CareerApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareerApplication to aggregate.
     */
    where?: CareerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerApplications to fetch.
     */
    orderBy?: CareerApplicationOrderByWithRelationInput | CareerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CareerApplications
    **/
    _count?: true | CareerApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerApplicationMaxAggregateInputType
  }

  export type GetCareerApplicationAggregateType<T extends CareerApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateCareerApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareerApplication[P]>
      : GetScalarType<T[P], AggregateCareerApplication[P]>
  }




  export type CareerApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerApplicationWhereInput
    orderBy?: CareerApplicationOrderByWithAggregationInput | CareerApplicationOrderByWithAggregationInput[]
    by: CareerApplicationScalarFieldEnum[] | CareerApplicationScalarFieldEnum
    having?: CareerApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerApplicationCountAggregateInputType | true
    _avg?: CareerApplicationAvgAggregateInputType
    _sum?: CareerApplicationSumAggregateInputType
    _min?: CareerApplicationMinAggregateInputType
    _max?: CareerApplicationMaxAggregateInputType
  }

  export type CareerApplicationGroupByOutputType = {
    id: number
    jobId: number | null
    applicantName: string
    email: string
    phone: string | null
    country: string
    address: string | null
    linkedInUrl: string | null
    portfolioUrl: string | null
    resumeUrl: string | null
    coverLetter: string | null
    customResponses: JsonValue | null
    status: string
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    _count: CareerApplicationCountAggregateOutputType | null
    _avg: CareerApplicationAvgAggregateOutputType | null
    _sum: CareerApplicationSumAggregateOutputType | null
    _min: CareerApplicationMinAggregateOutputType | null
    _max: CareerApplicationMaxAggregateOutputType | null
  }

  type GetCareerApplicationGroupByPayload<T extends CareerApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], CareerApplicationGroupByOutputType[P]>
        }
      >
    >


  export type CareerApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    applicantName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    address?: boolean
    linkedInUrl?: boolean
    portfolioUrl?: boolean
    resumeUrl?: boolean
    coverLetter?: boolean
    customResponses?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | CareerApplication$jobArgs<ExtArgs>
  }, ExtArgs["result"]["careerApplication"]>

  export type CareerApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    applicantName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    address?: boolean
    linkedInUrl?: boolean
    portfolioUrl?: boolean
    resumeUrl?: boolean
    coverLetter?: boolean
    customResponses?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | CareerApplication$jobArgs<ExtArgs>
  }, ExtArgs["result"]["careerApplication"]>

  export type CareerApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    applicantName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    address?: boolean
    linkedInUrl?: boolean
    portfolioUrl?: boolean
    resumeUrl?: boolean
    coverLetter?: boolean
    customResponses?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | CareerApplication$jobArgs<ExtArgs>
  }, ExtArgs["result"]["careerApplication"]>

  export type CareerApplicationSelectScalar = {
    id?: boolean
    jobId?: boolean
    applicantName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    address?: boolean
    linkedInUrl?: boolean
    portfolioUrl?: boolean
    resumeUrl?: boolean
    coverLetter?: boolean
    customResponses?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CareerApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "applicantName" | "email" | "phone" | "country" | "address" | "linkedInUrl" | "portfolioUrl" | "resumeUrl" | "coverLetter" | "customResponses" | "status" | "ipAddress" | "userAgent" | "createdAt" | "updatedAt", ExtArgs["result"]["careerApplication"]>
  export type CareerApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | CareerApplication$jobArgs<ExtArgs>
  }
  export type CareerApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | CareerApplication$jobArgs<ExtArgs>
  }
  export type CareerApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | CareerApplication$jobArgs<ExtArgs>
  }

  export type $CareerApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CareerApplication"
    objects: {
      job: Prisma.$JobPostingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobId: number | null
      applicantName: string
      email: string
      phone: string | null
      country: string
      address: string | null
      linkedInUrl: string | null
      portfolioUrl: string | null
      resumeUrl: string | null
      coverLetter: string | null
      customResponses: Prisma.JsonValue | null
      status: string
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["careerApplication"]>
    composites: {}
  }

  type CareerApplicationGetPayload<S extends boolean | null | undefined | CareerApplicationDefaultArgs> = $Result.GetResult<Prisma.$CareerApplicationPayload, S>

  type CareerApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareerApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerApplicationCountAggregateInputType | true
    }

  export interface CareerApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CareerApplication'], meta: { name: 'CareerApplication' } }
    /**
     * Find zero or one CareerApplication that matches the filter.
     * @param {CareerApplicationFindUniqueArgs} args - Arguments to find a CareerApplication
     * @example
     * // Get one CareerApplication
     * const careerApplication = await prisma.careerApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareerApplicationFindUniqueArgs>(args: SelectSubset<T, CareerApplicationFindUniqueArgs<ExtArgs>>): Prisma__CareerApplicationClient<$Result.GetResult<Prisma.$CareerApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CareerApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareerApplicationFindUniqueOrThrowArgs} args - Arguments to find a CareerApplication
     * @example
     * // Get one CareerApplication
     * const careerApplication = await prisma.careerApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareerApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, CareerApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareerApplicationClient<$Result.GetResult<Prisma.$CareerApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareerApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerApplicationFindFirstArgs} args - Arguments to find a CareerApplication
     * @example
     * // Get one CareerApplication
     * const careerApplication = await prisma.careerApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareerApplicationFindFirstArgs>(args?: SelectSubset<T, CareerApplicationFindFirstArgs<ExtArgs>>): Prisma__CareerApplicationClient<$Result.GetResult<Prisma.$CareerApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareerApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerApplicationFindFirstOrThrowArgs} args - Arguments to find a CareerApplication
     * @example
     * // Get one CareerApplication
     * const careerApplication = await prisma.careerApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareerApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, CareerApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareerApplicationClient<$Result.GetResult<Prisma.$CareerApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CareerApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CareerApplications
     * const careerApplications = await prisma.careerApplication.findMany()
     * 
     * // Get first 10 CareerApplications
     * const careerApplications = await prisma.careerApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerApplicationWithIdOnly = await prisma.careerApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareerApplicationFindManyArgs>(args?: SelectSubset<T, CareerApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CareerApplication.
     * @param {CareerApplicationCreateArgs} args - Arguments to create a CareerApplication.
     * @example
     * // Create one CareerApplication
     * const CareerApplication = await prisma.careerApplication.create({
     *   data: {
     *     // ... data to create a CareerApplication
     *   }
     * })
     * 
     */
    create<T extends CareerApplicationCreateArgs>(args: SelectSubset<T, CareerApplicationCreateArgs<ExtArgs>>): Prisma__CareerApplicationClient<$Result.GetResult<Prisma.$CareerApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CareerApplications.
     * @param {CareerApplicationCreateManyArgs} args - Arguments to create many CareerApplications.
     * @example
     * // Create many CareerApplications
     * const careerApplication = await prisma.careerApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareerApplicationCreateManyArgs>(args?: SelectSubset<T, CareerApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CareerApplications and returns the data saved in the database.
     * @param {CareerApplicationCreateManyAndReturnArgs} args - Arguments to create many CareerApplications.
     * @example
     * // Create many CareerApplications
     * const careerApplication = await prisma.careerApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CareerApplications and only return the `id`
     * const careerApplicationWithIdOnly = await prisma.careerApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareerApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, CareerApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CareerApplication.
     * @param {CareerApplicationDeleteArgs} args - Arguments to delete one CareerApplication.
     * @example
     * // Delete one CareerApplication
     * const CareerApplication = await prisma.careerApplication.delete({
     *   where: {
     *     // ... filter to delete one CareerApplication
     *   }
     * })
     * 
     */
    delete<T extends CareerApplicationDeleteArgs>(args: SelectSubset<T, CareerApplicationDeleteArgs<ExtArgs>>): Prisma__CareerApplicationClient<$Result.GetResult<Prisma.$CareerApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CareerApplication.
     * @param {CareerApplicationUpdateArgs} args - Arguments to update one CareerApplication.
     * @example
     * // Update one CareerApplication
     * const careerApplication = await prisma.careerApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareerApplicationUpdateArgs>(args: SelectSubset<T, CareerApplicationUpdateArgs<ExtArgs>>): Prisma__CareerApplicationClient<$Result.GetResult<Prisma.$CareerApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CareerApplications.
     * @param {CareerApplicationDeleteManyArgs} args - Arguments to filter CareerApplications to delete.
     * @example
     * // Delete a few CareerApplications
     * const { count } = await prisma.careerApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareerApplicationDeleteManyArgs>(args?: SelectSubset<T, CareerApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareerApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CareerApplications
     * const careerApplication = await prisma.careerApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareerApplicationUpdateManyArgs>(args: SelectSubset<T, CareerApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareerApplications and returns the data updated in the database.
     * @param {CareerApplicationUpdateManyAndReturnArgs} args - Arguments to update many CareerApplications.
     * @example
     * // Update many CareerApplications
     * const careerApplication = await prisma.careerApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CareerApplications and only return the `id`
     * const careerApplicationWithIdOnly = await prisma.careerApplication.updateManyAndReturn({
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
    updateManyAndReturn<T extends CareerApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, CareerApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CareerApplication.
     * @param {CareerApplicationUpsertArgs} args - Arguments to update or create a CareerApplication.
     * @example
     * // Update or create a CareerApplication
     * const careerApplication = await prisma.careerApplication.upsert({
     *   create: {
     *     // ... data to create a CareerApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CareerApplication we want to update
     *   }
     * })
     */
    upsert<T extends CareerApplicationUpsertArgs>(args: SelectSubset<T, CareerApplicationUpsertArgs<ExtArgs>>): Prisma__CareerApplicationClient<$Result.GetResult<Prisma.$CareerApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CareerApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerApplicationCountArgs} args - Arguments to filter CareerApplications to count.
     * @example
     * // Count the number of CareerApplications
     * const count = await prisma.careerApplication.count({
     *   where: {
     *     // ... the filter for the CareerApplications we want to count
     *   }
     * })
    **/
    count<T extends CareerApplicationCountArgs>(
      args?: Subset<T, CareerApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CareerApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CareerApplicationAggregateArgs>(args: Subset<T, CareerApplicationAggregateArgs>): Prisma.PrismaPromise<GetCareerApplicationAggregateType<T>>

    /**
     * Group by CareerApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerApplicationGroupByArgs} args - Group by arguments.
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
      T extends CareerApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerApplicationGroupByArgs['orderBy'] }
        : { orderBy?: CareerApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CareerApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CareerApplication model
   */
  readonly fields: CareerApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CareerApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends CareerApplication$jobArgs<ExtArgs> = {}>(args?: Subset<T, CareerApplication$jobArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CareerApplication model
   */
  interface CareerApplicationFieldRefs {
    readonly id: FieldRef<"CareerApplication", 'Int'>
    readonly jobId: FieldRef<"CareerApplication", 'Int'>
    readonly applicantName: FieldRef<"CareerApplication", 'String'>
    readonly email: FieldRef<"CareerApplication", 'String'>
    readonly phone: FieldRef<"CareerApplication", 'String'>
    readonly country: FieldRef<"CareerApplication", 'String'>
    readonly address: FieldRef<"CareerApplication", 'String'>
    readonly linkedInUrl: FieldRef<"CareerApplication", 'String'>
    readonly portfolioUrl: FieldRef<"CareerApplication", 'String'>
    readonly resumeUrl: FieldRef<"CareerApplication", 'String'>
    readonly coverLetter: FieldRef<"CareerApplication", 'String'>
    readonly customResponses: FieldRef<"CareerApplication", 'Json'>
    readonly status: FieldRef<"CareerApplication", 'String'>
    readonly ipAddress: FieldRef<"CareerApplication", 'String'>
    readonly userAgent: FieldRef<"CareerApplication", 'String'>
    readonly createdAt: FieldRef<"CareerApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"CareerApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CareerApplication findUnique
   */
  export type CareerApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which CareerApplication to fetch.
     */
    where: CareerApplicationWhereUniqueInput
  }

  /**
   * CareerApplication findUniqueOrThrow
   */
  export type CareerApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which CareerApplication to fetch.
     */
    where: CareerApplicationWhereUniqueInput
  }

  /**
   * CareerApplication findFirst
   */
  export type CareerApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which CareerApplication to fetch.
     */
    where?: CareerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerApplications to fetch.
     */
    orderBy?: CareerApplicationOrderByWithRelationInput | CareerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareerApplications.
     */
    cursor?: CareerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerApplications.
     */
    distinct?: CareerApplicationScalarFieldEnum | CareerApplicationScalarFieldEnum[]
  }

  /**
   * CareerApplication findFirstOrThrow
   */
  export type CareerApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which CareerApplication to fetch.
     */
    where?: CareerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerApplications to fetch.
     */
    orderBy?: CareerApplicationOrderByWithRelationInput | CareerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareerApplications.
     */
    cursor?: CareerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerApplications.
     */
    distinct?: CareerApplicationScalarFieldEnum | CareerApplicationScalarFieldEnum[]
  }

  /**
   * CareerApplication findMany
   */
  export type CareerApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which CareerApplications to fetch.
     */
    where?: CareerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerApplications to fetch.
     */
    orderBy?: CareerApplicationOrderByWithRelationInput | CareerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CareerApplications.
     */
    cursor?: CareerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerApplications.
     */
    distinct?: CareerApplicationScalarFieldEnum | CareerApplicationScalarFieldEnum[]
  }

  /**
   * CareerApplication create
   */
  export type CareerApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a CareerApplication.
     */
    data: XOR<CareerApplicationCreateInput, CareerApplicationUncheckedCreateInput>
  }

  /**
   * CareerApplication createMany
   */
  export type CareerApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CareerApplications.
     */
    data: CareerApplicationCreateManyInput | CareerApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CareerApplication createManyAndReturn
   */
  export type CareerApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many CareerApplications.
     */
    data: CareerApplicationCreateManyInput | CareerApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CareerApplication update
   */
  export type CareerApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a CareerApplication.
     */
    data: XOR<CareerApplicationUpdateInput, CareerApplicationUncheckedUpdateInput>
    /**
     * Choose, which CareerApplication to update.
     */
    where: CareerApplicationWhereUniqueInput
  }

  /**
   * CareerApplication updateMany
   */
  export type CareerApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CareerApplications.
     */
    data: XOR<CareerApplicationUpdateManyMutationInput, CareerApplicationUncheckedUpdateManyInput>
    /**
     * Filter which CareerApplications to update
     */
    where?: CareerApplicationWhereInput
    /**
     * Limit how many CareerApplications to update.
     */
    limit?: number
  }

  /**
   * CareerApplication updateManyAndReturn
   */
  export type CareerApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * The data used to update CareerApplications.
     */
    data: XOR<CareerApplicationUpdateManyMutationInput, CareerApplicationUncheckedUpdateManyInput>
    /**
     * Filter which CareerApplications to update
     */
    where?: CareerApplicationWhereInput
    /**
     * Limit how many CareerApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CareerApplication upsert
   */
  export type CareerApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the CareerApplication to update in case it exists.
     */
    where: CareerApplicationWhereUniqueInput
    /**
     * In case the CareerApplication found by the `where` argument doesn't exist, create a new CareerApplication with this data.
     */
    create: XOR<CareerApplicationCreateInput, CareerApplicationUncheckedCreateInput>
    /**
     * In case the CareerApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerApplicationUpdateInput, CareerApplicationUncheckedUpdateInput>
  }

  /**
   * CareerApplication delete
   */
  export type CareerApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationInclude<ExtArgs> | null
    /**
     * Filter which CareerApplication to delete.
     */
    where: CareerApplicationWhereUniqueInput
  }

  /**
   * CareerApplication deleteMany
   */
  export type CareerApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareerApplications to delete
     */
    where?: CareerApplicationWhereInput
    /**
     * Limit how many CareerApplications to delete.
     */
    limit?: number
  }

  /**
   * CareerApplication.job
   */
  export type CareerApplication$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    where?: JobPostingWhereInput
  }

  /**
   * CareerApplication without action
   */
  export type CareerApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerApplication
     */
    select?: CareerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerApplication
     */
    omit?: CareerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerApplicationInclude<ExtArgs> | null
  }


  /**
   * Model PartnershipSubmission
   */

  export type AggregatePartnershipSubmission = {
    _count: PartnershipSubmissionCountAggregateOutputType | null
    _avg: PartnershipSubmissionAvgAggregateOutputType | null
    _sum: PartnershipSubmissionSumAggregateOutputType | null
    _min: PartnershipSubmissionMinAggregateOutputType | null
    _max: PartnershipSubmissionMaxAggregateOutputType | null
  }

  export type PartnershipSubmissionAvgAggregateOutputType = {
    id: number | null
  }

  export type PartnershipSubmissionSumAggregateOutputType = {
    id: number | null
  }

  export type PartnershipSubmissionMinAggregateOutputType = {
    id: number | null
    companyName: string | null
    contactName: string | null
    email: string | null
    phone: string | null
    partnershipType: string | null
    companyDescription: string | null
    partnershipGoals: string | null
    mouDocumentUrl: string | null
    proposedTerms: string | null
    additionalNotes: string | null
    status: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnershipSubmissionMaxAggregateOutputType = {
    id: number | null
    companyName: string | null
    contactName: string | null
    email: string | null
    phone: string | null
    partnershipType: string | null
    companyDescription: string | null
    partnershipGoals: string | null
    mouDocumentUrl: string | null
    proposedTerms: string | null
    additionalNotes: string | null
    status: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnershipSubmissionCountAggregateOutputType = {
    id: number
    companyName: number
    contactName: number
    email: number
    phone: number
    partnershipType: number
    companyDescription: number
    partnershipGoals: number
    mouDocumentUrl: number
    proposedTerms: number
    additionalNotes: number
    status: number
    ipAddress: number
    userAgent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnershipSubmissionAvgAggregateInputType = {
    id?: true
  }

  export type PartnershipSubmissionSumAggregateInputType = {
    id?: true
  }

  export type PartnershipSubmissionMinAggregateInputType = {
    id?: true
    companyName?: true
    contactName?: true
    email?: true
    phone?: true
    partnershipType?: true
    companyDescription?: true
    partnershipGoals?: true
    mouDocumentUrl?: true
    proposedTerms?: true
    additionalNotes?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnershipSubmissionMaxAggregateInputType = {
    id?: true
    companyName?: true
    contactName?: true
    email?: true
    phone?: true
    partnershipType?: true
    companyDescription?: true
    partnershipGoals?: true
    mouDocumentUrl?: true
    proposedTerms?: true
    additionalNotes?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnershipSubmissionCountAggregateInputType = {
    id?: true
    companyName?: true
    contactName?: true
    email?: true
    phone?: true
    partnershipType?: true
    companyDescription?: true
    partnershipGoals?: true
    mouDocumentUrl?: true
    proposedTerms?: true
    additionalNotes?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnershipSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnershipSubmission to aggregate.
     */
    where?: PartnershipSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnershipSubmissions to fetch.
     */
    orderBy?: PartnershipSubmissionOrderByWithRelationInput | PartnershipSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnershipSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnershipSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnershipSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartnershipSubmissions
    **/
    _count?: true | PartnershipSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartnershipSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartnershipSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnershipSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnershipSubmissionMaxAggregateInputType
  }

  export type GetPartnershipSubmissionAggregateType<T extends PartnershipSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePartnershipSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartnershipSubmission[P]>
      : GetScalarType<T[P], AggregatePartnershipSubmission[P]>
  }




  export type PartnershipSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnershipSubmissionWhereInput
    orderBy?: PartnershipSubmissionOrderByWithAggregationInput | PartnershipSubmissionOrderByWithAggregationInput[]
    by: PartnershipSubmissionScalarFieldEnum[] | PartnershipSubmissionScalarFieldEnum
    having?: PartnershipSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnershipSubmissionCountAggregateInputType | true
    _avg?: PartnershipSubmissionAvgAggregateInputType
    _sum?: PartnershipSubmissionSumAggregateInputType
    _min?: PartnershipSubmissionMinAggregateInputType
    _max?: PartnershipSubmissionMaxAggregateInputType
  }

  export type PartnershipSubmissionGroupByOutputType = {
    id: number
    companyName: string
    contactName: string
    email: string
    phone: string | null
    partnershipType: string
    companyDescription: string
    partnershipGoals: string
    mouDocumentUrl: string | null
    proposedTerms: string | null
    additionalNotes: string | null
    status: string
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    _count: PartnershipSubmissionCountAggregateOutputType | null
    _avg: PartnershipSubmissionAvgAggregateOutputType | null
    _sum: PartnershipSubmissionSumAggregateOutputType | null
    _min: PartnershipSubmissionMinAggregateOutputType | null
    _max: PartnershipSubmissionMaxAggregateOutputType | null
  }

  type GetPartnershipSubmissionGroupByPayload<T extends PartnershipSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnershipSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnershipSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnershipSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], PartnershipSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type PartnershipSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    contactName?: boolean
    email?: boolean
    phone?: boolean
    partnershipType?: boolean
    companyDescription?: boolean
    partnershipGoals?: boolean
    mouDocumentUrl?: boolean
    proposedTerms?: boolean
    additionalNotes?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partnershipSubmission"]>

  export type PartnershipSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    contactName?: boolean
    email?: boolean
    phone?: boolean
    partnershipType?: boolean
    companyDescription?: boolean
    partnershipGoals?: boolean
    mouDocumentUrl?: boolean
    proposedTerms?: boolean
    additionalNotes?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partnershipSubmission"]>

  export type PartnershipSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    contactName?: boolean
    email?: boolean
    phone?: boolean
    partnershipType?: boolean
    companyDescription?: boolean
    partnershipGoals?: boolean
    mouDocumentUrl?: boolean
    proposedTerms?: boolean
    additionalNotes?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partnershipSubmission"]>

  export type PartnershipSubmissionSelectScalar = {
    id?: boolean
    companyName?: boolean
    contactName?: boolean
    email?: boolean
    phone?: boolean
    partnershipType?: boolean
    companyDescription?: boolean
    partnershipGoals?: boolean
    mouDocumentUrl?: boolean
    proposedTerms?: boolean
    additionalNotes?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnershipSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "contactName" | "email" | "phone" | "partnershipType" | "companyDescription" | "partnershipGoals" | "mouDocumentUrl" | "proposedTerms" | "additionalNotes" | "status" | "ipAddress" | "userAgent" | "createdAt" | "updatedAt", ExtArgs["result"]["partnershipSubmission"]>

  export type $PartnershipSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartnershipSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyName: string
      contactName: string
      email: string
      phone: string | null
      partnershipType: string
      companyDescription: string
      partnershipGoals: string
      mouDocumentUrl: string | null
      proposedTerms: string | null
      additionalNotes: string | null
      status: string
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partnershipSubmission"]>
    composites: {}
  }

  type PartnershipSubmissionGetPayload<S extends boolean | null | undefined | PartnershipSubmissionDefaultArgs> = $Result.GetResult<Prisma.$PartnershipSubmissionPayload, S>

  type PartnershipSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnershipSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnershipSubmissionCountAggregateInputType | true
    }

  export interface PartnershipSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartnershipSubmission'], meta: { name: 'PartnershipSubmission' } }
    /**
     * Find zero or one PartnershipSubmission that matches the filter.
     * @param {PartnershipSubmissionFindUniqueArgs} args - Arguments to find a PartnershipSubmission
     * @example
     * // Get one PartnershipSubmission
     * const partnershipSubmission = await prisma.partnershipSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnershipSubmissionFindUniqueArgs>(args: SelectSubset<T, PartnershipSubmissionFindUniqueArgs<ExtArgs>>): Prisma__PartnershipSubmissionClient<$Result.GetResult<Prisma.$PartnershipSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartnershipSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnershipSubmissionFindUniqueOrThrowArgs} args - Arguments to find a PartnershipSubmission
     * @example
     * // Get one PartnershipSubmission
     * const partnershipSubmission = await prisma.partnershipSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnershipSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnershipSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnershipSubmissionClient<$Result.GetResult<Prisma.$PartnershipSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartnershipSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnershipSubmissionFindFirstArgs} args - Arguments to find a PartnershipSubmission
     * @example
     * // Get one PartnershipSubmission
     * const partnershipSubmission = await prisma.partnershipSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnershipSubmissionFindFirstArgs>(args?: SelectSubset<T, PartnershipSubmissionFindFirstArgs<ExtArgs>>): Prisma__PartnershipSubmissionClient<$Result.GetResult<Prisma.$PartnershipSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartnershipSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnershipSubmissionFindFirstOrThrowArgs} args - Arguments to find a PartnershipSubmission
     * @example
     * // Get one PartnershipSubmission
     * const partnershipSubmission = await prisma.partnershipSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnershipSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnershipSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnershipSubmissionClient<$Result.GetResult<Prisma.$PartnershipSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartnershipSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnershipSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartnershipSubmissions
     * const partnershipSubmissions = await prisma.partnershipSubmission.findMany()
     * 
     * // Get first 10 PartnershipSubmissions
     * const partnershipSubmissions = await prisma.partnershipSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnershipSubmissionWithIdOnly = await prisma.partnershipSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnershipSubmissionFindManyArgs>(args?: SelectSubset<T, PartnershipSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnershipSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartnershipSubmission.
     * @param {PartnershipSubmissionCreateArgs} args - Arguments to create a PartnershipSubmission.
     * @example
     * // Create one PartnershipSubmission
     * const PartnershipSubmission = await prisma.partnershipSubmission.create({
     *   data: {
     *     // ... data to create a PartnershipSubmission
     *   }
     * })
     * 
     */
    create<T extends PartnershipSubmissionCreateArgs>(args: SelectSubset<T, PartnershipSubmissionCreateArgs<ExtArgs>>): Prisma__PartnershipSubmissionClient<$Result.GetResult<Prisma.$PartnershipSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartnershipSubmissions.
     * @param {PartnershipSubmissionCreateManyArgs} args - Arguments to create many PartnershipSubmissions.
     * @example
     * // Create many PartnershipSubmissions
     * const partnershipSubmission = await prisma.partnershipSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnershipSubmissionCreateManyArgs>(args?: SelectSubset<T, PartnershipSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartnershipSubmissions and returns the data saved in the database.
     * @param {PartnershipSubmissionCreateManyAndReturnArgs} args - Arguments to create many PartnershipSubmissions.
     * @example
     * // Create many PartnershipSubmissions
     * const partnershipSubmission = await prisma.partnershipSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartnershipSubmissions and only return the `id`
     * const partnershipSubmissionWithIdOnly = await prisma.partnershipSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnershipSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnershipSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnershipSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PartnershipSubmission.
     * @param {PartnershipSubmissionDeleteArgs} args - Arguments to delete one PartnershipSubmission.
     * @example
     * // Delete one PartnershipSubmission
     * const PartnershipSubmission = await prisma.partnershipSubmission.delete({
     *   where: {
     *     // ... filter to delete one PartnershipSubmission
     *   }
     * })
     * 
     */
    delete<T extends PartnershipSubmissionDeleteArgs>(args: SelectSubset<T, PartnershipSubmissionDeleteArgs<ExtArgs>>): Prisma__PartnershipSubmissionClient<$Result.GetResult<Prisma.$PartnershipSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartnershipSubmission.
     * @param {PartnershipSubmissionUpdateArgs} args - Arguments to update one PartnershipSubmission.
     * @example
     * // Update one PartnershipSubmission
     * const partnershipSubmission = await prisma.partnershipSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnershipSubmissionUpdateArgs>(args: SelectSubset<T, PartnershipSubmissionUpdateArgs<ExtArgs>>): Prisma__PartnershipSubmissionClient<$Result.GetResult<Prisma.$PartnershipSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartnershipSubmissions.
     * @param {PartnershipSubmissionDeleteManyArgs} args - Arguments to filter PartnershipSubmissions to delete.
     * @example
     * // Delete a few PartnershipSubmissions
     * const { count } = await prisma.partnershipSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnershipSubmissionDeleteManyArgs>(args?: SelectSubset<T, PartnershipSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnershipSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnershipSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartnershipSubmissions
     * const partnershipSubmission = await prisma.partnershipSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnershipSubmissionUpdateManyArgs>(args: SelectSubset<T, PartnershipSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnershipSubmissions and returns the data updated in the database.
     * @param {PartnershipSubmissionUpdateManyAndReturnArgs} args - Arguments to update many PartnershipSubmissions.
     * @example
     * // Update many PartnershipSubmissions
     * const partnershipSubmission = await prisma.partnershipSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartnershipSubmissions and only return the `id`
     * const partnershipSubmissionWithIdOnly = await prisma.partnershipSubmission.updateManyAndReturn({
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
    updateManyAndReturn<T extends PartnershipSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnershipSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnershipSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PartnershipSubmission.
     * @param {PartnershipSubmissionUpsertArgs} args - Arguments to update or create a PartnershipSubmission.
     * @example
     * // Update or create a PartnershipSubmission
     * const partnershipSubmission = await prisma.partnershipSubmission.upsert({
     *   create: {
     *     // ... data to create a PartnershipSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartnershipSubmission we want to update
     *   }
     * })
     */
    upsert<T extends PartnershipSubmissionUpsertArgs>(args: SelectSubset<T, PartnershipSubmissionUpsertArgs<ExtArgs>>): Prisma__PartnershipSubmissionClient<$Result.GetResult<Prisma.$PartnershipSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartnershipSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnershipSubmissionCountArgs} args - Arguments to filter PartnershipSubmissions to count.
     * @example
     * // Count the number of PartnershipSubmissions
     * const count = await prisma.partnershipSubmission.count({
     *   where: {
     *     // ... the filter for the PartnershipSubmissions we want to count
     *   }
     * })
    **/
    count<T extends PartnershipSubmissionCountArgs>(
      args?: Subset<T, PartnershipSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnershipSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartnershipSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnershipSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartnershipSubmissionAggregateArgs>(args: Subset<T, PartnershipSubmissionAggregateArgs>): Prisma.PrismaPromise<GetPartnershipSubmissionAggregateType<T>>

    /**
     * Group by PartnershipSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnershipSubmissionGroupByArgs} args - Group by arguments.
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
      T extends PartnershipSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnershipSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: PartnershipSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartnershipSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnershipSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartnershipSubmission model
   */
  readonly fields: PartnershipSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartnershipSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnershipSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PartnershipSubmission model
   */
  interface PartnershipSubmissionFieldRefs {
    readonly id: FieldRef<"PartnershipSubmission", 'Int'>
    readonly companyName: FieldRef<"PartnershipSubmission", 'String'>
    readonly contactName: FieldRef<"PartnershipSubmission", 'String'>
    readonly email: FieldRef<"PartnershipSubmission", 'String'>
    readonly phone: FieldRef<"PartnershipSubmission", 'String'>
    readonly partnershipType: FieldRef<"PartnershipSubmission", 'String'>
    readonly companyDescription: FieldRef<"PartnershipSubmission", 'String'>
    readonly partnershipGoals: FieldRef<"PartnershipSubmission", 'String'>
    readonly mouDocumentUrl: FieldRef<"PartnershipSubmission", 'String'>
    readonly proposedTerms: FieldRef<"PartnershipSubmission", 'String'>
    readonly additionalNotes: FieldRef<"PartnershipSubmission", 'String'>
    readonly status: FieldRef<"PartnershipSubmission", 'String'>
    readonly ipAddress: FieldRef<"PartnershipSubmission", 'String'>
    readonly userAgent: FieldRef<"PartnershipSubmission", 'String'>
    readonly createdAt: FieldRef<"PartnershipSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"PartnershipSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartnershipSubmission findUnique
   */
  export type PartnershipSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnershipSubmission
     */
    select?: PartnershipSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnershipSubmission
     */
    omit?: PartnershipSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which PartnershipSubmission to fetch.
     */
    where: PartnershipSubmissionWhereUniqueInput
  }

  /**
   * PartnershipSubmission findUniqueOrThrow
   */
  export type PartnershipSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnershipSubmission
     */
    select?: PartnershipSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnershipSubmission
     */
    omit?: PartnershipSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which PartnershipSubmission to fetch.
     */
    where: PartnershipSubmissionWhereUniqueInput
  }

  /**
   * PartnershipSubmission findFirst
   */
  export type PartnershipSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnershipSubmission
     */
    select?: PartnershipSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnershipSubmission
     */
    omit?: PartnershipSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which PartnershipSubmission to fetch.
     */
    where?: PartnershipSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnershipSubmissions to fetch.
     */
    orderBy?: PartnershipSubmissionOrderByWithRelationInput | PartnershipSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnershipSubmissions.
     */
    cursor?: PartnershipSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnershipSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnershipSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnershipSubmissions.
     */
    distinct?: PartnershipSubmissionScalarFieldEnum | PartnershipSubmissionScalarFieldEnum[]
  }

  /**
   * PartnershipSubmission findFirstOrThrow
   */
  export type PartnershipSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnershipSubmission
     */
    select?: PartnershipSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnershipSubmission
     */
    omit?: PartnershipSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which PartnershipSubmission to fetch.
     */
    where?: PartnershipSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnershipSubmissions to fetch.
     */
    orderBy?: PartnershipSubmissionOrderByWithRelationInput | PartnershipSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnershipSubmissions.
     */
    cursor?: PartnershipSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnershipSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnershipSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnershipSubmissions.
     */
    distinct?: PartnershipSubmissionScalarFieldEnum | PartnershipSubmissionScalarFieldEnum[]
  }

  /**
   * PartnershipSubmission findMany
   */
  export type PartnershipSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnershipSubmission
     */
    select?: PartnershipSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnershipSubmission
     */
    omit?: PartnershipSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which PartnershipSubmissions to fetch.
     */
    where?: PartnershipSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnershipSubmissions to fetch.
     */
    orderBy?: PartnershipSubmissionOrderByWithRelationInput | PartnershipSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartnershipSubmissions.
     */
    cursor?: PartnershipSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnershipSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnershipSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnershipSubmissions.
     */
    distinct?: PartnershipSubmissionScalarFieldEnum | PartnershipSubmissionScalarFieldEnum[]
  }

  /**
   * PartnershipSubmission create
   */
  export type PartnershipSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnershipSubmission
     */
    select?: PartnershipSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnershipSubmission
     */
    omit?: PartnershipSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a PartnershipSubmission.
     */
    data: XOR<PartnershipSubmissionCreateInput, PartnershipSubmissionUncheckedCreateInput>
  }

  /**
   * PartnershipSubmission createMany
   */
  export type PartnershipSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartnershipSubmissions.
     */
    data: PartnershipSubmissionCreateManyInput | PartnershipSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnershipSubmission createManyAndReturn
   */
  export type PartnershipSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnershipSubmission
     */
    select?: PartnershipSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnershipSubmission
     */
    omit?: PartnershipSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many PartnershipSubmissions.
     */
    data: PartnershipSubmissionCreateManyInput | PartnershipSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnershipSubmission update
   */
  export type PartnershipSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnershipSubmission
     */
    select?: PartnershipSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnershipSubmission
     */
    omit?: PartnershipSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a PartnershipSubmission.
     */
    data: XOR<PartnershipSubmissionUpdateInput, PartnershipSubmissionUncheckedUpdateInput>
    /**
     * Choose, which PartnershipSubmission to update.
     */
    where: PartnershipSubmissionWhereUniqueInput
  }

  /**
   * PartnershipSubmission updateMany
   */
  export type PartnershipSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartnershipSubmissions.
     */
    data: XOR<PartnershipSubmissionUpdateManyMutationInput, PartnershipSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which PartnershipSubmissions to update
     */
    where?: PartnershipSubmissionWhereInput
    /**
     * Limit how many PartnershipSubmissions to update.
     */
    limit?: number
  }

  /**
   * PartnershipSubmission updateManyAndReturn
   */
  export type PartnershipSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnershipSubmission
     */
    select?: PartnershipSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnershipSubmission
     */
    omit?: PartnershipSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update PartnershipSubmissions.
     */
    data: XOR<PartnershipSubmissionUpdateManyMutationInput, PartnershipSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which PartnershipSubmissions to update
     */
    where?: PartnershipSubmissionWhereInput
    /**
     * Limit how many PartnershipSubmissions to update.
     */
    limit?: number
  }

  /**
   * PartnershipSubmission upsert
   */
  export type PartnershipSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnershipSubmission
     */
    select?: PartnershipSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnershipSubmission
     */
    omit?: PartnershipSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the PartnershipSubmission to update in case it exists.
     */
    where: PartnershipSubmissionWhereUniqueInput
    /**
     * In case the PartnershipSubmission found by the `where` argument doesn't exist, create a new PartnershipSubmission with this data.
     */
    create: XOR<PartnershipSubmissionCreateInput, PartnershipSubmissionUncheckedCreateInput>
    /**
     * In case the PartnershipSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnershipSubmissionUpdateInput, PartnershipSubmissionUncheckedUpdateInput>
  }

  /**
   * PartnershipSubmission delete
   */
  export type PartnershipSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnershipSubmission
     */
    select?: PartnershipSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnershipSubmission
     */
    omit?: PartnershipSubmissionOmit<ExtArgs> | null
    /**
     * Filter which PartnershipSubmission to delete.
     */
    where: PartnershipSubmissionWhereUniqueInput
  }

  /**
   * PartnershipSubmission deleteMany
   */
  export type PartnershipSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnershipSubmissions to delete
     */
    where?: PartnershipSubmissionWhereInput
    /**
     * Limit how many PartnershipSubmissions to delete.
     */
    limit?: number
  }

  /**
   * PartnershipSubmission without action
   */
  export type PartnershipSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnershipSubmission
     */
    select?: PartnershipSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnershipSubmission
     */
    omit?: PartnershipSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model MaintenanceWindow
   */

  export type AggregateMaintenanceWindow = {
    _count: MaintenanceWindowCountAggregateOutputType | null
    _avg: MaintenanceWindowAvgAggregateOutputType | null
    _sum: MaintenanceWindowSumAggregateOutputType | null
    _min: MaintenanceWindowMinAggregateOutputType | null
    _max: MaintenanceWindowMaxAggregateOutputType | null
  }

  export type MaintenanceWindowAvgAggregateOutputType = {
    id: number | null
  }

  export type MaintenanceWindowSumAggregateOutputType = {
    id: number | null
  }

  export type MaintenanceWindowMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    isActive: boolean | null
    isScheduled: boolean | null
    reason: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceWindowMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    isActive: boolean | null
    isScheduled: boolean | null
    reason: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceWindowCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startTime: number
    endTime: number
    isActive: number
    isScheduled: number
    reason: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaintenanceWindowAvgAggregateInputType = {
    id?: true
  }

  export type MaintenanceWindowSumAggregateInputType = {
    id?: true
  }

  export type MaintenanceWindowMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    isActive?: true
    isScheduled?: true
    reason?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceWindowMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    isActive?: true
    isScheduled?: true
    reason?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceWindowCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    isActive?: true
    isScheduled?: true
    reason?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaintenanceWindowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceWindow to aggregate.
     */
    where?: MaintenanceWindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceWindows to fetch.
     */
    orderBy?: MaintenanceWindowOrderByWithRelationInput | MaintenanceWindowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceWindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceWindows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceWindows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceWindows
    **/
    _count?: true | MaintenanceWindowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceWindowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceWindowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceWindowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceWindowMaxAggregateInputType
  }

  export type GetMaintenanceWindowAggregateType<T extends MaintenanceWindowAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceWindow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceWindow[P]>
      : GetScalarType<T[P], AggregateMaintenanceWindow[P]>
  }




  export type MaintenanceWindowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWindowWhereInput
    orderBy?: MaintenanceWindowOrderByWithAggregationInput | MaintenanceWindowOrderByWithAggregationInput[]
    by: MaintenanceWindowScalarFieldEnum[] | MaintenanceWindowScalarFieldEnum
    having?: MaintenanceWindowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceWindowCountAggregateInputType | true
    _avg?: MaintenanceWindowAvgAggregateInputType
    _sum?: MaintenanceWindowSumAggregateInputType
    _min?: MaintenanceWindowMinAggregateInputType
    _max?: MaintenanceWindowMaxAggregateInputType
  }

  export type MaintenanceWindowGroupByOutputType = {
    id: number
    title: string
    description: string | null
    startTime: Date
    endTime: Date
    isActive: boolean
    isScheduled: boolean
    reason: string | null
    createdBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: MaintenanceWindowCountAggregateOutputType | null
    _avg: MaintenanceWindowAvgAggregateOutputType | null
    _sum: MaintenanceWindowSumAggregateOutputType | null
    _min: MaintenanceWindowMinAggregateOutputType | null
    _max: MaintenanceWindowMaxAggregateOutputType | null
  }

  type GetMaintenanceWindowGroupByPayload<T extends MaintenanceWindowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceWindowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceWindowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceWindowGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceWindowGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceWindowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    isScheduled?: boolean
    reason?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["maintenanceWindow"]>

  export type MaintenanceWindowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    isScheduled?: boolean
    reason?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["maintenanceWindow"]>

  export type MaintenanceWindowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    isScheduled?: boolean
    reason?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["maintenanceWindow"]>

  export type MaintenanceWindowSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    isScheduled?: boolean
    reason?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaintenanceWindowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startTime" | "endTime" | "isActive" | "isScheduled" | "reason" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["maintenanceWindow"]>

  export type $MaintenanceWindowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceWindow"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      startTime: Date
      endTime: Date
      isActive: boolean
      isScheduled: boolean
      reason: string | null
      createdBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["maintenanceWindow"]>
    composites: {}
  }

  type MaintenanceWindowGetPayload<S extends boolean | null | undefined | MaintenanceWindowDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceWindowPayload, S>

  type MaintenanceWindowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceWindowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceWindowCountAggregateInputType | true
    }

  export interface MaintenanceWindowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceWindow'], meta: { name: 'MaintenanceWindow' } }
    /**
     * Find zero or one MaintenanceWindow that matches the filter.
     * @param {MaintenanceWindowFindUniqueArgs} args - Arguments to find a MaintenanceWindow
     * @example
     * // Get one MaintenanceWindow
     * const maintenanceWindow = await prisma.maintenanceWindow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceWindowFindUniqueArgs>(args: SelectSubset<T, MaintenanceWindowFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceWindowClient<$Result.GetResult<Prisma.$MaintenanceWindowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceWindow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceWindowFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceWindow
     * @example
     * // Get one MaintenanceWindow
     * const maintenanceWindow = await prisma.maintenanceWindow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceWindowFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceWindowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceWindowClient<$Result.GetResult<Prisma.$MaintenanceWindowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceWindow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceWindowFindFirstArgs} args - Arguments to find a MaintenanceWindow
     * @example
     * // Get one MaintenanceWindow
     * const maintenanceWindow = await prisma.maintenanceWindow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceWindowFindFirstArgs>(args?: SelectSubset<T, MaintenanceWindowFindFirstArgs<ExtArgs>>): Prisma__MaintenanceWindowClient<$Result.GetResult<Prisma.$MaintenanceWindowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceWindow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceWindowFindFirstOrThrowArgs} args - Arguments to find a MaintenanceWindow
     * @example
     * // Get one MaintenanceWindow
     * const maintenanceWindow = await prisma.maintenanceWindow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceWindowFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceWindowFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceWindowClient<$Result.GetResult<Prisma.$MaintenanceWindowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceWindows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceWindowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceWindows
     * const maintenanceWindows = await prisma.maintenanceWindow.findMany()
     * 
     * // Get first 10 MaintenanceWindows
     * const maintenanceWindows = await prisma.maintenanceWindow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceWindowWithIdOnly = await prisma.maintenanceWindow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceWindowFindManyArgs>(args?: SelectSubset<T, MaintenanceWindowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceWindowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceWindow.
     * @param {MaintenanceWindowCreateArgs} args - Arguments to create a MaintenanceWindow.
     * @example
     * // Create one MaintenanceWindow
     * const MaintenanceWindow = await prisma.maintenanceWindow.create({
     *   data: {
     *     // ... data to create a MaintenanceWindow
     *   }
     * })
     * 
     */
    create<T extends MaintenanceWindowCreateArgs>(args: SelectSubset<T, MaintenanceWindowCreateArgs<ExtArgs>>): Prisma__MaintenanceWindowClient<$Result.GetResult<Prisma.$MaintenanceWindowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceWindows.
     * @param {MaintenanceWindowCreateManyArgs} args - Arguments to create many MaintenanceWindows.
     * @example
     * // Create many MaintenanceWindows
     * const maintenanceWindow = await prisma.maintenanceWindow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceWindowCreateManyArgs>(args?: SelectSubset<T, MaintenanceWindowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceWindows and returns the data saved in the database.
     * @param {MaintenanceWindowCreateManyAndReturnArgs} args - Arguments to create many MaintenanceWindows.
     * @example
     * // Create many MaintenanceWindows
     * const maintenanceWindow = await prisma.maintenanceWindow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceWindows and only return the `id`
     * const maintenanceWindowWithIdOnly = await prisma.maintenanceWindow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceWindowCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceWindowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceWindowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceWindow.
     * @param {MaintenanceWindowDeleteArgs} args - Arguments to delete one MaintenanceWindow.
     * @example
     * // Delete one MaintenanceWindow
     * const MaintenanceWindow = await prisma.maintenanceWindow.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceWindow
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceWindowDeleteArgs>(args: SelectSubset<T, MaintenanceWindowDeleteArgs<ExtArgs>>): Prisma__MaintenanceWindowClient<$Result.GetResult<Prisma.$MaintenanceWindowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceWindow.
     * @param {MaintenanceWindowUpdateArgs} args - Arguments to update one MaintenanceWindow.
     * @example
     * // Update one MaintenanceWindow
     * const maintenanceWindow = await prisma.maintenanceWindow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceWindowUpdateArgs>(args: SelectSubset<T, MaintenanceWindowUpdateArgs<ExtArgs>>): Prisma__MaintenanceWindowClient<$Result.GetResult<Prisma.$MaintenanceWindowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceWindows.
     * @param {MaintenanceWindowDeleteManyArgs} args - Arguments to filter MaintenanceWindows to delete.
     * @example
     * // Delete a few MaintenanceWindows
     * const { count } = await prisma.maintenanceWindow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceWindowDeleteManyArgs>(args?: SelectSubset<T, MaintenanceWindowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceWindows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceWindowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceWindows
     * const maintenanceWindow = await prisma.maintenanceWindow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceWindowUpdateManyArgs>(args: SelectSubset<T, MaintenanceWindowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceWindows and returns the data updated in the database.
     * @param {MaintenanceWindowUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceWindows.
     * @example
     * // Update many MaintenanceWindows
     * const maintenanceWindow = await prisma.maintenanceWindow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceWindows and only return the `id`
     * const maintenanceWindowWithIdOnly = await prisma.maintenanceWindow.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaintenanceWindowUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceWindowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceWindowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceWindow.
     * @param {MaintenanceWindowUpsertArgs} args - Arguments to update or create a MaintenanceWindow.
     * @example
     * // Update or create a MaintenanceWindow
     * const maintenanceWindow = await prisma.maintenanceWindow.upsert({
     *   create: {
     *     // ... data to create a MaintenanceWindow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceWindow we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceWindowUpsertArgs>(args: SelectSubset<T, MaintenanceWindowUpsertArgs<ExtArgs>>): Prisma__MaintenanceWindowClient<$Result.GetResult<Prisma.$MaintenanceWindowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceWindows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceWindowCountArgs} args - Arguments to filter MaintenanceWindows to count.
     * @example
     * // Count the number of MaintenanceWindows
     * const count = await prisma.maintenanceWindow.count({
     *   where: {
     *     // ... the filter for the MaintenanceWindows we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceWindowCountArgs>(
      args?: Subset<T, MaintenanceWindowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceWindowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceWindow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceWindowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceWindowAggregateArgs>(args: Subset<T, MaintenanceWindowAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceWindowAggregateType<T>>

    /**
     * Group by MaintenanceWindow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceWindowGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceWindowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceWindowGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceWindowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceWindowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceWindowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceWindow model
   */
  readonly fields: MaintenanceWindowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceWindow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceWindowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MaintenanceWindow model
   */
  interface MaintenanceWindowFieldRefs {
    readonly id: FieldRef<"MaintenanceWindow", 'Int'>
    readonly title: FieldRef<"MaintenanceWindow", 'String'>
    readonly description: FieldRef<"MaintenanceWindow", 'String'>
    readonly startTime: FieldRef<"MaintenanceWindow", 'DateTime'>
    readonly endTime: FieldRef<"MaintenanceWindow", 'DateTime'>
    readonly isActive: FieldRef<"MaintenanceWindow", 'Boolean'>
    readonly isScheduled: FieldRef<"MaintenanceWindow", 'Boolean'>
    readonly reason: FieldRef<"MaintenanceWindow", 'String'>
    readonly createdBy: FieldRef<"MaintenanceWindow", 'String'>
    readonly createdAt: FieldRef<"MaintenanceWindow", 'DateTime'>
    readonly updatedAt: FieldRef<"MaintenanceWindow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceWindow findUnique
   */
  export type MaintenanceWindowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceWindow
     */
    select?: MaintenanceWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceWindow
     */
    omit?: MaintenanceWindowOmit<ExtArgs> | null
    /**
     * Filter, which MaintenanceWindow to fetch.
     */
    where: MaintenanceWindowWhereUniqueInput
  }

  /**
   * MaintenanceWindow findUniqueOrThrow
   */
  export type MaintenanceWindowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceWindow
     */
    select?: MaintenanceWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceWindow
     */
    omit?: MaintenanceWindowOmit<ExtArgs> | null
    /**
     * Filter, which MaintenanceWindow to fetch.
     */
    where: MaintenanceWindowWhereUniqueInput
  }

  /**
   * MaintenanceWindow findFirst
   */
  export type MaintenanceWindowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceWindow
     */
    select?: MaintenanceWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceWindow
     */
    omit?: MaintenanceWindowOmit<ExtArgs> | null
    /**
     * Filter, which MaintenanceWindow to fetch.
     */
    where?: MaintenanceWindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceWindows to fetch.
     */
    orderBy?: MaintenanceWindowOrderByWithRelationInput | MaintenanceWindowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceWindows.
     */
    cursor?: MaintenanceWindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceWindows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceWindows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceWindows.
     */
    distinct?: MaintenanceWindowScalarFieldEnum | MaintenanceWindowScalarFieldEnum[]
  }

  /**
   * MaintenanceWindow findFirstOrThrow
   */
  export type MaintenanceWindowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceWindow
     */
    select?: MaintenanceWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceWindow
     */
    omit?: MaintenanceWindowOmit<ExtArgs> | null
    /**
     * Filter, which MaintenanceWindow to fetch.
     */
    where?: MaintenanceWindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceWindows to fetch.
     */
    orderBy?: MaintenanceWindowOrderByWithRelationInput | MaintenanceWindowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceWindows.
     */
    cursor?: MaintenanceWindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceWindows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceWindows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceWindows.
     */
    distinct?: MaintenanceWindowScalarFieldEnum | MaintenanceWindowScalarFieldEnum[]
  }

  /**
   * MaintenanceWindow findMany
   */
  export type MaintenanceWindowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceWindow
     */
    select?: MaintenanceWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceWindow
     */
    omit?: MaintenanceWindowOmit<ExtArgs> | null
    /**
     * Filter, which MaintenanceWindows to fetch.
     */
    where?: MaintenanceWindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceWindows to fetch.
     */
    orderBy?: MaintenanceWindowOrderByWithRelationInput | MaintenanceWindowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceWindows.
     */
    cursor?: MaintenanceWindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceWindows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceWindows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceWindows.
     */
    distinct?: MaintenanceWindowScalarFieldEnum | MaintenanceWindowScalarFieldEnum[]
  }

  /**
   * MaintenanceWindow create
   */
  export type MaintenanceWindowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceWindow
     */
    select?: MaintenanceWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceWindow
     */
    omit?: MaintenanceWindowOmit<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceWindow.
     */
    data: XOR<MaintenanceWindowCreateInput, MaintenanceWindowUncheckedCreateInput>
  }

  /**
   * MaintenanceWindow createMany
   */
  export type MaintenanceWindowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceWindows.
     */
    data: MaintenanceWindowCreateManyInput | MaintenanceWindowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceWindow createManyAndReturn
   */
  export type MaintenanceWindowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceWindow
     */
    select?: MaintenanceWindowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceWindow
     */
    omit?: MaintenanceWindowOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceWindows.
     */
    data: MaintenanceWindowCreateManyInput | MaintenanceWindowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceWindow update
   */
  export type MaintenanceWindowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceWindow
     */
    select?: MaintenanceWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceWindow
     */
    omit?: MaintenanceWindowOmit<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceWindow.
     */
    data: XOR<MaintenanceWindowUpdateInput, MaintenanceWindowUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceWindow to update.
     */
    where: MaintenanceWindowWhereUniqueInput
  }

  /**
   * MaintenanceWindow updateMany
   */
  export type MaintenanceWindowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceWindows.
     */
    data: XOR<MaintenanceWindowUpdateManyMutationInput, MaintenanceWindowUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceWindows to update
     */
    where?: MaintenanceWindowWhereInput
    /**
     * Limit how many MaintenanceWindows to update.
     */
    limit?: number
  }

  /**
   * MaintenanceWindow updateManyAndReturn
   */
  export type MaintenanceWindowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceWindow
     */
    select?: MaintenanceWindowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceWindow
     */
    omit?: MaintenanceWindowOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceWindows.
     */
    data: XOR<MaintenanceWindowUpdateManyMutationInput, MaintenanceWindowUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceWindows to update
     */
    where?: MaintenanceWindowWhereInput
    /**
     * Limit how many MaintenanceWindows to update.
     */
    limit?: number
  }

  /**
   * MaintenanceWindow upsert
   */
  export type MaintenanceWindowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceWindow
     */
    select?: MaintenanceWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceWindow
     */
    omit?: MaintenanceWindowOmit<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceWindow to update in case it exists.
     */
    where: MaintenanceWindowWhereUniqueInput
    /**
     * In case the MaintenanceWindow found by the `where` argument doesn't exist, create a new MaintenanceWindow with this data.
     */
    create: XOR<MaintenanceWindowCreateInput, MaintenanceWindowUncheckedCreateInput>
    /**
     * In case the MaintenanceWindow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceWindowUpdateInput, MaintenanceWindowUncheckedUpdateInput>
  }

  /**
   * MaintenanceWindow delete
   */
  export type MaintenanceWindowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceWindow
     */
    select?: MaintenanceWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceWindow
     */
    omit?: MaintenanceWindowOmit<ExtArgs> | null
    /**
     * Filter which MaintenanceWindow to delete.
     */
    where: MaintenanceWindowWhereUniqueInput
  }

  /**
   * MaintenanceWindow deleteMany
   */
  export type MaintenanceWindowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceWindows to delete
     */
    where?: MaintenanceWindowWhereInput
    /**
     * Limit how many MaintenanceWindows to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceWindow without action
   */
  export type MaintenanceWindowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceWindow
     */
    select?: MaintenanceWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceWindow
     */
    omit?: MaintenanceWindowOmit<ExtArgs> | null
  }


  /**
   * Model SystemHealthReport
   */

  export type AggregateSystemHealthReport = {
    _count: SystemHealthReportCountAggregateOutputType | null
    _avg: SystemHealthReportAvgAggregateOutputType | null
    _sum: SystemHealthReportSumAggregateOutputType | null
    _min: SystemHealthReportMinAggregateOutputType | null
    _max: SystemHealthReportMaxAggregateOutputType | null
  }

  export type SystemHealthReportAvgAggregateOutputType = {
    id: number | null
    uptime: number | null
    totalRequests: number | null
    totalErrors: number | null
    errorRate: number | null
    avgResponseTime: number | null
    dbResponseTime: number | null
  }

  export type SystemHealthReportSumAggregateOutputType = {
    id: number | null
    uptime: number | null
    totalRequests: number | null
    totalErrors: number | null
    errorRate: number | null
    avgResponseTime: number | null
    dbResponseTime: number | null
  }

  export type SystemHealthReportMinAggregateOutputType = {
    id: number | null
    reportType: string | null
    reportDate: Date | null
    uptime: number | null
    totalRequests: number | null
    totalErrors: number | null
    errorRate: number | null
    avgResponseTime: number | null
    dbStatus: string | null
    dbResponseTime: number | null
    sentAt: Date | null
    createdAt: Date | null
  }

  export type SystemHealthReportMaxAggregateOutputType = {
    id: number | null
    reportType: string | null
    reportDate: Date | null
    uptime: number | null
    totalRequests: number | null
    totalErrors: number | null
    errorRate: number | null
    avgResponseTime: number | null
    dbStatus: string | null
    dbResponseTime: number | null
    sentAt: Date | null
    createdAt: Date | null
  }

  export type SystemHealthReportCountAggregateOutputType = {
    id: number
    reportType: number
    reportDate: number
    uptime: number
    totalRequests: number
    totalErrors: number
    errorRate: number
    avgResponseTime: number
    dbStatus: number
    dbResponseTime: number
    endpointMetrics: number
    recentErrors: number
    sentAt: number
    createdAt: number
    _all: number
  }


  export type SystemHealthReportAvgAggregateInputType = {
    id?: true
    uptime?: true
    totalRequests?: true
    totalErrors?: true
    errorRate?: true
    avgResponseTime?: true
    dbResponseTime?: true
  }

  export type SystemHealthReportSumAggregateInputType = {
    id?: true
    uptime?: true
    totalRequests?: true
    totalErrors?: true
    errorRate?: true
    avgResponseTime?: true
    dbResponseTime?: true
  }

  export type SystemHealthReportMinAggregateInputType = {
    id?: true
    reportType?: true
    reportDate?: true
    uptime?: true
    totalRequests?: true
    totalErrors?: true
    errorRate?: true
    avgResponseTime?: true
    dbStatus?: true
    dbResponseTime?: true
    sentAt?: true
    createdAt?: true
  }

  export type SystemHealthReportMaxAggregateInputType = {
    id?: true
    reportType?: true
    reportDate?: true
    uptime?: true
    totalRequests?: true
    totalErrors?: true
    errorRate?: true
    avgResponseTime?: true
    dbStatus?: true
    dbResponseTime?: true
    sentAt?: true
    createdAt?: true
  }

  export type SystemHealthReportCountAggregateInputType = {
    id?: true
    reportType?: true
    reportDate?: true
    uptime?: true
    totalRequests?: true
    totalErrors?: true
    errorRate?: true
    avgResponseTime?: true
    dbStatus?: true
    dbResponseTime?: true
    endpointMetrics?: true
    recentErrors?: true
    sentAt?: true
    createdAt?: true
    _all?: true
  }

  export type SystemHealthReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemHealthReport to aggregate.
     */
    where?: SystemHealthReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemHealthReports to fetch.
     */
    orderBy?: SystemHealthReportOrderByWithRelationInput | SystemHealthReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemHealthReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemHealthReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemHealthReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemHealthReports
    **/
    _count?: true | SystemHealthReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemHealthReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemHealthReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemHealthReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemHealthReportMaxAggregateInputType
  }

  export type GetSystemHealthReportAggregateType<T extends SystemHealthReportAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemHealthReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemHealthReport[P]>
      : GetScalarType<T[P], AggregateSystemHealthReport[P]>
  }




  export type SystemHealthReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemHealthReportWhereInput
    orderBy?: SystemHealthReportOrderByWithAggregationInput | SystemHealthReportOrderByWithAggregationInput[]
    by: SystemHealthReportScalarFieldEnum[] | SystemHealthReportScalarFieldEnum
    having?: SystemHealthReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemHealthReportCountAggregateInputType | true
    _avg?: SystemHealthReportAvgAggregateInputType
    _sum?: SystemHealthReportSumAggregateInputType
    _min?: SystemHealthReportMinAggregateInputType
    _max?: SystemHealthReportMaxAggregateInputType
  }

  export type SystemHealthReportGroupByOutputType = {
    id: number
    reportType: string
    reportDate: Date
    uptime: number
    totalRequests: number
    totalErrors: number
    errorRate: number
    avgResponseTime: number
    dbStatus: string
    dbResponseTime: number | null
    endpointMetrics: JsonValue
    recentErrors: JsonValue | null
    sentAt: Date | null
    createdAt: Date
    _count: SystemHealthReportCountAggregateOutputType | null
    _avg: SystemHealthReportAvgAggregateOutputType | null
    _sum: SystemHealthReportSumAggregateOutputType | null
    _min: SystemHealthReportMinAggregateOutputType | null
    _max: SystemHealthReportMaxAggregateOutputType | null
  }

  type GetSystemHealthReportGroupByPayload<T extends SystemHealthReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemHealthReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemHealthReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemHealthReportGroupByOutputType[P]>
            : GetScalarType<T[P], SystemHealthReportGroupByOutputType[P]>
        }
      >
    >


  export type SystemHealthReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportType?: boolean
    reportDate?: boolean
    uptime?: boolean
    totalRequests?: boolean
    totalErrors?: boolean
    errorRate?: boolean
    avgResponseTime?: boolean
    dbStatus?: boolean
    dbResponseTime?: boolean
    endpointMetrics?: boolean
    recentErrors?: boolean
    sentAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["systemHealthReport"]>

  export type SystemHealthReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportType?: boolean
    reportDate?: boolean
    uptime?: boolean
    totalRequests?: boolean
    totalErrors?: boolean
    errorRate?: boolean
    avgResponseTime?: boolean
    dbStatus?: boolean
    dbResponseTime?: boolean
    endpointMetrics?: boolean
    recentErrors?: boolean
    sentAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["systemHealthReport"]>

  export type SystemHealthReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportType?: boolean
    reportDate?: boolean
    uptime?: boolean
    totalRequests?: boolean
    totalErrors?: boolean
    errorRate?: boolean
    avgResponseTime?: boolean
    dbStatus?: boolean
    dbResponseTime?: boolean
    endpointMetrics?: boolean
    recentErrors?: boolean
    sentAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["systemHealthReport"]>

  export type SystemHealthReportSelectScalar = {
    id?: boolean
    reportType?: boolean
    reportDate?: boolean
    uptime?: boolean
    totalRequests?: boolean
    totalErrors?: boolean
    errorRate?: boolean
    avgResponseTime?: boolean
    dbStatus?: boolean
    dbResponseTime?: boolean
    endpointMetrics?: boolean
    recentErrors?: boolean
    sentAt?: boolean
    createdAt?: boolean
  }

  export type SystemHealthReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportType" | "reportDate" | "uptime" | "totalRequests" | "totalErrors" | "errorRate" | "avgResponseTime" | "dbStatus" | "dbResponseTime" | "endpointMetrics" | "recentErrors" | "sentAt" | "createdAt", ExtArgs["result"]["systemHealthReport"]>

  export type $SystemHealthReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemHealthReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reportType: string
      reportDate: Date
      uptime: number
      totalRequests: number
      totalErrors: number
      errorRate: number
      avgResponseTime: number
      dbStatus: string
      dbResponseTime: number | null
      endpointMetrics: Prisma.JsonValue
      recentErrors: Prisma.JsonValue | null
      sentAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["systemHealthReport"]>
    composites: {}
  }

  type SystemHealthReportGetPayload<S extends boolean | null | undefined | SystemHealthReportDefaultArgs> = $Result.GetResult<Prisma.$SystemHealthReportPayload, S>

  type SystemHealthReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemHealthReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemHealthReportCountAggregateInputType | true
    }

  export interface SystemHealthReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemHealthReport'], meta: { name: 'SystemHealthReport' } }
    /**
     * Find zero or one SystemHealthReport that matches the filter.
     * @param {SystemHealthReportFindUniqueArgs} args - Arguments to find a SystemHealthReport
     * @example
     * // Get one SystemHealthReport
     * const systemHealthReport = await prisma.systemHealthReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemHealthReportFindUniqueArgs>(args: SelectSubset<T, SystemHealthReportFindUniqueArgs<ExtArgs>>): Prisma__SystemHealthReportClient<$Result.GetResult<Prisma.$SystemHealthReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemHealthReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemHealthReportFindUniqueOrThrowArgs} args - Arguments to find a SystemHealthReport
     * @example
     * // Get one SystemHealthReport
     * const systemHealthReport = await prisma.systemHealthReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemHealthReportFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemHealthReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemHealthReportClient<$Result.GetResult<Prisma.$SystemHealthReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemHealthReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthReportFindFirstArgs} args - Arguments to find a SystemHealthReport
     * @example
     * // Get one SystemHealthReport
     * const systemHealthReport = await prisma.systemHealthReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemHealthReportFindFirstArgs>(args?: SelectSubset<T, SystemHealthReportFindFirstArgs<ExtArgs>>): Prisma__SystemHealthReportClient<$Result.GetResult<Prisma.$SystemHealthReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemHealthReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthReportFindFirstOrThrowArgs} args - Arguments to find a SystemHealthReport
     * @example
     * // Get one SystemHealthReport
     * const systemHealthReport = await prisma.systemHealthReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemHealthReportFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemHealthReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemHealthReportClient<$Result.GetResult<Prisma.$SystemHealthReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemHealthReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemHealthReports
     * const systemHealthReports = await prisma.systemHealthReport.findMany()
     * 
     * // Get first 10 SystemHealthReports
     * const systemHealthReports = await prisma.systemHealthReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemHealthReportWithIdOnly = await prisma.systemHealthReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemHealthReportFindManyArgs>(args?: SelectSubset<T, SystemHealthReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemHealthReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemHealthReport.
     * @param {SystemHealthReportCreateArgs} args - Arguments to create a SystemHealthReport.
     * @example
     * // Create one SystemHealthReport
     * const SystemHealthReport = await prisma.systemHealthReport.create({
     *   data: {
     *     // ... data to create a SystemHealthReport
     *   }
     * })
     * 
     */
    create<T extends SystemHealthReportCreateArgs>(args: SelectSubset<T, SystemHealthReportCreateArgs<ExtArgs>>): Prisma__SystemHealthReportClient<$Result.GetResult<Prisma.$SystemHealthReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemHealthReports.
     * @param {SystemHealthReportCreateManyArgs} args - Arguments to create many SystemHealthReports.
     * @example
     * // Create many SystemHealthReports
     * const systemHealthReport = await prisma.systemHealthReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemHealthReportCreateManyArgs>(args?: SelectSubset<T, SystemHealthReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemHealthReports and returns the data saved in the database.
     * @param {SystemHealthReportCreateManyAndReturnArgs} args - Arguments to create many SystemHealthReports.
     * @example
     * // Create many SystemHealthReports
     * const systemHealthReport = await prisma.systemHealthReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemHealthReports and only return the `id`
     * const systemHealthReportWithIdOnly = await prisma.systemHealthReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemHealthReportCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemHealthReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemHealthReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemHealthReport.
     * @param {SystemHealthReportDeleteArgs} args - Arguments to delete one SystemHealthReport.
     * @example
     * // Delete one SystemHealthReport
     * const SystemHealthReport = await prisma.systemHealthReport.delete({
     *   where: {
     *     // ... filter to delete one SystemHealthReport
     *   }
     * })
     * 
     */
    delete<T extends SystemHealthReportDeleteArgs>(args: SelectSubset<T, SystemHealthReportDeleteArgs<ExtArgs>>): Prisma__SystemHealthReportClient<$Result.GetResult<Prisma.$SystemHealthReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemHealthReport.
     * @param {SystemHealthReportUpdateArgs} args - Arguments to update one SystemHealthReport.
     * @example
     * // Update one SystemHealthReport
     * const systemHealthReport = await prisma.systemHealthReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemHealthReportUpdateArgs>(args: SelectSubset<T, SystemHealthReportUpdateArgs<ExtArgs>>): Prisma__SystemHealthReportClient<$Result.GetResult<Prisma.$SystemHealthReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemHealthReports.
     * @param {SystemHealthReportDeleteManyArgs} args - Arguments to filter SystemHealthReports to delete.
     * @example
     * // Delete a few SystemHealthReports
     * const { count } = await prisma.systemHealthReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemHealthReportDeleteManyArgs>(args?: SelectSubset<T, SystemHealthReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemHealthReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemHealthReports
     * const systemHealthReport = await prisma.systemHealthReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemHealthReportUpdateManyArgs>(args: SelectSubset<T, SystemHealthReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemHealthReports and returns the data updated in the database.
     * @param {SystemHealthReportUpdateManyAndReturnArgs} args - Arguments to update many SystemHealthReports.
     * @example
     * // Update many SystemHealthReports
     * const systemHealthReport = await prisma.systemHealthReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemHealthReports and only return the `id`
     * const systemHealthReportWithIdOnly = await prisma.systemHealthReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends SystemHealthReportUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemHealthReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemHealthReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemHealthReport.
     * @param {SystemHealthReportUpsertArgs} args - Arguments to update or create a SystemHealthReport.
     * @example
     * // Update or create a SystemHealthReport
     * const systemHealthReport = await prisma.systemHealthReport.upsert({
     *   create: {
     *     // ... data to create a SystemHealthReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemHealthReport we want to update
     *   }
     * })
     */
    upsert<T extends SystemHealthReportUpsertArgs>(args: SelectSubset<T, SystemHealthReportUpsertArgs<ExtArgs>>): Prisma__SystemHealthReportClient<$Result.GetResult<Prisma.$SystemHealthReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemHealthReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthReportCountArgs} args - Arguments to filter SystemHealthReports to count.
     * @example
     * // Count the number of SystemHealthReports
     * const count = await prisma.systemHealthReport.count({
     *   where: {
     *     // ... the filter for the SystemHealthReports we want to count
     *   }
     * })
    **/
    count<T extends SystemHealthReportCountArgs>(
      args?: Subset<T, SystemHealthReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemHealthReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemHealthReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemHealthReportAggregateArgs>(args: Subset<T, SystemHealthReportAggregateArgs>): Prisma.PrismaPromise<GetSystemHealthReportAggregateType<T>>

    /**
     * Group by SystemHealthReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthReportGroupByArgs} args - Group by arguments.
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
      T extends SystemHealthReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemHealthReportGroupByArgs['orderBy'] }
        : { orderBy?: SystemHealthReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemHealthReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemHealthReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemHealthReport model
   */
  readonly fields: SystemHealthReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemHealthReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemHealthReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SystemHealthReport model
   */
  interface SystemHealthReportFieldRefs {
    readonly id: FieldRef<"SystemHealthReport", 'Int'>
    readonly reportType: FieldRef<"SystemHealthReport", 'String'>
    readonly reportDate: FieldRef<"SystemHealthReport", 'DateTime'>
    readonly uptime: FieldRef<"SystemHealthReport", 'Float'>
    readonly totalRequests: FieldRef<"SystemHealthReport", 'Int'>
    readonly totalErrors: FieldRef<"SystemHealthReport", 'Int'>
    readonly errorRate: FieldRef<"SystemHealthReport", 'Float'>
    readonly avgResponseTime: FieldRef<"SystemHealthReport", 'Float'>
    readonly dbStatus: FieldRef<"SystemHealthReport", 'String'>
    readonly dbResponseTime: FieldRef<"SystemHealthReport", 'Float'>
    readonly endpointMetrics: FieldRef<"SystemHealthReport", 'Json'>
    readonly recentErrors: FieldRef<"SystemHealthReport", 'Json'>
    readonly sentAt: FieldRef<"SystemHealthReport", 'DateTime'>
    readonly createdAt: FieldRef<"SystemHealthReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemHealthReport findUnique
   */
  export type SystemHealthReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemHealthReport
     */
    select?: SystemHealthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemHealthReport
     */
    omit?: SystemHealthReportOmit<ExtArgs> | null
    /**
     * Filter, which SystemHealthReport to fetch.
     */
    where: SystemHealthReportWhereUniqueInput
  }

  /**
   * SystemHealthReport findUniqueOrThrow
   */
  export type SystemHealthReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemHealthReport
     */
    select?: SystemHealthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemHealthReport
     */
    omit?: SystemHealthReportOmit<ExtArgs> | null
    /**
     * Filter, which SystemHealthReport to fetch.
     */
    where: SystemHealthReportWhereUniqueInput
  }

  /**
   * SystemHealthReport findFirst
   */
  export type SystemHealthReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemHealthReport
     */
    select?: SystemHealthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemHealthReport
     */
    omit?: SystemHealthReportOmit<ExtArgs> | null
    /**
     * Filter, which SystemHealthReport to fetch.
     */
    where?: SystemHealthReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemHealthReports to fetch.
     */
    orderBy?: SystemHealthReportOrderByWithRelationInput | SystemHealthReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemHealthReports.
     */
    cursor?: SystemHealthReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemHealthReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemHealthReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemHealthReports.
     */
    distinct?: SystemHealthReportScalarFieldEnum | SystemHealthReportScalarFieldEnum[]
  }

  /**
   * SystemHealthReport findFirstOrThrow
   */
  export type SystemHealthReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemHealthReport
     */
    select?: SystemHealthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemHealthReport
     */
    omit?: SystemHealthReportOmit<ExtArgs> | null
    /**
     * Filter, which SystemHealthReport to fetch.
     */
    where?: SystemHealthReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemHealthReports to fetch.
     */
    orderBy?: SystemHealthReportOrderByWithRelationInput | SystemHealthReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemHealthReports.
     */
    cursor?: SystemHealthReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemHealthReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemHealthReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemHealthReports.
     */
    distinct?: SystemHealthReportScalarFieldEnum | SystemHealthReportScalarFieldEnum[]
  }

  /**
   * SystemHealthReport findMany
   */
  export type SystemHealthReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemHealthReport
     */
    select?: SystemHealthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemHealthReport
     */
    omit?: SystemHealthReportOmit<ExtArgs> | null
    /**
     * Filter, which SystemHealthReports to fetch.
     */
    where?: SystemHealthReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemHealthReports to fetch.
     */
    orderBy?: SystemHealthReportOrderByWithRelationInput | SystemHealthReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemHealthReports.
     */
    cursor?: SystemHealthReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemHealthReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemHealthReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemHealthReports.
     */
    distinct?: SystemHealthReportScalarFieldEnum | SystemHealthReportScalarFieldEnum[]
  }

  /**
   * SystemHealthReport create
   */
  export type SystemHealthReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemHealthReport
     */
    select?: SystemHealthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemHealthReport
     */
    omit?: SystemHealthReportOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemHealthReport.
     */
    data: XOR<SystemHealthReportCreateInput, SystemHealthReportUncheckedCreateInput>
  }

  /**
   * SystemHealthReport createMany
   */
  export type SystemHealthReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemHealthReports.
     */
    data: SystemHealthReportCreateManyInput | SystemHealthReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemHealthReport createManyAndReturn
   */
  export type SystemHealthReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemHealthReport
     */
    select?: SystemHealthReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemHealthReport
     */
    omit?: SystemHealthReportOmit<ExtArgs> | null
    /**
     * The data used to create many SystemHealthReports.
     */
    data: SystemHealthReportCreateManyInput | SystemHealthReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemHealthReport update
   */
  export type SystemHealthReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemHealthReport
     */
    select?: SystemHealthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemHealthReport
     */
    omit?: SystemHealthReportOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemHealthReport.
     */
    data: XOR<SystemHealthReportUpdateInput, SystemHealthReportUncheckedUpdateInput>
    /**
     * Choose, which SystemHealthReport to update.
     */
    where: SystemHealthReportWhereUniqueInput
  }

  /**
   * SystemHealthReport updateMany
   */
  export type SystemHealthReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemHealthReports.
     */
    data: XOR<SystemHealthReportUpdateManyMutationInput, SystemHealthReportUncheckedUpdateManyInput>
    /**
     * Filter which SystemHealthReports to update
     */
    where?: SystemHealthReportWhereInput
    /**
     * Limit how many SystemHealthReports to update.
     */
    limit?: number
  }

  /**
   * SystemHealthReport updateManyAndReturn
   */
  export type SystemHealthReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemHealthReport
     */
    select?: SystemHealthReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemHealthReport
     */
    omit?: SystemHealthReportOmit<ExtArgs> | null
    /**
     * The data used to update SystemHealthReports.
     */
    data: XOR<SystemHealthReportUpdateManyMutationInput, SystemHealthReportUncheckedUpdateManyInput>
    /**
     * Filter which SystemHealthReports to update
     */
    where?: SystemHealthReportWhereInput
    /**
     * Limit how many SystemHealthReports to update.
     */
    limit?: number
  }

  /**
   * SystemHealthReport upsert
   */
  export type SystemHealthReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemHealthReport
     */
    select?: SystemHealthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemHealthReport
     */
    omit?: SystemHealthReportOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemHealthReport to update in case it exists.
     */
    where: SystemHealthReportWhereUniqueInput
    /**
     * In case the SystemHealthReport found by the `where` argument doesn't exist, create a new SystemHealthReport with this data.
     */
    create: XOR<SystemHealthReportCreateInput, SystemHealthReportUncheckedCreateInput>
    /**
     * In case the SystemHealthReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemHealthReportUpdateInput, SystemHealthReportUncheckedUpdateInput>
  }

  /**
   * SystemHealthReport delete
   */
  export type SystemHealthReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemHealthReport
     */
    select?: SystemHealthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemHealthReport
     */
    omit?: SystemHealthReportOmit<ExtArgs> | null
    /**
     * Filter which SystemHealthReport to delete.
     */
    where: SystemHealthReportWhereUniqueInput
  }

  /**
   * SystemHealthReport deleteMany
   */
  export type SystemHealthReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemHealthReports to delete
     */
    where?: SystemHealthReportWhereInput
    /**
     * Limit how many SystemHealthReports to delete.
     */
    limit?: number
  }

  /**
   * SystemHealthReport without action
   */
  export type SystemHealthReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemHealthReport
     */
    select?: SystemHealthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemHealthReport
     */
    omit?: SystemHealthReportOmit<ExtArgs> | null
  }


  /**
   * Model AdminToken
   */

  export type AggregateAdminToken = {
    _count: AdminTokenCountAggregateOutputType | null
    _avg: AdminTokenAvgAggregateOutputType | null
    _sum: AdminTokenSumAggregateOutputType | null
    _min: AdminTokenMinAggregateOutputType | null
    _max: AdminTokenMaxAggregateOutputType | null
  }

  export type AdminTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminTokenSumAggregateOutputType = {
    id: number | null
  }

  export type AdminTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    email: string | null
    expiresAt: Date | null
    used: boolean | null
    ipHash: string | null
    uaHash: string | null
    fingerprint: string | null
    createdAt: Date | null
  }

  export type AdminTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    email: string | null
    expiresAt: Date | null
    used: boolean | null
    ipHash: string | null
    uaHash: string | null
    fingerprint: string | null
    createdAt: Date | null
  }

  export type AdminTokenCountAggregateOutputType = {
    id: number
    token: number
    email: number
    expiresAt: number
    used: number
    ipHash: number
    uaHash: number
    fingerprint: number
    createdAt: number
    _all: number
  }


  export type AdminTokenAvgAggregateInputType = {
    id?: true
  }

  export type AdminTokenSumAggregateInputType = {
    id?: true
  }

  export type AdminTokenMinAggregateInputType = {
    id?: true
    token?: true
    email?: true
    expiresAt?: true
    used?: true
    ipHash?: true
    uaHash?: true
    fingerprint?: true
    createdAt?: true
  }

  export type AdminTokenMaxAggregateInputType = {
    id?: true
    token?: true
    email?: true
    expiresAt?: true
    used?: true
    ipHash?: true
    uaHash?: true
    fingerprint?: true
    createdAt?: true
  }

  export type AdminTokenCountAggregateInputType = {
    id?: true
    token?: true
    email?: true
    expiresAt?: true
    used?: true
    ipHash?: true
    uaHash?: true
    fingerprint?: true
    createdAt?: true
    _all?: true
  }

  export type AdminTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminToken to aggregate.
     */
    where?: AdminTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminTokens to fetch.
     */
    orderBy?: AdminTokenOrderByWithRelationInput | AdminTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminTokens
    **/
    _count?: true | AdminTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminTokenMaxAggregateInputType
  }

  export type GetAdminTokenAggregateType<T extends AdminTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminToken[P]>
      : GetScalarType<T[P], AggregateAdminToken[P]>
  }




  export type AdminTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminTokenWhereInput
    orderBy?: AdminTokenOrderByWithAggregationInput | AdminTokenOrderByWithAggregationInput[]
    by: AdminTokenScalarFieldEnum[] | AdminTokenScalarFieldEnum
    having?: AdminTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminTokenCountAggregateInputType | true
    _avg?: AdminTokenAvgAggregateInputType
    _sum?: AdminTokenSumAggregateInputType
    _min?: AdminTokenMinAggregateInputType
    _max?: AdminTokenMaxAggregateInputType
  }

  export type AdminTokenGroupByOutputType = {
    id: number
    token: string
    email: string
    expiresAt: Date
    used: boolean
    ipHash: string | null
    uaHash: string | null
    fingerprint: string | null
    createdAt: Date
    _count: AdminTokenCountAggregateOutputType | null
    _avg: AdminTokenAvgAggregateOutputType | null
    _sum: AdminTokenSumAggregateOutputType | null
    _min: AdminTokenMinAggregateOutputType | null
    _max: AdminTokenMaxAggregateOutputType | null
  }

  type GetAdminTokenGroupByPayload<T extends AdminTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminTokenGroupByOutputType[P]>
            : GetScalarType<T[P], AdminTokenGroupByOutputType[P]>
        }
      >
    >


  export type AdminTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    email?: boolean
    expiresAt?: boolean
    used?: boolean
    ipHash?: boolean
    uaHash?: boolean
    fingerprint?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminToken"]>

  export type AdminTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    email?: boolean
    expiresAt?: boolean
    used?: boolean
    ipHash?: boolean
    uaHash?: boolean
    fingerprint?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminToken"]>

  export type AdminTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    email?: boolean
    expiresAt?: boolean
    used?: boolean
    ipHash?: boolean
    uaHash?: boolean
    fingerprint?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminToken"]>

  export type AdminTokenSelectScalar = {
    id?: boolean
    token?: boolean
    email?: boolean
    expiresAt?: boolean
    used?: boolean
    ipHash?: boolean
    uaHash?: boolean
    fingerprint?: boolean
    createdAt?: boolean
  }

  export type AdminTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "email" | "expiresAt" | "used" | "ipHash" | "uaHash" | "fingerprint" | "createdAt", ExtArgs["result"]["adminToken"]>

  export type $AdminTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      email: string
      expiresAt: Date
      used: boolean
      ipHash: string | null
      uaHash: string | null
      fingerprint: string | null
      createdAt: Date
    }, ExtArgs["result"]["adminToken"]>
    composites: {}
  }

  type AdminTokenGetPayload<S extends boolean | null | undefined | AdminTokenDefaultArgs> = $Result.GetResult<Prisma.$AdminTokenPayload, S>

  type AdminTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminTokenCountAggregateInputType | true
    }

  export interface AdminTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminToken'], meta: { name: 'AdminToken' } }
    /**
     * Find zero or one AdminToken that matches the filter.
     * @param {AdminTokenFindUniqueArgs} args - Arguments to find a AdminToken
     * @example
     * // Get one AdminToken
     * const adminToken = await prisma.adminToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminTokenFindUniqueArgs>(args: SelectSubset<T, AdminTokenFindUniqueArgs<ExtArgs>>): Prisma__AdminTokenClient<$Result.GetResult<Prisma.$AdminTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminTokenFindUniqueOrThrowArgs} args - Arguments to find a AdminToken
     * @example
     * // Get one AdminToken
     * const adminToken = await prisma.adminToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminTokenClient<$Result.GetResult<Prisma.$AdminTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTokenFindFirstArgs} args - Arguments to find a AdminToken
     * @example
     * // Get one AdminToken
     * const adminToken = await prisma.adminToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminTokenFindFirstArgs>(args?: SelectSubset<T, AdminTokenFindFirstArgs<ExtArgs>>): Prisma__AdminTokenClient<$Result.GetResult<Prisma.$AdminTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTokenFindFirstOrThrowArgs} args - Arguments to find a AdminToken
     * @example
     * // Get one AdminToken
     * const adminToken = await prisma.adminToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminTokenClient<$Result.GetResult<Prisma.$AdminTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminTokens
     * const adminTokens = await prisma.adminToken.findMany()
     * 
     * // Get first 10 AdminTokens
     * const adminTokens = await prisma.adminToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminTokenWithIdOnly = await prisma.adminToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminTokenFindManyArgs>(args?: SelectSubset<T, AdminTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminToken.
     * @param {AdminTokenCreateArgs} args - Arguments to create a AdminToken.
     * @example
     * // Create one AdminToken
     * const AdminToken = await prisma.adminToken.create({
     *   data: {
     *     // ... data to create a AdminToken
     *   }
     * })
     * 
     */
    create<T extends AdminTokenCreateArgs>(args: SelectSubset<T, AdminTokenCreateArgs<ExtArgs>>): Prisma__AdminTokenClient<$Result.GetResult<Prisma.$AdminTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminTokens.
     * @param {AdminTokenCreateManyArgs} args - Arguments to create many AdminTokens.
     * @example
     * // Create many AdminTokens
     * const adminToken = await prisma.adminToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminTokenCreateManyArgs>(args?: SelectSubset<T, AdminTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminTokens and returns the data saved in the database.
     * @param {AdminTokenCreateManyAndReturnArgs} args - Arguments to create many AdminTokens.
     * @example
     * // Create many AdminTokens
     * const adminToken = await prisma.adminToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminTokens and only return the `id`
     * const adminTokenWithIdOnly = await prisma.adminToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminToken.
     * @param {AdminTokenDeleteArgs} args - Arguments to delete one AdminToken.
     * @example
     * // Delete one AdminToken
     * const AdminToken = await prisma.adminToken.delete({
     *   where: {
     *     // ... filter to delete one AdminToken
     *   }
     * })
     * 
     */
    delete<T extends AdminTokenDeleteArgs>(args: SelectSubset<T, AdminTokenDeleteArgs<ExtArgs>>): Prisma__AdminTokenClient<$Result.GetResult<Prisma.$AdminTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminToken.
     * @param {AdminTokenUpdateArgs} args - Arguments to update one AdminToken.
     * @example
     * // Update one AdminToken
     * const adminToken = await prisma.adminToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminTokenUpdateArgs>(args: SelectSubset<T, AdminTokenUpdateArgs<ExtArgs>>): Prisma__AdminTokenClient<$Result.GetResult<Prisma.$AdminTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminTokens.
     * @param {AdminTokenDeleteManyArgs} args - Arguments to filter AdminTokens to delete.
     * @example
     * // Delete a few AdminTokens
     * const { count } = await prisma.adminToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminTokenDeleteManyArgs>(args?: SelectSubset<T, AdminTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminTokens
     * const adminToken = await prisma.adminToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminTokenUpdateManyArgs>(args: SelectSubset<T, AdminTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminTokens and returns the data updated in the database.
     * @param {AdminTokenUpdateManyAndReturnArgs} args - Arguments to update many AdminTokens.
     * @example
     * // Update many AdminTokens
     * const adminToken = await prisma.adminToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminTokens and only return the `id`
     * const adminTokenWithIdOnly = await prisma.adminToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminToken.
     * @param {AdminTokenUpsertArgs} args - Arguments to update or create a AdminToken.
     * @example
     * // Update or create a AdminToken
     * const adminToken = await prisma.adminToken.upsert({
     *   create: {
     *     // ... data to create a AdminToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminToken we want to update
     *   }
     * })
     */
    upsert<T extends AdminTokenUpsertArgs>(args: SelectSubset<T, AdminTokenUpsertArgs<ExtArgs>>): Prisma__AdminTokenClient<$Result.GetResult<Prisma.$AdminTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTokenCountArgs} args - Arguments to filter AdminTokens to count.
     * @example
     * // Count the number of AdminTokens
     * const count = await prisma.adminToken.count({
     *   where: {
     *     // ... the filter for the AdminTokens we want to count
     *   }
     * })
    **/
    count<T extends AdminTokenCountArgs>(
      args?: Subset<T, AdminTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminTokenAggregateArgs>(args: Subset<T, AdminTokenAggregateArgs>): Prisma.PrismaPromise<GetAdminTokenAggregateType<T>>

    /**
     * Group by AdminToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTokenGroupByArgs} args - Group by arguments.
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
      T extends AdminTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminTokenGroupByArgs['orderBy'] }
        : { orderBy?: AdminTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminToken model
   */
  readonly fields: AdminTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AdminToken model
   */
  interface AdminTokenFieldRefs {
    readonly id: FieldRef<"AdminToken", 'Int'>
    readonly token: FieldRef<"AdminToken", 'String'>
    readonly email: FieldRef<"AdminToken", 'String'>
    readonly expiresAt: FieldRef<"AdminToken", 'DateTime'>
    readonly used: FieldRef<"AdminToken", 'Boolean'>
    readonly ipHash: FieldRef<"AdminToken", 'String'>
    readonly uaHash: FieldRef<"AdminToken", 'String'>
    readonly fingerprint: FieldRef<"AdminToken", 'String'>
    readonly createdAt: FieldRef<"AdminToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminToken findUnique
   */
  export type AdminTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminToken
     */
    select?: AdminTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminToken
     */
    omit?: AdminTokenOmit<ExtArgs> | null
    /**
     * Filter, which AdminToken to fetch.
     */
    where: AdminTokenWhereUniqueInput
  }

  /**
   * AdminToken findUniqueOrThrow
   */
  export type AdminTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminToken
     */
    select?: AdminTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminToken
     */
    omit?: AdminTokenOmit<ExtArgs> | null
    /**
     * Filter, which AdminToken to fetch.
     */
    where: AdminTokenWhereUniqueInput
  }

  /**
   * AdminToken findFirst
   */
  export type AdminTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminToken
     */
    select?: AdminTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminToken
     */
    omit?: AdminTokenOmit<ExtArgs> | null
    /**
     * Filter, which AdminToken to fetch.
     */
    where?: AdminTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminTokens to fetch.
     */
    orderBy?: AdminTokenOrderByWithRelationInput | AdminTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminTokens.
     */
    cursor?: AdminTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminTokens.
     */
    distinct?: AdminTokenScalarFieldEnum | AdminTokenScalarFieldEnum[]
  }

  /**
   * AdminToken findFirstOrThrow
   */
  export type AdminTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminToken
     */
    select?: AdminTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminToken
     */
    omit?: AdminTokenOmit<ExtArgs> | null
    /**
     * Filter, which AdminToken to fetch.
     */
    where?: AdminTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminTokens to fetch.
     */
    orderBy?: AdminTokenOrderByWithRelationInput | AdminTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminTokens.
     */
    cursor?: AdminTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminTokens.
     */
    distinct?: AdminTokenScalarFieldEnum | AdminTokenScalarFieldEnum[]
  }

  /**
   * AdminToken findMany
   */
  export type AdminTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminToken
     */
    select?: AdminTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminToken
     */
    omit?: AdminTokenOmit<ExtArgs> | null
    /**
     * Filter, which AdminTokens to fetch.
     */
    where?: AdminTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminTokens to fetch.
     */
    orderBy?: AdminTokenOrderByWithRelationInput | AdminTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminTokens.
     */
    cursor?: AdminTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminTokens.
     */
    distinct?: AdminTokenScalarFieldEnum | AdminTokenScalarFieldEnum[]
  }

  /**
   * AdminToken create
   */
  export type AdminTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminToken
     */
    select?: AdminTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminToken
     */
    omit?: AdminTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminToken.
     */
    data: XOR<AdminTokenCreateInput, AdminTokenUncheckedCreateInput>
  }

  /**
   * AdminToken createMany
   */
  export type AdminTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminTokens.
     */
    data: AdminTokenCreateManyInput | AdminTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminToken createManyAndReturn
   */
  export type AdminTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminToken
     */
    select?: AdminTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminToken
     */
    omit?: AdminTokenOmit<ExtArgs> | null
    /**
     * The data used to create many AdminTokens.
     */
    data: AdminTokenCreateManyInput | AdminTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminToken update
   */
  export type AdminTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminToken
     */
    select?: AdminTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminToken
     */
    omit?: AdminTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminToken.
     */
    data: XOR<AdminTokenUpdateInput, AdminTokenUncheckedUpdateInput>
    /**
     * Choose, which AdminToken to update.
     */
    where: AdminTokenWhereUniqueInput
  }

  /**
   * AdminToken updateMany
   */
  export type AdminTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminTokens.
     */
    data: XOR<AdminTokenUpdateManyMutationInput, AdminTokenUncheckedUpdateManyInput>
    /**
     * Filter which AdminTokens to update
     */
    where?: AdminTokenWhereInput
    /**
     * Limit how many AdminTokens to update.
     */
    limit?: number
  }

  /**
   * AdminToken updateManyAndReturn
   */
  export type AdminTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminToken
     */
    select?: AdminTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminToken
     */
    omit?: AdminTokenOmit<ExtArgs> | null
    /**
     * The data used to update AdminTokens.
     */
    data: XOR<AdminTokenUpdateManyMutationInput, AdminTokenUncheckedUpdateManyInput>
    /**
     * Filter which AdminTokens to update
     */
    where?: AdminTokenWhereInput
    /**
     * Limit how many AdminTokens to update.
     */
    limit?: number
  }

  /**
   * AdminToken upsert
   */
  export type AdminTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminToken
     */
    select?: AdminTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminToken
     */
    omit?: AdminTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminToken to update in case it exists.
     */
    where: AdminTokenWhereUniqueInput
    /**
     * In case the AdminToken found by the `where` argument doesn't exist, create a new AdminToken with this data.
     */
    create: XOR<AdminTokenCreateInput, AdminTokenUncheckedCreateInput>
    /**
     * In case the AdminToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminTokenUpdateInput, AdminTokenUncheckedUpdateInput>
  }

  /**
   * AdminToken delete
   */
  export type AdminTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminToken
     */
    select?: AdminTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminToken
     */
    omit?: AdminTokenOmit<ExtArgs> | null
    /**
     * Filter which AdminToken to delete.
     */
    where: AdminTokenWhereUniqueInput
  }

  /**
   * AdminToken deleteMany
   */
  export type AdminTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminTokens to delete
     */
    where?: AdminTokenWhereInput
    /**
     * Limit how many AdminTokens to delete.
     */
    limit?: number
  }

  /**
   * AdminToken without action
   */
  export type AdminTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminToken
     */
    select?: AdminTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminToken
     */
    omit?: AdminTokenOmit<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    eventType: string | null
    severity: string | null
    ipHash: string | null
    uaHash: string | null
    action: string | null
    result: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    eventType: string | null
    severity: string | null
    ipHash: string | null
    uaHash: string | null
    action: string | null
    result: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    eventType: number
    severity: number
    ipHash: number
    uaHash: number
    action: number
    result: number
    context: number
    createdAt: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    eventType?: true
    severity?: true
    ipHash?: true
    uaHash?: true
    action?: true
    result?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    eventType?: true
    severity?: true
    ipHash?: true
    uaHash?: true
    action?: true
    result?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    eventType?: true
    severity?: true
    ipHash?: true
    uaHash?: true
    action?: true
    result?: true
    context?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    eventType: string
    severity: string
    ipHash: string | null
    uaHash: string | null
    action: string
    result: string
    context: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    severity?: boolean
    ipHash?: boolean
    uaHash?: boolean
    action?: boolean
    result?: boolean
    context?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    severity?: boolean
    ipHash?: boolean
    uaHash?: boolean
    action?: boolean
    result?: boolean
    context?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    severity?: boolean
    ipHash?: boolean
    uaHash?: boolean
    action?: boolean
    result?: boolean
    context?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    eventType?: boolean
    severity?: boolean
    ipHash?: boolean
    uaHash?: boolean
    action?: boolean
    result?: boolean
    context?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventType" | "severity" | "ipHash" | "uaHash" | "action" | "result" | "context" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventType: string
      severity: string
      ipHash: string | null
      uaHash: string | null
      action: string
      result: string
      context: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly eventType: FieldRef<"AuditLog", 'String'>
    readonly severity: FieldRef<"AuditLog", 'String'>
    readonly ipHash: FieldRef<"AuditLog", 'String'>
    readonly uaHash: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly result: FieldRef<"AuditLog", 'String'>
    readonly context: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model AccountDeletionRequest
   */

  export type AggregateAccountDeletionRequest = {
    _count: AccountDeletionRequestCountAggregateOutputType | null
    _avg: AccountDeletionRequestAvgAggregateOutputType | null
    _sum: AccountDeletionRequestSumAggregateOutputType | null
    _min: AccountDeletionRequestMinAggregateOutputType | null
    _max: AccountDeletionRequestMaxAggregateOutputType | null
  }

  export type AccountDeletionRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type AccountDeletionRequestSumAggregateOutputType = {
    id: number | null
  }

  export type AccountDeletionRequestMinAggregateOutputType = {
    id: number | null
    email: string | null
    softwareProduct: string | null
    reason: string | null
    communicationChannel: string | null
    alternativeContact: string | null
    verificationToken: string | null
    verifiedAt: Date | null
    status: string | null
    processedAt: Date | null
    adminNotes: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountDeletionRequestMaxAggregateOutputType = {
    id: number | null
    email: string | null
    softwareProduct: string | null
    reason: string | null
    communicationChannel: string | null
    alternativeContact: string | null
    verificationToken: string | null
    verifiedAt: Date | null
    status: string | null
    processedAt: Date | null
    adminNotes: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountDeletionRequestCountAggregateOutputType = {
    id: number
    email: number
    softwareProduct: number
    reason: number
    communicationChannel: number
    alternativeContact: number
    verificationToken: number
    verifiedAt: number
    status: number
    processedAt: number
    adminNotes: number
    ipAddress: number
    userAgent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountDeletionRequestAvgAggregateInputType = {
    id?: true
  }

  export type AccountDeletionRequestSumAggregateInputType = {
    id?: true
  }

  export type AccountDeletionRequestMinAggregateInputType = {
    id?: true
    email?: true
    softwareProduct?: true
    reason?: true
    communicationChannel?: true
    alternativeContact?: true
    verificationToken?: true
    verifiedAt?: true
    status?: true
    processedAt?: true
    adminNotes?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountDeletionRequestMaxAggregateInputType = {
    id?: true
    email?: true
    softwareProduct?: true
    reason?: true
    communicationChannel?: true
    alternativeContact?: true
    verificationToken?: true
    verifiedAt?: true
    status?: true
    processedAt?: true
    adminNotes?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountDeletionRequestCountAggregateInputType = {
    id?: true
    email?: true
    softwareProduct?: true
    reason?: true
    communicationChannel?: true
    alternativeContact?: true
    verificationToken?: true
    verifiedAt?: true
    status?: true
    processedAt?: true
    adminNotes?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountDeletionRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountDeletionRequest to aggregate.
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDeletionRequests to fetch.
     */
    orderBy?: AccountDeletionRequestOrderByWithRelationInput | AccountDeletionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountDeletionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDeletionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDeletionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountDeletionRequests
    **/
    _count?: true | AccountDeletionRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountDeletionRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountDeletionRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountDeletionRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountDeletionRequestMaxAggregateInputType
  }

  export type GetAccountDeletionRequestAggregateType<T extends AccountDeletionRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountDeletionRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountDeletionRequest[P]>
      : GetScalarType<T[P], AggregateAccountDeletionRequest[P]>
  }




  export type AccountDeletionRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountDeletionRequestWhereInput
    orderBy?: AccountDeletionRequestOrderByWithAggregationInput | AccountDeletionRequestOrderByWithAggregationInput[]
    by: AccountDeletionRequestScalarFieldEnum[] | AccountDeletionRequestScalarFieldEnum
    having?: AccountDeletionRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountDeletionRequestCountAggregateInputType | true
    _avg?: AccountDeletionRequestAvgAggregateInputType
    _sum?: AccountDeletionRequestSumAggregateInputType
    _min?: AccountDeletionRequestMinAggregateInputType
    _max?: AccountDeletionRequestMaxAggregateInputType
  }

  export type AccountDeletionRequestGroupByOutputType = {
    id: number
    email: string
    softwareProduct: string
    reason: string
    communicationChannel: string
    alternativeContact: string | null
    verificationToken: string | null
    verifiedAt: Date | null
    status: string
    processedAt: Date | null
    adminNotes: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountDeletionRequestCountAggregateOutputType | null
    _avg: AccountDeletionRequestAvgAggregateOutputType | null
    _sum: AccountDeletionRequestSumAggregateOutputType | null
    _min: AccountDeletionRequestMinAggregateOutputType | null
    _max: AccountDeletionRequestMaxAggregateOutputType | null
  }

  type GetAccountDeletionRequestGroupByPayload<T extends AccountDeletionRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountDeletionRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountDeletionRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountDeletionRequestGroupByOutputType[P]>
            : GetScalarType<T[P], AccountDeletionRequestGroupByOutputType[P]>
        }
      >
    >


  export type AccountDeletionRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    softwareProduct?: boolean
    reason?: boolean
    communicationChannel?: boolean
    alternativeContact?: boolean
    verificationToken?: boolean
    verifiedAt?: boolean
    status?: boolean
    processedAt?: boolean
    adminNotes?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountDeletionRequest"]>

  export type AccountDeletionRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    softwareProduct?: boolean
    reason?: boolean
    communicationChannel?: boolean
    alternativeContact?: boolean
    verificationToken?: boolean
    verifiedAt?: boolean
    status?: boolean
    processedAt?: boolean
    adminNotes?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountDeletionRequest"]>

  export type AccountDeletionRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    softwareProduct?: boolean
    reason?: boolean
    communicationChannel?: boolean
    alternativeContact?: boolean
    verificationToken?: boolean
    verifiedAt?: boolean
    status?: boolean
    processedAt?: boolean
    adminNotes?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountDeletionRequest"]>

  export type AccountDeletionRequestSelectScalar = {
    id?: boolean
    email?: boolean
    softwareProduct?: boolean
    reason?: boolean
    communicationChannel?: boolean
    alternativeContact?: boolean
    verificationToken?: boolean
    verifiedAt?: boolean
    status?: boolean
    processedAt?: boolean
    adminNotes?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountDeletionRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "softwareProduct" | "reason" | "communicationChannel" | "alternativeContact" | "verificationToken" | "verifiedAt" | "status" | "processedAt" | "adminNotes" | "ipAddress" | "userAgent" | "createdAt" | "updatedAt", ExtArgs["result"]["accountDeletionRequest"]>

  export type $AccountDeletionRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountDeletionRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      softwareProduct: string
      reason: string
      communicationChannel: string
      alternativeContact: string | null
      verificationToken: string | null
      verifiedAt: Date | null
      status: string
      processedAt: Date | null
      adminNotes: string | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountDeletionRequest"]>
    composites: {}
  }

  type AccountDeletionRequestGetPayload<S extends boolean | null | undefined | AccountDeletionRequestDefaultArgs> = $Result.GetResult<Prisma.$AccountDeletionRequestPayload, S>

  type AccountDeletionRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountDeletionRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountDeletionRequestCountAggregateInputType | true
    }

  export interface AccountDeletionRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountDeletionRequest'], meta: { name: 'AccountDeletionRequest' } }
    /**
     * Find zero or one AccountDeletionRequest that matches the filter.
     * @param {AccountDeletionRequestFindUniqueArgs} args - Arguments to find a AccountDeletionRequest
     * @example
     * // Get one AccountDeletionRequest
     * const accountDeletionRequest = await prisma.accountDeletionRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountDeletionRequestFindUniqueArgs>(args: SelectSubset<T, AccountDeletionRequestFindUniqueArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountDeletionRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountDeletionRequestFindUniqueOrThrowArgs} args - Arguments to find a AccountDeletionRequest
     * @example
     * // Get one AccountDeletionRequest
     * const accountDeletionRequest = await prisma.accountDeletionRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountDeletionRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountDeletionRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountDeletionRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestFindFirstArgs} args - Arguments to find a AccountDeletionRequest
     * @example
     * // Get one AccountDeletionRequest
     * const accountDeletionRequest = await prisma.accountDeletionRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountDeletionRequestFindFirstArgs>(args?: SelectSubset<T, AccountDeletionRequestFindFirstArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountDeletionRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestFindFirstOrThrowArgs} args - Arguments to find a AccountDeletionRequest
     * @example
     * // Get one AccountDeletionRequest
     * const accountDeletionRequest = await prisma.accountDeletionRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountDeletionRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountDeletionRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountDeletionRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountDeletionRequests
     * const accountDeletionRequests = await prisma.accountDeletionRequest.findMany()
     * 
     * // Get first 10 AccountDeletionRequests
     * const accountDeletionRequests = await prisma.accountDeletionRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountDeletionRequestWithIdOnly = await prisma.accountDeletionRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountDeletionRequestFindManyArgs>(args?: SelectSubset<T, AccountDeletionRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountDeletionRequest.
     * @param {AccountDeletionRequestCreateArgs} args - Arguments to create a AccountDeletionRequest.
     * @example
     * // Create one AccountDeletionRequest
     * const AccountDeletionRequest = await prisma.accountDeletionRequest.create({
     *   data: {
     *     // ... data to create a AccountDeletionRequest
     *   }
     * })
     * 
     */
    create<T extends AccountDeletionRequestCreateArgs>(args: SelectSubset<T, AccountDeletionRequestCreateArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountDeletionRequests.
     * @param {AccountDeletionRequestCreateManyArgs} args - Arguments to create many AccountDeletionRequests.
     * @example
     * // Create many AccountDeletionRequests
     * const accountDeletionRequest = await prisma.accountDeletionRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountDeletionRequestCreateManyArgs>(args?: SelectSubset<T, AccountDeletionRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountDeletionRequests and returns the data saved in the database.
     * @param {AccountDeletionRequestCreateManyAndReturnArgs} args - Arguments to create many AccountDeletionRequests.
     * @example
     * // Create many AccountDeletionRequests
     * const accountDeletionRequest = await prisma.accountDeletionRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountDeletionRequests and only return the `id`
     * const accountDeletionRequestWithIdOnly = await prisma.accountDeletionRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountDeletionRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountDeletionRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountDeletionRequest.
     * @param {AccountDeletionRequestDeleteArgs} args - Arguments to delete one AccountDeletionRequest.
     * @example
     * // Delete one AccountDeletionRequest
     * const AccountDeletionRequest = await prisma.accountDeletionRequest.delete({
     *   where: {
     *     // ... filter to delete one AccountDeletionRequest
     *   }
     * })
     * 
     */
    delete<T extends AccountDeletionRequestDeleteArgs>(args: SelectSubset<T, AccountDeletionRequestDeleteArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountDeletionRequest.
     * @param {AccountDeletionRequestUpdateArgs} args - Arguments to update one AccountDeletionRequest.
     * @example
     * // Update one AccountDeletionRequest
     * const accountDeletionRequest = await prisma.accountDeletionRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountDeletionRequestUpdateArgs>(args: SelectSubset<T, AccountDeletionRequestUpdateArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountDeletionRequests.
     * @param {AccountDeletionRequestDeleteManyArgs} args - Arguments to filter AccountDeletionRequests to delete.
     * @example
     * // Delete a few AccountDeletionRequests
     * const { count } = await prisma.accountDeletionRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeletionRequestDeleteManyArgs>(args?: SelectSubset<T, AccountDeletionRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountDeletionRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountDeletionRequests
     * const accountDeletionRequest = await prisma.accountDeletionRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountDeletionRequestUpdateManyArgs>(args: SelectSubset<T, AccountDeletionRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountDeletionRequests and returns the data updated in the database.
     * @param {AccountDeletionRequestUpdateManyAndReturnArgs} args - Arguments to update many AccountDeletionRequests.
     * @example
     * // Update many AccountDeletionRequests
     * const accountDeletionRequest = await prisma.accountDeletionRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountDeletionRequests and only return the `id`
     * const accountDeletionRequestWithIdOnly = await prisma.accountDeletionRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountDeletionRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountDeletionRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountDeletionRequest.
     * @param {AccountDeletionRequestUpsertArgs} args - Arguments to update or create a AccountDeletionRequest.
     * @example
     * // Update or create a AccountDeletionRequest
     * const accountDeletionRequest = await prisma.accountDeletionRequest.upsert({
     *   create: {
     *     // ... data to create a AccountDeletionRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountDeletionRequest we want to update
     *   }
     * })
     */
    upsert<T extends AccountDeletionRequestUpsertArgs>(args: SelectSubset<T, AccountDeletionRequestUpsertArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountDeletionRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestCountArgs} args - Arguments to filter AccountDeletionRequests to count.
     * @example
     * // Count the number of AccountDeletionRequests
     * const count = await prisma.accountDeletionRequest.count({
     *   where: {
     *     // ... the filter for the AccountDeletionRequests we want to count
     *   }
     * })
    **/
    count<T extends AccountDeletionRequestCountArgs>(
      args?: Subset<T, AccountDeletionRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountDeletionRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountDeletionRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountDeletionRequestAggregateArgs>(args: Subset<T, AccountDeletionRequestAggregateArgs>): Prisma.PrismaPromise<GetAccountDeletionRequestAggregateType<T>>

    /**
     * Group by AccountDeletionRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestGroupByArgs} args - Group by arguments.
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
      T extends AccountDeletionRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountDeletionRequestGroupByArgs['orderBy'] }
        : { orderBy?: AccountDeletionRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountDeletionRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountDeletionRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountDeletionRequest model
   */
  readonly fields: AccountDeletionRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountDeletionRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountDeletionRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AccountDeletionRequest model
   */
  interface AccountDeletionRequestFieldRefs {
    readonly id: FieldRef<"AccountDeletionRequest", 'Int'>
    readonly email: FieldRef<"AccountDeletionRequest", 'String'>
    readonly softwareProduct: FieldRef<"AccountDeletionRequest", 'String'>
    readonly reason: FieldRef<"AccountDeletionRequest", 'String'>
    readonly communicationChannel: FieldRef<"AccountDeletionRequest", 'String'>
    readonly alternativeContact: FieldRef<"AccountDeletionRequest", 'String'>
    readonly verificationToken: FieldRef<"AccountDeletionRequest", 'String'>
    readonly verifiedAt: FieldRef<"AccountDeletionRequest", 'DateTime'>
    readonly status: FieldRef<"AccountDeletionRequest", 'String'>
    readonly processedAt: FieldRef<"AccountDeletionRequest", 'DateTime'>
    readonly adminNotes: FieldRef<"AccountDeletionRequest", 'String'>
    readonly ipAddress: FieldRef<"AccountDeletionRequest", 'String'>
    readonly userAgent: FieldRef<"AccountDeletionRequest", 'String'>
    readonly createdAt: FieldRef<"AccountDeletionRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountDeletionRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountDeletionRequest findUnique
   */
  export type AccountDeletionRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Filter, which AccountDeletionRequest to fetch.
     */
    where: AccountDeletionRequestWhereUniqueInput
  }

  /**
   * AccountDeletionRequest findUniqueOrThrow
   */
  export type AccountDeletionRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Filter, which AccountDeletionRequest to fetch.
     */
    where: AccountDeletionRequestWhereUniqueInput
  }

  /**
   * AccountDeletionRequest findFirst
   */
  export type AccountDeletionRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Filter, which AccountDeletionRequest to fetch.
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDeletionRequests to fetch.
     */
    orderBy?: AccountDeletionRequestOrderByWithRelationInput | AccountDeletionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountDeletionRequests.
     */
    cursor?: AccountDeletionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDeletionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDeletionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountDeletionRequests.
     */
    distinct?: AccountDeletionRequestScalarFieldEnum | AccountDeletionRequestScalarFieldEnum[]
  }

  /**
   * AccountDeletionRequest findFirstOrThrow
   */
  export type AccountDeletionRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Filter, which AccountDeletionRequest to fetch.
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDeletionRequests to fetch.
     */
    orderBy?: AccountDeletionRequestOrderByWithRelationInput | AccountDeletionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountDeletionRequests.
     */
    cursor?: AccountDeletionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDeletionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDeletionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountDeletionRequests.
     */
    distinct?: AccountDeletionRequestScalarFieldEnum | AccountDeletionRequestScalarFieldEnum[]
  }

  /**
   * AccountDeletionRequest findMany
   */
  export type AccountDeletionRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Filter, which AccountDeletionRequests to fetch.
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDeletionRequests to fetch.
     */
    orderBy?: AccountDeletionRequestOrderByWithRelationInput | AccountDeletionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountDeletionRequests.
     */
    cursor?: AccountDeletionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDeletionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDeletionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountDeletionRequests.
     */
    distinct?: AccountDeletionRequestScalarFieldEnum | AccountDeletionRequestScalarFieldEnum[]
  }

  /**
   * AccountDeletionRequest create
   */
  export type AccountDeletionRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a AccountDeletionRequest.
     */
    data: XOR<AccountDeletionRequestCreateInput, AccountDeletionRequestUncheckedCreateInput>
  }

  /**
   * AccountDeletionRequest createMany
   */
  export type AccountDeletionRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountDeletionRequests.
     */
    data: AccountDeletionRequestCreateManyInput | AccountDeletionRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountDeletionRequest createManyAndReturn
   */
  export type AccountDeletionRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * The data used to create many AccountDeletionRequests.
     */
    data: AccountDeletionRequestCreateManyInput | AccountDeletionRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountDeletionRequest update
   */
  export type AccountDeletionRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a AccountDeletionRequest.
     */
    data: XOR<AccountDeletionRequestUpdateInput, AccountDeletionRequestUncheckedUpdateInput>
    /**
     * Choose, which AccountDeletionRequest to update.
     */
    where: AccountDeletionRequestWhereUniqueInput
  }

  /**
   * AccountDeletionRequest updateMany
   */
  export type AccountDeletionRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountDeletionRequests.
     */
    data: XOR<AccountDeletionRequestUpdateManyMutationInput, AccountDeletionRequestUncheckedUpdateManyInput>
    /**
     * Filter which AccountDeletionRequests to update
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * Limit how many AccountDeletionRequests to update.
     */
    limit?: number
  }

  /**
   * AccountDeletionRequest updateManyAndReturn
   */
  export type AccountDeletionRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * The data used to update AccountDeletionRequests.
     */
    data: XOR<AccountDeletionRequestUpdateManyMutationInput, AccountDeletionRequestUncheckedUpdateManyInput>
    /**
     * Filter which AccountDeletionRequests to update
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * Limit how many AccountDeletionRequests to update.
     */
    limit?: number
  }

  /**
   * AccountDeletionRequest upsert
   */
  export type AccountDeletionRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the AccountDeletionRequest to update in case it exists.
     */
    where: AccountDeletionRequestWhereUniqueInput
    /**
     * In case the AccountDeletionRequest found by the `where` argument doesn't exist, create a new AccountDeletionRequest with this data.
     */
    create: XOR<AccountDeletionRequestCreateInput, AccountDeletionRequestUncheckedCreateInput>
    /**
     * In case the AccountDeletionRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountDeletionRequestUpdateInput, AccountDeletionRequestUncheckedUpdateInput>
  }

  /**
   * AccountDeletionRequest delete
   */
  export type AccountDeletionRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Filter which AccountDeletionRequest to delete.
     */
    where: AccountDeletionRequestWhereUniqueInput
  }

  /**
   * AccountDeletionRequest deleteMany
   */
  export type AccountDeletionRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountDeletionRequests to delete
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * Limit how many AccountDeletionRequests to delete.
     */
    limit?: number
  }

  /**
   * AccountDeletionRequest without action
   */
  export type AccountDeletionRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
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


  export const BetaSignupScalarFieldEnum: {
    id: 'id',
    role: 'role',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    country: 'country',
    device: 'device',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    status: 'status',
    queuePosition: 'queuePosition',
    shopsFor: 'shopsFor',
    payMethod: 'payMethod',
    age: 'age',
    businessName: 'businessName',
    businessCategory: 'businessCategory',
    needs: 'needs',
    yearsInBusiness: 'yearsInBusiness',
    justStarting: 'justStarting',
    companyName: 'companyName',
    serviceTypes: 'serviceTypes',
    areasCovered: 'areasCovered',
    fleetSize: 'fleetSize',
    yearsLogistics: 'yearsLogistics',
    logisticsType: 'logisticsType',
    vehicleTypes: 'vehicleTypes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BetaSignupScalarFieldEnum = (typeof BetaSignupScalarFieldEnum)[keyof typeof BetaSignupScalarFieldEnum]


  export const JobPostingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    requirements: 'requirements',
    department: 'department',
    location: 'location',
    employmentType: 'employmentType',
    salaryRange: 'salaryRange',
    experienceLevel: 'experienceLevel',
    status: 'status',
    customFields: 'customFields',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobPostingScalarFieldEnum = (typeof JobPostingScalarFieldEnum)[keyof typeof JobPostingScalarFieldEnum]


  export const CareerApplicationScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    applicantName: 'applicantName',
    email: 'email',
    phone: 'phone',
    country: 'country',
    address: 'address',
    linkedInUrl: 'linkedInUrl',
    portfolioUrl: 'portfolioUrl',
    resumeUrl: 'resumeUrl',
    coverLetter: 'coverLetter',
    customResponses: 'customResponses',
    status: 'status',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CareerApplicationScalarFieldEnum = (typeof CareerApplicationScalarFieldEnum)[keyof typeof CareerApplicationScalarFieldEnum]


  export const PartnershipSubmissionScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    contactName: 'contactName',
    email: 'email',
    phone: 'phone',
    partnershipType: 'partnershipType',
    companyDescription: 'companyDescription',
    partnershipGoals: 'partnershipGoals',
    mouDocumentUrl: 'mouDocumentUrl',
    proposedTerms: 'proposedTerms',
    additionalNotes: 'additionalNotes',
    status: 'status',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnershipSubmissionScalarFieldEnum = (typeof PartnershipSubmissionScalarFieldEnum)[keyof typeof PartnershipSubmissionScalarFieldEnum]


  export const MaintenanceWindowScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
    isActive: 'isActive',
    isScheduled: 'isScheduled',
    reason: 'reason',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaintenanceWindowScalarFieldEnum = (typeof MaintenanceWindowScalarFieldEnum)[keyof typeof MaintenanceWindowScalarFieldEnum]


  export const SystemHealthReportScalarFieldEnum: {
    id: 'id',
    reportType: 'reportType',
    reportDate: 'reportDate',
    uptime: 'uptime',
    totalRequests: 'totalRequests',
    totalErrors: 'totalErrors',
    errorRate: 'errorRate',
    avgResponseTime: 'avgResponseTime',
    dbStatus: 'dbStatus',
    dbResponseTime: 'dbResponseTime',
    endpointMetrics: 'endpointMetrics',
    recentErrors: 'recentErrors',
    sentAt: 'sentAt',
    createdAt: 'createdAt'
  };

  export type SystemHealthReportScalarFieldEnum = (typeof SystemHealthReportScalarFieldEnum)[keyof typeof SystemHealthReportScalarFieldEnum]


  export const AdminTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    email: 'email',
    expiresAt: 'expiresAt',
    used: 'used',
    ipHash: 'ipHash',
    uaHash: 'uaHash',
    fingerprint: 'fingerprint',
    createdAt: 'createdAt'
  };

  export type AdminTokenScalarFieldEnum = (typeof AdminTokenScalarFieldEnum)[keyof typeof AdminTokenScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    eventType: 'eventType',
    severity: 'severity',
    ipHash: 'ipHash',
    uaHash: 'uaHash',
    action: 'action',
    result: 'result',
    context: 'context',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const AccountDeletionRequestScalarFieldEnum: {
    id: 'id',
    email: 'email',
    softwareProduct: 'softwareProduct',
    reason: 'reason',
    communicationChannel: 'communicationChannel',
    alternativeContact: 'alternativeContact',
    verificationToken: 'verificationToken',
    verifiedAt: 'verifiedAt',
    status: 'status',
    processedAt: 'processedAt',
    adminNotes: 'adminNotes',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountDeletionRequestScalarFieldEnum = (typeof AccountDeletionRequestScalarFieldEnum)[keyof typeof AccountDeletionRequestScalarFieldEnum]


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


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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

  export type BetaSignupWhereInput = {
    AND?: BetaSignupWhereInput | BetaSignupWhereInput[]
    OR?: BetaSignupWhereInput[]
    NOT?: BetaSignupWhereInput | BetaSignupWhereInput[]
    id?: IntFilter<"BetaSignup"> | number
    role?: StringFilter<"BetaSignup"> | string
    fullName?: StringFilter<"BetaSignup"> | string
    email?: StringFilter<"BetaSignup"> | string
    phone?: StringNullableFilter<"BetaSignup"> | string | null
    country?: StringFilter<"BetaSignup"> | string
    device?: StringNullableFilter<"BetaSignup"> | string | null
    ipAddress?: StringNullableFilter<"BetaSignup"> | string | null
    userAgent?: StringNullableFilter<"BetaSignup"> | string | null
    status?: StringFilter<"BetaSignup"> | string
    queuePosition?: IntNullableFilter<"BetaSignup"> | number | null
    shopsFor?: StringNullableListFilter<"BetaSignup">
    payMethod?: StringNullableFilter<"BetaSignup"> | string | null
    age?: StringNullableFilter<"BetaSignup"> | string | null
    businessName?: StringNullableFilter<"BetaSignup"> | string | null
    businessCategory?: StringNullableFilter<"BetaSignup"> | string | null
    needs?: StringNullableListFilter<"BetaSignup">
    yearsInBusiness?: StringNullableFilter<"BetaSignup"> | string | null
    justStarting?: StringNullableFilter<"BetaSignup"> | string | null
    companyName?: StringNullableFilter<"BetaSignup"> | string | null
    serviceTypes?: StringNullableListFilter<"BetaSignup">
    areasCovered?: StringNullableFilter<"BetaSignup"> | string | null
    fleetSize?: StringNullableFilter<"BetaSignup"> | string | null
    yearsLogistics?: StringNullableFilter<"BetaSignup"> | string | null
    logisticsType?: StringNullableFilter<"BetaSignup"> | string | null
    vehicleTypes?: StringNullableListFilter<"BetaSignup">
    createdAt?: DateTimeFilter<"BetaSignup"> | Date | string
    updatedAt?: DateTimeFilter<"BetaSignup"> | Date | string
  }

  export type BetaSignupOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrder
    device?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    status?: SortOrder
    queuePosition?: SortOrderInput | SortOrder
    shopsFor?: SortOrder
    payMethod?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    businessName?: SortOrderInput | SortOrder
    businessCategory?: SortOrderInput | SortOrder
    needs?: SortOrder
    yearsInBusiness?: SortOrderInput | SortOrder
    justStarting?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    serviceTypes?: SortOrder
    areasCovered?: SortOrderInput | SortOrder
    fleetSize?: SortOrderInput | SortOrder
    yearsLogistics?: SortOrderInput | SortOrder
    logisticsType?: SortOrderInput | SortOrder
    vehicleTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetaSignupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BetaSignupWhereInput | BetaSignupWhereInput[]
    OR?: BetaSignupWhereInput[]
    NOT?: BetaSignupWhereInput | BetaSignupWhereInput[]
    role?: StringFilter<"BetaSignup"> | string
    fullName?: StringFilter<"BetaSignup"> | string
    email?: StringFilter<"BetaSignup"> | string
    phone?: StringNullableFilter<"BetaSignup"> | string | null
    country?: StringFilter<"BetaSignup"> | string
    device?: StringNullableFilter<"BetaSignup"> | string | null
    ipAddress?: StringNullableFilter<"BetaSignup"> | string | null
    userAgent?: StringNullableFilter<"BetaSignup"> | string | null
    status?: StringFilter<"BetaSignup"> | string
    queuePosition?: IntNullableFilter<"BetaSignup"> | number | null
    shopsFor?: StringNullableListFilter<"BetaSignup">
    payMethod?: StringNullableFilter<"BetaSignup"> | string | null
    age?: StringNullableFilter<"BetaSignup"> | string | null
    businessName?: StringNullableFilter<"BetaSignup"> | string | null
    businessCategory?: StringNullableFilter<"BetaSignup"> | string | null
    needs?: StringNullableListFilter<"BetaSignup">
    yearsInBusiness?: StringNullableFilter<"BetaSignup"> | string | null
    justStarting?: StringNullableFilter<"BetaSignup"> | string | null
    companyName?: StringNullableFilter<"BetaSignup"> | string | null
    serviceTypes?: StringNullableListFilter<"BetaSignup">
    areasCovered?: StringNullableFilter<"BetaSignup"> | string | null
    fleetSize?: StringNullableFilter<"BetaSignup"> | string | null
    yearsLogistics?: StringNullableFilter<"BetaSignup"> | string | null
    logisticsType?: StringNullableFilter<"BetaSignup"> | string | null
    vehicleTypes?: StringNullableListFilter<"BetaSignup">
    createdAt?: DateTimeFilter<"BetaSignup"> | Date | string
    updatedAt?: DateTimeFilter<"BetaSignup"> | Date | string
  }, "id">

  export type BetaSignupOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrder
    device?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    status?: SortOrder
    queuePosition?: SortOrderInput | SortOrder
    shopsFor?: SortOrder
    payMethod?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    businessName?: SortOrderInput | SortOrder
    businessCategory?: SortOrderInput | SortOrder
    needs?: SortOrder
    yearsInBusiness?: SortOrderInput | SortOrder
    justStarting?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    serviceTypes?: SortOrder
    areasCovered?: SortOrderInput | SortOrder
    fleetSize?: SortOrderInput | SortOrder
    yearsLogistics?: SortOrderInput | SortOrder
    logisticsType?: SortOrderInput | SortOrder
    vehicleTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BetaSignupCountOrderByAggregateInput
    _avg?: BetaSignupAvgOrderByAggregateInput
    _max?: BetaSignupMaxOrderByAggregateInput
    _min?: BetaSignupMinOrderByAggregateInput
    _sum?: BetaSignupSumOrderByAggregateInput
  }

  export type BetaSignupScalarWhereWithAggregatesInput = {
    AND?: BetaSignupScalarWhereWithAggregatesInput | BetaSignupScalarWhereWithAggregatesInput[]
    OR?: BetaSignupScalarWhereWithAggregatesInput[]
    NOT?: BetaSignupScalarWhereWithAggregatesInput | BetaSignupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BetaSignup"> | number
    role?: StringWithAggregatesFilter<"BetaSignup"> | string
    fullName?: StringWithAggregatesFilter<"BetaSignup"> | string
    email?: StringWithAggregatesFilter<"BetaSignup"> | string
    phone?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    country?: StringWithAggregatesFilter<"BetaSignup"> | string
    device?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    status?: StringWithAggregatesFilter<"BetaSignup"> | string
    queuePosition?: IntNullableWithAggregatesFilter<"BetaSignup"> | number | null
    shopsFor?: StringNullableListFilter<"BetaSignup">
    payMethod?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    age?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    businessName?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    businessCategory?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    needs?: StringNullableListFilter<"BetaSignup">
    yearsInBusiness?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    justStarting?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    serviceTypes?: StringNullableListFilter<"BetaSignup">
    areasCovered?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    fleetSize?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    yearsLogistics?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    logisticsType?: StringNullableWithAggregatesFilter<"BetaSignup"> | string | null
    vehicleTypes?: StringNullableListFilter<"BetaSignup">
    createdAt?: DateTimeWithAggregatesFilter<"BetaSignup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BetaSignup"> | Date | string
  }

  export type JobPostingWhereInput = {
    AND?: JobPostingWhereInput | JobPostingWhereInput[]
    OR?: JobPostingWhereInput[]
    NOT?: JobPostingWhereInput | JobPostingWhereInput[]
    id?: IntFilter<"JobPosting"> | number
    title?: StringFilter<"JobPosting"> | string
    description?: StringFilter<"JobPosting"> | string
    requirements?: StringFilter<"JobPosting"> | string
    department?: StringFilter<"JobPosting"> | string
    location?: StringFilter<"JobPosting"> | string
    employmentType?: StringFilter<"JobPosting"> | string
    salaryRange?: StringNullableFilter<"JobPosting"> | string | null
    experienceLevel?: StringFilter<"JobPosting"> | string
    status?: StringFilter<"JobPosting"> | string
    customFields?: JsonNullableFilter<"JobPosting">
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string
    applications?: CareerApplicationListRelationFilter
  }

  export type JobPostingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    department?: SortOrder
    location?: SortOrder
    employmentType?: SortOrder
    salaryRange?: SortOrderInput | SortOrder
    experienceLevel?: SortOrder
    status?: SortOrder
    customFields?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applications?: CareerApplicationOrderByRelationAggregateInput
  }

  export type JobPostingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobPostingWhereInput | JobPostingWhereInput[]
    OR?: JobPostingWhereInput[]
    NOT?: JobPostingWhereInput | JobPostingWhereInput[]
    title?: StringFilter<"JobPosting"> | string
    description?: StringFilter<"JobPosting"> | string
    requirements?: StringFilter<"JobPosting"> | string
    department?: StringFilter<"JobPosting"> | string
    location?: StringFilter<"JobPosting"> | string
    employmentType?: StringFilter<"JobPosting"> | string
    salaryRange?: StringNullableFilter<"JobPosting"> | string | null
    experienceLevel?: StringFilter<"JobPosting"> | string
    status?: StringFilter<"JobPosting"> | string
    customFields?: JsonNullableFilter<"JobPosting">
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string
    applications?: CareerApplicationListRelationFilter
  }, "id">

  export type JobPostingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    department?: SortOrder
    location?: SortOrder
    employmentType?: SortOrder
    salaryRange?: SortOrderInput | SortOrder
    experienceLevel?: SortOrder
    status?: SortOrder
    customFields?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobPostingCountOrderByAggregateInput
    _avg?: JobPostingAvgOrderByAggregateInput
    _max?: JobPostingMaxOrderByAggregateInput
    _min?: JobPostingMinOrderByAggregateInput
    _sum?: JobPostingSumOrderByAggregateInput
  }

  export type JobPostingScalarWhereWithAggregatesInput = {
    AND?: JobPostingScalarWhereWithAggregatesInput | JobPostingScalarWhereWithAggregatesInput[]
    OR?: JobPostingScalarWhereWithAggregatesInput[]
    NOT?: JobPostingScalarWhereWithAggregatesInput | JobPostingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobPosting"> | number
    title?: StringWithAggregatesFilter<"JobPosting"> | string
    description?: StringWithAggregatesFilter<"JobPosting"> | string
    requirements?: StringWithAggregatesFilter<"JobPosting"> | string
    department?: StringWithAggregatesFilter<"JobPosting"> | string
    location?: StringWithAggregatesFilter<"JobPosting"> | string
    employmentType?: StringWithAggregatesFilter<"JobPosting"> | string
    salaryRange?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    experienceLevel?: StringWithAggregatesFilter<"JobPosting"> | string
    status?: StringWithAggregatesFilter<"JobPosting"> | string
    customFields?: JsonNullableWithAggregatesFilter<"JobPosting">
    createdAt?: DateTimeWithAggregatesFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobPosting"> | Date | string
  }

  export type CareerApplicationWhereInput = {
    AND?: CareerApplicationWhereInput | CareerApplicationWhereInput[]
    OR?: CareerApplicationWhereInput[]
    NOT?: CareerApplicationWhereInput | CareerApplicationWhereInput[]
    id?: IntFilter<"CareerApplication"> | number
    jobId?: IntNullableFilter<"CareerApplication"> | number | null
    applicantName?: StringFilter<"CareerApplication"> | string
    email?: StringFilter<"CareerApplication"> | string
    phone?: StringNullableFilter<"CareerApplication"> | string | null
    country?: StringFilter<"CareerApplication"> | string
    address?: StringNullableFilter<"CareerApplication"> | string | null
    linkedInUrl?: StringNullableFilter<"CareerApplication"> | string | null
    portfolioUrl?: StringNullableFilter<"CareerApplication"> | string | null
    resumeUrl?: StringNullableFilter<"CareerApplication"> | string | null
    coverLetter?: StringNullableFilter<"CareerApplication"> | string | null
    customResponses?: JsonNullableFilter<"CareerApplication">
    status?: StringFilter<"CareerApplication"> | string
    ipAddress?: StringNullableFilter<"CareerApplication"> | string | null
    userAgent?: StringNullableFilter<"CareerApplication"> | string | null
    createdAt?: DateTimeFilter<"CareerApplication"> | Date | string
    updatedAt?: DateTimeFilter<"CareerApplication"> | Date | string
    job?: XOR<JobPostingNullableScalarRelationFilter, JobPostingWhereInput> | null
  }

  export type CareerApplicationOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrderInput | SortOrder
    applicantName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrder
    address?: SortOrderInput | SortOrder
    linkedInUrl?: SortOrderInput | SortOrder
    portfolioUrl?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    coverLetter?: SortOrderInput | SortOrder
    customResponses?: SortOrderInput | SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    job?: JobPostingOrderByWithRelationInput
  }

  export type CareerApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CareerApplicationWhereInput | CareerApplicationWhereInput[]
    OR?: CareerApplicationWhereInput[]
    NOT?: CareerApplicationWhereInput | CareerApplicationWhereInput[]
    jobId?: IntNullableFilter<"CareerApplication"> | number | null
    applicantName?: StringFilter<"CareerApplication"> | string
    email?: StringFilter<"CareerApplication"> | string
    phone?: StringNullableFilter<"CareerApplication"> | string | null
    country?: StringFilter<"CareerApplication"> | string
    address?: StringNullableFilter<"CareerApplication"> | string | null
    linkedInUrl?: StringNullableFilter<"CareerApplication"> | string | null
    portfolioUrl?: StringNullableFilter<"CareerApplication"> | string | null
    resumeUrl?: StringNullableFilter<"CareerApplication"> | string | null
    coverLetter?: StringNullableFilter<"CareerApplication"> | string | null
    customResponses?: JsonNullableFilter<"CareerApplication">
    status?: StringFilter<"CareerApplication"> | string
    ipAddress?: StringNullableFilter<"CareerApplication"> | string | null
    userAgent?: StringNullableFilter<"CareerApplication"> | string | null
    createdAt?: DateTimeFilter<"CareerApplication"> | Date | string
    updatedAt?: DateTimeFilter<"CareerApplication"> | Date | string
    job?: XOR<JobPostingNullableScalarRelationFilter, JobPostingWhereInput> | null
  }, "id">

  export type CareerApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrderInput | SortOrder
    applicantName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrder
    address?: SortOrderInput | SortOrder
    linkedInUrl?: SortOrderInput | SortOrder
    portfolioUrl?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    coverLetter?: SortOrderInput | SortOrder
    customResponses?: SortOrderInput | SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CareerApplicationCountOrderByAggregateInput
    _avg?: CareerApplicationAvgOrderByAggregateInput
    _max?: CareerApplicationMaxOrderByAggregateInput
    _min?: CareerApplicationMinOrderByAggregateInput
    _sum?: CareerApplicationSumOrderByAggregateInput
  }

  export type CareerApplicationScalarWhereWithAggregatesInput = {
    AND?: CareerApplicationScalarWhereWithAggregatesInput | CareerApplicationScalarWhereWithAggregatesInput[]
    OR?: CareerApplicationScalarWhereWithAggregatesInput[]
    NOT?: CareerApplicationScalarWhereWithAggregatesInput | CareerApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CareerApplication"> | number
    jobId?: IntNullableWithAggregatesFilter<"CareerApplication"> | number | null
    applicantName?: StringWithAggregatesFilter<"CareerApplication"> | string
    email?: StringWithAggregatesFilter<"CareerApplication"> | string
    phone?: StringNullableWithAggregatesFilter<"CareerApplication"> | string | null
    country?: StringWithAggregatesFilter<"CareerApplication"> | string
    address?: StringNullableWithAggregatesFilter<"CareerApplication"> | string | null
    linkedInUrl?: StringNullableWithAggregatesFilter<"CareerApplication"> | string | null
    portfolioUrl?: StringNullableWithAggregatesFilter<"CareerApplication"> | string | null
    resumeUrl?: StringNullableWithAggregatesFilter<"CareerApplication"> | string | null
    coverLetter?: StringNullableWithAggregatesFilter<"CareerApplication"> | string | null
    customResponses?: JsonNullableWithAggregatesFilter<"CareerApplication">
    status?: StringWithAggregatesFilter<"CareerApplication"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"CareerApplication"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"CareerApplication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CareerApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CareerApplication"> | Date | string
  }

  export type PartnershipSubmissionWhereInput = {
    AND?: PartnershipSubmissionWhereInput | PartnershipSubmissionWhereInput[]
    OR?: PartnershipSubmissionWhereInput[]
    NOT?: PartnershipSubmissionWhereInput | PartnershipSubmissionWhereInput[]
    id?: IntFilter<"PartnershipSubmission"> | number
    companyName?: StringFilter<"PartnershipSubmission"> | string
    contactName?: StringFilter<"PartnershipSubmission"> | string
    email?: StringFilter<"PartnershipSubmission"> | string
    phone?: StringNullableFilter<"PartnershipSubmission"> | string | null
    partnershipType?: StringFilter<"PartnershipSubmission"> | string
    companyDescription?: StringFilter<"PartnershipSubmission"> | string
    partnershipGoals?: StringFilter<"PartnershipSubmission"> | string
    mouDocumentUrl?: StringNullableFilter<"PartnershipSubmission"> | string | null
    proposedTerms?: StringNullableFilter<"PartnershipSubmission"> | string | null
    additionalNotes?: StringNullableFilter<"PartnershipSubmission"> | string | null
    status?: StringFilter<"PartnershipSubmission"> | string
    ipAddress?: StringNullableFilter<"PartnershipSubmission"> | string | null
    userAgent?: StringNullableFilter<"PartnershipSubmission"> | string | null
    createdAt?: DateTimeFilter<"PartnershipSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"PartnershipSubmission"> | Date | string
  }

  export type PartnershipSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    partnershipType?: SortOrder
    companyDescription?: SortOrder
    partnershipGoals?: SortOrder
    mouDocumentUrl?: SortOrderInput | SortOrder
    proposedTerms?: SortOrderInput | SortOrder
    additionalNotes?: SortOrderInput | SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnershipSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartnershipSubmissionWhereInput | PartnershipSubmissionWhereInput[]
    OR?: PartnershipSubmissionWhereInput[]
    NOT?: PartnershipSubmissionWhereInput | PartnershipSubmissionWhereInput[]
    companyName?: StringFilter<"PartnershipSubmission"> | string
    contactName?: StringFilter<"PartnershipSubmission"> | string
    email?: StringFilter<"PartnershipSubmission"> | string
    phone?: StringNullableFilter<"PartnershipSubmission"> | string | null
    partnershipType?: StringFilter<"PartnershipSubmission"> | string
    companyDescription?: StringFilter<"PartnershipSubmission"> | string
    partnershipGoals?: StringFilter<"PartnershipSubmission"> | string
    mouDocumentUrl?: StringNullableFilter<"PartnershipSubmission"> | string | null
    proposedTerms?: StringNullableFilter<"PartnershipSubmission"> | string | null
    additionalNotes?: StringNullableFilter<"PartnershipSubmission"> | string | null
    status?: StringFilter<"PartnershipSubmission"> | string
    ipAddress?: StringNullableFilter<"PartnershipSubmission"> | string | null
    userAgent?: StringNullableFilter<"PartnershipSubmission"> | string | null
    createdAt?: DateTimeFilter<"PartnershipSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"PartnershipSubmission"> | Date | string
  }, "id">

  export type PartnershipSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    partnershipType?: SortOrder
    companyDescription?: SortOrder
    partnershipGoals?: SortOrder
    mouDocumentUrl?: SortOrderInput | SortOrder
    proposedTerms?: SortOrderInput | SortOrder
    additionalNotes?: SortOrderInput | SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnershipSubmissionCountOrderByAggregateInput
    _avg?: PartnershipSubmissionAvgOrderByAggregateInput
    _max?: PartnershipSubmissionMaxOrderByAggregateInput
    _min?: PartnershipSubmissionMinOrderByAggregateInput
    _sum?: PartnershipSubmissionSumOrderByAggregateInput
  }

  export type PartnershipSubmissionScalarWhereWithAggregatesInput = {
    AND?: PartnershipSubmissionScalarWhereWithAggregatesInput | PartnershipSubmissionScalarWhereWithAggregatesInput[]
    OR?: PartnershipSubmissionScalarWhereWithAggregatesInput[]
    NOT?: PartnershipSubmissionScalarWhereWithAggregatesInput | PartnershipSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PartnershipSubmission"> | number
    companyName?: StringWithAggregatesFilter<"PartnershipSubmission"> | string
    contactName?: StringWithAggregatesFilter<"PartnershipSubmission"> | string
    email?: StringWithAggregatesFilter<"PartnershipSubmission"> | string
    phone?: StringNullableWithAggregatesFilter<"PartnershipSubmission"> | string | null
    partnershipType?: StringWithAggregatesFilter<"PartnershipSubmission"> | string
    companyDescription?: StringWithAggregatesFilter<"PartnershipSubmission"> | string
    partnershipGoals?: StringWithAggregatesFilter<"PartnershipSubmission"> | string
    mouDocumentUrl?: StringNullableWithAggregatesFilter<"PartnershipSubmission"> | string | null
    proposedTerms?: StringNullableWithAggregatesFilter<"PartnershipSubmission"> | string | null
    additionalNotes?: StringNullableWithAggregatesFilter<"PartnershipSubmission"> | string | null
    status?: StringWithAggregatesFilter<"PartnershipSubmission"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"PartnershipSubmission"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"PartnershipSubmission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PartnershipSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PartnershipSubmission"> | Date | string
  }

  export type MaintenanceWindowWhereInput = {
    AND?: MaintenanceWindowWhereInput | MaintenanceWindowWhereInput[]
    OR?: MaintenanceWindowWhereInput[]
    NOT?: MaintenanceWindowWhereInput | MaintenanceWindowWhereInput[]
    id?: IntFilter<"MaintenanceWindow"> | number
    title?: StringFilter<"MaintenanceWindow"> | string
    description?: StringNullableFilter<"MaintenanceWindow"> | string | null
    startTime?: DateTimeFilter<"MaintenanceWindow"> | Date | string
    endTime?: DateTimeFilter<"MaintenanceWindow"> | Date | string
    isActive?: BoolFilter<"MaintenanceWindow"> | boolean
    isScheduled?: BoolFilter<"MaintenanceWindow"> | boolean
    reason?: StringNullableFilter<"MaintenanceWindow"> | string | null
    createdBy?: StringNullableFilter<"MaintenanceWindow"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceWindow"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceWindow"> | Date | string
  }

  export type MaintenanceWindowOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    isScheduled?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceWindowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaintenanceWindowWhereInput | MaintenanceWindowWhereInput[]
    OR?: MaintenanceWindowWhereInput[]
    NOT?: MaintenanceWindowWhereInput | MaintenanceWindowWhereInput[]
    title?: StringFilter<"MaintenanceWindow"> | string
    description?: StringNullableFilter<"MaintenanceWindow"> | string | null
    startTime?: DateTimeFilter<"MaintenanceWindow"> | Date | string
    endTime?: DateTimeFilter<"MaintenanceWindow"> | Date | string
    isActive?: BoolFilter<"MaintenanceWindow"> | boolean
    isScheduled?: BoolFilter<"MaintenanceWindow"> | boolean
    reason?: StringNullableFilter<"MaintenanceWindow"> | string | null
    createdBy?: StringNullableFilter<"MaintenanceWindow"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceWindow"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceWindow"> | Date | string
  }, "id">

  export type MaintenanceWindowOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    isScheduled?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaintenanceWindowCountOrderByAggregateInput
    _avg?: MaintenanceWindowAvgOrderByAggregateInput
    _max?: MaintenanceWindowMaxOrderByAggregateInput
    _min?: MaintenanceWindowMinOrderByAggregateInput
    _sum?: MaintenanceWindowSumOrderByAggregateInput
  }

  export type MaintenanceWindowScalarWhereWithAggregatesInput = {
    AND?: MaintenanceWindowScalarWhereWithAggregatesInput | MaintenanceWindowScalarWhereWithAggregatesInput[]
    OR?: MaintenanceWindowScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceWindowScalarWhereWithAggregatesInput | MaintenanceWindowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MaintenanceWindow"> | number
    title?: StringWithAggregatesFilter<"MaintenanceWindow"> | string
    description?: StringNullableWithAggregatesFilter<"MaintenanceWindow"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"MaintenanceWindow"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"MaintenanceWindow"> | Date | string
    isActive?: BoolWithAggregatesFilter<"MaintenanceWindow"> | boolean
    isScheduled?: BoolWithAggregatesFilter<"MaintenanceWindow"> | boolean
    reason?: StringNullableWithAggregatesFilter<"MaintenanceWindow"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"MaintenanceWindow"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceWindow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaintenanceWindow"> | Date | string
  }

  export type SystemHealthReportWhereInput = {
    AND?: SystemHealthReportWhereInput | SystemHealthReportWhereInput[]
    OR?: SystemHealthReportWhereInput[]
    NOT?: SystemHealthReportWhereInput | SystemHealthReportWhereInput[]
    id?: IntFilter<"SystemHealthReport"> | number
    reportType?: StringFilter<"SystemHealthReport"> | string
    reportDate?: DateTimeFilter<"SystemHealthReport"> | Date | string
    uptime?: FloatFilter<"SystemHealthReport"> | number
    totalRequests?: IntFilter<"SystemHealthReport"> | number
    totalErrors?: IntFilter<"SystemHealthReport"> | number
    errorRate?: FloatFilter<"SystemHealthReport"> | number
    avgResponseTime?: FloatFilter<"SystemHealthReport"> | number
    dbStatus?: StringFilter<"SystemHealthReport"> | string
    dbResponseTime?: FloatNullableFilter<"SystemHealthReport"> | number | null
    endpointMetrics?: JsonFilter<"SystemHealthReport">
    recentErrors?: JsonNullableFilter<"SystemHealthReport">
    sentAt?: DateTimeNullableFilter<"SystemHealthReport"> | Date | string | null
    createdAt?: DateTimeFilter<"SystemHealthReport"> | Date | string
  }

  export type SystemHealthReportOrderByWithRelationInput = {
    id?: SortOrder
    reportType?: SortOrder
    reportDate?: SortOrder
    uptime?: SortOrder
    totalRequests?: SortOrder
    totalErrors?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    dbStatus?: SortOrder
    dbResponseTime?: SortOrderInput | SortOrder
    endpointMetrics?: SortOrder
    recentErrors?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SystemHealthReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SystemHealthReportWhereInput | SystemHealthReportWhereInput[]
    OR?: SystemHealthReportWhereInput[]
    NOT?: SystemHealthReportWhereInput | SystemHealthReportWhereInput[]
    reportType?: StringFilter<"SystemHealthReport"> | string
    reportDate?: DateTimeFilter<"SystemHealthReport"> | Date | string
    uptime?: FloatFilter<"SystemHealthReport"> | number
    totalRequests?: IntFilter<"SystemHealthReport"> | number
    totalErrors?: IntFilter<"SystemHealthReport"> | number
    errorRate?: FloatFilter<"SystemHealthReport"> | number
    avgResponseTime?: FloatFilter<"SystemHealthReport"> | number
    dbStatus?: StringFilter<"SystemHealthReport"> | string
    dbResponseTime?: FloatNullableFilter<"SystemHealthReport"> | number | null
    endpointMetrics?: JsonFilter<"SystemHealthReport">
    recentErrors?: JsonNullableFilter<"SystemHealthReport">
    sentAt?: DateTimeNullableFilter<"SystemHealthReport"> | Date | string | null
    createdAt?: DateTimeFilter<"SystemHealthReport"> | Date | string
  }, "id">

  export type SystemHealthReportOrderByWithAggregationInput = {
    id?: SortOrder
    reportType?: SortOrder
    reportDate?: SortOrder
    uptime?: SortOrder
    totalRequests?: SortOrder
    totalErrors?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    dbStatus?: SortOrder
    dbResponseTime?: SortOrderInput | SortOrder
    endpointMetrics?: SortOrder
    recentErrors?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SystemHealthReportCountOrderByAggregateInput
    _avg?: SystemHealthReportAvgOrderByAggregateInput
    _max?: SystemHealthReportMaxOrderByAggregateInput
    _min?: SystemHealthReportMinOrderByAggregateInput
    _sum?: SystemHealthReportSumOrderByAggregateInput
  }

  export type SystemHealthReportScalarWhereWithAggregatesInput = {
    AND?: SystemHealthReportScalarWhereWithAggregatesInput | SystemHealthReportScalarWhereWithAggregatesInput[]
    OR?: SystemHealthReportScalarWhereWithAggregatesInput[]
    NOT?: SystemHealthReportScalarWhereWithAggregatesInput | SystemHealthReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemHealthReport"> | number
    reportType?: StringWithAggregatesFilter<"SystemHealthReport"> | string
    reportDate?: DateTimeWithAggregatesFilter<"SystemHealthReport"> | Date | string
    uptime?: FloatWithAggregatesFilter<"SystemHealthReport"> | number
    totalRequests?: IntWithAggregatesFilter<"SystemHealthReport"> | number
    totalErrors?: IntWithAggregatesFilter<"SystemHealthReport"> | number
    errorRate?: FloatWithAggregatesFilter<"SystemHealthReport"> | number
    avgResponseTime?: FloatWithAggregatesFilter<"SystemHealthReport"> | number
    dbStatus?: StringWithAggregatesFilter<"SystemHealthReport"> | string
    dbResponseTime?: FloatNullableWithAggregatesFilter<"SystemHealthReport"> | number | null
    endpointMetrics?: JsonWithAggregatesFilter<"SystemHealthReport">
    recentErrors?: JsonNullableWithAggregatesFilter<"SystemHealthReport">
    sentAt?: DateTimeNullableWithAggregatesFilter<"SystemHealthReport"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SystemHealthReport"> | Date | string
  }

  export type AdminTokenWhereInput = {
    AND?: AdminTokenWhereInput | AdminTokenWhereInput[]
    OR?: AdminTokenWhereInput[]
    NOT?: AdminTokenWhereInput | AdminTokenWhereInput[]
    id?: IntFilter<"AdminToken"> | number
    token?: StringFilter<"AdminToken"> | string
    email?: StringFilter<"AdminToken"> | string
    expiresAt?: DateTimeFilter<"AdminToken"> | Date | string
    used?: BoolFilter<"AdminToken"> | boolean
    ipHash?: StringNullableFilter<"AdminToken"> | string | null
    uaHash?: StringNullableFilter<"AdminToken"> | string | null
    fingerprint?: StringNullableFilter<"AdminToken"> | string | null
    createdAt?: DateTimeFilter<"AdminToken"> | Date | string
  }

  export type AdminTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    uaHash?: SortOrderInput | SortOrder
    fingerprint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AdminTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: AdminTokenWhereInput | AdminTokenWhereInput[]
    OR?: AdminTokenWhereInput[]
    NOT?: AdminTokenWhereInput | AdminTokenWhereInput[]
    email?: StringFilter<"AdminToken"> | string
    expiresAt?: DateTimeFilter<"AdminToken"> | Date | string
    used?: BoolFilter<"AdminToken"> | boolean
    ipHash?: StringNullableFilter<"AdminToken"> | string | null
    uaHash?: StringNullableFilter<"AdminToken"> | string | null
    fingerprint?: StringNullableFilter<"AdminToken"> | string | null
    createdAt?: DateTimeFilter<"AdminToken"> | Date | string
  }, "id" | "token">

  export type AdminTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    uaHash?: SortOrderInput | SortOrder
    fingerprint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AdminTokenCountOrderByAggregateInput
    _avg?: AdminTokenAvgOrderByAggregateInput
    _max?: AdminTokenMaxOrderByAggregateInput
    _min?: AdminTokenMinOrderByAggregateInput
    _sum?: AdminTokenSumOrderByAggregateInput
  }

  export type AdminTokenScalarWhereWithAggregatesInput = {
    AND?: AdminTokenScalarWhereWithAggregatesInput | AdminTokenScalarWhereWithAggregatesInput[]
    OR?: AdminTokenScalarWhereWithAggregatesInput[]
    NOT?: AdminTokenScalarWhereWithAggregatesInput | AdminTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminToken"> | number
    token?: StringWithAggregatesFilter<"AdminToken"> | string
    email?: StringWithAggregatesFilter<"AdminToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AdminToken"> | Date | string
    used?: BoolWithAggregatesFilter<"AdminToken"> | boolean
    ipHash?: StringNullableWithAggregatesFilter<"AdminToken"> | string | null
    uaHash?: StringNullableWithAggregatesFilter<"AdminToken"> | string | null
    fingerprint?: StringNullableWithAggregatesFilter<"AdminToken"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminToken"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    eventType?: StringFilter<"AuditLog"> | string
    severity?: StringFilter<"AuditLog"> | string
    ipHash?: StringNullableFilter<"AuditLog"> | string | null
    uaHash?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    result?: StringFilter<"AuditLog"> | string
    context?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    uaHash?: SortOrderInput | SortOrder
    action?: SortOrder
    result?: SortOrder
    context?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    eventType?: StringFilter<"AuditLog"> | string
    severity?: StringFilter<"AuditLog"> | string
    ipHash?: StringNullableFilter<"AuditLog"> | string | null
    uaHash?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    result?: StringFilter<"AuditLog"> | string
    context?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    uaHash?: SortOrderInput | SortOrder
    action?: SortOrder
    result?: SortOrder
    context?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    eventType?: StringWithAggregatesFilter<"AuditLog"> | string
    severity?: StringWithAggregatesFilter<"AuditLog"> | string
    ipHash?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    uaHash?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    result?: StringWithAggregatesFilter<"AuditLog"> | string
    context?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type AccountDeletionRequestWhereInput = {
    AND?: AccountDeletionRequestWhereInput | AccountDeletionRequestWhereInput[]
    OR?: AccountDeletionRequestWhereInput[]
    NOT?: AccountDeletionRequestWhereInput | AccountDeletionRequestWhereInput[]
    id?: IntFilter<"AccountDeletionRequest"> | number
    email?: StringFilter<"AccountDeletionRequest"> | string
    softwareProduct?: StringFilter<"AccountDeletionRequest"> | string
    reason?: StringFilter<"AccountDeletionRequest"> | string
    communicationChannel?: StringFilter<"AccountDeletionRequest"> | string
    alternativeContact?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    verificationToken?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    verifiedAt?: DateTimeNullableFilter<"AccountDeletionRequest"> | Date | string | null
    status?: StringFilter<"AccountDeletionRequest"> | string
    processedAt?: DateTimeNullableFilter<"AccountDeletionRequest"> | Date | string | null
    adminNotes?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    ipAddress?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    userAgent?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    createdAt?: DateTimeFilter<"AccountDeletionRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AccountDeletionRequest"> | Date | string
  }

  export type AccountDeletionRequestOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    softwareProduct?: SortOrder
    reason?: SortOrder
    communicationChannel?: SortOrder
    alternativeContact?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    adminNotes?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountDeletionRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    verificationToken?: string
    AND?: AccountDeletionRequestWhereInput | AccountDeletionRequestWhereInput[]
    OR?: AccountDeletionRequestWhereInput[]
    NOT?: AccountDeletionRequestWhereInput | AccountDeletionRequestWhereInput[]
    email?: StringFilter<"AccountDeletionRequest"> | string
    softwareProduct?: StringFilter<"AccountDeletionRequest"> | string
    reason?: StringFilter<"AccountDeletionRequest"> | string
    communicationChannel?: StringFilter<"AccountDeletionRequest"> | string
    alternativeContact?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    verifiedAt?: DateTimeNullableFilter<"AccountDeletionRequest"> | Date | string | null
    status?: StringFilter<"AccountDeletionRequest"> | string
    processedAt?: DateTimeNullableFilter<"AccountDeletionRequest"> | Date | string | null
    adminNotes?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    ipAddress?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    userAgent?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    createdAt?: DateTimeFilter<"AccountDeletionRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AccountDeletionRequest"> | Date | string
  }, "id" | "verificationToken">

  export type AccountDeletionRequestOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    softwareProduct?: SortOrder
    reason?: SortOrder
    communicationChannel?: SortOrder
    alternativeContact?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    adminNotes?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountDeletionRequestCountOrderByAggregateInput
    _avg?: AccountDeletionRequestAvgOrderByAggregateInput
    _max?: AccountDeletionRequestMaxOrderByAggregateInput
    _min?: AccountDeletionRequestMinOrderByAggregateInput
    _sum?: AccountDeletionRequestSumOrderByAggregateInput
  }

  export type AccountDeletionRequestScalarWhereWithAggregatesInput = {
    AND?: AccountDeletionRequestScalarWhereWithAggregatesInput | AccountDeletionRequestScalarWhereWithAggregatesInput[]
    OR?: AccountDeletionRequestScalarWhereWithAggregatesInput[]
    NOT?: AccountDeletionRequestScalarWhereWithAggregatesInput | AccountDeletionRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccountDeletionRequest"> | number
    email?: StringWithAggregatesFilter<"AccountDeletionRequest"> | string
    softwareProduct?: StringWithAggregatesFilter<"AccountDeletionRequest"> | string
    reason?: StringWithAggregatesFilter<"AccountDeletionRequest"> | string
    communicationChannel?: StringWithAggregatesFilter<"AccountDeletionRequest"> | string
    alternativeContact?: StringNullableWithAggregatesFilter<"AccountDeletionRequest"> | string | null
    verificationToken?: StringNullableWithAggregatesFilter<"AccountDeletionRequest"> | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"AccountDeletionRequest"> | Date | string | null
    status?: StringWithAggregatesFilter<"AccountDeletionRequest"> | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"AccountDeletionRequest"> | Date | string | null
    adminNotes?: StringNullableWithAggregatesFilter<"AccountDeletionRequest"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AccountDeletionRequest"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AccountDeletionRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AccountDeletionRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountDeletionRequest"> | Date | string
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

  export type BetaSignupCreateInput = {
    role: string
    fullName: string
    email: string
    phone?: string | null
    country: string
    device?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    status?: string
    queuePosition?: number | null
    shopsFor?: BetaSignupCreateshopsForInput | string[]
    payMethod?: string | null
    age?: string | null
    businessName?: string | null
    businessCategory?: string | null
    needs?: BetaSignupCreateneedsInput | string[]
    yearsInBusiness?: string | null
    justStarting?: string | null
    companyName?: string | null
    serviceTypes?: BetaSignupCreateserviceTypesInput | string[]
    areasCovered?: string | null
    fleetSize?: string | null
    yearsLogistics?: string | null
    logisticsType?: string | null
    vehicleTypes?: BetaSignupCreatevehicleTypesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetaSignupUncheckedCreateInput = {
    id?: number
    role: string
    fullName: string
    email: string
    phone?: string | null
    country: string
    device?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    status?: string
    queuePosition?: number | null
    shopsFor?: BetaSignupCreateshopsForInput | string[]
    payMethod?: string | null
    age?: string | null
    businessName?: string | null
    businessCategory?: string | null
    needs?: BetaSignupCreateneedsInput | string[]
    yearsInBusiness?: string | null
    justStarting?: string | null
    companyName?: string | null
    serviceTypes?: BetaSignupCreateserviceTypesInput | string[]
    areasCovered?: string | null
    fleetSize?: string | null
    yearsLogistics?: string | null
    logisticsType?: string | null
    vehicleTypes?: BetaSignupCreatevehicleTypesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetaSignupUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    shopsFor?: BetaSignupUpdateshopsForInput | string[]
    payMethod?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    needs?: BetaSignupUpdateneedsInput | string[]
    yearsInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    justStarting?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    serviceTypes?: BetaSignupUpdateserviceTypesInput | string[]
    areasCovered?: NullableStringFieldUpdateOperationsInput | string | null
    fleetSize?: NullableStringFieldUpdateOperationsInput | string | null
    yearsLogistics?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsType?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleTypes?: BetaSignupUpdatevehicleTypesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetaSignupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    shopsFor?: BetaSignupUpdateshopsForInput | string[]
    payMethod?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    needs?: BetaSignupUpdateneedsInput | string[]
    yearsInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    justStarting?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    serviceTypes?: BetaSignupUpdateserviceTypesInput | string[]
    areasCovered?: NullableStringFieldUpdateOperationsInput | string | null
    fleetSize?: NullableStringFieldUpdateOperationsInput | string | null
    yearsLogistics?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsType?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleTypes?: BetaSignupUpdatevehicleTypesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetaSignupCreateManyInput = {
    id?: number
    role: string
    fullName: string
    email: string
    phone?: string | null
    country: string
    device?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    status?: string
    queuePosition?: number | null
    shopsFor?: BetaSignupCreateshopsForInput | string[]
    payMethod?: string | null
    age?: string | null
    businessName?: string | null
    businessCategory?: string | null
    needs?: BetaSignupCreateneedsInput | string[]
    yearsInBusiness?: string | null
    justStarting?: string | null
    companyName?: string | null
    serviceTypes?: BetaSignupCreateserviceTypesInput | string[]
    areasCovered?: string | null
    fleetSize?: string | null
    yearsLogistics?: string | null
    logisticsType?: string | null
    vehicleTypes?: BetaSignupCreatevehicleTypesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetaSignupUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    shopsFor?: BetaSignupUpdateshopsForInput | string[]
    payMethod?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    needs?: BetaSignupUpdateneedsInput | string[]
    yearsInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    justStarting?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    serviceTypes?: BetaSignupUpdateserviceTypesInput | string[]
    areasCovered?: NullableStringFieldUpdateOperationsInput | string | null
    fleetSize?: NullableStringFieldUpdateOperationsInput | string | null
    yearsLogistics?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsType?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleTypes?: BetaSignupUpdatevehicleTypesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetaSignupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    shopsFor?: BetaSignupUpdateshopsForInput | string[]
    payMethod?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    needs?: BetaSignupUpdateneedsInput | string[]
    yearsInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    justStarting?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    serviceTypes?: BetaSignupUpdateserviceTypesInput | string[]
    areasCovered?: NullableStringFieldUpdateOperationsInput | string | null
    fleetSize?: NullableStringFieldUpdateOperationsInput | string | null
    yearsLogistics?: NullableStringFieldUpdateOperationsInput | string | null
    logisticsType?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleTypes?: BetaSignupUpdatevehicleTypesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostingCreateInput = {
    title: string
    description: string
    requirements: string
    department: string
    location: string
    employmentType: string
    salaryRange?: string | null
    experienceLevel: string
    status?: string
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: CareerApplicationCreateNestedManyWithoutJobInput
  }

  export type JobPostingUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    requirements: string
    department: string
    location: string
    employmentType: string
    salaryRange?: string | null
    experienceLevel: string
    status?: string
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: CareerApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobPostingUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: CareerApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobPostingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: CareerApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobPostingCreateManyInput = {
    id?: number
    title: string
    description: string
    requirements: string
    department: string
    location: string
    employmentType: string
    salaryRange?: string | null
    experienceLevel: string
    status?: string
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPostingUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerApplicationCreateInput = {
    applicantName: string
    email: string
    phone?: string | null
    country: string
    address?: string | null
    linkedInUrl?: string | null
    portfolioUrl?: string | null
    resumeUrl?: string | null
    coverLetter?: string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    job?: JobPostingCreateNestedOneWithoutApplicationsInput
  }

  export type CareerApplicationUncheckedCreateInput = {
    id?: number
    jobId?: number | null
    applicantName: string
    email: string
    phone?: string | null
    country: string
    address?: string | null
    linkedInUrl?: string | null
    portfolioUrl?: string | null
    resumeUrl?: string | null
    coverLetter?: string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerApplicationUpdateInput = {
    applicantName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobPostingUpdateOneWithoutApplicationsNestedInput
  }

  export type CareerApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    applicantName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerApplicationCreateManyInput = {
    id?: number
    jobId?: number | null
    applicantName: string
    email: string
    phone?: string | null
    country: string
    address?: string | null
    linkedInUrl?: string | null
    portfolioUrl?: string | null
    resumeUrl?: string | null
    coverLetter?: string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerApplicationUpdateManyMutationInput = {
    applicantName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    applicantName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnershipSubmissionCreateInput = {
    companyName: string
    contactName: string
    email: string
    phone?: string | null
    partnershipType: string
    companyDescription: string
    partnershipGoals: string
    mouDocumentUrl?: string | null
    proposedTerms?: string | null
    additionalNotes?: string | null
    status?: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnershipSubmissionUncheckedCreateInput = {
    id?: number
    companyName: string
    contactName: string
    email: string
    phone?: string | null
    partnershipType: string
    companyDescription: string
    partnershipGoals: string
    mouDocumentUrl?: string | null
    proposedTerms?: string | null
    additionalNotes?: string | null
    status?: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnershipSubmissionUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    partnershipType?: StringFieldUpdateOperationsInput | string
    companyDescription?: StringFieldUpdateOperationsInput | string
    partnershipGoals?: StringFieldUpdateOperationsInput | string
    mouDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    proposedTerms?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnershipSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    partnershipType?: StringFieldUpdateOperationsInput | string
    companyDescription?: StringFieldUpdateOperationsInput | string
    partnershipGoals?: StringFieldUpdateOperationsInput | string
    mouDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    proposedTerms?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnershipSubmissionCreateManyInput = {
    id?: number
    companyName: string
    contactName: string
    email: string
    phone?: string | null
    partnershipType: string
    companyDescription: string
    partnershipGoals: string
    mouDocumentUrl?: string | null
    proposedTerms?: string | null
    additionalNotes?: string | null
    status?: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnershipSubmissionUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    partnershipType?: StringFieldUpdateOperationsInput | string
    companyDescription?: StringFieldUpdateOperationsInput | string
    partnershipGoals?: StringFieldUpdateOperationsInput | string
    mouDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    proposedTerms?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnershipSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    partnershipType?: StringFieldUpdateOperationsInput | string
    companyDescription?: StringFieldUpdateOperationsInput | string
    partnershipGoals?: StringFieldUpdateOperationsInput | string
    mouDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    proposedTerms?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceWindowCreateInput = {
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    isActive?: boolean
    isScheduled?: boolean
    reason?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceWindowUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    isActive?: boolean
    isScheduled?: boolean
    reason?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceWindowUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isScheduled?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceWindowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isScheduled?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceWindowCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    isActive?: boolean
    isScheduled?: boolean
    reason?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceWindowUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isScheduled?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceWindowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isScheduled?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemHealthReportCreateInput = {
    reportType: string
    reportDate: Date | string
    uptime: number
    totalRequests: number
    totalErrors: number
    errorRate: number
    avgResponseTime: number
    dbStatus: string
    dbResponseTime?: number | null
    endpointMetrics: JsonNullValueInput | InputJsonValue
    recentErrors?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SystemHealthReportUncheckedCreateInput = {
    id?: number
    reportType: string
    reportDate: Date | string
    uptime: number
    totalRequests: number
    totalErrors: number
    errorRate: number
    avgResponseTime: number
    dbStatus: string
    dbResponseTime?: number | null
    endpointMetrics: JsonNullValueInput | InputJsonValue
    recentErrors?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SystemHealthReportUpdateInput = {
    reportType?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    uptime?: FloatFieldUpdateOperationsInput | number
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalErrors?: IntFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    dbStatus?: StringFieldUpdateOperationsInput | string
    dbResponseTime?: NullableFloatFieldUpdateOperationsInput | number | null
    endpointMetrics?: JsonNullValueInput | InputJsonValue
    recentErrors?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemHealthReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportType?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    uptime?: FloatFieldUpdateOperationsInput | number
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalErrors?: IntFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    dbStatus?: StringFieldUpdateOperationsInput | string
    dbResponseTime?: NullableFloatFieldUpdateOperationsInput | number | null
    endpointMetrics?: JsonNullValueInput | InputJsonValue
    recentErrors?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemHealthReportCreateManyInput = {
    id?: number
    reportType: string
    reportDate: Date | string
    uptime: number
    totalRequests: number
    totalErrors: number
    errorRate: number
    avgResponseTime: number
    dbStatus: string
    dbResponseTime?: number | null
    endpointMetrics: JsonNullValueInput | InputJsonValue
    recentErrors?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SystemHealthReportUpdateManyMutationInput = {
    reportType?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    uptime?: FloatFieldUpdateOperationsInput | number
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalErrors?: IntFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    dbStatus?: StringFieldUpdateOperationsInput | string
    dbResponseTime?: NullableFloatFieldUpdateOperationsInput | number | null
    endpointMetrics?: JsonNullValueInput | InputJsonValue
    recentErrors?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemHealthReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportType?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    uptime?: FloatFieldUpdateOperationsInput | number
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalErrors?: IntFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    dbStatus?: StringFieldUpdateOperationsInput | string
    dbResponseTime?: NullableFloatFieldUpdateOperationsInput | number | null
    endpointMetrics?: JsonNullValueInput | InputJsonValue
    recentErrors?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminTokenCreateInput = {
    token: string
    email: string
    expiresAt: Date | string
    used?: boolean
    ipHash?: string | null
    uaHash?: string | null
    fingerprint?: string | null
    createdAt?: Date | string
  }

  export type AdminTokenUncheckedCreateInput = {
    id?: number
    token: string
    email: string
    expiresAt: Date | string
    used?: boolean
    ipHash?: string | null
    uaHash?: string | null
    fingerprint?: string | null
    createdAt?: Date | string
  }

  export type AdminTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    uaHash?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    uaHash?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminTokenCreateManyInput = {
    id?: number
    token: string
    email: string
    expiresAt: Date | string
    used?: boolean
    ipHash?: string | null
    uaHash?: string | null
    fingerprint?: string | null
    createdAt?: Date | string
  }

  export type AdminTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    uaHash?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    uaHash?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    eventType: string
    severity?: string
    ipHash?: string | null
    uaHash?: string | null
    action: string
    result: string
    context?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    eventType: string
    severity?: string
    ipHash?: string | null
    uaHash?: string | null
    action: string
    result: string
    context?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    uaHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    uaHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: number
    eventType: string
    severity?: string
    ipHash?: string | null
    uaHash?: string | null
    action: string
    result: string
    context?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    uaHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    uaHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDeletionRequestCreateInput = {
    email: string
    softwareProduct: string
    reason: string
    communicationChannel: string
    alternativeContact?: string | null
    verificationToken?: string | null
    verifiedAt?: Date | string | null
    status?: string
    processedAt?: Date | string | null
    adminNotes?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountDeletionRequestUncheckedCreateInput = {
    id?: number
    email: string
    softwareProduct: string
    reason: string
    communicationChannel: string
    alternativeContact?: string | null
    verificationToken?: string | null
    verifiedAt?: Date | string | null
    status?: string
    processedAt?: Date | string | null
    adminNotes?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountDeletionRequestUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    softwareProduct?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    communicationChannel?: StringFieldUpdateOperationsInput | string
    alternativeContact?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDeletionRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    softwareProduct?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    communicationChannel?: StringFieldUpdateOperationsInput | string
    alternativeContact?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDeletionRequestCreateManyInput = {
    id?: number
    email: string
    softwareProduct: string
    reason: string
    communicationChannel: string
    alternativeContact?: string | null
    verificationToken?: string | null
    verifiedAt?: Date | string | null
    status?: string
    processedAt?: Date | string | null
    adminNotes?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountDeletionRequestUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    softwareProduct?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    communicationChannel?: StringFieldUpdateOperationsInput | string
    alternativeContact?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDeletionRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    softwareProduct?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    communicationChannel?: StringFieldUpdateOperationsInput | string
    alternativeContact?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BetaSignupCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    device?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    status?: SortOrder
    queuePosition?: SortOrder
    shopsFor?: SortOrder
    payMethod?: SortOrder
    age?: SortOrder
    businessName?: SortOrder
    businessCategory?: SortOrder
    needs?: SortOrder
    yearsInBusiness?: SortOrder
    justStarting?: SortOrder
    companyName?: SortOrder
    serviceTypes?: SortOrder
    areasCovered?: SortOrder
    fleetSize?: SortOrder
    yearsLogistics?: SortOrder
    logisticsType?: SortOrder
    vehicleTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetaSignupAvgOrderByAggregateInput = {
    id?: SortOrder
    queuePosition?: SortOrder
  }

  export type BetaSignupMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    device?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    status?: SortOrder
    queuePosition?: SortOrder
    payMethod?: SortOrder
    age?: SortOrder
    businessName?: SortOrder
    businessCategory?: SortOrder
    yearsInBusiness?: SortOrder
    justStarting?: SortOrder
    companyName?: SortOrder
    areasCovered?: SortOrder
    fleetSize?: SortOrder
    yearsLogistics?: SortOrder
    logisticsType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetaSignupMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    device?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    status?: SortOrder
    queuePosition?: SortOrder
    payMethod?: SortOrder
    age?: SortOrder
    businessName?: SortOrder
    businessCategory?: SortOrder
    yearsInBusiness?: SortOrder
    justStarting?: SortOrder
    companyName?: SortOrder
    areasCovered?: SortOrder
    fleetSize?: SortOrder
    yearsLogistics?: SortOrder
    logisticsType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetaSignupSumOrderByAggregateInput = {
    id?: SortOrder
    queuePosition?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CareerApplicationListRelationFilter = {
    every?: CareerApplicationWhereInput
    some?: CareerApplicationWhereInput
    none?: CareerApplicationWhereInput
  }

  export type CareerApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobPostingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    department?: SortOrder
    location?: SortOrder
    employmentType?: SortOrder
    salaryRange?: SortOrder
    experienceLevel?: SortOrder
    status?: SortOrder
    customFields?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobPostingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobPostingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    department?: SortOrder
    location?: SortOrder
    employmentType?: SortOrder
    salaryRange?: SortOrder
    experienceLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobPostingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    department?: SortOrder
    location?: SortOrder
    employmentType?: SortOrder
    salaryRange?: SortOrder
    experienceLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobPostingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobPostingNullableScalarRelationFilter = {
    is?: JobPostingWhereInput | null
    isNot?: JobPostingWhereInput | null
  }

  export type CareerApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    address?: SortOrder
    linkedInUrl?: SortOrder
    portfolioUrl?: SortOrder
    resumeUrl?: SortOrder
    coverLetter?: SortOrder
    customResponses?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
  }

  export type CareerApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    address?: SortOrder
    linkedInUrl?: SortOrder
    portfolioUrl?: SortOrder
    resumeUrl?: SortOrder
    coverLetter?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    address?: SortOrder
    linkedInUrl?: SortOrder
    portfolioUrl?: SortOrder
    resumeUrl?: SortOrder
    coverLetter?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
  }

  export type PartnershipSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    partnershipType?: SortOrder
    companyDescription?: SortOrder
    partnershipGoals?: SortOrder
    mouDocumentUrl?: SortOrder
    proposedTerms?: SortOrder
    additionalNotes?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnershipSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PartnershipSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    partnershipType?: SortOrder
    companyDescription?: SortOrder
    partnershipGoals?: SortOrder
    mouDocumentUrl?: SortOrder
    proposedTerms?: SortOrder
    additionalNotes?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnershipSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    partnershipType?: SortOrder
    companyDescription?: SortOrder
    partnershipGoals?: SortOrder
    mouDocumentUrl?: SortOrder
    proposedTerms?: SortOrder
    additionalNotes?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnershipSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MaintenanceWindowCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    isScheduled?: SortOrder
    reason?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceWindowAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MaintenanceWindowMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    isScheduled?: SortOrder
    reason?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceWindowMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    isScheduled?: SortOrder
    reason?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceWindowSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type SystemHealthReportCountOrderByAggregateInput = {
    id?: SortOrder
    reportType?: SortOrder
    reportDate?: SortOrder
    uptime?: SortOrder
    totalRequests?: SortOrder
    totalErrors?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    dbStatus?: SortOrder
    dbResponseTime?: SortOrder
    endpointMetrics?: SortOrder
    recentErrors?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemHealthReportAvgOrderByAggregateInput = {
    id?: SortOrder
    uptime?: SortOrder
    totalRequests?: SortOrder
    totalErrors?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    dbResponseTime?: SortOrder
  }

  export type SystemHealthReportMaxOrderByAggregateInput = {
    id?: SortOrder
    reportType?: SortOrder
    reportDate?: SortOrder
    uptime?: SortOrder
    totalRequests?: SortOrder
    totalErrors?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    dbStatus?: SortOrder
    dbResponseTime?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemHealthReportMinOrderByAggregateInput = {
    id?: SortOrder
    reportType?: SortOrder
    reportDate?: SortOrder
    uptime?: SortOrder
    totalRequests?: SortOrder
    totalErrors?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    dbStatus?: SortOrder
    dbResponseTime?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemHealthReportSumOrderByAggregateInput = {
    id?: SortOrder
    uptime?: SortOrder
    totalRequests?: SortOrder
    totalErrors?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    dbResponseTime?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type AdminTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    ipHash?: SortOrder
    uaHash?: SortOrder
    fingerprint?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    ipHash?: SortOrder
    uaHash?: SortOrder
    fingerprint?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    ipHash?: SortOrder
    uaHash?: SortOrder
    fingerprint?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    ipHash?: SortOrder
    uaHash?: SortOrder
    action?: SortOrder
    result?: SortOrder
    context?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    ipHash?: SortOrder
    uaHash?: SortOrder
    action?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    ipHash?: SortOrder
    uaHash?: SortOrder
    action?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountDeletionRequestCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    softwareProduct?: SortOrder
    reason?: SortOrder
    communicationChannel?: SortOrder
    alternativeContact?: SortOrder
    verificationToken?: SortOrder
    verifiedAt?: SortOrder
    status?: SortOrder
    processedAt?: SortOrder
    adminNotes?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountDeletionRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountDeletionRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    softwareProduct?: SortOrder
    reason?: SortOrder
    communicationChannel?: SortOrder
    alternativeContact?: SortOrder
    verificationToken?: SortOrder
    verifiedAt?: SortOrder
    status?: SortOrder
    processedAt?: SortOrder
    adminNotes?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountDeletionRequestMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    softwareProduct?: SortOrder
    reason?: SortOrder
    communicationChannel?: SortOrder
    alternativeContact?: SortOrder
    verificationToken?: SortOrder
    verifiedAt?: SortOrder
    status?: SortOrder
    processedAt?: SortOrder
    adminNotes?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountDeletionRequestSumOrderByAggregateInput = {
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

  export type BetaSignupCreateshopsForInput = {
    set: string[]
  }

  export type BetaSignupCreateneedsInput = {
    set: string[]
  }

  export type BetaSignupCreateserviceTypesInput = {
    set: string[]
  }

  export type BetaSignupCreatevehicleTypesInput = {
    set: string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BetaSignupUpdateshopsForInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BetaSignupUpdateneedsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BetaSignupUpdateserviceTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BetaSignupUpdatevehicleTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CareerApplicationCreateNestedManyWithoutJobInput = {
    create?: XOR<CareerApplicationCreateWithoutJobInput, CareerApplicationUncheckedCreateWithoutJobInput> | CareerApplicationCreateWithoutJobInput[] | CareerApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: CareerApplicationCreateOrConnectWithoutJobInput | CareerApplicationCreateOrConnectWithoutJobInput[]
    createMany?: CareerApplicationCreateManyJobInputEnvelope
    connect?: CareerApplicationWhereUniqueInput | CareerApplicationWhereUniqueInput[]
  }

  export type CareerApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<CareerApplicationCreateWithoutJobInput, CareerApplicationUncheckedCreateWithoutJobInput> | CareerApplicationCreateWithoutJobInput[] | CareerApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: CareerApplicationCreateOrConnectWithoutJobInput | CareerApplicationCreateOrConnectWithoutJobInput[]
    createMany?: CareerApplicationCreateManyJobInputEnvelope
    connect?: CareerApplicationWhereUniqueInput | CareerApplicationWhereUniqueInput[]
  }

  export type CareerApplicationUpdateManyWithoutJobNestedInput = {
    create?: XOR<CareerApplicationCreateWithoutJobInput, CareerApplicationUncheckedCreateWithoutJobInput> | CareerApplicationCreateWithoutJobInput[] | CareerApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: CareerApplicationCreateOrConnectWithoutJobInput | CareerApplicationCreateOrConnectWithoutJobInput[]
    upsert?: CareerApplicationUpsertWithWhereUniqueWithoutJobInput | CareerApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: CareerApplicationCreateManyJobInputEnvelope
    set?: CareerApplicationWhereUniqueInput | CareerApplicationWhereUniqueInput[]
    disconnect?: CareerApplicationWhereUniqueInput | CareerApplicationWhereUniqueInput[]
    delete?: CareerApplicationWhereUniqueInput | CareerApplicationWhereUniqueInput[]
    connect?: CareerApplicationWhereUniqueInput | CareerApplicationWhereUniqueInput[]
    update?: CareerApplicationUpdateWithWhereUniqueWithoutJobInput | CareerApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: CareerApplicationUpdateManyWithWhereWithoutJobInput | CareerApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: CareerApplicationScalarWhereInput | CareerApplicationScalarWhereInput[]
  }

  export type CareerApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<CareerApplicationCreateWithoutJobInput, CareerApplicationUncheckedCreateWithoutJobInput> | CareerApplicationCreateWithoutJobInput[] | CareerApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: CareerApplicationCreateOrConnectWithoutJobInput | CareerApplicationCreateOrConnectWithoutJobInput[]
    upsert?: CareerApplicationUpsertWithWhereUniqueWithoutJobInput | CareerApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: CareerApplicationCreateManyJobInputEnvelope
    set?: CareerApplicationWhereUniqueInput | CareerApplicationWhereUniqueInput[]
    disconnect?: CareerApplicationWhereUniqueInput | CareerApplicationWhereUniqueInput[]
    delete?: CareerApplicationWhereUniqueInput | CareerApplicationWhereUniqueInput[]
    connect?: CareerApplicationWhereUniqueInput | CareerApplicationWhereUniqueInput[]
    update?: CareerApplicationUpdateWithWhereUniqueWithoutJobInput | CareerApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: CareerApplicationUpdateManyWithWhereWithoutJobInput | CareerApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: CareerApplicationScalarWhereInput | CareerApplicationScalarWhereInput[]
  }

  export type JobPostingCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobPostingCreateWithoutApplicationsInput, JobPostingUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobPostingCreateOrConnectWithoutApplicationsInput
    connect?: JobPostingWhereUniqueInput
  }

  export type JobPostingUpdateOneWithoutApplicationsNestedInput = {
    create?: XOR<JobPostingCreateWithoutApplicationsInput, JobPostingUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobPostingCreateOrConnectWithoutApplicationsInput
    upsert?: JobPostingUpsertWithoutApplicationsInput
    disconnect?: JobPostingWhereInput | boolean
    delete?: JobPostingWhereInput | boolean
    connect?: JobPostingWhereUniqueInput
    update?: XOR<XOR<JobPostingUpdateToOneWithWhereWithoutApplicationsInput, JobPostingUpdateWithoutApplicationsInput>, JobPostingUncheckedUpdateWithoutApplicationsInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type CareerApplicationCreateWithoutJobInput = {
    applicantName: string
    email: string
    phone?: string | null
    country: string
    address?: string | null
    linkedInUrl?: string | null
    portfolioUrl?: string | null
    resumeUrl?: string | null
    coverLetter?: string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerApplicationUncheckedCreateWithoutJobInput = {
    id?: number
    applicantName: string
    email: string
    phone?: string | null
    country: string
    address?: string | null
    linkedInUrl?: string | null
    portfolioUrl?: string | null
    resumeUrl?: string | null
    coverLetter?: string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerApplicationCreateOrConnectWithoutJobInput = {
    where: CareerApplicationWhereUniqueInput
    create: XOR<CareerApplicationCreateWithoutJobInput, CareerApplicationUncheckedCreateWithoutJobInput>
  }

  export type CareerApplicationCreateManyJobInputEnvelope = {
    data: CareerApplicationCreateManyJobInput | CareerApplicationCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type CareerApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: CareerApplicationWhereUniqueInput
    update: XOR<CareerApplicationUpdateWithoutJobInput, CareerApplicationUncheckedUpdateWithoutJobInput>
    create: XOR<CareerApplicationCreateWithoutJobInput, CareerApplicationUncheckedCreateWithoutJobInput>
  }

  export type CareerApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: CareerApplicationWhereUniqueInput
    data: XOR<CareerApplicationUpdateWithoutJobInput, CareerApplicationUncheckedUpdateWithoutJobInput>
  }

  export type CareerApplicationUpdateManyWithWhereWithoutJobInput = {
    where: CareerApplicationScalarWhereInput
    data: XOR<CareerApplicationUpdateManyMutationInput, CareerApplicationUncheckedUpdateManyWithoutJobInput>
  }

  export type CareerApplicationScalarWhereInput = {
    AND?: CareerApplicationScalarWhereInput | CareerApplicationScalarWhereInput[]
    OR?: CareerApplicationScalarWhereInput[]
    NOT?: CareerApplicationScalarWhereInput | CareerApplicationScalarWhereInput[]
    id?: IntFilter<"CareerApplication"> | number
    jobId?: IntNullableFilter<"CareerApplication"> | number | null
    applicantName?: StringFilter<"CareerApplication"> | string
    email?: StringFilter<"CareerApplication"> | string
    phone?: StringNullableFilter<"CareerApplication"> | string | null
    country?: StringFilter<"CareerApplication"> | string
    address?: StringNullableFilter<"CareerApplication"> | string | null
    linkedInUrl?: StringNullableFilter<"CareerApplication"> | string | null
    portfolioUrl?: StringNullableFilter<"CareerApplication"> | string | null
    resumeUrl?: StringNullableFilter<"CareerApplication"> | string | null
    coverLetter?: StringNullableFilter<"CareerApplication"> | string | null
    customResponses?: JsonNullableFilter<"CareerApplication">
    status?: StringFilter<"CareerApplication"> | string
    ipAddress?: StringNullableFilter<"CareerApplication"> | string | null
    userAgent?: StringNullableFilter<"CareerApplication"> | string | null
    createdAt?: DateTimeFilter<"CareerApplication"> | Date | string
    updatedAt?: DateTimeFilter<"CareerApplication"> | Date | string
  }

  export type JobPostingCreateWithoutApplicationsInput = {
    title: string
    description: string
    requirements: string
    department: string
    location: string
    employmentType: string
    salaryRange?: string | null
    experienceLevel: string
    status?: string
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPostingUncheckedCreateWithoutApplicationsInput = {
    id?: number
    title: string
    description: string
    requirements: string
    department: string
    location: string
    employmentType: string
    salaryRange?: string | null
    experienceLevel: string
    status?: string
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPostingCreateOrConnectWithoutApplicationsInput = {
    where: JobPostingWhereUniqueInput
    create: XOR<JobPostingCreateWithoutApplicationsInput, JobPostingUncheckedCreateWithoutApplicationsInput>
  }

  export type JobPostingUpsertWithoutApplicationsInput = {
    update: XOR<JobPostingUpdateWithoutApplicationsInput, JobPostingUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobPostingCreateWithoutApplicationsInput, JobPostingUncheckedCreateWithoutApplicationsInput>
    where?: JobPostingWhereInput
  }

  export type JobPostingUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobPostingWhereInput
    data: XOR<JobPostingUpdateWithoutApplicationsInput, JobPostingUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobPostingUpdateWithoutApplicationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostingUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerApplicationCreateManyJobInput = {
    id?: number
    applicantName: string
    email: string
    phone?: string | null
    country: string
    address?: string | null
    linkedInUrl?: string | null
    portfolioUrl?: string | null
    resumeUrl?: string | null
    coverLetter?: string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerApplicationUpdateWithoutJobInput = {
    applicantName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerApplicationUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    customResponses?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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