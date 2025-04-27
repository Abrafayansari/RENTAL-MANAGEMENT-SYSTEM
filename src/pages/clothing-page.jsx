"use client"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select"
import {
  Card,
  CardContent,
} from '../components/ui/card'
import {
  Button
} from "../components/ui/button"
import {
  Input,
} from "../components/ui/input"
import { DatePickerDemo } from "../components/ui/date-picker" // Import the DatePickerDemo component

export default function ClothingPage() {
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    size: "all",
    priceRange: "all",
  })

  const [startDate, setStartDate] = useState(undefined) // State for start date
  const [endDate, setEndDate] = useState(undefined) // State for end date

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
    // Add more items as needed...
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold text-primary tracking-tighter sm:text-5xl">
              Rent Designer Fashion
            </h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Dress to impress for any occasion without the investment - browse our collection of premium clothing
              available to rent.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Section */}
            <div className="w-full md:w-1/5 space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-lg mb-4">Search Clothing</h3>
                <div className="space-y-4">
                  {/* Search Input */}
                  <div>
                    <label htmlFor="search" className="text-sm font-medium mb-1 block">
                      Search
                    </label>
                    <Input
                      id="search"
                      placeholder="Designer, style, occasion..."
                      value={filters.search}
                      onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    />
                  </div>

                  {/* Category Selector */}
                  <div>
                    <label htmlFor="category" className="text-sm font-medium mb-1 block">
                      Category
                    </label>
                    <Select
                      value={filters.category}
                      onValueChange={(value) => setFilters({ ...filters, category: value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="formal">Formal</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="costume">Costumes</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Size Selector */}
                  <div>
                    <label htmlFor="size" className="text-sm font-medium mb-1 block">
                      Size
                    </label>
                    <Select
                      value={filters.size}
                      onValueChange={(value) => setFilters({ ...filters, size: value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Sizes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Sizes</SelectItem>
                        <SelectItem value="xs">XS</SelectItem>
                        <SelectItem value="s">S</SelectItem>
                        <SelectItem value="m">M</SelectItem>
                        <SelectItem value="l">L</SelectItem>
                        <SelectItem value="xl">XL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range Selector */}
                  <div>
                    <label htmlFor="price" className="text-sm font-medium mb-1 block">
                      Price Range
                    </label>
                    <Select
                      value={filters.priceRange}
                      onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Price</SelectItem>
                        <SelectItem value="0-50">$0 - $50 / day</SelectItem>
                        <SelectItem value="50-100">$50 - $100 / day</SelectItem>
                        <SelectItem value="100+">$100+ / day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Apply Filters Button */}
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>

              {/* Rental Period Section */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-lg mb-4">Rental Period</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="start-date" className="text-sm font-medium mb-1 block">
                      Start Date
                    </label>
                    <DatePickerDemo />
                  </div>
                  <div>
                    <label htmlFor="end-date" className="text-sm font-medium mb-1 block">
                      End Date
                    </label>
                    <DatePickerDemo />
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
                  <Select defaultValue="recommended">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Recommended" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rating</SelectItem>
                    </SelectContent>
                  </Select>
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
                    <CardContent className="!p-4">
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
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.455c.969 0 1.371 1.24.588 1.81l-2.79 2.023a1 1 0 0 0-.364 1.118l1.062 3.49c.303.987-.84 1.81-1.704 1.289l-2.957-2.111a1 1 0 0 0-1.181 0l-2.957 2.11c-.864.522-2.007-.303-1.704-1.29l1.062-3.49a1 1 0 0 0-.364-1.118L3.538 8.728c-.784-.57-.38-1.81.588-1.81h3.455a1 1 0 0 0 .95-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs text-muted-foreground ml-1">{item.reviews} reviews</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4">Rent Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-6 gap-4">
                <Button variant="outline" size="sm" disabled>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                {[...Array(5)].map((_, i) => (
                  <Button key={i} variant="outline" size="sm" className={`w-8 h-8 shrink-0 ${i === 0 ? "rounded-l-none" : ""} ${i === 4 ? "rounded-r-none" : ""}`}>
                    {i + 1}
                  </Button>
                ))}
                <Button variant="outline" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
