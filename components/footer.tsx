import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { TwitterIcon, DiscordIcon, GithubIcon } from "./icons";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "./theme-switch";

export default function Footer() {
  return (
    <footer className="w-full py-40">
      <Navbar isBordered>
        <NavbarContent className="flex justify-center items-center">
          <NavbarItem className="flex justify-between gap-8">
            <Link href={siteConfig.links.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link href={siteConfig.links.discord} aria-label="Discord" target="_blank" rel="noopener noreferrer">
              <DiscordIcon className="text-default-500" />
            </Link>
            <Link href={siteConfig.links.github} aria-label="Github" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </footer>
  );
}
