import Tasks from '../models/tasks.js';

export const getAllTasks = async (req, res) => {
    try{
        const tasks = await Tasks.find({}); 
        res.status(200).json({tasks});
    }catch(error){
        res.status(500).json({msg: error});
    }
};

export const createTask = async (req, res) => {
    try{
        const task = await Tasks.create(req.body);
        res.status(201).json({task});
    }catch(error){
        res.status(500).json({msg: error});
    }
};

export const getTask = async (req, res) => {
    try{
        const {id: taskID} = req.params;
        const task = await Tasks.findOne({_id: taskID});
        if(!task){
            return res.status(404).json({msg: `no task with id: ${taskID}`});
        }
        res.status(200).json({task});
    }catch(error){
        res.status(500).json({msg: error});
    }
};

export const updateTask = async (req, res) => {
    try{
        const {id: taskID} = req.params;
        const task = await Tasks.findByIdAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidation: true
        });
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`});
        }
        res.status(200).json({task});
    }catch(error){
        res.status(500).json({msg: error});
    }
};

export const deleteTask = async (req, res) => {
    try{
        const {id: taskID} = req.params;
        const task = await Tasks.findOneAndDelete({_id: taskID});
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`});
        }
        res.status(200).json({task: null, status: 'successfully deleted'});
    }catch(error){
        res.status(500).json({msg: error});
    }
};
