import './SavedLocalCards.scss'
import { Link } from 'react-router-dom'
import x from '../../assets/remove.png';
import PropTypes from 'prop-types'

const SavedLocalCards = ({location, removeFromFavorites, id, grabInputLocationData}) => {
  return (
    <section className="saved-local-section">
          <img 
            className='delete-icon icon' 
            onClick={removeFromFavorites} 
            src={x} 
            id={id}
            alt='favorited star'/>
        <Link 
          className='linkWrapper' 
          onClick={(event)=> grabInputLocationData(location.city, location.state, location.country, event)} 
          to='/dashboard'>
            <h1 className='location'>{location.city}, {location.state}, {location.country}</h1>
        </Link>
    </section>
  )
}

export default SavedLocalCards

SavedLocalCards.propTypes = {
  location: PropTypes.object,
  removeFromFavorites: PropTypes.func,
  id: PropTypes.string,
  grabInputLocationData: PropTypes.func
}