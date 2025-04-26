import { Link, Outlet, useLocation } from "react-router-dom"

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-primary">
            RentEase
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            {[
              { path: "/properties", label: "Properties" },
              { path: "/cars", label: "Cars" },
              { path: "/clothing", label: "Clothing" },
              { path: "/how-it-works", label: "How It Works" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium ${
                  location.pathname === item.path
                    ? "underline underline-offset-4 text-primary"
                    : "hover:underline underline-offset-4 text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link to="/sign-up">
              <button className="rounded-full border-2 border-primary bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm text-muted-foreground md:h-24 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} RentEase. All rights reserved.</p>

          <nav className="flex gap-6">
            <Link to="#" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link to="#" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link to="#" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
