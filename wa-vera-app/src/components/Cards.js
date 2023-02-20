import React from 'react';

function Card({ name, id, title,  year, image, category, alt }) {
    return ( 
      <div className="col-lg-auto d-block justify-content-center" width = "20" >
        <div className="card" key={id} >  
          <div className="card-header text-center h7">
            {name} 
            <div className="text-center text-secondary h6" id="title">
              {title}
            </div>
            <div className="mb-2 text-center text-muted h7" id="year">
              {year}
            </div>
          </div>
  
          <div className="card-body sm-5 d-block">
    <div className="d-flex justify-content-center">
            <img
              src={image}
              alt={alt}
              height="180"
            />           
          </div>
          </div>
  
          <div className="card-footer">
            <div className="mb-2 text-center text-muted">{category}</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;


