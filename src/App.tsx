import mainLogoCaliceImg from "./assets/calice_logo.jpg";
import "./App.css";
import { WinesHomeTable } from "./features/tables/wine-table/wine-table";
import { winesMock } from "./data/wines_mock";
function Header() {
  return (
    <header>
      <img src={mainLogoCaliceImg} className="mainLogoCalice" height={250} />
      <h1 id="mainTitle">E-COMMERCE Wine App</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p id="legalNote">© 2026 Wine App. All Rights Reserved.</p>
    </footer>
  );
}

function App() {
  const wines = winesMock;
  return (
    <div id="application">
      <Header />
      <main>
        <h2> Questo ecommerce tratta di vini</h2>
        <WinesHomeTable {...wines} />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
