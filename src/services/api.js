import axios from 'axios'
export default axios.create({
    
    baseURL :"https://toplearnapi.ghorbany.dev/api/",
    headers: { 
        "content-type": "application/json",
     }

})