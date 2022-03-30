import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NewMusic from "./pages/NewMusic";
import Genres from "./pages/Genres";
import Charts from "./pages/Charts";
import NoPage from "./pages/NoPage";
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
	render() {
		return (
		<BrowserRouter>
      		<Routes>
        		<Route path="/" element={<Layout />}>
          			<Route index element={<Home />} />
          			<Route path="new-music" element={<NewMusic />} />
          			<Route path="genres" element={<Genres />} />
          			<Route path="charts" element={<Charts />} />
          			<Route path="*" element={<NoPage />} />
        		</Route>
      		</Routes>
    	</BrowserRouter>
		)
	}
}

ReactDOM.render(
   <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
