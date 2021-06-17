import axios from "axios"

export default class JobAdvertService{
    getJobAdvert(){
        return axios.get("http://localhost:8080/api/jobadverts/getAll")
    }

    getAllByCompanyId(id){
        return axios.get("http://localhost:8080/api/jobadverts/getAllByCompanyId?id="+id)
    }

    getAllByComapnyName(companyName){
        return axios.get("http://localhost:8080/api/jobadverts/getAllByCompanyName?companyName="+companyName)
    }

    getAllSorted(){
        return axios.get("http://localhost:8080/api/jobadverts/getAllSorted")
    }

    getAllPassiveJobs(){
        return axios.get("http://localhost:8080/api/jobadverts/getAllPassiveJobs")
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobadverts/add",values)
    }

    activate(id,status){
        return axios.put("http://localhost:8080/api/jobadverts/activate?isActive="+status+"&id="+id)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobadverts/getById?id="+id)
    }

    delete(jobAdvertisement){
        return axios.post("http://localhost:8080/api/jobadverts/delete",jobAdvertisement)
    }
}