import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);

taskSchema.index({ createdAt: 1 });
const Tasks = mongoose.model('Task', taskSchema);
Tasks.syncIndexes();
export default Tasks;
