import express from "express";
import { getAllEmployees,addEmployee } from "../controllers/userController.js";

const router=express.Router();

router.get('/getAll',getAllEmployees);
router.post('/addUser',addEmployee);

export default router;