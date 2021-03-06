import axios from "axios"

export default class EmployerService{
    getEmployers() {
        return axios.get("http://localhost:8080/api/employers/getAll")
    }

    getEmployerById(id) {
        return axios.get("http://localhost:8080/api/employers/getById?id="+id)
    }
}