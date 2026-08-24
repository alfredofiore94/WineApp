import { TabButton } from "../TabMenuButton/TabButton";
import { menuButtons } from "../../../data/menu_buttons";
import "./TabBarMenu.css";
import { useState } from "react";
import { Home } from "../../Home/Home";
import { Catalogo } from "../../catalogo/catalogo";
import { AziendeVinicole } from "../../aziende-vinicole/aziende-vinicole";
import { ProfiloUtente } from "../../profilo-utente/profilo-utente";
export function TabBarMenu() {
  const [selectedId, setSelectedId] = useState<number>(0);

  function onClickButton(id: number): void {
    setSelectedId(id);
  }
  const onClickBtn = (id: number) => {
    onClickButton(id);
  };

  let tabAziendeVinicole;
  if (selectedId === 2) {
    tabAziendeVinicole = <AziendeVinicole />;
  }
  return (
    <section>
      <menu>
        <TabButton
          buttonMenu={menuButtons[0]}
          isSelected={selectedId === menuButtons[0].id}
          onSelectMenuBtn={() => onClickButton(menuButtons[0].id)}
        ></TabButton>
        <TabButton
          buttonMenu={menuButtons[1]}
          isSelected={selectedId === menuButtons[1].id}
          onSelectMenuBtn={() => onClickButton(menuButtons[1].id)}
        ></TabButton>
        <TabButton
          buttonMenu={menuButtons[2]}
          isSelected={selectedId === menuButtons[2].id}
          onSelectMenuBtn={() => onClickBtn(menuButtons[2].id)}
        ></TabButton>
        <TabButton
          buttonMenu={menuButtons[3]}
          isSelected={selectedId === menuButtons[3].id}
          onSelectMenuBtn={() => onClickButton(menuButtons[3].id)}
        ></TabButton>
      </menu>

      {selectedId === 0 ? <Home /> : null}
      {selectedId === 1 && <Catalogo />}
      {tabAziendeVinicole}
      {selectedId === 3 ? <ProfiloUtente /> : null}
    </section>
  );
}
