import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types'

const Rating = ({ value, text, color}) => {
  return (
    <div className="rating">
      {/* Stars - one span for each star*/}
      <span>
        { 
        value >= 1 
          ? < FaStar style={ {color: color} }/> 
          : value >= 0.5
          ? < FaStarHalfAlt style={ {color: color} }/> 
          : < FaRegStar style={ {color: color} }/> 
        }
      </span>
      <span>
        { 
        value >= 2 
          ? < FaStar style={ {color: color} }/> 
          : value >= 1.5
          ? < FaStarHalfAlt style={ {color: color} }/> 
          : < FaRegStar style={ {color: color} }/>
        }
      </span>
      <span>
        { 
        value >= 3 
          ? < FaStar style={ {color: color} }/> 
          : value >= 2.5
          ? < FaStarHalfAlt style={ {color: color} }/>
          : < FaRegStar style={ {color: color} }/>
        }
      </span>
      <span>
        { 
        value >= 4 
          ? < FaStar style={ {color: color} }/> 
          : value >= 3.5
          ? < FaStarHalfAlt style={ {color: color} }/> 
          : < FaRegStar style={ {color: color} }/>
        }
      </span>
      <span>
        { 
        value >= 5 
          ? < FaStar style={ {color: color} }/> 
          : value >= 4.5
          ? < FaStarHalfAlt style={ {color: color} }/> 
          : < FaRegStar style={ {color: color} }/>
        }
      </span>
      <span>
        {/* if there is text then show it */}
        { text && text }
      </span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825'
}

// type checking our props
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Rating
