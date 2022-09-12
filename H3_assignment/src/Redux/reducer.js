const initState={
    mydata:[]
}

const currencyReducer=(state=initState,action)=>{
    switch(action.type){
        case "STORE_DATA":
            return{...state,mydata:action.payload}

        default:
            return state
    }
}

export {currencyReducer}