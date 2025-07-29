export const products = [
    {
    id: 1,
    name: "Glossy Pink Nails",
    price: 499,
    image: "/images/pink1.png", // main image
    images: [                  // 👇 Add this array
      "/images/pink1.png",
      "/images/pink2.png",
      "/images/pink3.png"
    ],
    description: "Beautiful glossy pink nail set for all occasions."
  },
  {
    id: 2,
    name: "Nail Paint Remover Pen",
    price: 120,
    image: "/images/nail.png",
    description: "Easily remove polish from edges.",
    category: "Care"
  },
  // Add more as needed
];