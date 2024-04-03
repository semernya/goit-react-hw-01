import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((el) => (
        <li key={el.id}>
          <FriendListItem friend={el} />
        </li>
      ))}
    </ul>
  );
}
