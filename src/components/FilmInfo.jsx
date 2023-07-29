import React from "react";
import StarRatingComponent from "react-star-rating-component";

const FilmInfo = ({ film }) => {
  const {title,rate,tags,body} = film;
  return <div>
    <div>
        <h3>{title}</h3>

    </div>
       <p>{body}</p>
       <h4>{tags}</h4>
       <StarRatingComponent
              name="rate"
              starCount={5}
              value={Math.round(rate / 2)}
              editing={true}
            />
       <div>{rate.toFixed(2)} / 10</div>

  </div>;
  
};

export default FilmInfo;
