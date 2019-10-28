import {INCREMENT,DECREMENT,ZERO} from '../actiontypes';

export const incrementer=(count=0)=>{
    return {
        type:INCREMENT,
        count:++count
    }
}

export const decrementer=(count=0)=>{
    return {
        type:DECREMENT,
        count:--count
    }
}

export const setzero=(count=0)=>{
    return {
        type:ZERO,
        count:0
    }
}