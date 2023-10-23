import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';
import Like from './components/common/like.jsx';
import Pagination from './components/common/pagination.jsx';
import { paginate } from './utils/paginate.js'
class Movies extends Component {
    state = {
        movies: getMovies(),
        currentPage: 1,
        pageSize: 4
    }
    
    handleDelete =  movie  => {
        let x = this.state.movies.filter(m => m._id !== movie._id)
        console.log(x)
       this.setState( { movies : x})
    };
    
    renderNumbFilms = x => {
        
        if (this.state.movies.length === 0) return <p>There are no films in the list'</p>;
        return <p>There is {this.state.movies.length} films in the bank</p>
    }

    handleLike = (movie) => {
        console.log('Liked Clicked')
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = {...movies[index]}
        movies[index].liked = !movies[index].liked
        this.setState({movies})
       
    }
    handlePageChange = (page) => {
        this.setState({currentPage: page})
        
    }

    render() {
        const {length:count} = this.state.movies
        const {pageSize, currentPage, allMovies} = this.state;
        if (count === 0) return <p>There are no movie in the database</p>;
        const movies = paginate(allMovies, currentPage, pageSize)
        console.log(movies)
        return (
          <React.Fragment>
            {this.renderNumbFilms()}
            
            <table className="table">
                <thead>
                    <tr> 
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {movies.map( movie => { return (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Like  liked={movie.liked} onClick={() => this.handleLike(movie)}/></td>
                            <td><button className="btn btn-danger btn-sm" onClick={() => {this.handleDelete(movie)}}>Delete</button></td>
                        </tr>
                        
    )
    })}
                </tbody>
                
            </table>
            <Pagination itemsCount={count} pageSize={pageSize} onCurrentPage={currentPage} onPageChange={this.handlePageChange}/>
          </React.Fragment>
          )
    }
}

export default Movies;