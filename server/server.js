const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')

const app = express()

app.use(express.json())
app.use(cors());

const users = []

app.get("/users", (req, res) => {
    res.json({"users": users})
})

app.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(hashedPassword);
        console.log(salt);
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
        } catch {
            res.status(500).send()
        }
    })

app.post("/login", async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    console.log();
    if (user == null) {
        return res.status(400).send('No user')
    }

    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
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