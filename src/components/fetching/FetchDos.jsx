import axios from "axios";
import { useEffect, useState } from "react";

const FetchDos = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const data = axios.get("https://jsonplaceholder.typicode.com/albums");
    data.then((res) => setAlbums(res.data)).catch((err) => console.log(err));
  }, []);

  console.log(albums);

  return <div>FetchDos</div>;
};

export default FetchDos;
