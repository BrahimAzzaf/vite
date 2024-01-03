import express, { json } from 'express'
import { connect } from 'require'
import cors from 'cors'
import { find, create } from './models/Users'

const app = express()
app.use(cors())
app.use(json())

connect('mongodb+srv://brahimzf7:0697824446@cluster0.uq0anqs.mongodb.net/')
// get method
app.get('/', (req, res) => {
    find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})
app.post('/createUser', (req, res) => {
    create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})
// mongodb + srv://brahimzf7:<password>@cluster0.uq0anqs.mongodb.net/

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})

