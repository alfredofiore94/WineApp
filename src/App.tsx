import mainLogoCaliceImg from "./assets/calice_logo.jpg";
import "./App.css";

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
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
