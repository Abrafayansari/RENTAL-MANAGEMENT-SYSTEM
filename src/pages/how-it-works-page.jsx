// import { Search, CheckCircle, Star } from "lucide-react"
// import { Button } from "../components/ui/button"
// import { Card, CardContent } from "../components/ui/card"

// export default function HowItWorksPage() {
//   return (
//     <>
//       <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
//         <div className="container px-4 md:px-6">
//           <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
//             <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">How RentEase Works</h1>
//             <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
//               Renting with us is simple, secure, and straightforward. Learn how our platform works and start renting
//               today.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <div className="mx-auto grid max-w-5xl items-center gap-10 py-12">
//             <div className="grid gap-6 md:grid-cols-3">
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
//                   <Search className="h-10 w-10 text-primary-foreground" />
//                 </div>
//                 <h3 className="text-xl font-bold">1. Search</h3>
//                 <p className="text-muted-foreground">
//                   Browse our extensive catalog of properties, cars, and clothing to find what you need. Use filters to
//                   narrow down your search and find the perfect rental.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
//                   <CheckCircle className="h-10 w-10 text-primary-foreground" />
//                 </div>
//                 <h3 className="text-xl font-bold">2. Book</h3>
//                 <p className="text-muted-foreground">
//                   Select your dates, verify availability, and complete your booking in minutes. Our secure payment
//                   system ensures your transaction is safe.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
//                   <Star className="h-10 w-10 text-primary-foreground" />
//                 </div>
//                 <h3 className="text-xl font-bold">3. Enjoy</h3>
//                 <p className="text-muted-foreground">
//                   Pick up your rental and enjoy! Return it when you're done - it's that simple. Leave a review to help
//                   other renters make informed decisions.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//          <section className="py-20 bg-orange-600 text-white text-center">
//               <div className="container mx-auto space-y-6">
//                 <h2 className="text-4xl font-bold">Why Choose Us?</h2>
//                 <p className="max-w-2xl mx-auto text-lg">
//                   We make rentals easier, faster, and more affordable than ever before. With a huge catalog, secure bookings,
//                   and amazing support — we've got your back!
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-6">
//                   {["Huge Variety", "Trusted Providers", "Secure Payments", "24/7 Support"].map((feature, idx) => (
//                     <div key={idx} className="bg-white text-orange-600 py-4 px-6 rounded-full shadow text-sm font-medium">
//                       {feature}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>

//       <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
//         <div className="container px-4 md:px-6">
//           <div className="mx-auto grid max-w-5xl gap-10">
//             <div className="space-y-4 text-center">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
//               <p className="text-muted-foreground">Find answers to common questions about renting with RentEase.</p>
//             </div>
//             <div className="grid gap-6 md:grid-cols-2">
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-bold mb-2">How do I create an account?</h3>
//                   <p className="text-muted-foreground">
//                     Creating an account is easy! Click on the "Sign Up" button in the top right corner of the page, fill
//                     in your details, and you're ready to start renting.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-bold mb-2">What payment methods do you accept?</h3>
//                   <p className="text-muted-foreground">
//                     We accept all major credit cards, debit cards, and PayPal. Payment is processed securely at the time
//                     of booking.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-bold mb-2">What if I damage a rental item?</h3>
//                   <p className="text-muted-foreground">
//                     All rentals include basic insurance. For additional protection, you can purchase premium insurance
//                     during checkout to cover any accidental damages.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-bold mb-2">Can I extend my rental period?</h3>
//                   <p className="text-muted-foreground">
//                     Yes, you can extend your rental period if the item is available. Simply log into your account, go to
//                     your active rentals, and select "Extend Rental."
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-bold mb-2">How do returns work?</h3>
//                   <p className="text-muted-foreground">
//                     For properties and cars, follow the check-out instructions provided. For clothing, use the prepaid
//                     return shipping label included with your order.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-bold mb-2">Is there a security deposit?</h3>
//                   <p className="text-muted-foreground">
//                     Yes, most rentals require a security deposit, which is fully refundable upon return of the item in
//                     its original condition.
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <div className="mx-auto grid max-w-5xl gap-10">
//             <div className="space-y-4 text-center">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Rental Process</h2>
//               <p className="text-muted-foreground">
//                 A detailed look at how our rental process works from start to finish.
//               </p>
//             </div>
//             <div className="grid gap-8">
//               <div className="flex flex-col md:flex-row gap-6 items-start">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
//                   1
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-bold">Create an Account</h3>
//                   <p className="text-muted-foreground">
//                     Sign up for a free account to access our full catalog of rentals. We'll need some basic information
//                     to verify your identity and ensure a smooth rental experience.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex flex-col md:flex-row gap-6 items-start">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
//                   2
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-bold">Browse and Select</h3>
//                   <p className="text-muted-foreground">
//                     Browse our extensive catalog of properties, cars, and clothing. Use filters to narrow down your
//                     search based on location, dates, price, and specific features.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex flex-col md:flex-row gap-6 items-start">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
//                   3
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-bold">Book and Pay</h3>
//                   <p className="text-muted-foreground">
//                     Once you've found the perfect rental, select your dates and complete the booking process. Secure
//                     payment is processed at the time of booking.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex flex-col md:flex-row gap-6 items-start">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
//                   4
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-bold">Pick Up or Delivery</h3>
//                   <p className="text-muted-foreground">
//                     For properties and cars, you'll receive instructions on where and when to pick up your rental. For
//                     clothing, we offer convenient delivery to your doorstep.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex flex-col md:flex-row gap-6 items-start">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
//                   5
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-bold">Enjoy Your Rental</h3>
//                   <p className="text-muted-foreground">
//                     Make the most of your rental during your rental period. Our customer support team is available 24/7
//                     if you have any questions or issues.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex flex-col md:flex-row gap-6 items-start">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
//                   6
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-bold">Return</h3>
//                   <p className="text-muted-foreground">
//                     Return your rental at the end of your rental period. For properties and cars, follow the check-out
//                     instructions. For clothing, use the prepaid return shipping label.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex flex-col md:flex-row gap-6 items-start">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
//                   7
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-bold">Leave a Review</h3>
//                   <p className="text-muted-foreground">
//                     Share your experience with the community by leaving a review. Your feedback helps other renters make
//                     informed decisions and helps us improve our service.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

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
//               <Button variant="secondary" size="lg">
//                 Browse Rentals
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
//               >
//                 Sign Up Now
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }



