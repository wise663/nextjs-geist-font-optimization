"use client"

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Shirt, 
  Smartphone, 
  Home, 
  Utensils, 
  Palette, 
  Baby,
  Dumbbell,
  Book
} from 'lucide-react'

const categories = [
  {
    id: 'fashion',
    name: 'Fashion & Clothing',
    description: 'Traditional and modern Nigerian fashion',
    icon: Shirt,
    color: 'bg-pink-100 text-pink-600',
    count: '2,450+ items'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and tech products',
    icon: Smartphone,
    color: 'bg-blue-100 text-blue-600',
    count: '1,200+ items'
  },
  {
    id: 'home',
    name: 'Home & Living',
    description: 'Furniture, decor, and household items',
    icon: Home,
    color: 'bg-green-100 text-green-600',
    count: '890+ items'
  },
  {
    id: 'food',
    name: 'Food & Beverages',
    description: 'Local delicacies and fresh produce',
    icon: Utensils,
    color: 'bg-orange-100 text-orange-600',
    count: '650+ items'
  },
  {
    id: 'arts',
    name: 'Arts & Crafts',
    description: 'Handmade Nigerian crafts and artwork',
    icon: Palette,
    color: 'bg-purple-100 text-purple-600',
    count: '420+ items'
  },
  {
    id: 'baby',
    name: 'Baby & Kids',
    description: 'Everything for children and babies',
    icon: Baby,
    color: 'bg-yellow-100 text-yellow-600',
    count: '380+ items'
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    description: 'Sports equipment and fitness gear',
    icon: Dumbbell,
    color: 'bg-red-100 text-red-600',
    count: '290+ items'
  },
  {
    id: 'books',
    name: 'Books & Education',
    description: 'Educational materials and literature',
    icon: Book,
    color: 'bg-indigo-100 text-indigo-600',
    count: '180+ items'
  }
]

export function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of Nigerian products across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.id} href={`/categories/${category.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      {category.description}
                    </p>
                    
                    <p className="text-xs font-medium text-green-600">
                      {category.count}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/categories">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View All Categories
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
