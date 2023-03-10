import axios from "axios";
import { useState, useCallback, useEffect } from "react";
const Feed2 = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const getMovies = useCallback(async () => {
      setLoading(true);
      try {
        // await fetch(`http://localhost:3333/feed`, {
        //   method: "GET",
        //   headers: { "Content-Type": "application/json" },
        // })
        //   .then((res) => {
        //       return res.json();
        //   })
        //   .then(function (jsonData) {
        //     setMovies(jsonData);
        //   });
        await axios.get('https://nest-api-vxd3.onrender.com/feed')
          .then(function (response) {
            setMovies(response.data);
            setLoading(false);
          })
      } catch (err) {
        console.error(err.message);
      }
    }, []);
  
    useEffect(() => {
        getMovies();
    }, [getMovies]);


    const movieShow =  movies.map((movie) => {
         return (<>
            <div className="col-6 mt-3">
            <div
                style={{
                  backgroundImage: `url(${movie.image})`,
                  // backgroundImage: `url(${externalImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "10rem"
                }}
              ></div>
           <h4>{movie.title}</h4>
            </div>
          </>)
        });
    if (loading) {
    // Result when images are loading 
    return (
      <div className="center">
        <div></div>
        <div
          style={{ display: "inline-block" }}
          className="loaderBig pushDownBig"
        ></div>
      </div>
    );
  } else {
    return (
        <>
          <div className="container">
          <div className="row container" style={{textAlign: "center"}}>
            <h2 className="mt-3">Random Movies page 2</h2>
          {movieShow}
          </div>
          </div>
        </>
    );
 }
}

export default Feed2;
