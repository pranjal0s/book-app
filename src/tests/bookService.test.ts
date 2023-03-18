import entryServiceInstance from "../services/bookService";


let bookEntry = {
    book_Id : 5,
    title : 'book-1',
    description : 'book-d',
    published : false,
    quantity : 2,
    issued_Books : 1,
    genre : 'book-g'
}


describe('fetch service test', () => {
    test('check correct data is returned or not', async() => {
        let req = {
            body : bookEntry
        }
        try{
            let creator = await entryServiceInstance.createEntry(bookEntry)
            expect(creator).toBe(bookEntry)
        }
        catch(err){
            console.log(err)
        }
    })

    //test to check get request
    test('test the getbyid', async ()=>{
        try{
            let res = await entryServiceInstance.findBy_Id(4)
            expect(res).toHaveProperty('description')
        }
        catch(err){
            console.log(err)
        }
    })

    test('testing getAll service', async() =>{
        try{
            let res = await entryServiceInstance.getAllEntry()
            expect(res[0]).toHaveProperty('book_Id')
            expect(res[1]).toHaveProperty('book_Id')
        }
        catch(err){
            console.log(err)
        }
    })

    //test to delete created book entry
    test('must delete the created entry', async() =>{
        try{
            let res = await entryServiceInstance.deleteBy_Id(bookEntry.book_Id)
            expect(res).toBe(1)
        }
        catch(err){
            console.log(err)
        }
    })
})
