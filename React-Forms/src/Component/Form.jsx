import { useState } from "react";

const initialValue = {
  userName: "",
  gender: "",
  role: "",
  marritalStatus: false,
  skill: false,
  range: 15,
  date: "2000-01-01"
};

export default function Form() {
  const [data, setData] = useState(initialValue);

  const handleChange = (e) => {
    const { name: key, value, type, checked } = e.target;
    console.log(e.target);
    const val = type === "checkbox" ? checked : value;
    setData({ ...data, [key]: val });
    //   obj[asdas] = "SAdasd"
  };
  console.log(data);

  return (
    <>
      <div className="App">
        <h1>Form in react</h1>
        <input
          name="userName"
          type="text"
          placeholder="Enter name"
          value={data.userName}
          onChange={handleChange}
        />
        <br />
        <select name="gender" id="" value={data.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <select name="role" id="" value={data.role} onChange={handleChange}>
          <option value="SDE-1">SDE-1</option>
          <option value="SDE-2">SDE-2</option>
          <option value="SDE-3">SDE-3</option>
        </select>
        <br />
        <label htmlFor="">
          Married
          <input
            type="checkbox"
            name="marritalStatus"
            checked={data.marritalStatus}
            onChange={handleChange}
          />
        </label>
        <div>
          <input
            type="radio"
            name="skill"
            value="HTML"
            onChange={handleChange}
          />
          <label for="html">HTML</label>

          <input
            type="radio"
            name="skill"
            value="CSS"
            onChange={handleChange}
          />
          <label for="css">CSS</label>

          <input type="radio" name="skill" value="JS" onChange={handleChange} />
          <label for="JSS">JS</label>
        </div>
      </div>
      <div>
        <input
          type="range"
          name="range"
          value={data.range}
          min="0"
          max="50"
          onChange={handleChange}
        />
        <label htmlFor="">{data.range}</label>

        <input
          name="date"
          type="date"
          value={data.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </>
  );
}
