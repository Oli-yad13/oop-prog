import type { Metadata } from "next"
import LoginPage from "@/components/login-page"

export const metadata: Metadata = {
  title: "Login | Classic Car",
  description: "Welcome back to your car rental",
  authors: [{ name: "Nathenael Tamirat" }],
}

export default function Login() {
  return <LoginPage />
}
