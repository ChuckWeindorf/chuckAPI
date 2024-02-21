import express from "express";
import config from "./config";
// TODO: import router from routes/
import router from "./routes";

const app = express();

app.use(express.json());


// TODO: use the imported router to handle all requests
app.use("/api", router);

//Generic error handler
app.use((err, req, res, next) => {
  console.error(err);
//  if (err instanceof NotFound)
//    {res.status(404)}
//  else {res.status(500);}  
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
