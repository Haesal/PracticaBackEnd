const express = require("express")
const mongoose = require("mongoose")
const DB_routes = require("./routes/musica-libros")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/elements",DB_routes)

mongoose.connect('mongodb://user5:root@54.173.202.133:27017/base5?authSource=admin')
.then(() => {
    app.listen(8080, () => console.log("Server online"))
})
.catch(error => console.log(error))