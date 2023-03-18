'use strict'

// const dbconfig = require("../config/db_config.ts")
// const Sequelize = require("sequelize")

import dbconfig from '../config/db_config'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(dbconfig.db, dbconfig.user, dbconfig.password, {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle
    }
});

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.bookEntry = require('./bookEntry.ts')(sequelize,Sequelize)

module.exports = db     