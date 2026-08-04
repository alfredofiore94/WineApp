import "./App.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div id="application">
      <Header />
      <main>
        <Home />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
