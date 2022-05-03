const mongoose = require("mongoose")
const AnimeSchema = new mongoose.Schema({
    animeName: {
        type: String,
        required: true
    },
    seasonWatched: {
        type: Number,
        required: true
    }
})

const Anime = mongoose.model("animelist", AnimeSchema)
module.exports = Anime