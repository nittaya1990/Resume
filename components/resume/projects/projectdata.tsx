import ReactPlayer from "react-player";
import { Image } from "@chakra-ui/image";

interface projectData {
  project: string;
  info: string;
  content: any;
}

export const projectData = [
  {
    project: "Thinksats.com",
    info: "React website to display the price of common expenses in satoshis.",
    content: <iframe src="https://thinksaats.com" />,
  },
  {
    project: "SNX Stats Twiter Bot",
    info: "Winner of the Open Defi Hackathon synthetix network SNX tweet bot.",
    content: <></>,
  },
  {
    project: "CNC Conversion",
    info: "Converted a conventional mill into a 4 axis CNC.",
    content: <></>,
  },
  {
    project: "6-axis Film Robot",
    info: "100% custom built with unique CNC and 3D printed parts as well motor control and electronics.",
    content: (
      <ReactPlayer
        muted
        playing
        loop
        width="100%"
        height="100%"
        url={
          "https://bafybeiborkm62dviribo6pocxmp3y6cylaznrh3mmo4iut53psyt6ehtkq.ipfs.dweb.link/"
        }
      />
    ),
  },
  {
    project: "Bioshield",
    info: ` Manufactured, promoted, sold and fulfilled a brand new
        "bio-safety" product in just one day during the start of
        COVID-19 lockdown.`,
    content: (
      <Image src="https://pbs.twimg.com/media/EqdXIwwUcAELRof?format=jpg&name=large" />
    ),
  },
  {
    project: "Plant Timelapse",
    info: "Raspbery Pi IoT web app controlled studio to film the growth of plants.",
    content: (
      <ReactPlayer
        muted
        playing
        loop
        width="100%"
        height="100%"
        url={
          "https://bafybeibizux4d5rx47cxbntwz5u6ogiwevcbzqtbfcyebdjcy7rtdz6ywu.ipfs.dweb.link/"
        }
      />
    ),
  },
];
