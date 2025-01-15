import { FaReact } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import css from "./IconsList.module.css";

export default function IconsList() {
  return (
    <ul className={css.listIcons}>
      <li></li>
      <li>
        <FaReact size="60" />
      </li>
      <li>
        <VscVscode size="60" />
      </li>
      <li></li>
      <li></li>
    </ul>
  );
}
