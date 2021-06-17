import axios from "axios";

export default class WorkSchedulesService{
    getAll(){
        return axios.get("http://localhost:8080/api/workschedules/getAll")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/workschedules/getById?id=",id)
    }

    add(data){
        return axios.post("http://localhost:8080/api/workschedules/add",data)
    }
}