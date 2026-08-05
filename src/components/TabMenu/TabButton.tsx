import type { MenuButton } from "../../models/menuButton";

export function TabButton(buttonMenu: MenuButton) {
  return <button>{buttonMenu.name}</button>;
}

export function StringButton(label: string) {
  return <button>{label}</button>;
}
