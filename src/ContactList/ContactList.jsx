import Contact from "../Contact/Contact";
import css from './ContactList.module.css' 

export default function ContactList({ items , onDelete}) {
  return (
    <ul className={css.box}>
      {items.map((item) => {
        return <li className={css.item} key={item.id}>
            <Contact item={item} onDelete={onDelete} />
        </li>

      })}
    </ul>
  );
}
