

 const conunterReducer=(state={count:0},action)=>{
        switch(action.type){
            case "ADD":
                return  {
                    ...state,
                    count:state+1;
                }
        }
}