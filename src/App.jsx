import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Albums from "./components/Alums/Albums.jsx";
import {About} from "./components/About/About.jsx";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import {Main} from "./components/Main/Main.jsx";
import {useEffect, useState} from "react";
import {Details} from "./components/Alums/Details/Details.jsx";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/albums"
                );
                if (!response.ok) {
                    throw new Error("Problem with internet conection");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

  return (
    <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
            <Route path={'/'} element={<Main/>}></Route>
            <Route path={'/about'} element={<About/>}></Route>
            <Route path={'/albums/*'} element={<Albums data={data}/>}></Route>
            <Route path={'/albums/:id'} element={<Details/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
