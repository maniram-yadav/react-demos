import React from 'react';
import ImageList from './ImageList';
import unsplash from './api/unsplash';
import SearchBar from './SearchBar'

class App3 extends React.Component{

    state = {images:[]};
     onSearchSubmit= async (term)=>{
       var data=[];
       for(var i=5;i<10;i++){

       const response= await unsplash.get('/search/photos',{
            params:{
                query:term,
                page:i
            }
        });
        data=data.concat(response.data.results);
    }
        this.setState({images:data});
    }

    render(){
        return <div className="ui container"
        style={{marginTop:'10px'}}
        >
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images} />
            Found : {this.state.images.length} images
         </div>
    }
}
export default App3;