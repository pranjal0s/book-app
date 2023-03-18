import express, {Request,Response} from 'express'
import bodyParser from 'body-parser'
import connectToDb from '../config/dbConnection'
import mainRouter from '../routes/bookRoutes'
const app: express.Application = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(mainRouter)

app.get('/', (req:Request, res:Response) =>{
    res.json({message: "landing page"})
});

app.listen(3000,() =>{
    console.log('server active at port 3000')
});


app.get('*',(req: Request,res: Response,next ) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})

connectToDb().then((result) => {
    console.log("Connection of PSQlDb is successfully.")
}).catch((err) =>{
    console.log("err" + err);
})