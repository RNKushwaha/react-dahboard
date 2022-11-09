import React from "react";
import { Link, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./pages/home"));

const Loading = () => <p>Loading ...</p>;

function App() {
  return (
    <>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/pokemon'>Pokemon</Link></li>
    </ul>
    <hr />

    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </React.Suspense>
    </>
  );
}

export default App;
