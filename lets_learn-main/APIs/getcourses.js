const axios=require('axios')
userId='65425e560e40cad1551139cc'

axios.get(`http://localhost:5000/api/auth/user/${userId}`)
    .then(response=>{
        console.log(response.data)
    })
    .catch(error=>{
        console.error(error)
    })