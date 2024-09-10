// PUTTING API'S
import User from "../model/useModel.js"

// CREATE API

export const create = async(req, res)=>{
    try {
        
        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg: "User data not found"});
        }

        const savedData = await userData.save();
        res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({error: error});
    }
}

// GET API

export const getall = async(req, res) => {
    try {
        
        const userData = await User.find();

        if (!userData) {
            return res.status(404).json({msg: "User Data Not Found"});
        }

        res.status(200).json(userData);

    } catch (error) {
        res.status(500).json({error: error});
    }
}

//GET SINGLE USER BY ITS ID

export const getOne = async (req, res) => {
    try {
        // getting the id
        const id = req.params.id;
        const userExist = await User.findById(id);
        // if there is no data
        if(!userExist){
            return res.status(404).json({msg: "User not found"});
        }

        res.status(200).json(userExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

// UPDATE API : getting by it's ID

export const update = async(req, res) => {
    try {
        
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(401).json({msg: "User Not Found"});
        }

        const updateData = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "User Updates Successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}

//DELETE API

export const deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({msg: "User Not Exist"});
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({msg: "User Deleted Successfully"});
    } catch (error) {
        res.status(500).json({error: error});
    }
}