import React, { Component } from 'react';
import { vinylImages } from './images';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {    
    fetch('./Composers.js')
    .then(response => response.json())
    .then((json) => console.log(json));  }

    render() {
    const composers = require('./Composers')
    return (
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-3 text-center">Vinyl Collection</h1>
          <hr class="my-4"></hr>
          <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
          <button type="button" class="btn btn-light">Sort</button>
          <button type="button" class="btn btn-light">Sort</button>
          <button type="button" class="btn btn-light">Sort</button>
          </div>
          </nav>
         </div>
        
        <div class="row row-cols-2 justify-content-center">
          
        {composers.map((post) => (      
           
            <div class = "col-sm-5">
          <div className="card md-4 mt-3" key={post.id}>        
            <div className="card-header text-center h5">
              {post.name} - {post.title}              
              <div className="mb-2 text-center text-muted" id="year"> {post.year} </div>
              {/* <div class="card-img-top">{post.image} </div> */}
            </div>
            
            <div className="card-body">        
            <img className="d-block" src={post.image} alt={post.alt}
            height="170" />
            </div>

            <div className="card-footer">
            <div className="mb-2 text-center text-muted" >{post.category} </div>
              </div>
          </div>
          </div>      
        
        ))}
        
        <div className="container mt-5">
        <div class="jumbotron">
        <hr class="my-4"></hr>
          <h1 class="display-6 text-center">Vinyl Collection</h1>
          <h4 class="text-center">Web Applications</h4>
          <h6 class="text-center">15005755 - Vera Woerdeman</h6>
         
         </div>
        </div>   
 </div>   
       
      </div>
       
    );
  }
}
export default App;