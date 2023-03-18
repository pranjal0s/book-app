//umzug provides clean API for running and rolling back task, it is a 

import path = require('path')
// import Umzug = require('umzug')
import Umzug from 'umzug'
const sequelize = require("sequelize")
import databaseInstance from "./db_config"

//We use umzug a migrations framework which uses sequelize. We use umzug/sequelize with TypeScript and its quite pleasant to work with.

const migrate = new Umzug({
  migrations: {

    // indicates the folder containing the migration .js files
    path: path.join(__dirname, '../migrations'),
    pattern: /\.js$/,

    // inject sequelize's QueryInterface in the migrations
    params: [databaseInstance.getQueryInterface(), sequelize],
  },
  // indicates that the migration data should be store in the database
  // itself through sequelize. The default configuration creates a table
  // named `SequelizeMeta`.
  storage: 'sequelize',
  storageOptions: {
    sequelize: databaseInstance
  }
})

//here the details of db will be authenticated and a connection wiil be established

const connectToDb = async () => {
    try {
        const result = await databaseInstance.authenticate()
        .then( async () => {
            console.log('Connection is established Successfully(Db)')

            //now wih the help of migration the tables will be created in db
            await migrate.up()
            console.log('migration done')
        })

    } catch (err) {
        console.log('failed to connect with Db',err)
        return Promise.reject(err)
    }
}


export default connectToDb