import * as Types from '../actions/types';
import _ from 'lodash';
export default(state={},action)=>{

    switch(action.type){
        case Types.FETCH_STREAM:
            return {...state,[action.payload.id]:action.payload};
        case Types.FETCH_STREAMS:
            return {...state,..._.mapKeys(action.payload,'id')};
        case Types.CREATE_STREAM:
            return {...state,[action.payload.id]:action.payload};
        case Types.EDIT_STREAM:
            return {...state,[action.payload.id]:action.payload};
        case Types.DELETE_STREAM:
            return _.omit(...state,action.payload);
        default:
            return state;
    }
}