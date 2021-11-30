import mongoose from "mongoose"

const UsersSchema = new mongoose.Schema({
    email: { type: String, required: true, },
    password: { type: String, required: true, },
    first_name: { type: String, required: true, },
    last_name: { type: String, required: true, },
})

export default mongoose.model( "user", UsersSchema )