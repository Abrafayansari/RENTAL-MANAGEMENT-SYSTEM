// import { Link } from "react-router-dom"
// import { Building, Car, Shirt, Search, ArrowRight, Star, CheckCircle } from "lucide-react"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import { Navigation, Pagination } from 'swiper/modules';
// import { FaChartLine, FaSearch } from "react-icons/fa";

// import { Button } from "../components/ui/button"
// import { Input } from "../components/ui/input"
// import { Card, CardContent } from "../components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

// export default function HomePage() {
//   const HeroSlider = () => {
//     return (
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         className="w-full h-[400px] rounded-xl"
//       >
//         <SwiperSlide>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVPtuWtDI8UhxiodEzeUWicsVH2JQTvH7nA&s"
//             alt="Slide 1"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3QPksVm18ldHEZG0rMyAGaGQd159LWpCLQ&s"
//             alt="Slide 2"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGsCLSGirsUkJZbgksAWO9XGxl5BiHGnOaQ&s"
//             alt="Slide 3"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//       </Swiper>
//     );
//   };
//   return (
//     <>
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-[var(--primar-color)]">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//             <div className="flex flex-col justify-center space-y-4">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                   Rent <span className="text-[var(--secondary-color)]">Anything ,</span> <span className="text-[var(--secondary-clor)]">Anytime</span>
//                 </h1>
//                 <p className="max-w-[600px] text-muted-foreground  text-[var(--primary-color)]  md:text-xl">
//                   Find the perfect rental for your needs. From properties to cars to clothing, we've got you covered.
//                 </p>
//               </div>
//               <div className="w-full max-w-sm space-y-2">
//                 <Tabs defaultValue="properties" className=" w-full">
//                   <TabsList className="grid w-full grid-cols-3">
//                     <TabsTrigger value="properties" className="flex items-center gap-2">
//                       <Building className="h-4 w-4" />
//                       <span className="hidden sm:inline-block text-[#f06f35]">Properties</span>
//                     </TabsTrigger>
//                     <TabsTrigger value="cars" className="flex items-center gap-2">
//                       <Car className="h-4 w-4" />
//                       <span className="text-[#f06f35] hidden sm:inline-block">Cars</span>
//                     </TabsTrigger>
//                     <TabsTrigger value="clothing" className="flex items-center gap-2">
//                       <Shirt className="h-4 w-4" />
//                       <span className="text-[#f06f35] hidden sm:inline-block">Clothing</span>
//                     </TabsTrigger>
//                   </TabsList>
//                   <TabsContent value="properties" className="mt-4">
//                   <div className='w-[30vw] flex bg-white justify-evenly items-center h-20 rounded-full shadow-lg mt-12   '>
//           <div><input  placeholder='Looking for a properties? Start here...' className='h-10 w-[20vw] focus:outline-none border-white active:border-white' type="search" name="search" id="search" /></div>
         
//           <div className='bg-[#f06f35]  h-[50px] w-[50px] flex justify-center items-center rounded-full'><FaSearch className=' text-white' /></div>
//           </div>
//                   </TabsContent>
//                   <TabsContent value="cars" className="mt-4">
//                   <div className='w-[30vw] flex bg-white justify-evenly items-center h-20 rounded-full shadow-lg mt-12   '>
//           <div><input  placeholder='Looking for a cars? Start here...' className='h-10 w-[20vw] focus:outline-none border-white active:border-white' type="search" name="search" id="search" /></div>
         
//           <div className='bg-[#f06f35]  h-[50px] w-[50px] flex justify-center items-center rounded-full'><FaSearch className=' text-white' /></div>
//           </div>
//                   </TabsContent>
//                   <TabsContent value="clothing" className="mt-4">
//                   <div className='w-[30vw] flex bg-white justify-evenly items-center h-20 rounded-full shadow-lg mt-12   '>
//           <div><input  placeholder='Looking for a clothing? Start here...' className='h-10 w-[20vw] focus:outline-none border-white active:border-white' type="search" name="search" id="search" /></div>
         
