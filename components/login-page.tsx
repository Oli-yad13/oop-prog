"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"phone" | "email">("phone")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="flex items-start">
          <button className="text-gray-500 hover:text-gray-700">
            <ArrowLeft size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="w-48 h-24 relative">
            <Image src="/images/car-logo.png" alt="Classic Car Logo" fill className="object-contain" priority />
          </div>

          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
        </div>

        <div className="mt-6">
          <div className="flex rounded-lg overflow-hidden border border-gray-200">
            <button
              onClick={() => setActiveTab("phone")}
              className={cn(
                "flex-1 py-3 text-center font-medium",
                activeTab === "phone" ? "bg-white text-indigo-900" : "bg-gray-100 text-gray-500",
              )}
            >
              Phone
            </button>
            <button
              onClick={() => setActiveTab("email")}
              className={cn(
                "flex-1 py-3 text-center font-medium",
                activeTab === "email" ? "bg-white text-indigo-900" : "bg-gray-100 text-gray-500",
              )}
            >
              Email
            </button>
          </div>

          <form className="mt-8 space-y-6">
            {activeTab === "phone" ? (
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your phone number"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex justify-end">
              <Link href="#" className="text-indigo-700 hover:text-indigo-800 text-sm">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-900 text-white font-medium rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/" className="text-gray-800 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
