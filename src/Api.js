import React from 'react';
import { Component } from 'react';
import axios from 'axios';
class Api extends Component{

    state = {
        movieList: []
    }
   
    componentDidMount = ()=>{
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=84afd49fa079ed0c1a6ee46b3a41e37a').then(res => {
            console.log(res.data.results);
          this.setState({
              movieList:res.data.results
          })
        }).catch(error =>{
            console.log(error);
        })
            
        }

render(){
    const movieListDisplay =  this.state.movieList.length ? (this.state.movieList.map(item=>{
        return( <div key={item.id} className="col col-lg-3 mb-20">
        <div className="card">
            <p>{item.original_title}</p>
            <p className="movie-overview">{item.overview}</p>
            </div>
        </div>)

    })) :(<p>No Movie to Show</p>)
return(<div>
        <h1>Movies List</h1>
        <div className="container">
            <div className="row">
            {movieListDisplay}
            </div>
        </div>
        
    </div>)

}

}

export default Api;
