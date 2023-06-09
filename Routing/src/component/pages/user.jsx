import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export function getUsers() {
  return fetch("https://reqres.in/api/users").then((res) => res.json());
}

export default function User() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState(searchParams.get("q") || "");
  useEffect(() => {
    getUsers().then((res) => {
      console.log(res);
      setData(res);
    });
  }, [inputValue]);
  useEffect(() => {
    setSearchParams({ q: text });
  }, [text, setSearchParams]);
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>User</h1>
      <input type="text" placeholder="Enter" onChange={handleInputChange} />
      <div>
        {data?.data?.map((item) => {
          return (
            <div>
              <Link to={`/user/${item.id}/${inputValue}`} key={item.id}>
                {item.first_name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
