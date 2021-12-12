import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

// const db = async () => {
//     try {
//         await mongoose.connect(
//             `${process.env.MONGO}`,
//         );
//         console.log('Connted to MongoDB Database')
//     } catch( err) {
//         console.error(`Error corused ${err}`)
//     }
// };

// export default db;