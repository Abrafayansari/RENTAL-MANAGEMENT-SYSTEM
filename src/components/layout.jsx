import { Link, Outlet, useLocation } from "react-router-dom"

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col ">
      <header className="sticky bg-[var()] text-[var(--secondary-color)] top-0 z-50 w-full border-b-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="hidden text-2xl ml-6 sm:inline-block">RentEase</span>
          </Link>
          <nav className="  hidden md:flex gap-6">  
            <Link
              to="/properties"
              className={`text-m  font-medium ${location.pathname === "/properties" ? "underline underline-offset-4" : "hover:underline underline-offset-4"}`}
            >
              Properties
            </Link>
            <Link
              to="/cars"
              className={`text-m font-medium ${location.pathname === "/cars" ? "underline underline-offset-4" : "hover:underline underline-offset-4"}`}
            >
              Cars
            </Link>
            <Link
              to="/clothing"
              className={`text-m font-medium ${location.pathname === "/clothing" ? "underline underline-offset-4" : "hover:underline underline-offset-4"}`}
            >
              Clothing
            </Link>
            <Link
              to="/how-it-works"
              className={`text-m font-medium ${location.pathname === "/how-it-works" ? "underline underline-offset-4" : "hover:underline underline-offset-4"}`}
            >
              How It Works
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* <Link
              to="/sign-in"
              className={`text-m font-medium ${location.pathname === "/sign-in" ? "underline underline-offset-4" : "hover:underline underline-offset-4"}`}
            >
              Sign In
            </Link> */}
            <Link to="/sign-up">
              <button className="inline-flex items-center justify-center rounded-3xl text-white bg-[var(--secondary-color)] p-2 font-medium transition-colors border-2  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                Sign Up
              </button>
            </Link>
            
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 RentEase. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
