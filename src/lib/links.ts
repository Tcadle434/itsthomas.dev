import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiTwitter,
  SiTelegram,
  SiLinkedin
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
    name: "Linkedin",
    url: "https://www.linkedin.com/in/thomas-cadle-6ba290104/",
    value: "Thomas Cadle",
    icon: SiLinkedin
  },
  {
    name: "GitHub",
    url: "https://github.com/Tcadle434",
    value: "Tcadle434",
    icon: SiGithub,
  },
  {
    name: "Telegram",
    url: "https://t.me/block_chief",
    value: "block_chief",
    icon: SiTelegram,
  },
  {
    name: "Discord",
    url: "https://discord.com/users/642159440421715979",
    value: "BlockChief#9023",
    icon: SiDiscord,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/thomascadle/",
    value: "thomascadle",
    icon: SiInstagram,
  },
];
