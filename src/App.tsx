import mainLogoCaliceImg from "./assets/calice_logo.jpg";
import "./App.css";
import { winesMock } from "./data/wines_mock";
import { WineCard } from "./features/Wines/card/wine-card";

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
  return (
    <div id="application">
      <Header />
      <main>
        <h2> Questo ecommerce tratta di vini</h2>
        <WineCard
          name={winesMock[0].name}
          id={winesMock[0].id}
          vintage={null}
          type={winesMock[0].type}
          winery={null}
          region={null}
          country={winesMock[0].country}
          averageRating={null}
          ratingsCount={null}
          confidence={0}
        ></WineCard>
        <WineCard {...winesMock[1]}></WineCard>
        <WineCard {...winesMock[2]}></WineCard>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
