import 'dotenv/config'
import  express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('build'));

app.get('/api/items', (req: any, res: any) => {

    const items = [
        {
            name: "laptop",
            price: 500,
        },
        {
            name: "top",
            price: 444440,
        },
        {
            name: "hard drive by art blakey",
            price: 2000,
        },
    ]
    
    res.send(items)
})



app.listen(PORT, () => console.log(`Listening on ${PORT}`));

