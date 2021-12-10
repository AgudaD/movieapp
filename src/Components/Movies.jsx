import React from 'react'

const Movie = ({title, posterUrl, description, rate}) => {
    return (
        <div className = 'movie'>
            <img src = {posterUrl} alt = {title} />
            <div className = 'movie-top'>
                <h1>{title}</h1>
                <span>{rate}</span>
            </div>

            <div className="desc">
                <h2>Description:</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Movie