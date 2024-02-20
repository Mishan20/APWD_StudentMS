import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";

const app = express();
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT"],
  credentials: true,
}));
app.use(express.json());
app.use("/auth", adminRouter);
app.use(express.static('Public'))

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if(token) {
      Jwt.verify(token, "jwt_secret_key", (err ,decoded) => {
          if(err) return res.json({Status: false, Error: "Wrong Token"})
          req.id = decoded.id;
          req.role = decoded.role;
          next()
      })
  } else {
      return res.json({Status: false, Error: "Not autheticated"})
  }
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});