import mongoose from 'mongoose';

//Define the schema for a Note
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true }); //MongoDb by default gives createdAt and updatedAt fields

//Create the model for Note using the schema
//'Note' is a string that represents the name of the model
const Note = mongoose.model('Note', noteSchema);

export default Note;