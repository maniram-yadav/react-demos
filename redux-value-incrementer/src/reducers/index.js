import {combineReducers} from 'redux';
import * as ActionType from '../actiontypes'
const valueModifier=(count=0,action)=>{
    if(action.count==null){
        return count;
    }     
    if(action.type===ActionType.ZERO){
        return 0;
    }
    
    return action.count;
}

export default combineReducers({
    valueModifier:valueModifier
});