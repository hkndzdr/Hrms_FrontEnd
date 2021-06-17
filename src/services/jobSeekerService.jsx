import axios from "axios"

export default class JobSeekerService{
    add(jobSeeker){
        return axios.post("http://localhost:8080/api/jobseekers/add")
    }

    getJobSeekers() {
        return axios.get("http://localhost:8080/api/jobseekers/getAll")
    }

    getJobSeekersCv() {
        return axios.get("http://localhost:8080/api/jobseekers/getCvByJobseekerId")
    }
}


