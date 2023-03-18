import databaseInstance from '../config/db_config'
import sequelize, { IntegerDataType } from 'sequelize'

// database connection instance created in dbconfig

// why we use interface ?
//
export interface bookEntryInterface {
    book_Id: IntegerDataType
    title: string
    quantity: IntegerDataType
    description: string
    published: boolean
    issued_Books: IntegerDataType
    genre: string

}

// if you need two database instance the you have to extend it from above instance

export const BookEntry = databaseInstance.define("bookEntry", {
    book_Id: {
        allowNull:false,
        type: sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        allowNull: false,
        type: sequelize.STRING
    },
    quantity: {
        type:sequelize.INTEGER,
        allowNull: false
    },
    description: {
        allowNull: false,
        type: sequelize.STRING
    },
    published: {
        allowNull: false,
        type: sequelize.BOOLEAN
    },
    issued_Books: {
        type:sequelize.INTEGER,
        allowNull: true
    },
    genre: {
        type: sequelize.STRING,
        allowNull: false
    }
},
{
    tableName: 'bookEntry',
    //timestamps are to save the time and date when any action occured on table like updatedat,createdat, deletedat
    timestamps: true,
    //paranoid tables 
    //it does not delete the data completely from the table but mark it as deleted at column deleted at it can only be used with timestamp, 
    //that paranoid tables perform a soft-deletion of records, instead of a hard-deletion which will remove the data permanently.
    paranoid: true,
},
)

























// import sequelize from 'sequelize'
// import Sequelize from 'sequelize';

// //sequelize model
// module.exports = (sequelize, Sequelize ) =>{
//     const BookEntry = sequelize.define("bookEntry",{
//         title: {
//             type:sequelize.STRING
//         },
//         description:{
//             type:sequelize.STRING
//         },
//         published:{
//             type:sequelize.BOOLEAN
//         }
//     });

//     return BookEntry
// }