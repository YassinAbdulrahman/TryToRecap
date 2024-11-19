import React from 'react'

function Coursal() {
  return (
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://placehold.co/600x400" className="d-block w-100" alt="imgone"/>
    </div>
    <div className="carousel-item">
      <img src="https://placehold.co/600x400" className="d-block w-100" alt="imgTwo"/>
    </div>
    <div className="carousel-item">
      <img src="https://placehold.co/600x400" className="d-block w-100" alt="imgThree"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Coursal