"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShoppingBag, Truck, Shield } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Shop the Best of
                <span className="block text-yellow-300">Nigeria</span>
              </h1>
              <p className="text-xl text-green-100 max-w-lg">
                Discover authentic Nigerian products, from fashion to food, electronics to crafts. 
                Fast delivery nationwide with secure payments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" variant="secondary" className="group">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/categories">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Browse Categories
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Fast Delivery</p>
                  <p className="text-sm text-green-100">Nationwide shipping</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Secure Payment</p>
                  <p className="text-sm text-green-100">100% protected</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Quality Products</p>
                  <p className="text-sm text-green-100">Verified sellers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {/* Product Cards */}
                <div className="bg-white rounded-lg p-4 text-gray-800">
                  <div className="h-20 bg-gray-200 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-sm">Nigerian Fashion</h3>
                  <p className="text-xs text-gray-600">Traditional & Modern</p>
                  <p className="font-bold text-green-600 mt-2">₦15,000</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 text-gray-800 mt-8">
                  <div className="h-20 bg-gray-200 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-sm">Local Crafts</h3>
                  <p className="text-xs text-gray-600">Handmade Items</p>
                  <p className="font-bold text-green-600 mt-2">₦8,500</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 text-gray-800 -mt-4">
                  <div className="h-20 bg-gray-200 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-sm">Electronics</h3>
                  <p className="text-xs text-gray-600">Latest Tech</p>
                  <p className="font-bold text-green-600 mt-2">₦45,000</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 text-gray-800 mt-4">
                  <div className="h-20 bg-gray-200 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-sm">Food & Spices</h3>
                  <p className="text-xs text-gray-600">Fresh & Organic</p>
                  <p className="font-bold text-green-600 mt-2">₦3,200</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                50% OFF
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                Free Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
    </section>
  )
}
