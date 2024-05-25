import React, { useState, useEffect } from "react";
import "./Sample.css";
import Youtube from "react-youtube";
import { API_KEY, imageUrl } from "./Constant";
import axios from "./Axios";

export default function Sample() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [posterfirstrow, setPosterFirstRow] = useState([]);
  const [urlID, setUrlID] = useState("");
  useEffect(() => {
    GetPoster1();
  }, []);

  const opts = {
    height: "155",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const GetPoster1 = () => {
    axios
      .get(`discover/tv?api_key=${API_KEY}&with_networks=213  `)
      .then((response) => response.data.results)
      .then((data) => {
        console.log(data);
        setPosterFirstRow(data);
      })
      .catch((error) => {
        console.error("Error fetching posters:", error);
      });
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
    <div className="Sample_MainContainer">
      {posterfirstrow.map((poster, index) => (
        <div
          key={poster.id}
          className="Container"
          onMouseEnter={() => {
            setIsHovered(true);
            setHoveredIndex(index);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setHoveredIndex(null);
          }}
        >
          <img
            src={`${imageUrl}${poster.poster_path}`}
            alt={poster.name}
            width="100px"
            className="box1"
            onClick={() => handlebtnClick(poster.id)}
          />
          {isHovered && hoveredIndex === index && urlID && (
            <Youtube videoId={urlID.key} className="box2" opts={opts} />
          )}
        </div>
      ))}

      
    </div>
  );
}
