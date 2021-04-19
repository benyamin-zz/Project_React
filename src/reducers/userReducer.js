
const INTIAL_STATE = {
    isSigned:null,
    infoUser:null,
    loading:false
};
export default (state=INTIAL_STATE, action)=>{
    switch (action.type) {
        case "LOGIN":
            return {...state,isSigned:true, infoUser:action.payload,loading:false}
            case "LOGOUT":
                return {...state,isSigned:false, infoUser:null,loading:false}
        default:
            return state;
    }
}