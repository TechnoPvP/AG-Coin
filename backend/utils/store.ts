import express_session from "express-session"
import pg_session from "connect-pg-simple"

const PGStore = pg_session(express_session)
export default new PGStore({
  tableName: 'user_sessions',
  conString: `${process.env.DATABASE_URL}`
})