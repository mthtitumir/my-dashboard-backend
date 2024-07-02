import { TProject } from "./project.interface"
import { Project } from "./project.model"

const addProject = async (payload: TProject) =>{
    const result = await Project.create(payload);
    return result;
}   
const getAllProjects = async () =>{
    const result = await Project.find();
    return result;
}   

export const ProjectServices = {
    addProject,
    getAllProjects
}