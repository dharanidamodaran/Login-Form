import express from 'express'
const router =express.Router()
import { InsertUser,FetchUser,Signin } from '../controller/user.js'

router.post("/",InsertUser)
router.get("/fetchuser",FetchUser)
router.post("/signin",Signin)

export default router;
