const mogoose = require('mongoogse')

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In progress', 'Completed']
    },
    clientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }

})

module.exports = mongoose.model('Client', ClientSchema)