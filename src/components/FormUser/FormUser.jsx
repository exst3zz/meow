import { useState } from "react";
import { nanoid } from "nanoid";
import { VscChromeClose } from "react-icons/vsc";
import css from "./FormUser.module.css";

import formUserData from "../../db/form-user.json";

const FormUser = () => {
  const [array, setArray] = useState(formUserData);
  const [valueInput, setValueInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.currentTarget.elements.username.value;
    setArray([...array, { id: nanoid(), username }]);

    e.currentTarget.reset();
  };

  const deleteBtn = (idUser) => {
    setArray(array.filter((el) => el.id !== idUser));
  };

  const handleFilter = (e) => {
    setValueInput(e.target.value);
    setArray(
      array.filter((el) => el.username.toLowerCase().includes(e.target.value))
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">add user</button>
      </form>

      <label>
        search user
        <input
          type="text"
          placeholder="search..."
          value={valueInput}
          onChange={handleFilter}
        />
      </label>

      {array.map(({ id, username }) => (
        <p key={id}>
          {username}🤍
          <VscChromeClose
            className={css.deleteBtn}
            onClick={() => {
              deleteBtn(id);
            }}
          />
        </p>
      ))}
    </div>
  );
};

export default FormUser;
