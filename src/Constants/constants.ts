export const DEFAULT_NUMBER = 0;
export const DEFAULT_STRING = null;
export const DEFAULT_BOOLEAN = false;
export const DEFAULT_DATE = new Date();
export const DEFAULT_OBJECT = null;
export const DEFAULT_ARRAY = null;

// type database
export enum DEFAULT_DATABASE_TYPE {
  POSTGRES = 'postgres',
  MYSQL = 'mysql',
  MARIADB = 'mariadb',
  SQLITE = 'sqlite',
  MSSQL = 'mssql',
  ORACLE = 'oracle',
  SQLSERVER = 'sqlserver',
  MONGODB = 'mongodb',
}
