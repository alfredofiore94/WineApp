import "./App.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Home } from "./components/Home/Home";
import { TabBarMenu } from "./components/TabBarMenu/TabBar/TabBarMenu";

function App() {
  return (
    <div id="application">
      <Header />
      <main>
        <section id="tabButtonsMenu">
          <TabBarMenu></TabBarMenu>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
