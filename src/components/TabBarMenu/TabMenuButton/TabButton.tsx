import type { MenuButton } from "../../../models/menuButton";
import "./TabButton.css";
type TabButtonProps = {
  buttonMenu: MenuButton;
  onSelectMenuBtn: () => void;
  isSelected: boolean;
};
export function TabButton({
  buttonMenu,
  onSelectMenuBtn,
  isSelected,
}: TabButtonProps) {
  return (
    <li>
      <button
        className={isSelected ? "buttonMenuSelected" : "buttonMenu"}
        onClick={onSelectMenuBtn}
      >
        {buttonMenu.name}
      </button>
    </li>
  );
}

export function StringButton(label: string) {
  return <button>{label}</button>;
}
