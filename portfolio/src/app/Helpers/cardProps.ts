export interface cardProps {
  cardData: {
    bgImageSrc: string;
    characterImageSrc: string;
    titleSrc: string;
    title: string;
    cardHref: string;
    height: 210 | 300 | 360 | 450 | 540 | 600;
  };
}

export const card1: cardProps["cardData"] = {
  bgImageSrc:
    "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
  characterImageSrc:
    "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
  titleSrc:
    "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
  title: "Dark Rider",
  cardHref: "",
  height: 210,
};
