const express = require("express")
const mongoose = require("mongoose")
const app = express()

const AnimeModel = require("./models/Anime")

app.use(express.json)

mongoose.connect("mongodb+srv://dbuser:admin@crud.dlk48.mongodb.net/My?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})

app.get("/", async (req, res) => {
    console.log("inside get");
    const anime = new AnimeModel({ animeName: "Naruto", seasonWatched: 2})
    try{
        await anime.save()
        res.send("record inserted..");
    } catch (err){
        console.log(err)
    }
})

app.listen(4012, () => {
    console.log("Server is up on 4012")
})