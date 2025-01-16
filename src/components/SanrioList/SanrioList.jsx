import SanrioData from "../../db/sanrio.json";

export default function SanrioList() {
  return (
    <ul>
      {SanrioData.map(({ id, name, img, text }) => {
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
