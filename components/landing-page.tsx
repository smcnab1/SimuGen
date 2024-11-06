/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BotMessageSquare } from "lucide-react"


export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="h-10 w-10" />
        <Link href="https://chatgpt.com/g/g-eTexeFjiJ-simugen">
        <Button className="ml-auto">
          <BotMessageSquare /> Give it a try
        </Button>
        </Link>

      </header>
      <main className="flex-1 flex items-center justify-center">
        <section className="w-full max-w-[1200px] px-4 md:px-8 lg:px-12 py-12 md:py-16 flex justify-center items-center">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Realistic Scenarios, Effortlessly
            </h1>
            <p className="max-w-[800px] text-muted-foreground mx-auto md:text-xl">
              SimuGen is a ChatGPT Model that helps healthcare educators, students, and professionals generate realistic
              scenarios quickly while following current UK guidelines.
            </p>
            <Link href="https://chatgpt.com/g/g-eTexeFjiJ-simugen">
              <Button>
                <BotMessageSquare /> Give it a try
              </Button>
            </Link>
            <img
              src="/screenshot.png"
              alt="Descriptive Alt Text"
              className="w-full h-auto max-w-[80%] object-cover rounded-lg mx-auto mt-4"
            />
          </div>
        </section>
      </main>
      <footer className="w-full h-14 flex items-center justify-center border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 SimuGen. All rights reserved.</p>
      </footer>
    </div>
  )
}
