import React, { useState } from "react";
import "./RowPoster.css";
import { API_KEY, imageUrl } from "./Constant";
import axios from "./Axios";
import { useEffect } from "react";

import Youtube from "react-youtube";

export default function RowPoster(props) {
  const [posterfirstrow, setPosterFirstRow] = useState([]);
  const [urlID, setUrlID] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    GetPoster();
  }, []);

  const GetPoster = () => {
    axios
      .get(props.url)
      .then((response) => response.data.results)
      .then((data) => {
        setPosterFirstRow(data);
      });
  };
  const opts = {
    height: "329",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handlebtnClick = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.lengeth !== 0) {
          setUrlID(response.data.results[0]);
        } else {
          console.log("No Record");
        }
      });
  };
  return (
    <div>
      <div className="PosterHolder_One">
        <div className="TitleHeading">{props.title}</div>
        <div className="Thumbnail_Holder">
          {posterfirstrow.map((row, key) => (
            <img
              src={`${imageUrl + row.poster_path}`}
              onClick={() => handlebtnClick(row.id)}
              alt="Poster"
              className="row"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            ></img>
          ))}
          {urlID && (
            <Youtube
              opts={opts}
              videoId={urlID.key}
              className="video_Container"
            />
          )}
        </div>
      </div>
    </div>
  );
}
