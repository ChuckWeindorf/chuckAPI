import express from "express";
// TODO: import router 
import novelsRouter from "./novels.route";

const router = express.Router();

//Middleware 
// this stands on top of /api/
router.use("/novels", novelsRouter);


export default router;
