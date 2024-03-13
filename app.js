import express from "express";
import dotenv from "dotenv";
const app = express();

const options = [
  //  cors({ origin: ['http://localhost:5173'], credentials: true }),

  express.json({ limit: "30mb" }),
];

app.use("*", options);

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "config/config.env" });
}

// app.use(express.json())
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());




export default app;
