import { Request,Response ,NextFunction } from "express"
import { check,validationResult } from "express-validator"

//using class method we can change the set of rules according to the need with the help of key

class Globalvalidator{
    rules
    constructor(rules:any){
        this.rules = rules
    }

    makeValidation(key:string) :any {
        try{
            if(!key){
                throw new Error('invalid key passed for validator')
            }

            this.rules[key]

            return[
                this.rules[key],
                (req:Request,res:Response,next:NextFunction) => {
                    var error = validationResult(req)
                    if(!error.isEmpty()){
                        return res.status(400).json({error:error.array()})
                    }
                    else{
                        next()
                    }
                }]
        }
        catch(err){
            console.log(err)
        }
    }
}

class reqValidator extends Globalvalidator{
    constructor(){
        //the object name create will be passed as key to identity validation will be done for which set of rules
        super({
            create :[
                check('title').trim().not().isEmpty().withMessage('title is empty').bail(),
                check('published').isBoolean().withMessage('not a boolean value')
            ]
        })
    }
}

export default reqValidator

//another method to do validation when youhave only single set of rules for every validations

// export const validatecreate = [
//     check('title').trim().not().isEmpty().withMessage('title can not be empty!')
//         .bail()
//         .isLength({ min: 3 }).withMessage('Minimum 3 characters required!')
//         .bail(),
//     check('description').trim().not().isEmpty().withMessage('description can not be empty!')
//         .bail()
//         .isLength({ min: 3 }).withMessage('Minimum 3 characters required!')
//         .bail(),
//     check('published')
//     .isBoolean()
//     .withMessage("published need boolean value"),
//     (req :Request, res:Response, next:NextFunction) => {
//         var errors = validationResult(req)
//         if (!errors.isEmpty()){
//             return res.status(400).json({ errors: errors.array() })
//         }
//         else{
//             next();
//         }
//     },
// ]



 