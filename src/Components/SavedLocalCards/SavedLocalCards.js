import './SavedLocalCards.scss'
import { Link } from 'react-router-dom'
import x from '../../assets/remove.png';

const SavedLocalCards = ({location, removeFromFavorites, id, grabInputLocationData}) => {

  return (
    <article className='savedCard'>
      <div className='linkIconWrapper'>
        <div className='iconWrapper'>
          <img 
            className='location-icon icon x' 
            onClick={removeFromFavorites} 
            src={x} 
            id={id}
            alt='favorited star'/>
        </div>
        <Link className='linkWrapper' 
          onClick={(event)=> grabInputLocationData(location.city, location.state, location.country, event)} 
          to='/dashboard'>
          <h1 className='location'>{location.city}, {location.state}, {location.country}</h1>
        </Link>
      </div>
    </article>
  )
}

export default SavedLocalCards