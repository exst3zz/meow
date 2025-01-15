import dataBaseSanrio from "../../sanrio-db.json";
import PropTypes from "prop-types";

export default function SanrioList() {
  return (
    <ul>
      {dataBaseSanrio.map(({ id, name, img, text }) => {
        return (
          <li key={id}>
            <h2>{name}</h2>
            <img src={img} width="120" alt={name} />
            <p>{text}</p>
          </li>
        );
      })}
    </ul>
  );
}

SanrioList.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  text: PropTypes.string.isRequired,
};
