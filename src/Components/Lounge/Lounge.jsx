import React from 'react'
import pasillo from '../../assets/pasillo.png'

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">

        <div className="imgDiv">
          <img src={pasillo} />
        </div>

        <div className="textDiv">
          <h2>Unaccompained minor Longue</h2>
          
        <div className="grids grid">

<div className="singleGrid">
  <span className='gridTitle'>
    Help through the airport
  </span>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolorum voluptas. Neque, consecte
  </p>
</div>

<div className="singleGrid">
  <span className='gridTitle'>
    Priority Boarding
  </span>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolorum voluptas. Neque, consecte
  </p>
</div>

<div className="singleGrid">
  <span className='gridTitle'>
    Care on the flight
  </span>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolorum voluptas. Neque, consecte
  </p>
</div>

<div className="singleGrid">
  <span className='gridTitle'>
    Chauffeur-drive service
  </span>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolorum voluptas. Neque, consecte
  </p>
</div>



</div>
        </div>

      </div>

    </div>
  )
}

export default Lounge