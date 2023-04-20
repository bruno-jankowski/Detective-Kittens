import express, { json } from 'express'
import cors from 'cors'
import { genSalt, hash, compare } from 'bcrypt'
import {getNotes, getNote, createNote, createUser, deleteNote, getUsers, checkUser} from './database.js'


const app = express()

app.use(json())
app.use(cors());

const users = []

app.get("/notes", async (req, res) => {
    const notes = await getNotes()
    res.send(notes)
})

app.get("/notes/:id", async (req, res) => {
    const id = req.params.id
    const note = await getNote(id)
    res.send(note)
})

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id
    const note = await deleteNote(id)
    res.send(note)
})

app.post("/notes", async (req, res) => {
    const {title, contents} = req.body 
    const note = await createNote(title, contents)
    res.status(200).send(note)
})

app.get("/users", async (req, res) => {
    const users = await getUsers()
    res.send(users)
})

app.post("/register", async (req, res) => {
    try {
        const salt = await genSalt()
        const hashedPassword = await hash(req.body.password, salt)
        
        const user = { name: req.body.name, password: hashedPassword}

        const user_exist = await checkUser(user.name)
        console.log(user_exist);
        if (user_exist != undefined){
                res.status(500).send("u are here");
            } else{
                await createUser(user.name, user.password) 
                //push(user) //add user
                res.status(201).send('Success')
            }

        } catch {
            res.status(500).send()
        }
    })

app.post("/login", async (req, res) => {
    const user = users.find(user => user.name == req.body.name)
    console.log(user);
    if (user == null) {
        return res.status(400).send('No user')
    }
    try {
        if(await compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Failed')
        }
    } catch {
        res.status(500).send()
    }

})

app.listen(5000, () => {console.log("Server started on 5000");
})