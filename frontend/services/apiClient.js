import axios from "axios"

class ApiClient{
    constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "lifestarter_token"
    }

    setToken(token){
        this.token = token
        localStorage.setItem(this.tokenName, token)
    }


    async request({endpoint, method = `GET`, data = {}}){
        const url = `${this.remoteHostUrl}/${endpoint}`
        const headers = {
            "Content-Type" : "application/json"
        }

     

        if(this.token){
            headers["Authorization"] = `Bearer ${this.token}`
        }

        try{
            const res = await axios({url, method,data,headers})
            return {data: res.data, error:null}

        } catch(error){
            console.error({errorResponse : error.response})
            const message = error?.response?.data?.error?.message
            return {data:null, error : message || String(error)}

        }
    }


 
    async fetchUserFromToken(){
        return await this.request({endpoint: `auth/me`, method: `GET`})
    }


    async getNutrition(){
        return await this.request({endpoint: `nutrition/`, method : `GET`})
    }
    // async getSleep(){
    //     return await this.request({endpoint: `sleep/`, method : `GET`})
    // }
    // async getExercise(){
    //     return await this.request({endpoint: `exercise/`, method : `GET`})
    // }


    async createPost(data, point){
        return await this.request({endpoint: point + `/`, method : `POST`, data: data})

    }

    // async getStats(){
    //     return await this.request({endpoint: `activity/`, method : `GET`})

    // }
 

    async loginUser(credentials){
        return await this.request({endpoint: `auth/login`, method: `POST`, data: credentials})
    }

    async signupUser(credentials){
        return await this.request({endpoint: `auth/register`, method: `POST`, data: credentials})
    }
}


export default new ApiClient( "https://lifestarter-jbosire.herokuapp.com")
