import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">About The Luxe Edit</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Curating timeless elegance for the modern wardrobe
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <div className="fade-in">
              <h2 className="text-3xl font-serif text-foreground mb-4">Our Philosophy</h2>
              <p className="leading-relaxed">
                At The Luxe Edit, we believe that true luxury lies in simplicity, quality, and
                timeless design. Each piece in our collection is thoughtfully selected to embody
                these principles, offering you a curated selection of fashion that transcends
                fleeting trends.
              </p>
            </div>

            <div className="fade-in">
              <h2 className="text-3xl font-serif text-foreground mb-4">Customer Service</h2>
              <p className="leading-relaxed mb-4">
                We're committed to providing an exceptional shopping experience. Our dedicated team
                is here to assist you with any questions or concerns.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Email: support@theluxeedit.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Live Chat: Available Mon-Fri, 9am-6pm EST</li>
              </ul>
            </div>

            <div className="fade-in">
              <h2 className="text-3xl font-serif text-foreground mb-4">Shipping & Returns</h2>
              <p className="leading-relaxed mb-4">
                We offer complimentary shipping on all orders over $500. Standard shipping takes
                3-5 business days, with express options available at checkout.
              </p>
              <p className="leading-relaxed">
                Not satisfied with your purchase? We accept returns within 30 days of delivery for
                a full refund. Items must be unworn and in original packaging.
              </p>
            </div>

            <div className="fade-in">
              <h2 className="text-3xl font-serif text-foreground mb-4">Size Guide</h2>
              <p className="leading-relaxed">
                Our pieces are designed to fit true to size. For detailed measurements and fit
                guidance, please refer to the size chart available on each product page. If you
                need personalized assistance, our stylists are happy to help via chat or email.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
