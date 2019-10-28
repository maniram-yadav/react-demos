import React from 'react';
import SeasonDisplay from './SeasonDisplay'

import Spinner from './Spinner';

class App2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lat:null,
            time:new Date().toLocaleString(),
            error:''
        };
      

    }
    componentDidMount(){
        console.log("did Mount")
        window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({lat:position.coords.latitude})
            ,
            (err)=>this.setState({error:err.message})
          
        );
        setInterval(()=>{
            this.setState({time:new Date().toLocaleString()})
        },1000)
        console.log(this.state.time)
    }
    componentDidUpdate(){
        console.log("did update")
    }
    renderContent(){
        if(this.state.lat&&!this.state.error){
            return <SeasonDisplay lat={this.state.lat} />
            //return    <div>Lattitude : {this.state.lat}            </div>;
       
        }
        if(!this.state.lat&&this.state.error){
           return <div> Error : {this.state.error}</div>            
        }
        return <Spinner/>;
    
    }
    render(){
        return <div className='border red'>
            {this.renderContent()}
        </div>
    }    
}

export default App2;
