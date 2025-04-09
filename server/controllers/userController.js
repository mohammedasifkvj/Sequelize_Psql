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