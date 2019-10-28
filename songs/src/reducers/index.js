import { combineReducers } from 'redux';

const songReducer =() =>{

    return [
        {title:'No scrube',duration:'4:05'},
        {title:'Macarena',duration:'2:30'},
        {title:'All star',duration:'3:15'},
        {title:'All I want that way',duration:'4:34'}
    ];

};

const selectedSongReducer = (selectedSong=null,action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs : songReducer,
    selectedSong : selectedSongReducer
});