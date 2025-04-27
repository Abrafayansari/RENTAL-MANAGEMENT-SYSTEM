import { Link } from "react-router-dom"
import { Building, Car, Shirt, Search, ArrowRight, Star, CheckCircle } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import CustomSlider from "../components/customslider"
import { FaSearch } from "react-icons/fa";

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import images from "../Data/images";

export default function HomePage() {
  const HeroSlider = () => {
    return (
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      // <Swiper
      //   modules={[Autoplay]}
      //   autoplay={{ delay: 3000, disableOnInteraction: false }}
      //   loop={true}
      //   className="w-full h-[400px] rounded-xl shadow-lg"
      // >
      //   {["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVPtuWtDI8UhxiodEzeUWicsVH2JQTvH7nA&s",
      //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3QPksVm18ldHEZG0rMyAGaGQd159LWpCLQ&s",
      //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGsCLSGirsUkJZbgksAWO9XGxl5BiHGnOaQ&s"].map((src, index) => (
      //       <SwiperSlide key={index}>
      //         <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
      //       </SwiperSlide>
      //   ))}
      // </Swiper>
    );
  };

  return (
    <>
      <section className="w-full h-[100vh] py-16 bg-gradient-to-r from-[#ede5e6] to-orange-300">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 leading-tight">
              Rent <span className="text-primary">Anything, Anytime</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              Find the perfect rental for your needs. From properties to cars to clothing, we've got you covered.
            </p>
            <Tabs defaultValue="properties" className="w-full max-w-md">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="properties"><Building className="mr-1" /> Properties</TabsTrigger>
                <TabsTrigger value="cars"><Car className="mr-1" /> Cars</TabsTrigger>
                <TabsTrigger value="clothing"><Shirt className="mr-1" /> Clothing</TabsTrigger>
              </TabsList>
              {["properties", "cars", "clothing"].map((type) => (
                <TabsContent key={type} value={type} className="mt-10">
                  <div className="flex  bg-white focus-within:ring-2 ring-primary ring-offset-2 rounded-full shadow-md p-3 items-center">
                    <Input
                      className="flex-1 !border-none focus:!ring-0 !shadow-none focus:!border-0 focus:!outline-none"
                      placeholder={`Looking for ${type}? Start here...`}
                      type="search"
                    />
                    <div className="bg-primary shrink-0 p-3 rounded-full text-white">
                      <FaSearch />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          <HeroSlider />
        </div>
      </section>

      <section className="py-16 h-[130vh] bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-orange-600 mb-4">Popular Categories</h2>
          <p className="text-[var(--text-color)] mt-10 text-lg mb-10 max-w-2xl mx-auto">
            Discover our most popular rental categories and find exactly what you need.
          </p>
          <div className="grid gap-8 mt-8 md:grid-cols-3">
            {[{
              title: "Properties",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3QPksVm18ldHEZG0rMyAGaGQd159LWpCLQ&s",
              tags: ["Apartments", "Houses", "Villas", "Cabins"],
              link: "/properties"
            }, {
              title: "Cars",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVPtuWtDI8UhxiodEzeUWicsVH2JQTvH7nA&s",
              tags: ["Luxury", "SUVs", "Economy", "Vans"],
              link: "/cars"
            }, {
              title: "Clothing",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGsCLSGirsUkJZbgksAWO9XGxl5BiHGnOaQ&s",
              tags: ["Formal", "Casual", "Costumes", "Accessories"],
              link: "/clothing"
            }].map((item, i) => (
              <Card key={i} className="overflow-hidden mt-10 h-[70vh] shadow-lg">
                <div className="relative h-56">
                  <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl text-white font-bold">{item.title}</h3>
                    <p className="text-white text-sm">Explore our wide selection</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2 mt-10 mb-4">
                    {item.tags.map((tag, idx) => (
                      <Button key={idx} variant="outline" size="sm">{tag}</Button>
                    ))}
                  </div>
                  <Link to={item.link}>
                    <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white">
                      Explore {item.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 h-[100vh] bg-orange-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Renting with us is simple, secure, and straightforward.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: <Search className="h-10 w-10 text-orange-600 mx-auto" />, title: "Search",
              desc: "Browse our catalog of properties, cars, and clothing to find what you need."
            }, {
              icon: <CheckCircle className="h-10 w-10 text-orange-600 mx-auto" />, title: "Book",
              desc: "Select your dates, check availability, and complete your booking."
            }, {
              icon: <Star className="h-10 w-10 text-orange-600 mx-auto" />, title: "Enjoy",
              desc: "Pick up your rental and enjoy! Return it easily afterward."
            }].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center space-y-10">
          <h2 className="text-4xl font-bold text-gray-800">Trusted by Karachi’s Top Renters</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our platform is trusted by event organizers, families, small businesses, and more across the city.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Shopify_logo_2022.svg/2560px-Shopify_logo_2022.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/5/51/Fiverr_Logo_2023.svg",
              "https://upload.wikimedia.org/wikipedia/commons/0/0e/Uber_logo_2018.svg",
            ].map((logo, idx) => (
              <img key={idx} src={logo} alt="Partner logo" className="h-10 sm:h-12 object-contain grayscale hover:grayscale-0 transition duration-300" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-100 to-orange-200 text-center">
        <div className="container mx-auto space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Ready to Rent?</h2>
          <p className="max-w-xl mx-auto text-gray-700 text-lg">
            Join thousands of users renting everything from homes to holiday outfits. Start your journey today!
          </p>
          <Link to="/signup">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>
      <section className="py-20 bg-white text-center border-t">
        <div className="container mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Stay Updated</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Subscribe to our newsletter and never miss rental deals, updates, or special offers!
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
