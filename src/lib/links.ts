import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiTwitter,
  SiTelegram,
} from "react-icons/si";
import { IconType } from "react-icons";

export type Link = {
  name: string;
  url: string;
  value: string;
  icon: IconType;
};

export type Links = Link[];

export const links: Links = [
  {
    name: "Twitter",
    url: "https://twitter.com/blockchief",
    value: "@blockchief",
    icon: SiTwitter,
  },
  {
    name: "Discord",
    url: "https://discord.com/users/642159440421715979",
    value: "BlockChief#9023",
    icon: SiDiscord,
  },
  {
    name: "GitHub",
    url: "https://github.com/Tcadle434",
    value: "Tcadle434",
    icon: SiGithub,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/thomascadle/",
    value: "thomascadle",
    icon: SiInstagram,
  },
  {
    name: "Telegram",
    url: "https://t.me/Chief_sol",
    value: "Chief_sol",
    icon: SiTelegram,
  },
];
