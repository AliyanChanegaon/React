import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export function getUsers({ page }) {
  return fetch(`https://reqres.in/api/users?page=${page}`).then((res) =>
    res.json()
  );
}

export default function User() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState({});
  // IMP if you are on page 2 and after refresh u want to retreive old page
  // use this property of searchparam.get
  const initialPage = Number(searchParams.get("page")) || 1;
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(initialPage);
  const [text, setText] = useState(searchParams.get("q") || "");
  useEffect(() => {
    getUsers({ page }).then((res) => {
      console.log(res);
      setData(res);
    });
  }, [inputValue, page]);
  useEffect(() => {
    setSearchParams({ page, q: text });
  }, [page, text, setSearchParams]);
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>User</h1>
      <input type="text" placeholder="Enter" onChange={handleInputChange} />
      <div>
        <button
          disabled={page == 1 ? true : false}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          PREV
        </button>
        <button>{page}</button>
        <button
          disabled={page == 2 ? true : false}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          NEXT
        </button>
      </div>
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
