import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CustomerSupportChat } from "@/components/customer-support-chat"
import { CookieBanner } from "@/components/cookie-banner"
import { AccessibilityWidget } from "@/components/accessibility-widget"
import { BackToTop } from "@/components/back-to-top"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CustomerSupportChat />
      <CookieBanner />
      <AccessibilityWidget />
      <BackToTop />
    </div>
  )
}
