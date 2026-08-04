import type { Wine } from "../../../models/wine";
import "./wine-card.css";

export function WineCard(props: Wine) {
  return (
    <article className="card">
      <span className="card-id">{props.id}</span>

      <div className="card-img-wrapper">
        <img src="https://picsum.photos/200" alt="Immagine di esempio" />
      </div>

      <div className="card-content">
        <h3 className="card-title">{props.name}</h3>
        <h6>Tipo vino: {props.type}</h6>
        <h6>Paese: {props.country}</h6>
      </div>
    </article>
  );
}
