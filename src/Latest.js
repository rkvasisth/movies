import React, { Component } from 'react';
import axios from 'axios';

class Latest extends Component {
    state={
        latestMovies:''
    }

    componentDidMount = ()=>{
        axios.get('https://api.themoviedb.org/3/movie/latest?api_key=84afd49fa079ed0c1a6ee46b3a41e37a&language=en-US').then(res =>{
            
                console.log(res.data)
                this.setState({
                    latestMovies:res.data
                })

        }).catch(error =>{


        })

    }
    

    render(){
        const imgPath = 'https://image.tmdb.org/t/p/w500';
        return(
            <div>
                <div className="container page-pad-top">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Latest Movies</h1><br/>
                        </div>
                        <div className="col-md-6">
                            
                        <h2>{this.state.latestMovies.original_title}</h2>
                        <p>
                            <span><strong>Movie Id:- </strong> {this.state.latestMovies.id}</span><br/>
                            <span><strong>Release Date:- </strong> {this.state.latestMovies.release_date}</span><br/>
                            <span><strong>Status:- </strong> {this.state.latestMovies.status}</span><br/>
                            <span><strong>Revenue:- </strong> {this.state.latestMovies.revenue}</span><br/>
                            <span><strong>Vote Count:- </strong> {this.state.latestMovies.vote_count}</span><br/>
                        
                        </p>
                        </div>
                        <div className="col-md-6">
                            <h2><strong>Overview</strong> </h2>
                        <p>{this.state.latestMovies.overview}</p>
                        <img src={imgPath + this.state.latestMovies.backdrop_path} alt="" />

                        
                        
                        

                        </div>

                    </div>

                </div>
                
            </div>
        )

    }

}

export default Latest;