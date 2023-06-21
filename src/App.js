import './App.scss';
import Header from "./conponent/Header";
import {Route, Routes} from "react-router-dom";
import TopRated from "./conponent/TopRated";
import Popular from "./conponent/Popular";
import Footer from "./conponent/Footer";
import MovieDetails from "./conponent/Page/MovieDetails";

function Home() {
    return null;
}

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={ <Home/> }/>
            <Route path={'/popular'} element={ <Popular/> }/>
            <Route path={'/topRated'} element={ <TopRated/> }/>
            <Route path={'/movie/details/:movieId'} element={<MovieDetails/>}/>
            <Route path={"/movie/details/:movieId"} element={<MovieDetails/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
