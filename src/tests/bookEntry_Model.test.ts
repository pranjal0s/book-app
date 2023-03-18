import { BookEntry } from "../models/bookEntry";

let bookEntry = {
    book_Id : 5,
    title : 'book-1',
    description : 'book-d',
    published : false,
    quantity : 2,
    issued_Books : 1,
    genre : 'book-g'
}

describe('testing the model',() => {
    test('create must create an entry in db', async() => {
        let newEntry = await BookEntry.create(bookEntry)
        expect(newEntry).toBeInstanceOf(Object)
        expect(newEntry).toHaveProperty('book_Id')
        expect(newEntry).toHaveProperty('description')
        expect(newEntry).toHaveProperty('published')
        expect(newEntry).toHaveProperty('quantity')
        expect(newEntry).toHaveProperty('issued_Books')
        expect(newEntry).toHaveProperty('genre')
    })
    test('this must delete the entry',async()=> {
        let delEntry = await BookEntry.destroy({where:{book_Id:bookEntry.book_Id}})
        expect(delEntry).toBe(1)
    })

})