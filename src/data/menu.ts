export const WHATSAPP_NUMBER = "233544263827";
export const WHATSAPP_DISPLAY = "054 426 3827";

export const phones = [
  { display: "024 893 2454", href: "tel:+233248932454" },
  { display: "024 375 9575", href: "tel:+233243759575" },
] as const;

export function whatsappHref(item?: string) {
  const text = item
    ? `Hello YEHLIN BBB! I'd like to order ${item}.`
    : "Hello YEHLIN BBB! I'd like to place an order.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export type MenuItem = {
  name: string;
  blurb: string;
  image: string | null;
  alt: string;
  badge?: string;
  tone?: "gold" | "ember" | "milk";
  mark?: string;
};

export type MenuCategory = {
  id: string;
  index: string;
  label: string;
  title: string;
  blurb: string;
  wide?: boolean;
  items: MenuItem[];
};

export const categories: MenuCategory[] = [
  {
    id: "bakes",
    index: "01",
    label: "Bakes",
    title: "From the oven",
    blurb: "Celebration cakes, tray bakes, and the snacks you reach for on the way.",
    items: [
      {
        name: "Custom Birthday & Wedding Cakes",
        blurb: "Layered, dressed, and made for the day you’re celebrating.",
        image: "/images/cake.jpg",
        alt: "Layered chocolate and vanilla celebration cake with a glossy drip",
      },
      {
        name: "Cupcakes",
        blurb: "Soft crumb and swirled frosting, lovely by the box.",
        image: "/images/cupcakes.jpg",
        alt: "Vanilla cupcakes with tall swirled frosting on a cake stand",
      },
      {
        name: "Waffles",
        blurb: "Golden edges, a tender middle, butter melting in.",
        image: "/images/waffles.jpg",
        alt: "Crisp golden waffle with melting butter and honey",
      },
      {
        name: "Doughnuts",
        blurb: "Glazed, warm, and very hard to share.",
        image: "/images/doughnuts.jpg",
        alt: "Stack of glazed and chocolate doughnuts",
      },
      {
        name: "Meat Bread",
        blurb: "Soft bake stuffed with seasoned meat. A proper Sunyani bite.",
        image: "/images/meat-bread.jpg",
        alt: "Golden meat bread torn open to show a savory meat filling",
      },
      {
        name: "Cookies",
        blurb: "Buttery centres with a just-right snap.",
        image: "/images/cookies.jpg",
        alt: "Stack of thick chocolate chunk cookies",
      },
      {
        name: "Spring Rolls",
        blurb: "Crispy, golden, and ready for snacking.",
        image: "/images/spring-rolls.jpg",
        alt: "Crispy spring rolls with one cut open and a chili dip",
      },
    ],
  },
  {
    id: "bites",
    index: "02",
    label: "Bites",
    title: "Weekend eats & home meals",
    blurb: "Weekend plates are pre-order only. Home meals are cooked fresh and delivered to your door.",
    items: [
      {
        name: "Jollof Rice",
        blurb: "Smoky, party-red, and worth planning the weekend around.",
        image: "/images/jollof.jpg",
        alt: "Ghanaian jollof rice with roasted chicken and fried plantain",
        badge: "Pre-order",
      },
      {
        name: "Fried Rice",
        blurb: "Wok-hot rice, vegetables, and that weekend energy.",
        image: null,
        alt: "",
        badge: "Pre-order",
        tone: "ember",
        mark: "Weekend rice",
      },
    ],
  },
  {
    id: "brews",
    index: "03",
    label: "Brews",
    title: "Cold glasses",
    blurb: "Pressed, steeped, and poured for right now.",
    wide: true,
    items: [
      {
        name: "Fresh Pineapple Juice",
        blurb: "Bright, cold, and squeezed for today.",
        image: "/images/pineapple.jpg",
        alt: "Tall glass of fresh pineapple juice with a pineapple wedge",
      },
      {
        name: "Sobolo",
        blurb: "Hibiscus, ginger, and a ruby chill.",
        image: "/images/sobolo.jpg",
        alt: "Glass of deep red sobolo hibiscus drink",
      },
      {
        name: "Ginger-Tiger Nut Milk",
        blurb: "Creamy, spiced, and deeply comforting.",
        image: null,
        alt: "",
        tone: "milk",
        mark: "Tiger nut",
      },
      {
        name: "Fresh Yogurt",
        blurb: "Cool, tangy, and spoon-thick.",
        image: "/images/yogurt.jpg",
        alt: "Jar of thick fresh yogurt with a spoon",
      },
    ],
  },
];

export const ribbon =
  "Bakes · Bites · Brews · Sunyani · Freshly made · Tasty treats for every mood · ";
