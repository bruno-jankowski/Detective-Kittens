import express, { json } from 'express'
import cors from 'cors'
import { genSalt, hash, compare } from 'bcrypt'
import {getNotes, getNote, createNote, createUser, deleteNote, getUsers, getUser, getUserNotes, getUserFriends} from './database.js'


const app = express()

app.use(json())
app.use(cors());

let currentUser = null;
console.log(currentUser);

app.get("/currentUser", async (req, res) => {
    res.send(JSON.stringify(currentUser))
})



app.get("/logout", async (req, res) => {
    currentUser = null;
})

app.get("/notes", async (req, res) => {
    const notes = await getNotes()
    res.send(notes)
})

app.get("/notes/user", async (req, res) => {
    if(currentUser != null){
        const notes = await getUserNotes(currentUser)
        res.send(notes)
    } else {
        res.status(400)
    }
    
})


app.get("/notes/:id", async (req, res) => {
    const id = req.params.id
    const note = await getNote(id)
    res.send(note)
})

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id
    if(id != 'undefined'){
        const note = await deleteNote(id)
        res.send(note)
    } else {
        res.status(400)
    }
})

app.post("/notes", async (req, res) => {
    const {title, contents} = req.body 
    const note = await createNote(title, contents, currentUser)
    res.status(200).send(note)
})

app.get("/users", async (req, res) => {
    const users = await getUsers()
    res.send(users)
})

app.get("/friends/:user", async (req, res) => {
    const friends = await getUserFriends(req.params.user)
    res.send(friends)
})

app.post("/register", async (req, res) => {
    try {
        const salt = await genSalt()
        const hashedPassword = await hash(req.body.password, salt)
        
        const user = { name: req.body.name, password: hashedPassword}

        const user_exist = await getUser(user.name)
        console.log(user_exist);
        if (user_exist != undefined){
              return res.status(500).send("u are here");
            } 

        currentUser = user.name;
        await createUser(user.name, user.password) 
        //push(user) //add user
        res.status(201).send(user)    

        } catch {
            res.status(500).send()
        }
    })

app.post("/login", async (req, res) => {
    const user = await getUser(req.body.name)

    //console.log(req.body.name);
    //console.log(user);

    if (user == undefined) {
        return res.status(400).send('No user')
    }
    try {
        if(await compare(req.body.password, user.password)) {
            currentUser = user.name;
            console.log(currentUser);
            res.status(200).send(user)
        } else {
            res.status(400).send('Failed')
        }
    } catch {
        res.status(400).send()
    }

})

app.listen(5000, () => {console.log("Server started on 5000");
})