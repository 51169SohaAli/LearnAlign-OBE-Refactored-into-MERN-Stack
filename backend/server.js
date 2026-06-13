const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");


const app = express();

// middleware
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://learn-align-obe-refactored-into-mer.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

//start session
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {secure: false}
}));

// routes
const loginRoutes = require("./routes/Login");
app.use("/login", loginRoutes);

app.get("/test-session",(req,res) =>{
  res.json(req.session.user || "No session");
});

// DB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB Error:", err));

// test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// OBE dashboard card counts
const dashboardRoutes = require("./routes/dashboardRoutes");
app.use("/api/dashboard",dashboardRoutes);

// create semester route
const semesterRoutes = require("./routes/semesterRoutes");
app.use("/api/semester", semesterRoutes);

// create file upload route
const uploadRoutes = require("./routes/uploadRoutes");
app.use("/api/upload", uploadRoutes);

//display courses
const courseRoutes = require("./routes/courseRoutes");
app.use("/api/courses", courseRoutes);

//fetch clos
const cloRoutes = require("./routes/cloRoutes");
app.use("/api/clos", cloRoutes);

//create assessment route
const assessmentRoutes = require("./routes/assessmentRoutes");
app.use("/api/assessments", assessmentRoutes);