import "./PinnedMessage.css";

export default function PinnedMessage(props: {
  msg: string | number | boolean | null | undefined;
}) {
  return <div className="pinned-msg-div">{props.msg}</div>;
}
