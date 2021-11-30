const mongoose = require('mongoose');
require('dotenv').config();

export default async () => {
    try {
        await mongoose.connect(
            `${process.env.MONGO}`,
            { useNewUrlParser: true, useUnifiedTopology: true },
        );
        console.log('Connted to MongoDB Database')
    } catch (err) {
        console.error(`Error corused ${err}`)
    }
};