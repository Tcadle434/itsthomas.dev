export type Project = {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
};

export type Projects = Project[];

export const projects: Projects = [
  {
    name: "Raffi3",
    description: "Polygon's premier NFT raffle platform",
    url: "https://www.raffi3.app/",
    imageUrl: "/raffi3.png",
  },
  {
    name: "Portfolio Site",
    description: "This site, working on my personal brand",
    url: "https://www.itsthomas.dev/",
    imageUrl: "/punk.png",
  },
  {
    name: "BlockStop",
    description: "Landing page for Blockstop, a Web3 startup",
    url: "https://www.blockstop.xyz/",
    imageUrl: "/blockstop.webp",
  },
  {
    name: "CHFTY Pizzas",
    description: "ETH NFT Project with reknowned chefs",
    url: "https://www.chftypizzas.com/",
    imageUrl: "/chftypizza.webp",
  },
  {
    name: "Solana NFT Arbitrage",
    description:
      "Arbitrage script comparing Solana NFT collection data between HadeSwap and MagicEden",
    url: "https://github.com/Tcadle434/solana-nft-arbitrage",
    imageUrl: "/solana.png",
  },
  {
    name: "Smooshies Generative Script",
    description:
      "Pixel art generative script for a fun NFT project. Every pixel is coded",
    url: "https://github.com/Tcadle434/Smooshies-NFT",
    imageUrl: "/smooshie.gif",
  },
];
