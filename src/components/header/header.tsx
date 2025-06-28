import WideContainer from "../container";
import DarkModeToggle from "../dark-mode-toggle";
import ImageLogo from "../image-logo";
import DesktopMenu from "../menus/desktop-menu";
import HeaderSocialIcons from "../socials/header-social-icons";

export default function Header() {
  return (
    <header className="border-b py-4">
      <WideContainer>
        <div className="flex flex-row items-center justify-between">
          <ImageLogo />
          <DesktopMenu />
          <div className="flex flex-row items-center justify-center gap-2">
            <DarkModeToggle />
            <HeaderSocialIcons />
            <div className="lg:hidden">RM</div>
          </div>
        </div>
      </WideContainer>
    </header>
  )
}

