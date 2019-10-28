import React from 'react';
import './SeasonDisplay.css';


const getSeason=(lat,month)=>{
if(month>2&&month<9){
    return lat>0 ? 'summer':'winter';
} else {
    return lat>0? 'winter':'summer';
}

}

const seasonConfis={
    summer:{
        text:'Let hit the beach',
        icon:'sun'
    },
    winter:{
        text:'Burr, It is Chilly',
        icon:'snowflake'
    }
}

const SeasonDisplay=(props)=>{

    console.log(props.lat);
    const season=getSeason(props.lat,new Date().getMonth());
    //const text =  season=== 'Winter' ? 'Burr, It is Chilly': 'Let hit the summer';
    // const icon= season=== 'Winter' ?'snowflake':'sun';
    const {text,icon}=seasonConfis[season];
    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${icon} icon`}/>
        <h1>{text}</h1>
        <i className={`icon-right massive  ${icon} icon`}/>
    </div>
    );
}

export default SeasonDisplay;
