const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

// The mongoose.model() function of the mongoose module is used to create a collection of a particular database
// mongoose.model(<Collectionname>, <CollectionSchema>)
module.exports = mongoose.model('Posts', PostSchema);