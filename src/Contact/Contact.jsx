import css from "./Contact.module.css";
import { LuPhone, LuSmile } from "react-icons/lu";

export default function Contact({ item: { name, number, id }, onDelete }) {
  return (
    <>
      <div>
        <p>
          <LuPhone />
          {name}
        </p>
        <p>
          <LuSmile />
          {number}
        </p>
      </div>

      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}
