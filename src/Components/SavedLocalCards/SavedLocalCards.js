import './SavedLocalCards.scss'
import { Link } from 'react-router-dom'
import x from '../../assets/remove.png';

const SavedLocalCards = ({location, removeFromFavorites, id, grabInputLocationData}) => {

  return (
    <article className='savedCard'>
      <img 
        className='location-icon icon' 
        onClick={removeFromFavorites} 
        src={x} 
        id={id}
        alt='favorited star'/>
      <Link onClick={(event)=>grabInputLocationData(location.city, location.state, location.country, event)} to='/dashboard'>
        <h1 className='location'>{location.city}, {location.state}, {location.country}</h1>
        <p className='aqi'>{location.current.pollution.aqius}</p>
      </Link>
    </article>
  )
}

export default SavedLocalCards