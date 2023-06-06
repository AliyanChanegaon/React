import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function SingleUser() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getUsers = (id) => {
    return fetch(`https://reqres.in/api/users/${id}`).then((res) => res.json());
  };
  useEffect(() => {
    getUsers(id).then((res) => {
      setData(res);
      console.log(res);
    });
  }, [id]);

  return (
    <div>
      <img src={data?.data?.avatar} alt="" />
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <p>{data?.data?.first_name}</p>
        <p>{data?.data?.last_name}</p>
      </div>

      <h1>{data?.data?.email}</h1>
    </div>
  );
}
