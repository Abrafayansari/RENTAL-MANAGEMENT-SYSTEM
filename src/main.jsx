import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"

import Layout from "./components/layout"
import HomePage from "./pages/home-page"
import PropertiesPage from "./pages/properties-page"
import CarsPage from "./pages/cars-page"
import ClothingPage from "./pages/clothing-page"
import HowItWorksPage from "./pages/how-it-works-page"
import SignInPage from "./pages/sign-in-page"
import SignUpPage from "./pages/sign-up-page"
import ForgetPassword from "./pages/forget-password-page"
import { UserProvider } from "./hooks/Context"
import DashboardPage from "./pages/dashboard-page"
import CheckoutPage from "./pages/checkout-page"
import ItemDetailsPage from "./pages/items-details-page"
import UploadListingPage from "./pages/upload-listing-page"

const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(
  
  <React.StrictMode>
      <UserProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="properties" element={<PropertiesPage />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="clothing" element={<ClothingPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="upload" element={<UploadListingPage />} />

          <Route path="details/:itemType/:itemId" element={<ItemDetailsPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="dashboard" element={<DashboardPage />} />
          <Route path="forget-password" element={<ForgetPassword />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>

  </React.StrictMode>,
)
