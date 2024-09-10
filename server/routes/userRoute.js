import express from "express";
import { create, deleteUser, getall, getOne, update } from "../controller/userController.js";  // Correct the filename here

const route = express.Router();

//Create API Route
route.post("/create", create);

//Get API Route
route.get("/getall", getall);

//GetOne API Route
route.get("/getone/:id", getOne);

//Update API Route
route.put("/update/:id", update);

//Delete API Route
route.delete("/delete/:id", deleteUser)

export default route;