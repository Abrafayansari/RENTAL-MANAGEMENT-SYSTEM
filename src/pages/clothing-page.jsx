"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"

export default function ClothingPage() {
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    size: "all",
    priceRange: "all",
  })

  // Mock data for clothing
  const clothing = [
    {
      id: 1,
      title: "Designer Evening Gown",
      designer: "Vera Wang",
      category: "Formal",
      size: "S, M, L",
      price: 120,
      rating: 4.9,
      reviews: 32,
      image: "https://placehold.co/600x400",
    },
    {
      id: 2,
      title: "Men's Tuxedo Set",
      designer: "Tom Ford",
      category: "Formal",
      size: "S, M, L, XL",
      price: 95,
      rating: 4.8,
      reviews: 29,
      image: "https://placehold.co/600x400",
    },
    {
      id: 3,
      title: "Casual Summer Dress",
      designer: "H&M",
      category: "Casual",
      size: "XS, S, M, L",
      price: 45,
      rating: 4.6,
      reviews: 41,
      image: "https://placehold.co/600x400",
    },
    {
      id: 4,
      title: "Halloween Costume - Superhero",
      designer: "Party City",
      category: "Costume",
      size: "S, M, L, XL",
      price: 65,
      rating: 4.7,
      reviews: 37,
      image: "https://placehold.co/600x400",
    },
    {
      id: 5,
      title: "Designer Handbag",
      designer: "Louis Vuitton",
      category: "Accessories",
      size: "One Size",
      price: 85,
      rating: 4.9,
      reviews: 47,
      image: "https://placehold.co/600x400",
    },
    {
      id: 6,
      title: "Business Suit",
      designer: "Hugo Boss",
      category: "Formal",
      size: "S, M, L, XL",
      price: 110,
      rating: 4.8,
      reviews: 27,
      image: "https://placehold.co/600x400",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Rent Designer Fashion</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Dress to impress for any occasion without the investment - browse our collection of premium clothing
              available to rent
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Section */}
            <div className="w-full md:w-1/4 space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-lg mb-4">Search Clothing</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="search" className="text-sm font-medium mb-1 block">
                      Search
                    </label>
                    <div className="flex gap-2">
                      <Input
                        id="search"
                        placeholder="Designer, style, occasion..."
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="text-sm font-medium mb-1 block">
                      Category
                    </label>
                    <select
                      id="category"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={filters.category}
                      onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    >
                      <option value="all">All Categories</option>
                      <option value="formal">Formal</option>
                      <option value="casual">Casual</option>
                      <option value="costume">Costumes</option>
                      <option value="accessories">Accessories</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="size" className="text-sm font-medium mb-1 block">
                      Size
                    </label>
                    <select
                      id="size"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={filters.size}
                      onChange={(e) => setFilters({ ...filters, size: e.target.value })}
                    >
                      <option value="all">All Sizes</option>
                      <option value="xs">XS</option>
                      <option value="s">S</option>
                      <option value="m">M</option>
                      <option value="l">L</option>
                      <option value="xl">XL</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="price" className="text-sm font-medium mb-1 block">
                      Price Range
                    </label>
                    <select
                      id="price"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={filters.priceRange}
                      onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    >
                      <option value="all">Any Price</option>
                      <option value="0-50">$0 - $50 / day</option>
                      <option value="50-100">$50 - $100 / day</option>
                      <option value="100+">$100+ / day</option>
                    </select>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-lg mb-4">Rental Period</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="start-date" className="text-sm font-medium mb-1 block">
                      Start Date
                    </label>
                    <Input id="start-date" type="date" />
                  </div>
                  <div>
                    <label htmlFor="end-date" className="text-sm font-medium mb-1 block">
                      End Date
                    </label>
                    <Input id="end-date" type="date" />
                  </div>
                </div>
              </div>
            </div>

            {/* Clothing Listings */}
            <div className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold">6 items available</h2>
                  <p className="text-sm text-muted-foreground">Based on your search</p>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-sm font-medium">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rating</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clothing.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="relative aspect-square">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-1">
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.designer}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <div>
                          <span className="font-bold">${item.price}</span>
                          <span className="text-sm text-muted-foreground"> /day</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm">
                          <span className="font-medium">Sizes:</span> {item.size}
                        </p>
                      </div>
                      <div className="flex items-center mt-2">
                        <div className="flex items-center">
                          <svg className="h-4 w-4 fill-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm font-medium">{item.rating}</span>
                          <span className="ml-1 text-xs text-muted-foreground">({item.reviews} reviews)</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4">Rent Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Previous page</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">Next page</span>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
