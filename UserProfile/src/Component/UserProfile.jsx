import Avatar from "./Avatar";
import Name from "./Name";
import Skill from "./Skills";

export default function UserProfile({ profile }) {
  const mainDiv = {
    display: "flex",
    gap: "20px",
    justifyContent: "space-around",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    width: "500px",
    height: "240px"
  };

  return (
    <div style={mainDiv}>
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Avatar imgP={profile.img} />
      </div>
      <div>
        <Name name={profile.Name} />
        <Skill profile={profile} />
      </div>
    </div>
  );
}
