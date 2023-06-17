// 2 method with Type and with interface below are example
type FirstProps = {
  name: string;
  messageCount: number;
  islOggedIn: boolean;
};
// No = is used here
// interface FirstProp {
//   name: string;
// }

export default function First(props: FirstProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h1>
        {props.islOggedIn
          ? `Welcome :${props.name} you have :${messageCount} unread message`
          : `Not logged in`}
      </h1>
    </div>
  );
}
