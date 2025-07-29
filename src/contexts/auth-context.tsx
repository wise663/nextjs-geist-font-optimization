"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
  }
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: RegisterData) => Promise<boolean>
  logout: () => void
  updateProfile: (userData: Partial<User>) => void
}

interface RegisterData {
  email: string
  password: string
  name: string
  phone?: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users for demonstration
const mockUsers: (User & { password: string })[] = [
  {
    id: '1',
    email: 'demo@naijashop.com',
    password: 'demo123',
    name: 'Demo User',
    phone: '+234 801 234 5678',
    address: {
      street: '123 Lagos Street',
      city: 'Lagos',
      state: 'Lagos',
      zipCode: '100001'
    }
  }
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  })

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('naijashop_user')
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser)
        setState({
          user,
          isLoading: false,
          isAuthenticated: true,
        })
      } catch {
        localStorage.removeItem('naijashop_user')
        setState(prev => ({ ...prev, isLoading: false }))
      }
    } else {
      setState(prev => ({ ...prev, isLoading: false }))
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setState(prev => ({ ...prev, isLoading: true }))
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const user = mockUsers.find(u => u.email === email && u.password === password)
    
    if (user) {
      const { password: _, ...userWithoutPassword } = user
      setState({
        user: userWithoutPassword,
        isLoading: false,
        isAuthenticated: true,
      })
      localStorage.setItem('naijashop_user', JSON.stringify(userWithoutPassword))
      return true
    }
    
    setState(prev => ({ ...prev, isLoading: false }))
    return false
  }

  const register = async (userData: RegisterData): Promise<boolean> => {
    setState(prev => ({ ...prev, isLoading: true }))
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === userData.email)
    if (existingUser) {
      setState(prev => ({ ...prev, isLoading: false }))
      return false
    }
    
    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      name: userData.name,
      phone: userData.phone,
    }
    
    // Add to mock users (in real app, this would be an API call)
    mockUsers.push({ ...newUser, password: userData.password })
    
    setState({
      user: newUser,
      isLoading: false,
      isAuthenticated: true,
    })
    localStorage.setItem('naijashop_user', JSON.stringify(newUser))
    return true
  }

  const logout = () => {
    setState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    })
    localStorage.removeItem('naijashop_user')
  }

  const updateProfile = (userData: Partial<User>) => {
    if (state.user) {
      const updatedUser = { ...state.user, ...userData }
      setState(prev => ({ ...prev, user: updatedUser }))
      localStorage.setItem('naijashop_user', JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
