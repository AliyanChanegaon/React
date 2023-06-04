const api = `http://localhost:3000/todos`;
import axios from 'axios';

export const getTodos = async ({ sort, order, page, limit }) => {
  const data = await axios.get(api, {
    params: {
      _sort: sort,
      _order: order,
      _page: page,
      _limit: limit,
    },
  });
   console.log(data.data);

  return data.data;
};


export const DeleteTodo = async (id) => {
  try {
    axios.delete(`${api}/${id}`)
     
    
    
  } catch (error) {
    console.error("Failed to change todo status:", error);
    
  }
};

export const addTodo = async (value)=>{
  try{
    axios.post(`${api}`,{
      title:value,
    })


  }
  catch(error){
    console.error("Failed to change todo status:", error);
   

  }

}

export const ChangeStatus = async(id,status)=>{
  try{
    axios.patch(`${api}/${id}`,{
      status:!status,
    })

  

  }
  catch(error){
    console.error("Failed to change todo status:", error);
  

  }


}

export const editTodo = async(id,value)=>{
  try{
    axios.patch(`${api}/${id}`,{
      title: value,

    })
  }

  catch(error){
    console.log("Error cant fetch",error);
  }
}
