"use client"

import { MapPin, Star, Check, Heart, Share2, ArrowLeft, Car } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function CarDetails({ car, isFavorite, setIsFavorite }) {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const calculateTotal = () => {
    if (!startDate || !endDate) return car?.pricePerDay
    const start = new Date(startDate)
    const end = new Date(endDate)
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    return car?.pricePerDay * (days || 1)
  }

  return (
    <>
      <div className="bg-gradient-to-b from-primary/10 to-transparent pt-8 pb-4">
        <div className="container">
          <Link
            to="/cars"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-4"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to cars
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                <span className="text-sm font-medium text-muted-foreground">{car?.type}</span>
              </div>
              <h1 className="text-3xl font-bold mt-1">{car?.itemName}</h1>
              <div className="flex items-center mt-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{car?.location}</span>
                <div className="mx-2">•</div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-secondary text-secondary mr-1" />
                  <span>{car?.rating}</span>
                  <span className="ml-1">({car?.reviews} reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className={isFavorite ? "text-red-500" : ""}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500" : ""}`} />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-2">
                <img
                  src={car?.picURL || "/placeholder.svg"}
                  alt={car?.itemName}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About this car</h2>
                <p className="text-muted-foreground">{car?.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {car?.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Range</p>
                    <p className="font-bold">{car?.specs.range}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Acceleration</p>
                    <p className="font-bold">{car?.specs.acceleration}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Top Speed</p>
                    <p className="font-bold">{car?.specs.topSpeed}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Seating</p>
                    <p className="font-bold">{car?.specs.seating}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Owned by</h3>
                <div className="flex items-center">
                  <img
                    src={car?.owner?.image}
                    alt="Owner"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold">{car?.owner?.name}</p>
                    <p className="text-sm text-muted-foreground">Joined {car?.owner?.joined}</p>
                    <p className="text-sm text-muted-foreground">Response rate: {car?.owner?.responseRate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold">${car?.pricePerDay}</span>
                    <span className="text-muted-foreground"> / day</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-secondary text-secondary mr-1" />
                    <span className="font-medium">{car?.rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">({car?.reviews})</span>
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

                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                    Reserve
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">You won't be charged yet</p>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-between mb-2">
                    <span>
                      ${car?.pricePerDay} ×{" "}
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