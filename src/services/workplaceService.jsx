import axios from "axios";

export default class WorkplaceService{
    getAll(){
        return axios.get("http://localhost:8080/api/workplaces/getAll")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/workplaces/getById?id=",id)
    }

    add(data){
        return axios.post("http://localhost:8080/api/workplaces/add",data)
    }
}