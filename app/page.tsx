import type { Metadata } from "next"
import SignupPage from "@/components/signup-page"

export const metadata: Metadata = {
  title: "Create Account | Classic Car",
  description: "Sign up to start renting car",
  authors: [{ name: "Nathenael Tamirat" }],
}

export default function Home() {
  return <SignupPage />
}
