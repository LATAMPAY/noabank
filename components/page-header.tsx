import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: Array<{
    label: string
    href: string
  }>
  bgColor?: string
  textColor?: string
}

export default function PageHeader({
  title,
  description,
  breadcrumbs,
  bgColor = "bg-gradient-to-r from-blue-900 to-indigo-900",
  textColor = "text-white",
}: PageHeaderProps) {
  return (
    <section className={`py-12 md:py-16 ${bgColor} ${textColor}`}>
      <div className="container px-4 md:px-6">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-4 flex items-center gap-1 text-sm opacity-80">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" />
                {index === breadcrumbs.length - 1 ? (
                  <span>{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:underline">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{title}</h1>
        {description && <p className="mt-4 max-w-[700px] text-lg md:text-xl opacity-90">{description}</p>}
      </div>
    </section>
  )
}
