const mongoose = require("mongoose")
const Schema = mongoose.Schema

const interiorSchema = new Schema({
    smallJob: {
        type: String,
    },
    mediumJob: {
        type: String,
    },
    bigJob: {
        type: String,
    }
})

module.exports = mongoose.model("Interior", interiorSchema)