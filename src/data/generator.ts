export interface GeneratorItem {
  id: string;
  name: string;
  category: string;
  categoryColor: string;
  categoryBackground: string;
  description: string;
}

export const items: GeneratorItem[] = [
  {
    id: "chainsaw",
    name: "Chainsaw",
    category: "Tool",
    categoryColor: "#09a9e9",
    categoryBackground: "#05506e",
    description:
      "Allows players to cut trees and eliminate threats quickly. It takes 2 hits to fell a tree and can chop big trees in 25+ hits.",
  },
  {
    id: "raygun",
    name: "Ray Gun",
    category: "Weapon",
    categoryColor: "#ff5c5c",
    categoryBackground: "#981c1c",
    description:
      "Fires hit-scan projectiles that deal heavy damage. Powered by Alien Tech Energy unlike other ranged weapons.",
  },
  {
    id: "diamonds5k",
    name: "5000 Diamonds",
    category: "Diamonds",
    categoryColor: "#5c12bd",
    categoryBackground: "#ba86ff",
    description:
      "A massive amount of diamonds that lets you gear up faster and stay ahead in the forest.",
  },
  {
    id: "diamonds10k",
    name: "10000 Diamonds",
    category: "Diamonds",
    categoryColor: "#5c12bd",
    categoryBackground: "#ba86ff",
    description:
      "Enough currency to unlock the best items in a single run. Use it wisely.",
  },
  {
    id: "bandage",
    name: "Bandage",
    category: "Tool",
    categoryColor: "#09a9e9",
    categoryBackground: "#05506e",
    description:
      "Quickly recover health or help fallen teammates. Essential for late-night encounters.",
  },
  {
    id: "hammer",
    name: "Hammer",
    category: "Tool",
    categoryColor: "#09a9e9",
    categoryBackground: "#05506e",
    description:
      "Move structures around camp and collect decorations scattered across the map effortlessly.",
  },
];

export const loadingMessages = [
  "Something stirs beneath the leaves..",
  "Crafting your free items...",
  "The forest is whispering...",
  "Prepare it's almost ready...",
];

