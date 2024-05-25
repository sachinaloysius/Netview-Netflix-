import React, { useState, useEffect } from "react";
import "./Banner.css";
import { API_KEY, imageUrl } from "./Constant";
import axios from "./Axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetMovies();
  }, []);

  const GetMovies = () => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovies(response.data.results);
      });
  };

  return (
    <div>
      <div className="Banner_Main_Container">
        <Carousel showThumbs={false}  showIndicators={false} autoPlay={true} infiniteLoop={true}>
          {movies.map((movie, index) => (
            <div key={index}>
              <div
                className="Banner"
                style={{
                  backgroundImage: `url(${imageUrl + movie.backdrop_path})`,
                }}
              ></div>
              <div className="bannerdetailsactionbox">
                <h1 className="Title">{movie.name || movie.title}</h1>
                <div className="movie_descriptions">
                  {movie.overview}
                  <div>
                    <button className="banner_btn1">▶ Play</button>
                    <button className="banner_btn2">My List</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
