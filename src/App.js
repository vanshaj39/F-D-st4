import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Trailer from "./Components/Trailer/Trailer";
import MovieList from "./Components/MovieList/MovieList";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const MovieData = [
    {
      id: uuidv4(),
      Title: "Zootopia",
      Description:
        "In a city of animals, a rookie bunny cop and a cynical rogue fox must work together to uncover a plot.",
      PosterUrl:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EEA8EA3EF5635CD7B3DCA1339908AF295E505ACAA7C1AEF945EE859ED4D31F7C/scale?width=1200&aspectRatio=1.78&format=jpeg",
      TrailerUrl: "https://www.youtube.com/embed/liKe2DuS7N8",
      Rating: 2,
    },
    {
      id: uuidv4(),
      Title: "The Hope",
      Description:
        "The story revolves around the life of a Japanese family in the time of World War II, and in this family there is a girl named Kayoko.",
      PosterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNRSLfTAefTNW7V7KZJvdpahWVAmU354JFqg&usqp=CAU",
      TrailerUrl: "https://www.youtube.com/embed/SDQbut3cjaY",
      Rating: 5,
    },
    {
      id: uuidv4(),
      Title: "Grave of the Fireflies",
      Description:
        "Grave of the Fireflies (Japanese: 火垂るの墓, Hepburn: Hotaru no Haka) is a 1988 Japanese animated war tragedy film[4][5] based on the 1967 semi-autobiographical short story of the same name by Akiyuki Nosaka",
      PosterUrl:
        "https://www.egyanime.com/uploads/10251572164429195.0326211452484.jpg",
      TrailerUrl: "https://www.youtube.com/embed/hxv9ghINEhs",
      Rating: 5,
    },
    {
      id: uuidv4(),
      Title: "Kung Fu Panda",
      Description:
        "Kung Fu Panda is a 2008 American computer-animated martial arts comedy film produced by DreamWorks Animation and distributed by Paramount Pictures. It is the first installment in the Kung Fu Panda franchise.",
      PosterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqvRsXKt1LgPFGE53Q5mhM0I2VSA8BeTq0Q&usqp=CAU",
      TrailerUrl: "https://www.youtube.com/embed/yt9r0Q5za38",
      Rating: 4,
    },

    
  ];
  const [newMovie, setNewMovie] = useState(MovieData);
  const [titleSearch, setTitleSearch] = useState("");
  const [rateSearch, setRateSearch] = useState("0");

  return (
    <Router>
      <div className="App">
        <NavBar setTitleSearch={setTitleSearch} setRateSearch={setRateSearch} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies/:id">
            <Trailer newMovie={newMovie} />
          </Route>
          <Route path="/movies">
            <MovieList
              titleSearch={titleSearch}
              rateSearch={rateSearch}
              newMovie={newMovie}
              setNewMovie={setNewMovie}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
