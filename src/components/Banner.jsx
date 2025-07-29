import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { useAuth } from "../context/AuthContext";

const slides = [
  {
    image: "/images/banner1.jpg",
    title: "Discover Beautiful Nails",
    subtitle: "Nail Paints, Brushes, and More!",
    cta: "Shop Now",
    link: "/shop",
  },
  {
    image: "/images/banner2.jpg",
    title: "Top Nail Kits",
    subtitle: "Get ready for flawless nails",
    cta: "Browse Kits",
    link: "/shop",
  },
  {
    image: "/images/banner3.jpg",
    title: "Trendy Shades 2025",
    subtitle: "Limited Time Collection",
    cta: "Explore Now",
    link: "/shop",
  },
];

const BannerSlider = () => {
  const { user } = useAuth();

  return (
    <section className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2">
                  {user ? `Welcome, ${user.firstName}!` : slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg mb-4">{slide.subtitle}</p>
                <Link
                  to={slide.link}
                  className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-md font-semibold transition"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;
