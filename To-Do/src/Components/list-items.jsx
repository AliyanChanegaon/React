import { useState } from "react";

function ListItem({ data }) {
  return <li key={data.id}>{data.title}</li>;
}

export default ListItem;
