import axios from "axios"
import React from "react"

const storeData=(payload)=>({

    type:"STORE_DATA",
    payload:payload

})

const getData=()=>(dispatch)=>{

    axios.get(`https://api.coincap.io/v2/assets`).then(({data})=>{
        dispatch(storeData(data.data))
    })

}

export {storeData,getData}