//           <div className='bg-[#f06f35]  h-[50px] w-[50px] flex justify-center items-center rounded-full'><FaSearch className=' text-white' /></div>
//           </div>
//                   </TabsContent>
//                 </Tabs>
//               </div>
//             </div>
//             <HeroSlider/>
//             {/* <img
//               src="https://placehold.co/800x550"
//               alt="Hero Image"
//               className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
//             /> */}
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl text-[var(--secondary-color)] font-bold tracking-tighter sm:text-5xl">Popular Categories</h2>
//               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed text-[var(--primary-color)] xl:text-xl/relaxed">
//                 Discover our most popular rental categories and find exactly what you need.
//               </p>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
//             <Card className="h-[70vh] overflow-hidden">
//               <div className="relative h-60">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3QPksVm18ldHEZG0rMyAGaGQd159LWpCLQ&s" alt="Properties" className="object-cover w-full h-full" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-2xl font-bold text-white">Properties</h3>
//                   <p className="text-white/90">Find your perfect temporary home</p>
//                 </div>
//               </div>
//               <CardContent className="mt-6 p-4">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <Button variant="outline" size="sm">
//                     Apartments
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     Houses
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     Villas
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     Cabins
//                   </Button>
//                 </div>
//                 <Link to="/properties">
//                   <Button variant="default" className="mt-2 w-full">
//                     Explore Properties
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>

//             <Card className="overflow-hidden">
//               <div className="relative h-60">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVPtuWtDI8UhxiodEzeUWicsVH2JQTvH7nA&s" alt="Cars" className="object-cover w-full h-full" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-2xl font-bold text-white">Cars</h3>
//                   <p className="text-white/90">Rent the perfect vehicle for any occasion</p>
//                 </div>
//               </div>
//               <CardContent className="mt-6 p-4">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <Button variant="outline" size="sm">
//                     Luxury
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     SUVs
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     Economy
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     Vans
//                   </Button>
//                 </div>
//                 <Link to="/cars">
//                   <Button variant="default" className="mt-2 w-full">
//                     Explore Cars
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>

//             <Card className="overflow-hidden">
//               <div className="relative h-60">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGsCLSGirsUkJZbgksAWO9XGxl5BiHGnOaQ&s" alt="Clothing" className="object-cover w-full h-full" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-2xl font-bold text-white">Clothing</h3>
//                   <p className="text-white/90">Designer fashion without the commitment</p>
//                 </div>
//               </div>
//               <CardContent className="mt-6 p-4">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <Button variant="outline" size="sm">
//                     Formal
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     Casual
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     Costumes
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     Accessories
//                   </Button>
//                 </div>
//                 <Link to="/clothing">
//                   <Button variant="default" className="mt-2 w-full">
//                     Explore Clothing
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
//               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Renting with us is simple, secure, and straightforward.
//               </p>
//             </div>
//           </div>
//           <div className="mx-auto text[var(--primary-color)] grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
//             <div className="grid  gap-4 text-center">
//               <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary mx-auto">
//                 <Search className="text-[var(--secondary-color)] h-10 w-10 text-primary-foreground" />
//               </div>
//               <h3 className="text-xl font-bold">1. Search</h3>
//               <p className="text-muted-foreground">
//                 Browse our extensive catalog of properties, cars, and clothing to find what you need.
//               </p>
//             </div>
//             <div className="grid gap-4 text-center">
//               <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary mx-auto">
//                 <CheckCircle className="text-[var(--secondary-color)] h-10 w-10 text-primary-foreground" />
//               </div>
//               <h3 className="text-xl font-bold">2. Book</h3>
//               <p className="text-muted-foreground">
//                 Select your dates, verify availability, and complete your booking in minutes.
//               </p>
//             </div>
//             <div className="grid gap-4 text-center">
//               <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary mx-auto">
//                 <Star className="text-[var(--secondary-color)] h-10 w-10 text-primary-foreground" />
//               </div>
//               <h3 className="text-xl font-bold">3. Enjoy</h3>
//               <p className="text-muted-foreground">
//                 Pick up your rental and enjoy! Return it when you're done - it's that simple.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>


