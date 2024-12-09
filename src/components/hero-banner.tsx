import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroBannerProps {
  title: string
  description: string
  image: string
  variant?: "primary" | "secondary"
}

export function HeroBanner({ 
  title, 
  description, 
  image,
  variant = "primary" 
}: HeroBannerProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-[10px] p-6",
      variant === "primary" 
        ? "bg-gradient-to-r from-[#54A6FF] to-[#2F7CF0]" 
        : "bg-gradient-to-r from-[#4066E0] to-[#2949C6]"
    )}>
      {/* Diagonal stripes pattern for secondary variant */}
      {variant === "secondary" && (
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:100px_100px]" />
      )}
      
      <div className="relative flex flex-col gap-4">
        <div className="space-y-2 md:max-w-[60%]">
          <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="text-sm text-white/90 md:text-base">
            {description}
          </p>
        </div>

        <Button 
          variant={variant === "primary" ? "secondary" : "default"}
          className={cn(
            "w-fit",
            variant === "primary" 
              ? "bg-[#3563E9] text-white hover:bg-[#2849C3]" 
              : "bg-white/90 text-[#3563E9] hover:bg-white"
          )}
          size="lg"
          asChild
        >
          <Link href="/car-rent">
            Rental Car
          </Link>
        </Button>

        <div className="relative mt-4 h-40 md:h-52 lg:h-64">
          <Image
            src={image}
            alt="Featured car"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>
    </div>
  )
}

