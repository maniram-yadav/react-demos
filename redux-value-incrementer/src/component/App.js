import React from 'react';
import { connect } from 'react-redux';
import * as Action from '../actions'

const App = (props) => {
    return (
        <div className="ui container" style={{margin:'20px'}}>
            <div className="ui buttons">
                <button onClick={() => props.incrementer(props.count)} className="ui button">Increment</button>
                <div className="or"></div>
                <button onClick={() => props.decrementer(props.count)}  className="ui positive button">Decrement</button>
            </div>
            <br/>
            <h4>
                Count : {props.count} <i  onClick={() => props.zero(props.count)} style={{cursor:"pointer"}} className="sync alternate icon"></i>
            </h4>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return { count: state.valueModifier }
}

export default connect(mapStateToProps, {
    decrementer: Action.decrementer, 
    incrementer:Action.incrementer,
    zero:Action.setzero
})(App);