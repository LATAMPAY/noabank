"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "es", name: "Español", flag: "/argentina-flag.png" },
  { code: "en", name: "English", flag: "/placeholder.svg?height=20&width=30" },
  { code: "pt", name: "Português", flag: "/placeholder.svg?height=20&width=30" },
]

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 h-9 px-2">
          <Globe className="h-4 w-4 mr-1" />
          <span className="hidden md:inline">{currentLanguage.name}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentLanguage(language)}
          >
            <div className="w-5 h-4 relative overflow-hidden rounded-sm">
              <Image src={language.flag || "/placeholder.svg"} alt={language.name} fill className="object-cover" />
            </div>
            <span>{language.name}</span>
            {currentLanguage.code === language.code && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
