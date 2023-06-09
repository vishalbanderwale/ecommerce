import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "MenWatches",
    category: "Men",
    collectionName: " Check out Our Best Men Collection",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0253/9628/1399/products/Men-Gold-Fashion-Luxury-Brand-M-H-Quartz-Wrist-Watch-Men-High-Quality-Steel-Men-s.jpg?v=1632464482&width=713",
    description:
      "Masculine designs with larger dials, robust construction, and various features.",
  },
  {
    _id: uuid(),
    categoryName: "WomenWatches",
    category: "Women",
    collectionName: " Check out Our Best women Collection",
    imageUrl:
      "https://images.meesho.com/images/products/116489913/n2oog_512.webp",
    description:
      "Elegant and versatile timepieces with feminine touches and fashionable designs.",
  },
  {
    _id: uuid(),
    categoryName: "Kid'sWatches",
    category: "kids",
    collectionName: " check out our Best kid's Collection",
    imageUrl: "https://i.ebayimg.com/images/g/ftgAAOSwtvpa1b4u/s-l1600.jpg",
    description:
      "Fun and colorful watches designed for children, featuring smaller sizes and engaging designs.",
  },
];
