import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
import Chance from 'chance';

const chance = new Chance();
const animals = [...Array(250).keys()].map(id => {
    return {
        id,
        name: chance.name(),
        type: chance.animal(),
        age: chance.integer({ min: 0, max: 100 }),
        color: chance.color(),
    }
})
app.get('/', (req, res) => {
    const q = req.query.q?.toLowerCase() || ''
    const result = animals.filter(animal => animal.type.toLowerCase().includes(q))
    console.log(result)
    res.send(result)
}
)

app.listen(8080, () => console.log("Listening on port 8080"));
