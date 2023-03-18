
import entryServiceInstance from "../services/bookService"
import { Request, Response } from "express"

class bookEntryController{
    create(req : Request, res: Response){
        entryServiceInstance.createEntry(req.body)
        .then((result)=>{
            console.log(result)
            res.send('entry created')
            console.log('entry created from controller')
        })
        .catch((err)=>{
            console.log('error in creating new entry from controller',err)
            res.send(err)
        })
    }

    //find all
    findAll(req : Request, res : Response){
        entryServiceInstance.getAllEntry()
        .then((result)=>{
            res.send(result)
            console.log('enteries found from controller')
        })
        .catch((err)=>{
            console.log('error : cannot find enteries from controller',err)
        })
    }
    findBy_Id(req:Request, res:Response){

        //to get the values via params you need to define that in routes
        entryServiceInstance.findBy_Id(Number(req.params.book_Id))
        .then((result)=>{
            res.send(result)
            console.log('entry found by id')
        })
        .catch((err)=>{
            console.log('error in controllers',err)
        })
    }
    findBy_Title(req:Request, res:Response){
        
        //when we need to pass multiple key-value pairs then the query is used
        entryServiceInstance.findBy_Title(String(req.query.title))
        .then((result) => {
            res.send(result)
            console.log('entry found')
        })
        .catch((err)=>{
            console.log('can not by title',err)
        })
    }
    deleteBy_Id(req:Request, res:Response){
        entryServiceInstance.deleteBy_Id(Number(req.query.book_Id))
        .then(()=>{
            res.send('deleted')
            console.log('entry deleted')
        })
        .catch((err:any)=>{
            console.log('error in deleting',err)
        })
    }
    update(req:Request,res:Response){
        entryServiceInstance.update(req.query)
        .then((result)=>{
            res.send('updated')
            console.log('updated sucessfully')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export default bookEntryController
