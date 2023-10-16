import axios from "axios";
import { useState, useEffect } from "react";

export const FetchUno = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = axios.get("https://jsonplaceholder.typicode.com/users");
    data.then((res) => setUsers(res.data)).catch((err) => console.log(err));
  }, []);

  console.log(users);

  return <div>FetchUno</div>;
};
