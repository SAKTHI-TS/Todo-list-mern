const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "sakthi123"
const DATABASE_NAME = 'school';
const CONNECTION_URI = `mongodb+srv://sakts437:sakthi123@onlinecompiler.ynzjt.mongodb.net/`
async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'sakts437',
        pass: PASSWORD
    });
}

main().then(() => {
    console.log(`Connected`);
    const commentsSchema = new mongoose.Schema({
        name: String,
        email: String,
        text: String,
        date: String
      });
    const commentsModel = mongoose.model('student', commentsSchema);
    commentsModel.findOne({}).then(console.log)
    // mongoose.connection.listCollections().then(console.log)
})