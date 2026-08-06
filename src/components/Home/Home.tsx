import { WinesHomeTable } from "../tables/wine-table/wine-table";
import { winesMock } from "../../data/wines_mock";
import { TabBarMenu } from "../TabBarMenu/TabBar/TabBarMenu";

export function Home() {
  const wines = winesMock;

  return (
    <div>
      <section id="tabButtonsMenu">
        <TabBarMenu></TabBarMenu>
      </section>
      <h2> Questo ecommerce tratta di vini</h2>
      <WinesHomeTable {...wines} />
    </div>
  );
}
