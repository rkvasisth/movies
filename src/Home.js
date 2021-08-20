import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            offset:0,
            movieList: [],
            perPage:8,
            currentPage:0
        }
    }
    
   

   getData = ()=>{
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=84afd49fa079ed0c1a6ee46b3a41e37a').then(res => {
        const data = res.data.results;
        const updatedperPage = this.state.offset + this.state.perPage;
        const slice = data.slice(this.state.offset, updatedperPage);
        const printData = slice.map(item=>{
            return( <div key={item.id} className="col col-lg-3 mb-20 card sepreater">
            
                        <img src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt="" />
                        <br/>
                            <p>{item.original_title}</p>
                            <div className="movie-overview">{item.overview}</div>
                            
                        </div>)
                
                    });
      this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          movieList:printData
      });
    }).catch(error =>{
        console.log(error);
    })
        
   }

   handlePageClick = (e)=>{
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({
         currentPage:selectedPage,
         offset:offset
    },()=>{
     this.getData();
    });
    
}
    componentDidMount = ()=>{
            this.getData();
        }

render(){
    //const imgPath = 'https://image.tmdb.org/t/p/w500';
    const movieListDisplay =  this.state.movieList.length ? (this.state.movieList) :(<p>No Movie to Show</p>)
return(<div>
        
        <div className="container page-pad-top">
            <div className="row">
            <div className="col-lg-12">
                <div className="filter-tiles">
            <h1>All Movies</h1>
            <div className="filters">
            <Link to="/latest">Latest Movies</Link>
            </div>
            </div>
            </div>
        </div>
        </div>

        <div className="container">
            <div className="row">
                {movieListDisplay}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        </div>
        
    </div>)

}

}

export default Home;
