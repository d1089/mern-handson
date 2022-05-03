const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3002
const AnimeModel = require("./models/Anime")

mongoose.connect("mongodb+srv://dbuser:admin@crud.dlk48.mongodb.net/My?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})

app.get("/", async(req, res) => {
    console.log("inside get");
    const anime = new AnimeModel({ animeName: "FutureDiary", seasonWatched: 0.5})
    try{
        await anime.save()
        res.send("record inserted..");
    } catch (err){
        console.log(err)
    }
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})