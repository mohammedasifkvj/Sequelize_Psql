import express from "express";
import { getAllEmployees } from "../controllers/userController.js";

const router=express.Router();

router.get('/getAll',getAllEmployees)

export default router;