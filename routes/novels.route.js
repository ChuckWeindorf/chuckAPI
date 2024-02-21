import express from "express";
import { getAll, getOne, getCharacter, insertOne, updateOne, deleteOne } 
    from "../controllers/novels.controller";
import novelsCharacterRouter from "./novels.character.route";
import novelsGenreRouter from "./novels.genre.route";

const novelsRouter = express.Router();

novelsRouter.use("/genre", novelsGenreRouter);
novelsRouter.use("/character", novelsCharacterRouter);


novelsRouter.get("/:id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    let novelData;
    if (id) {
      novelData = await getOne(id);
    } else {
      novelData = await getAll();
    }
   
    res.json(novelData);
  }  catch (err) {next(err)};

});

novelsRouter.get("/character/:name?", async (req, res, next) => {
  try {
    let { name } = req.params;
    let novelData = await getCharacter(name);
   
    res.json(novelData);
  }  catch (err) {next(err)};

});

novelsRouter.post("/", async (req, res, next) => {
  try {
  let novelBody = req.body;
  let novelData = await insertOne(novelBody);
  res.json(novelData);
  } catch (err) {next(err)};
});

novelsRouter.put("/:id", async (req, res, next) => {
  try{
  let { id } = req.params;
  let novelBody = req.body;
  let novelData = await updateOne(id, novelBody);
  res.json(novelData);
  }  catch (err) {next(err)};
});

novelsRouter.delete("/:id", async (req, res, next) => {
  try {
  let { id } = req.params;
  let novelData = await deleteOne(id);
  res.json(novelData);
  } catch (err) {next(err)};
});

//const cwError = new Error("No route available for this request", {cause: 404});
//next(cwError);

export default novelsRouter;