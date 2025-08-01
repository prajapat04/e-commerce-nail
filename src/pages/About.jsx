const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-12 bg" >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-pink-500">The Nail Shop</span>, your one-stop destination for premium nail care products.
          We bring you the latest in nail paints, brushes, gel kits, and accessories — all in one place.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/images/pink1.png" // 👉 Replace with your real image
          alt="About The Nail Shop"
          className="w-full rounded-lg shadow-lg"
        />

        <div>
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="space-y-3 text-gray-700">
            <li>✅ High-quality & curated nail care products</li>
            <li>✅ Trusted by thousands of happy customers</li>
            <li>✅ Fast delivery & reliable customer service</li>
            <li>✅ 100% satisfaction guarantee</li>
          </ul>

          <p className="mt-6 text-gray-600">
            Whether you're a beginner or a professional, our mission is to empower your creativity and help you express your style through nails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
