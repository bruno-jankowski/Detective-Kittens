import express, { json } from 'express'
import cors from 'cors'
import { genSalt, hash, compare } from 'bcrypt'
import {getNotes, getNote, createNote, createUser, deleteNote, getUsers, getUser, getUserNotes, getUserFriends, addUserFriends, deleteUserFriend, updateUserAvatar, createParty, createPartyWithName, addPartner, getParty, deleteParty, leaveParty} from './database.js'


const app = express()

app.use(json())
app.use(cors());

let currentUser = null;
console.log(currentUser);

app.get("/currentUser", async (req, res) => {
    if(currentUser){
        const user = await getUser(currentUser)
        res.send(user)
    } else{
        res.status(500)
    }
})

app.get("/feed/:user", async (req, res) => {
    const user = await getUser(req.params.user)
    res.send(user)
})

app.get("/avatar", async (req, res) => {
    if(currentUser){
        const avatar = await updateUserAvatar(currentUser)
        res.send(avatar)
    } else{
        res.status(500)
    }
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
    console.log(friends.friends);
    res.send(friends)
})

app.post("/friends/:user", async (req, res) => {
    const friends = await getUserFriends(currentUser)
    
    if(currentUser && !friends.friends.includes(req.params.user)){
        await addUserFriends(currentUser, req.params.user)
        await addUserFriends(req.params.user, currentUser)
        res.send("success")
    }
    else{
        console.log('no user');
    }
    if(friends.friends.includes(req.params.user)){
        res.status(400).send("friends already")
    }
})

app.get("/friends", async (req, res) => {
    const friends = await getUserFriends(currentUser)
    if(currentUser){
        return res.status(200).send(friends)
    }
    res.status(400)
})

app.delete("/friends/:user", async (req, res) => {
    if(currentUser){
        await deleteUserFriend(currentUser, req.params.user)
        await deleteUserFriend(req.params.user, currentUser)
        res.send("deleted")
    }
    else{
        console.log('no user');
    }
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
            res.status(500).send("idk")
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

///PARTIES 
app.post("/party", async (req, res) => {
    if(currentUser){
        const party = await createParty(currentUser)
        res.send(party)
    } else{
        res.status(500)
    }
})

app.post("/party/:name", async (req, res) => {
    if(currentUser){
        const party = await createPartyWithName(currentUser, req.params.name)
        res.send(party)
    } else{
        res.status(500)
    }
})



app.post("/party/:user", async (req, res) => {
    if(currentUser){
        const party = await addPartner(currentUser, req.params.user)
        res.send(party)
    } else{
        res.status(500)
    }
})


app.get("/party", async (req, res) => {
    if(currentUser){
        const party = await getParty(currentUser)
        res.send(party)
    } else{
        res.status(500)
    }
})

app.get("/party/:user", async (req, res) => {
    if(currentUser){
        const party = await getParty(req.params.user)
        console.log(party);
        res.send(party)
    } else{
        res.status(500)
    }
})


app.delete("/party/:id", async (req, res) => {
    if(currentUser){
        const party = await deleteParty(req.params.id)
        res.send(party)
    } else{
        res.status(500)
    }
})

app.delete("/party/:id/:user", async (req, res) => {

    console.log(req.params.id,req.params.user);
    const user = await leaveParty(req.params.id, req.params.user)
    res.send(user)
})



app.listen(5000, () => {console.log("Server started on 5000");
})