type StyleProp = {
  styles: React.CSSProperties;
};

export default function Styler(Props: StyleProp) {
  return <div style={Props.styles}>Style for CSS</div>;
}
