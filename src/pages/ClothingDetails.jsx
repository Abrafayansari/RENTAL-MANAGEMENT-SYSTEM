"use client"

import { Star, Check, Heart, Share2, ArrowLeft, Shirt } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import {Link} from "react-router-dom"
import { useState } from "react"

export default function ClothingDetails({ clothing, isFavorite, setIsFavorite }) {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [selectedSize, setSelectedSize] = useState("")

  const calculateTotal = () => {
    if (!startDate || !endDate) return clothing?.pricePerDay
    const start = new Date(startDate)
    const end = new Date(endDate)
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    return clothing?.pricePerDay * (days || 1)
  }

  return (
    <>
      {/* Header section (same structure as PropertyDetails) */}
      <div className="bg-gradient-to-b from-primary/10 to-transparent pt-8 pb-4">
        <div className="container">
          <Link
            href="/clothing"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-4"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to clothing
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Shirt className="h-5 w-5" />
                <span className="text-sm font-medium text-muted-foreground">{clothing?.category}</span>
              </div>
              <h1 className="text-3xl font-bold mt-1">{clothing?.itemName}</h1>
              <div className="flex items-center mt-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-secondary text-secondary mr-1" />
                  <span>{clothing?.rating}</span>
                  <span className="ml-1">({clothing?.reviews} reviews)</span>
                </div>
              </div>
            </div>
            {/* Favorite and Share buttons (same as PropertyDetails) */}
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Single Image */}
            <div className="mb-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-2">
                <img
                  src={clothing?.picURL || "/placeholder.svg"}
                  alt={clothing?.itemName}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Clothing Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About this item</h2>
                <p className="text-muted-foreground">{clothing?.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {clothing?.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Details */}
              <div>
                <h3 className="text-xl font-bold mb-4">Product Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Material</p>
                    <p className="font-bold">{clothing?.details.material}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Care Instructions</p>
                    <p className="font-bold">{clothing?.details.care}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Fit</p>
                    <p className="font-bold">{clothing?.details.fit}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Recommended For</p>
                    <p className="font-bold">{clothing?.details.occasion}</p>
                  </div>
                </div>
              </div>

              {/* Provider Information */}
              <div>
                <h3 className="text-xl font-bold mb-4">Provided by</h3>
                <div className="flex items-center">
                  <img
                    src={clothing?.provider?.image}
                    alt="Provider"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold">{clothing?.provider?.name}</p>
                    <p className="text-sm text-muted-foreground">Established {clothing?.provider?.established}</p>
                    <p className="text-sm text-muted-foreground">Rating: {clothing?.provider?.rating}/5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card with size selection */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold">${clothing?.pricePerDay}</span>
                    <span className="text-muted-foreground"> / day</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-secondary text-secondary mr-1" />
                    <span className="font-medium">{clothing?.rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">({clothing?.reviews})</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="start-date" className="block text-sm font-medium mb-1">
                      Start Date
                    </label>
                    <Input
                      id="start-date"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="end-date" className="block text-sm font-medium mb-1">
                      End Date
                    </label>
                    <Input
                      id="end-date"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="size" className="block text-sm font-medium mb-1">
                      Size
                    </label>
                    <select
                      id="size"
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select size</option>
                      {clothing?.size.split(", ").map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                    Reserve
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">You won't be charged yet</p>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-between mb-2">
                    <span>
                      ${clothing?.pricePerDay} ×{" "}
                      {startDate && endDate
                        ? Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)) || 1
                        : 1}{" "}
                      days
                    </span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Service fee</span>
                    <span>${Math.round(calculateTotal() * 0.1)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-4 border-t mt-4">
                    <span>Total</span>
                    <span>${calculateTotal() + Math.round(calculateTotal() * 0.1)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}