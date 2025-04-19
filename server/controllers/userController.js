import { UserModel } from "../database/postgres.js"

export const getAllEmployees=async(req,res)=>{
    try {
        const users=await UserModel.findAll();
        if (users.length==0) {
            return res.status(200).json({message:"Users count is zero"});
        };
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"})
    }
}

export const addEmployee=async(req,res)=>{
    const {name,email,designation,empId}=req.body;
    try {
        const employee=await UserModel.findOne({where:{empId:empId}});
        if(!employee){
            await UserModel.create(req.body);
            return res.status(201).json({message:"Employee added successfully"})
        }
        return res.status(200).json({message:"Employee already found"})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"})
    }
}