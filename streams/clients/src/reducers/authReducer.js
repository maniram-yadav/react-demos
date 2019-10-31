import * as Types from '../actions/types';

const INITIAL_STATE={
    isSignedIn:null,
    userId:null
};

export default (state=INITIAL_STATE,action) =>{

    switch(action.type){
        case Types.SIGN_IN:
            return {...state,isSignedIn:true,userId:action.payload};
        case Types.SIGN_OUT:
            return {...state,isSignedIn:false,userId:null};
        default:
            return state;
    }


};