//       <section className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
//               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Don't just take our word for it - hear from some of our satisfied customers.
//               </p>
//             </div>
//           </div>
//           <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="flex-1 space-y-2">
//                     <div className="flex items-center">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="h-4 w-4 fill-primary text-primary" />
//                       ))}
//                     </div>
//                     <p className="text-muted-foreground">
//                       "The apartment we rented was exactly as described. Clean, modern, and in a perfect location. Will
//                       definitely use RentEase again!"
//                     </p>
//                     <div className="font-semibold">- Sarah T.</div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="flex-1 space-y-2">
//                     <div className="flex items-center">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="h-4 w-4 fill-primary text-primary" />
//                       ))}
//                     </div>
//                     <p className="text-muted-foreground">
//                       "Renting a car through this platform was so easy. The process was smooth from start to finish, and
//                       the car was in perfect condition."
//                     </p>
//                     <div className="font-semibold">- Michael R.</div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="flex-1 space-y-2">
//                     <div className="flex items-center">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="h-4 w-4 fill-primary text-primary" />
//                       ))}
//                     </div>
//                     <p className="text-muted-foreground">
//                       "I rented a designer dress for a wedding and received so many compliments! The quality was amazing
//                       and the return process was simple."
//                     </p>
//                     <div className="font-semibold">- Jessica L.</div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
//   <div className="container px-4 md:px-6">
//     <div className="flex flex-col items-center justify-center space-y-4 text-center">
//       <div className="space-y-2">
//         <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[var(--secondary-color)]">Why Choose Us?</h2>
//         <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//           Discover what sets us apart and makes renting from us a breeze.
//         </p>
//       </div>
//     </div>
//     <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 text-center">
//       <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition">
//         <FaChartLine className="mx-auto mb-4 h-10 w-10 text-[var(--secondary-color)]" />
//         <h3 className="text-xl font-semibold">Reliable & Trusted</h3>
//         <p className="text-muted-foreground mt-2">We ensure quality and safety in every rental experience.</p>
//       </div>
//       <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition">
//         <Search className="mx-auto mb-4 h-10 w-10 text-[var(--secondary-color)]" />
//         <h3 className="text-xl font-semibold">Wide Variety</h3>
//         <p className="text-muted-foreground mt-2">From homes to cars to clothing – find it all under one roof.</p>
//       </div>
//       <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition">
//         <CheckCircle className="mx-auto mb-4 h-10 w-10 text-[var(--secondary-color)]" />
//         <h3 className="text-xl font-semibold">Easy Booking</h3>
//         <p className="text-muted-foreground mt-2">Seamless online process with quick confirmations.</p>
//       </div>
//     </div>
//   </div>
// </section>


//       <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Renting?</h2>
//               <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Join thousands of satisfied customers who have found the perfect rental with us.
//               </p>
//             </div>
//             <div className="flex flex-col gap-2 min-[400px]:flex-row">
//               <Link to="/properties">
//                 <Button variant="secondary" size="lg">
//                   Browse Rentals
//                 </Button>
//               </Link>
//               <Link to="/how-it-works">
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
//                 >
//                   Learn More
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
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
              Rent <span className="text-orange-600">Anything, Anytime</span>
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
                  <div className="flex  bg-white rounded-full shadow-md p-3 items-center">
                    <Input
                      className="flex-1 border-none focus:ring-0 focus:outline-none"
                      placeholder={`Looking for ${type}? Start here...`}
                      type="search"
                    />
                    <div className="bg-orange-500 p-3 rounded-full text-white">
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
