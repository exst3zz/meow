import { useEffect, useState } from "react";
import css from "./Modal.module.css";

import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicks, setClicks] = useState(() => {
    return Number(window.localStorage.getItem("clicks") ?? 0);
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCounter = () => {
    setClicks(clicks + 1);
  };

  useEffect(() => {
    localStorage.setItem("clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <button type="button" onClick={handleClick}>
        open modal
      </button>
      {isOpen && (
        <div className={css.backdrop}>
          <div className={css.modal}>
            <IoIosCloseCircleOutline
              onClick={handleClick}
              className={css.closeModal}
            />
            <p className={css.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              consequuntur.
            </p>
            <button type="button" onClick={handleCounter}>
              {clicks}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
