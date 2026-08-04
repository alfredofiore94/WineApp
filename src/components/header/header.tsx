import mainLogoCaliceImg from "../../assets/calice_logo.jpg";

import "./header.css";
export function Header() {
  return (
    <header>
      <img src={mainLogoCaliceImg} className="mainLogoCalice" height={250} />
      <h1 id="mainTitle">E-COMMERCE Wine App</h1>
    </header>
  );
}
