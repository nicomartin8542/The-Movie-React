import React from "react";
import Layout from "./components/layouts/Layout";
import Principal from "./components/layouts/Principal";
import MovieState from "./components/context/movies/MovieState";
import SerieState from "./components/context/series/SerieState";

function App() {
  return (
    <MovieState>
      <SerieState>
    <Layout>
      <Principal />

    </Layout>
    </SerieState>
  </MovieState>
  );
}

export default App;
