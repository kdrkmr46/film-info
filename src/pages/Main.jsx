import React, { useState } from 'react'
import FilmInfo from '../components/FilmInfo'
import FilmYear from '../components/FilmYear'

const Main = ({data}) => {
    const [filmIndex, setFilmIndex] = useState(0)
  return (
    <div>
        <FilmYear year={data} filmIndex={filmIndex} setFilmIndex={setFilmIndex} />
        <FilmInfo film={data[filmIndex]}  />
    </div>
  )
}

export default Main