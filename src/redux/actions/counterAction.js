export const increaseCount=()=>{
    return {type:'ADD'}
}


export const decreaseCount=()=>{
    return{
        type:"DEC"
    }
}


export const resetCount=()=>{
    return {
        type:"RESET"
    }
}