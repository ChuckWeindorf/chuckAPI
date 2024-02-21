import express from "express";
import { getCharacter } 
    from "../controllers/novels.controller";

const novelsCharacterRouter = express.Router();

novelsCharacterRouter.get("/:name?", async (req, res, next) => {
  try {
    let { name } = req.params;
    let novelData = await getCharacter(name);
   
    res.json(novelData);
  }  catch (err) {next(err)};

});

export default novelsCharacterRouter;