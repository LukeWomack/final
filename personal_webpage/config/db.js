const mongoose = require('mongoose');

module.exports = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch(err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};