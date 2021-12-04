import express_session from "express-session"
import mongo_session from "connect-mongodb-session"

const MongoDBStore = mongo_session(express_session)
export default new MongoDBStore({
  uri: `${process.env.MONGO}`,
  collection: "sessions",
})