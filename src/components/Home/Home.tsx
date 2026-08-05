import { WinesHomeTable } from "../tables/wine-table/wine-table";
import { winesMock } from "../../data/wines_mock";
import { TabButton } from "../TabMenu/TabButton";
import type { MenuButton } from "../../models/menuButton";

export function Home() {
  const wines = winesMock;
  const menuButtons: MenuButton[] = [
    {
      name: "Home",
      id: 0,
      placeholder: "Home page",
    },
  ];
  const t = { valore: "pippo" };
  return (
    <div>
      <section id="tabButtonsMenu">
        <menu>
          <TabButton {...menuButtons[0]}></TabButton>
        </menu>
      </section>
      <h2> Questo ecommerce tratta di vini</h2>
      <WinesHomeTable {...wines} />
    </div>
  );
}
