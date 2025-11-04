import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardHeader } from './ui/card'

interface LoginScreenProps {
  onNavigateToPasswordRecovery: () => void
  onNavigateToMenu: () => void
}

export function LoginScreen({ onNavigateToPasswordRecovery, onNavigateToMenu }: LoginScreenProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    
    // Validar email enquanto digita (apenas se tiver conteúdo)
    if (value && !validateEmail(value)) {
      setEmailError('Digite um email válido (ex: email@dominio.com)')
    } else {
      setEmailError('')
    }
  }

  const handleLogin = () => {
    // Validar campos vazios
    if (!email || !password) {
      alert('Por favor, preencha email e senha')
      return
    }
    
    // Validar formato do email
    if (!validateEmail(email)) {
      alert('Por favor, digite um email válido (ex: email@dominio.com)')
      setEmailError('Digite um email válido (ex: email@dominio.com)')
      return
    }
    
    // Mock login - in real app would authenticate
    console.log('Login attempt:', { email, password })
    onNavigateToMenu()
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-sm border border-gray-200">
      <CardHeader className="text-center pb-6">
        <h1 className="text-xl text-gray-800 mb-6">Sistema de Doação de Roupas para Instituições</h1>
        <h2 className="text-2xl text-gray-800">Login Institucional</h2>
        <p className="text-sm text-gray-600 mt-2">Acesso restrito para funcionários da instituição</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-800">Email *</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={`bg-gray-50 border-gray-300 rounded-md ${emailError ? 'border-red-500 focus:border-red-500' : ''}`}
            placeholder="seu.email@instituicao.org"
          />
          {emailError && (
            <p className="text-red-600 text-sm mt-1">{emailError}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-800">Senha *</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border-gray-300 rounded-md"
            placeholder="••••••••"
          />
        </div>
        
        <Button 
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md h-12"
        >
          Entrar no Sistema
        </Button>
        
        <div className="text-center">
          <button 
            onClick={onNavigateToPasswordRecovery}
            className="text-blue-600 hover:text-blue-700 underline text-sm"
          >
            Esqueceu sua senha?
          </button>
        </div>
      </CardContent>
    </Card>
  )
}