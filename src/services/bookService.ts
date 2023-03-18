import { BookEntry } from "../models/bookEntry"

interface reqBodyInstance{
    book_Id: number
    title: string
    quantity: number
    description: string
    published: boolean
    issued_Books: number
    genre: string
}


class bookServices {

    async createEntry(bookEntry:reqBodyInstance){
        //sequelize model functions
        try{
            let check = await BookEntry.findOne({where:{title :bookEntry.title}})
            
            if(check?.dataValues.title == bookEntry.title){
                return Promise.reject("Duplicate Entry : title")
            
            }
            else{
            let c = BookEntry.create({
                book_Id: bookEntry.book_Id,
                quantity: bookEntry.quantity,
                issued_Books: bookEntry.issued_Books,
                genre: bookEntry.genre,
                title:bookEntry.title,
                description: bookEntry.description,
                published: bookEntry.published
                })
            return Promise.resolve(c)
            }
        }
        catch(err){
            return Promise.reject(err)
        }
    }
    //to fetch all the available data 
        async getAllEntry(){
        // Find all users
            try{
                let s =  await BookEntry.findAll()
                return Promise.resolve(s)
            }
            catch(err){
                return Promise.reject(err)
            } 
        }   
       
    //to fetch single entry 
    async findBy_Id(book_Id:Number){
        try{
         let s =  BookEntry.findOne({where:{ book_Id : book_Id }})
         return Promise.resolve(s)
         }
         catch(err){
             return Promise.reject(err)
         }
     }
    
    //find by name 
    async findBy_Title (title:string){
        try{
            let s = await BookEntry.findOne({where:{title:title}})
            return Promise.resolve(s)
        }
        catch(err){
            return Promise.reject(err)
        }
    }


    //delete a single entry by bookId
    async deleteBy_Id(book_Id:any){
        try{
            let s = BookEntry.destroy({where:{ book_Id : book_Id}})
            return Promise.resolve(s)
        }
        catch(err){
            return Promise.reject(err)
        }
       
    }
 
    //to update the enteries
    async update(reqQuery:any){
        try{
            let s = BookEntry.update({
            title : reqQuery.title,
            description : reqQuery.description,
            published : reqQuery.published,
            quantity : reqQuery.quantity,
            issued_Books : reqQuery.issued_Books,
            genre : reqQuery.genre    
            },{where:{ book_Id : reqQuery.book_Id}})
        return Promise.resolve(s)
        }
        catch(err){
            return Promise.reject(err)
        }
    }

}

let entryServiceInstance = new bookServices()
export default entryServiceInstance