import { Search, CheckCircle, Star } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { FaUserPlus, FaSearch, FaCalendarAlt, FaCar, FaSmile, FaUndoAlt, FaStar } from "react-icons/fa"
export default function HowItWorksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto flex  flex-col items-center space-y-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-primary">
              How RentEase Works
            </h1>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg leading-relaxed">
              Renting with us is simple, secure, and straightforward. Learn how our platform works and start renting today.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="w-full py-20 mx-auto bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl grid gap-16">
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Search className="h-10 w-10 text-primary-foreground" />,
                  title: "1. Search",
                  text: "Browse our extensive catalog of properties, cars, and clothing to find what you need. Use filters to narrow down your search and find the perfect rental.",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-primary-foreground" />,
                  title: "2. Book",
                  text: "Select your dates, verify availability, and complete your booking in minutes. Our secure payment system ensures your transaction is safe.",
                },
                {
                  icon: <Star className="h-10 w-10 text-primary-foreground" />,
                  title: "3. Enjoy",
                  text: "Pick up your rental and enjoy! Return it when you're done — it's that simple. Leave a review to help others make informed decisions.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 transition hover:scale-[1.02]">
                  <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary  text-white text-center">
        <div className="container mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Why Choose Us?</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            We make rentals easier, faster, and more affordable. With a huge catalog, secure bookings, and amazing support — we've got your back!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Huge Variety", "Trusted Providers", "Secure Payments", "24/7 Support"].map((feature, idx) => (
              <div key={idx} className="bg-white text-primary py-3 px-5 rounded-full font-medium text-sm shadow-md hover:shadow-lg transition">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Find answers to common questions about renting with RentEase.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                ["How do I create an account?", "Click 'Sign Up' in the top right and fill in your details to get started."],
                ["What payment methods do you accept?", "We accept all major cards and PayPal. Payments are secure and instant."],
                ["What if I damage a rental item?", "Basic insurance is included. You can opt for premium protection during checkout."],
                ["Can I extend my rental period?", "Yes! Go to your dashboard and select 'Extend Rental' if the item is still available."],
                ["How do returns work?", "For properties/cars, follow check-out steps. For clothing, use our prepaid label."],
                ["Is there a security deposit?", "Yes, most rentals include a refundable deposit upon return in original condition."],
              ].map(([question, answer], idx) => (
                <Card key={idx} className="hover:shadow-md  transition">
                  <CardContent className="!p-6 hover:ring-2 ring-primary ring-offset-4 transition rounded-xl"> 
                    <h3 className="text-lg font-bold mb-2">{question}</h3>
                    <p className="text-muted-foreground text-sm">{answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Rental Process */}
      <section className="w-full py-12 md:py-24 lg:py-32">
  <div className="container mx-auto px-4 md:px-6">
    <div className="mx-auto grid max-w-5xl gap-10">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Rental Process</h2>
        <p className="text-muted-foreground">
          A detailed look at how our rental process works from start to finish.
        </p>
      </div>
      <div className="grid gap-8">
        {[
          { icon: <FaUserPlus />, title: "Create an Account", description: "Sign up for a free account to access our full catalog of rentals. We'll need some basic information to verify your identity and ensure a smooth rental experience." },
          { icon: <FaSearch />, title: "Browse and Select", description: "Browse our extensive catalog of properties, cars, and clothing. Use filters to narrow down your search based on location, dates, price, and specific features." },
          { icon: <FaCalendarAlt />, title: "Book and Pay", description: "Once you've found the perfect rental, select your dates and complete the booking process. Secure payment is processed at the time of booking." },
          { icon: <FaCar />, title: "Pick Up or Delivery", description: "For properties and cars, you'll receive instructions on where and when to pick up your rental. For clothing, we offer convenient delivery to your doorstep." },
          { icon: <FaSmile />, title: "Enjoy Your Rental", description: "Make the most of your rental during your rental period. Our customer support team is available 24/7 if you have any questions or issues." },
          { icon: <FaUndoAlt />, title: "Return", description: "Return your rental at the end of your rental period. For properties and cars, follow the check-out instructions. For clothing, use the prepaid return shipping label." },
          { icon: <FaStar />, title: "Leave a Review", description: "Share your experience with the community by leaving a review. Your feedback helps other renters make informed decisions and helps us improve our service." }
        ].map((step, index) => (
          <div key={index} className="flex flex-col group md:flex-row gap-6 items-start">
            <div className="flex shrink-0 h-12 w-12 group-hover:ring-4 ring-primary ring-offset-2 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl">
              {step.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight">Ready to Start Renting?</h2>
            <p className="max-w-xl text-lg">
              Join thousands of satisfied customers who’ve already found the perfect rental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">Browse Rentals</Button>
              <Button
                variant="outline"
                size="lg"
                // className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                Sign Up Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
