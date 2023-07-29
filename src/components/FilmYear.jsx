import React from "react";

const FilmYear = ({ year, setFilmIndex }) => {
  return (
    <div>
    
      {year.map((item, i) => {
        return (
          <button key={i} onClick={() => setFilmIndex(i)}>
            {item.date}
          </button>
        );
      })}
    </div>
  );
};
export default FilmYear;
