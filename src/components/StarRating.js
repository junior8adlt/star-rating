import React, { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import "./StarRanking.css";

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const reset = () => {
      setRating(0);
      setHoverRating(0);
    }
    return (
      <div className="starContainer">
      {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hoverRating || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHoverRating(index)}
              onMouseLeave={() => setHoverRating(rating)}
            >
              <span className="star"><AiIcons.AiFillStar size={60}/></span>
            </button>
          );
        })
      }
      <br />
      < button type="button" className="btn" onClick={reset}>reset</button>
    </div>
    )
}

export default StarRating
