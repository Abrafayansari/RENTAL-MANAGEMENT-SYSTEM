
// // Button.tsx
// import { cva } from "class-variance-authority"

import { ItemContext } from "../../hooks/Context"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

// /**
//  * Button Variants
//  */
// const buttonVariants = cva(
//   "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         outline:
//           "border border-input hover:bg-accent hover:text-accent-foreground",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//       },
//       size: {
//         default: "h-10 py-2 px-4",
//         sm: "h-9 px-3 rounded-md text-sm",
//         lg: "h-11 px-8 rounded-md text-lg",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// /**
//  * Button Component
//  */
// export function Button({ children, className, variant, size, ...props }) {
//   return (
//     <button
//       className={cn(buttonVariants({ variant, size, className }))}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// export { buttonVariants }


export function Button({ children, className,route,context, variant = "default", size = "default", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md text-sm",
    lg: "h-11 px-8 rounded-md text-lg",
    icon: "h-10 w-10",
  }
const{Item,setItem}=useContext(ItemContext)



  const variantStyle = variants[variant] || variants.default
  const sizeStyle = sizes[size] || sizes.default
const navigate=useNavigate();
  return (
    
    <button onClick={()=>{
      setItem(context)
      navigate(route);
       
    }}  className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className || ""}`} {...props}>
      {children}
      
    </button>
  )
}
