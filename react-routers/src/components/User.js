import React from 'react';

class User extends React.Component {

    constructor(props){
        super(props);
    }

    handleClick=()=> {
        this.props.history.push('/home');
    }
render(){
    return (
        <div>
            <div>{this.props.match.params.id}</div>
            <button className="ui button primary" onClick={this.handleClick}>Redirect</button>
        </div>
    );
}
}

export default User;