import express from "express";
import { getGenre } 
    from "../controllers/novels.controller";

const novelsGenreRouter = express.Router();


novelsGenreRouter.get("/:genre?", async (req, res, next) => {
  try {
    let { genre } = req.params;
    console.log("I am in genre " + genre);
    let novelData = await getGenre(genre);
   
    res.json(novelData);
  }  catch (err) {next(err)};

});


export default novelsGenreRouter;