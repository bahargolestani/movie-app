import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "./utils/constants";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`${BASE_URL}movie/top_rated${API_KEY}`).then((response) => {
      console.log({ response });
    });
  };
  return <div>Hii</div>;
};
export default App;
