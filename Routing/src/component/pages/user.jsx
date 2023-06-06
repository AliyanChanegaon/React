import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function getUsers() {
  return fetch("https://reqres.in/api/users").then((res) => res.json());
}

export default function User() {
  const [data, setData] = useState({});
  useEffect(() => {
    getUsers().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  return (
    <div>
      <h1>User</h1>
      <div>
        {data?.data?.map((item) => {
          return (
            <div>
              <Link to={`/user/${item.id}`} key={item.id}>
                {item.first_name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
