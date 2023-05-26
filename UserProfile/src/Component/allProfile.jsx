import UserProfile from "./UserProfile";

export default function AllProfile({ data }) {
  console.log(data);
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px"
      }}
    >
      {data.map((user) => (
        <UserProfile profile={user} />
      ))}
    </div>
  );
}
