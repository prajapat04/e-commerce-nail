import { Link } from "react-router-dom";

const categories = [
  { name: "Nail Paints", image: "/images/categories/cate1.png", bgColor: "#ffe4e6" },
  { name: "Brushes", image: "/images/categories/cate2.png", bgColor: "#fce7f3" },
  { name: "Gel Kits", image: "/images/categories/cate3.png", bgColor: "#ede9fe" },
  { name: "Accessories", image: "/images/categories/cate4.png", bgColor: "#fef9c3" },
  { name: "Gel Kits", image: "/images/categories/cate5.png", bgColor: "#dcfce7" }
];

const CategorySection = () => {
  return (
    <section className="my-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-medium">Categories</h2>
      <div className="my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 items-center justify-center">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={`/category/${encodeURIComponent(cat.name)}`}
            className="group cursor-pointer py-5 px-3 rounded-lg gap-2 flex flex-col items-center justify-center"
            style={{ backgroundColor: cat.bgColor }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="max-w-28 transition group-hover:scale-110"
            />
            <h3 className="text-sm font-medium">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
