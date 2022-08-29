export class dbConnectionError extends Error{
  constructor(message?: string){
    super()
    this.message = message || "Something went wrong while trying to establish database connection"
    this.name = "dbConnectionError"
  }
}

export class dbInternalError extends Error{
  constructor(message?: string){
    super()
    this.message = message || "Internal error during the operation"
    this.name = "dbInternalError"
  }
}