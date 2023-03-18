import { Sequelize } from 'sequelize'

//create database instance for model

class myDatabase{
  db: string
  user: string
  password: string
  host: string
  port: number
  maxPool: number
  minPool: number
  database: Sequelize

constructor(){
    this.db = 'note'
    this.user = 'post'
    this.password = '12345'
    this.host = 'localhost'
    this.port = 5432;
    this.maxPool = 100;
    this.minPool = 0;
    this.database = new Sequelize (this.db, this.user, this.password, {
      host : this.host,
        ssl : true,
        dialect : 'postgres',
        dialectOptions : {
            encrypt : true,
        },
        port : this.port,
        logging : false,
        pool : {
            max : this.maxPool,
            min : this.minPool,
            acquire : 30000,
            idle : 10000
        },
    })
}
}

let databaseInstance = new myDatabase().database
export default databaseInstance
