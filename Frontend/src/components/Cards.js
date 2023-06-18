import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../Api.js';

function Cards() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    api.get('/api/v1/albums')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <div className="card-container">
      {albums.map(album => (
        <div className="card" key={album.id}>
          <img src={album.image} alt={album.title} />
          <h2>{album.title}</h2>
          <p>{album.artist}</p>
          <p>{album.year}</p>
          <p>{album.category}</p>
          <p>{album.description}</p>
        </div>
      ))}
    </div>
  );
  
}

export default Cards;





// function Card({ name, id, title,  year, image, category, alt }) {
  
//   return ( 
//       <div className="col-lg-auto d-block justify-content-center" width = "20" >
//         <div className="card" key={id} >  
//           <div className="card-header text-center h7">
//             {name} 
//             <div className="text-center text-secondary h6" id="title">
//               {title}
//             </div>
//             <div className="mb-2 text-center text-muted h7" id="year">
//               {year}
//             </div>
//           </div>
  
//           <div className="card-body sm-5 d-block">
//     <div className="d-flex justify-content-center">
//             <img
//               src={image}
//               alt={alt}
//               height="180"
//             />           
//           </div>
//           </div>
  
//           <div className="card-footer">
//             <div className="mb-2 text-center text-muted">{category}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default Card;


