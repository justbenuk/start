import { MAINMENUITEMS } from "@/data/main-menu-items";
import DesktopMenuItem from "./desktop-menu-item";

export default function DesktopMenu() {
  return (
    <nav className="hidden lg:flex flex-row items-center justify-center gap-6">
      {MAINMENUITEMS.map((item, idx) => (
        <DesktopMenuItem key={idx} item={item} />
      ))}
    </nav>
  )
}

