import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingIndicator from "./Loading";
export default function SingleUser() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(false);

  const getUsers = (id) => {
    return fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setisLoading(false);
        return res.json();
      })
      .catch((error) => {
        console.error(error);
        setisLoading(true);
      });
  };
  useEffect(() => {
    getUsers(id).then((res) => {
      setData(res);
      console.log(res);
    });
  }, [id]);

  const Goback = useNavigate();
  //IMP to go back use -1
  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div>
          <div>
            <button
              onClick={() => {
                Goback(-1);
              }}
            >
              Go back{" "}
            </button>
          </div>

          <img src={data?.data?.avatar} alt="" />
          <div
            style={{ display: "flex", justifyContent: "center", gap: "5px" }}
          >
            <p>{data?.data?.first_name}</p>
            <p>{data?.data?.last_name}</p>
          </div>

          <h1>{data?.data?.email}</h1>
        </div>
      )}
    </>
  );
}
