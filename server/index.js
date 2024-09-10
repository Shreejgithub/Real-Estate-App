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
