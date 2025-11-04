import { Button } from './ui/button'
import { Card, CardContent, CardHeader } from './ui/card'
import { ArrowLeft, Package, BarChart3, UserPlus, Search, Users, UserCheck, FileBarChart } from 'lucide-react'

interface MenuScreenProps {
  onNavigateToDonor: () => void
  onNavigateToBeneficiary: () => void
  onNavigateToProduct: () => void
  onNavigateToStock: () => void
  onNavigateToSearch: () => void
  onNavigateToBeneficiarySearch: () => void
  onNavigateToReports: () => void
  onBack: () => void
}

export function MenuScreen({ onNavigateToDonor, onNavigateToBeneficiary, onNavigateToProduct, onNavigateToStock, onNavigateToSearch, onNavigateToBeneficiarySearch, onNavigateToReports, onBack }: MenuScreenProps) {
  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-sm border border-gray-200">
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="p-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1" />
        </div>
        <h1 className="text-xl text-gray-800 mb-6">Sistema de Doação de Roupas para Instituições</h1>
        <h2 className="text-2xl text-gray-800">Menu Principal</h2>
        <p className="text-sm text-gray-600 mt-2">Painel de controle da instituição</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={onNavigateToDonor}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-md h-16 flex items-center justify-center gap-3"
        >
          <UserPlus className="h-5 w-5" />
          <span>Cadastrar Doador</span>
        </Button>
        
        <Button 
          onClick={onNavigateToBeneficiary}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md h-16 flex items-center justify-center gap-3"
        >
          <Users className="h-5 w-5" />
          <span>Cadastrar Beneficiário</span>
        </Button>
        
        <Button 
          onClick={onNavigateToSearch}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-md h-16 flex items-center justify-center gap-3"
        >
          <Search className="h-5 w-5" />
          <span>Pesquisar Doador</span>
        </Button>
        
        <Button 
          onClick={onNavigateToBeneficiarySearch}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-md h-16 flex items-center justify-center gap-3"
        >
          <UserCheck className="h-5 w-5" />
          <span>Pesquisar Beneficiário</span>
        </Button>
        
        <Button 
          onClick={onNavigateToProduct}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md h-16 flex items-center justify-center gap-3"
        >
          <Package className="h-5 w-5" />
          <span>Cadastrar Roupa</span>
        </Button>
        
        <Button 
          onClick={onNavigateToStock}
          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md h-16 flex items-center justify-center gap-3"
        >
          <BarChart3 className="h-5 w-5" />
          <span>Ver Estoque de Roupas</span>
        </Button>
        
        <Button 
          onClick={onNavigateToReports}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-md h-16 flex items-center justify-center gap-3"
        >
          <FileBarChart className="h-5 w-5" />
          <span>Relatórios de Doações</span>
        </Button>
      </CardContent>
    </Card>
  )
}