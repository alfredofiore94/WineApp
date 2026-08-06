import { TabButton } from "../TabMenuButton/TabButton";
import { menuButtons } from "../../../data/menu_buttons";
import "./TabBarMenu.css";
import { useState } from "react";
export function TabBarMenu() {
  const [selectedId, setSelectedId] = useState<number>();

  function onClickButton(id: number): void {
    setSelectedId(id);
  }
  const onClickBtn = (id: number) => {
    onClickButton(id);
  };
  return (
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
  );
}
