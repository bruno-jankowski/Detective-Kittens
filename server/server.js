const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors());


app.get("/api", (req, res) => {
    res.json({"users": ["u1", "u2", "u3"]})
})

app.listen(5000, () => {console.log("Server started on 5000");
})