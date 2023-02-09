import React from 'react'
import paris from '../../assets/paris.jpg'
import newyork from '../../assets/newyork.jpeg'
import london from '../../assets/london.jpg'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpeg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'
import dubai from '../../assets/dubai.jpeg'



const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage:user1,
    travelerName:'Isabella',
    socialLink: '@Isabll',
  },
  {
    id: 2,
    destinationImage: newyork,
    travelerImage:user2,
    travelerName:'George',
    socialLink: '@Geocole',
  },
  {
    id: 3,
    destinationImage: london,
    travelerImage:user3,
    travelerName:'Dina',
    socialLink: '@Dinabamb',
  },
  {
    id: 4,
    destinationImage: dubai,
    travelerImage:user4,
    travelerName:'Clark',
    socialLink: '@CLKN',
  }

]

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>
          Top travelers of this month
        </h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{
              return(
                <div key={id} className="singleTraveler">

                <img src={destinationImage} className='destinationImage' />
    
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage} className='travelerImage'/>
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>
                    {socialLink}
                    </p>
                  </div>
                </div>
    
              </div>
              )
            })
          }
          


          
        </div>
      </div>

    </div>
  )
}

export default Travelers