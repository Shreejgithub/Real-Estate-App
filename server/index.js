// // Server Setup

// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import cors from "cors";
// import route from "./routes/userRoute.js";


// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// dotenv.config();

// const PORT = process.env.PORT || 9000;
// const URL = process.env.MONGOURL;

// mongoose.connect(URL).then(() => {

//     console.log("DB connected successfully");

//     app.listen(PORT, () => {
//         console.log(`Server is running on port: ${PORT}`);
//     })

// }).catch(error => console.log(error))

// app.use("/api", route);

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoute.js";
import vendorRoutes from "./routes/vendorRoutes.js";  // Import vendor routes
import adminRoutes from "./routes/adminRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 9000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() => {
    console.log("DB connected successfully");

    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });

}).catch(error => console.log(error));

// Routes
app.use("/api/users", userRoutes);  // User routes
app.use("/api/vendors", vendorRoutes);  // Vendor routes
app.use("/api/admins", adminRoutes);   // Admin routes

// 404 Middleware
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});