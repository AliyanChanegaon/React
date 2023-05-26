export default function Skill({ profile }) {
  const mainDiv = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap"
  };
  const skillStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    padding: "5px",
    height: "fit-content",
    border: "1px solid black",
    borderRadius: "20px"
  };
  const imgStyle = {
    width: "20px",
    height: "20px"
  };

  const mapper = profile.Skills;

  return (
    <div>
      {" "}
      <h1 style={{ fontSize: "20px" }}>{profile.title}</h1>
      <div style={mainDiv}>
        {mapper.map((skill, idx) => (
          <div style={skillStyle}>
            <img style={imgStyle} src={skill.icon} alt="" />
            {skill.skill}
          </div>
        ))}
      </div>
    </div>
  );
}
