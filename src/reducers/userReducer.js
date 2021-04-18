
const INTIAL_STATE = {
    isSigned:null,
    token:null,
    loading:false
};
export default (state=INTIAL_STATE, action)=>{
    switch (action.type) {
        case "LOGIN":
            return {...state,isSigned:true, token:action.payload,loading:false}
            case "LOGOUT":
                return {...state,isSigned:false, token:null,loading:false}
        default:
            return state;
    }
}