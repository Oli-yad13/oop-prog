"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState<"phone" | "email">("phone")

  return (
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
  )
}
