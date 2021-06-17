import axios from "axios";

export default class JobSeekerSkillService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobseekerskills/getAll")
    }
}