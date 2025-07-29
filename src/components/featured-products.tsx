"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'
import { toast } from 'sonner'

const featuredProducts = [
  {
    id: '1',
    name: 'Traditional Ankara Dress',
    price: 25000,
    originalPrice: 35000,
    image: '/placeholder.jpg',
    category: 'Fashion',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    description: 'Beautiful traditional Ankara dress with modern cut',
    discount: 29
  },
  {
    id: '2',
    name: 'Nigerian Jollof Rice Spice Mix',
    price: 3500,
    originalPrice: null,
    image: '/placeholder.jpg',
    category: 'Food',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    description: 'Authentic spice blend for perfect Jollof rice',
    discount: null
  },
  {
    id: '3',
    name: 'Handwoven Kente Cloth',
    price: 45000,
    originalPrice: 55000,
    image: '/placeholder.jpg',
    category: 'Arts & Crafts',
    rating: 4.7,
    reviews: 67,
    inStock: true,
    description: 'Authentic handwoven Kente cloth from skilled artisans',
    discount: 18
  },
  {
    id: '4',
    name: 'Samsung Galaxy A54 5G',
    price: 285000,
    originalPrice: 320000,
    image: '/placeholder.jpg',
    category: 'Electronics',
    rating: 4.6,
    reviews: 203,
    inStock: true,
    description: 'Latest Samsung smartphone with 5G connectivity',
    discount: 11
  }
]

export function FeaturedProducts() {
  const { addItem } = useCart()
  const [favorites, setFavorites] = useState<string[]>([])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
      inStock: product.inStock
    })
    toast.success(`${product.name} added to cart!`)
  }

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the best Nigerian products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Product Image</span>
                  </div>
                  
                  {product.discount && (
                    <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                      -{product.discount}%
                    </Badge>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        favorites.includes(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600'
                      }`} 
                    />
                  </Button>
                </div>

                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {product.category}
                  </Badge>

                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-green-600 transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-green-600">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
