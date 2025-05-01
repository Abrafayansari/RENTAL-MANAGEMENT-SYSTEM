import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

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

function App() {
  const [user, setUser] = useState(null);
  return (
     <UserProvider value={{ user, setUser }}>
    //   <Router>
    //   <Routes> 
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<HomePage />} />
    //       <Route path="properties" element={<PropertiesPage />} />
    //       <Route path="cars" element={<CarsPage />} />
    //       <Route path="clothing" element={<ClothingPage />} />
    //       <Route path="how-it-works" element={<HowItWorksPage />} />
    //       <Route path="forget-password" element={<div>Forget Pa</div>} />
    //       <Route path="details/:itemType/:itemId" element={<ItemDetailsPage />} />
    //       <Route path="checkout" element={<CheckoutPage />} />
    //       <Route path="dashboard" element={<DashboardPage />} />
    //       <Route path="sign-in" element={<SignInPage />} />
    //       <Route path="sign-up" element={<SignUpPage />} />

    //     </Route>
    //   </Routes>
    // </Router>
     </UserProvider>
  )
}

export default App
