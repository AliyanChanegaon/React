
export const api = `http://localhost:3000/todos`



const getTodos = async () => {
  let response = await fetch(`http://localhost:3000/todos`);
  let data = await response.json();

  setTodos([...data]);
  console.log(data);
};



