import { useState } from 'react'
import { LoginScreen } from './components/LoginScreen'
import { DonorRegistration } from './components/DonorRegistration'
import { BeneficiaryRegistration } from './components/BeneficiaryRegistration'
import { ProductRegistration } from './components/ProductRegistration'
import { MenuScreen } from './components/MenuScreen'
import { StockScreen } from './components/StockScreen'
import { DonorDonationsScreen } from './components/DonorDonationsScreen'
import { PasswordRecoveryScreen } from './components/PasswordRecoveryScreen'
import { DonorSearchScreen } from './components/DonorSearchScreen'
import { DonorProfileScreen } from './components/DonorProfileScreen'
import { BeneficiarySearchScreen } from './components/BeneficiarySearchScreen'
import { BeneficiaryProfileScreen } from './components/BeneficiaryProfileScreen'
import { ReportsScreen } from './components/ReportsScreen'

export type Donor = {
  id: string
  donorCode: string // Código único para identificação (ex: DOA001)
  name: string
  email: string
  phone: string
  cpf: string
}

export type Beneficiary = {
  id: string
  beneficiaryCode: string // Código único para identificação (ex: BEN001)
  name: string
  email: string
  phone: string
  cpf: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  zipCode: string
}

export type ClothingItem = {
  id: string
  type: string // Camiseta, Calça, Vestido, etc.
  size: string // P, M, G, GG, etc.
  color: string
  quality: string // Novo, Usado - Bom Estado, Usado - Estado Regular
  quantity: number
  donorId: string
  donatedAt: string
  beneficiaryId?: string // ID do beneficiário quando a roupa é distribuída
  distributedAt?: string // Data de distribuição
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'password-recovery' | 'donor' | 'beneficiary' | 'donor-donations' | 'menu' | 'product' | 'stock' | 'search' | 'profile' | 'beneficiary-search' | 'beneficiary-profile' | 'reports'>('login')
  const [currentDonor, setCurrentDonor] = useState<Donor | null>(null)
  const [currentBeneficiary, setCurrentBeneficiary] = useState<Beneficiary | null>(null)
  const [selectedDonorForProfile, setSelectedDonorForProfile] = useState<Donor | null>(null)
  const [selectedBeneficiaryForProfile, setSelectedBeneficiaryForProfile] = useState<Beneficiary | null>(null)
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([
    {
      id: 'beneficiary1',
      beneficiaryCode: 'BEN001',
      name: 'José da Silva',
      email: 'jose.silva@email.com',
      phone: '(11) 98765-4321',
      cpf: '11122233344',
      street: 'Rua das Flores',
      number: '123',
      complement: 'Apt 45',
      neighborhood: 'Vila Madalena',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '05421-001'
    },
    {
      id: 'beneficiary2',
      beneficiaryCode: 'BEN002',
      name: 'Maria dos Santos',
      email: 'maria.santos@email.com',
      phone: '(11) 97654-3210',
      cpf: '55566677788',
      street: 'Av. Paulista',
      number: '456',
      complement: '',
      neighborhood: 'Bela Vista',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01310-100'
    },
    {
      id: 'beneficiary3',
      beneficiaryCode: 'BEN003',
      name: 'Antonio Oliveira',
      email: 'antonio.oliveira@email.com',
      phone: '(21) 96543-2109',
      cpf: '99988877766',
      street: 'Rua do Sol',
      number: '789',
      complement: 'Casa 2',
      neighborhood: 'Copacabana',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '22071-900'
    }
  ])
  const [donors, setDonors] = useState<Donor[]>([
    {
      id: 'donor1',
      donorCode: 'DOA001',
      name: 'Maria Silva',
      email: 'maria.silva@email.com',
      phone: '(11) 99999-1234',
      cpf: '12345678901'
    },
    {
      id: 'donor2',
      donorCode: 'DOA002',
      name: 'João Santos',
      email: 'joao.santos@email.com',
      phone: '(11) 98888-5678',
      cpf: '98765432109'
    },
    {
      id: 'donor3',
      donorCode: 'DOA003',
      name: 'Ana Costa',
      email: 'ana.costa@email.com',
      phone: '(21) 97777-2345',
      cpf: '45678912301'
    },
    {
      id: 'donor4',
      donorCode: 'DOA004',
      name: 'Carlos Oliveira',
      email: 'carlos.oliveira@email.com',
      phone: '(11) 96666-9876',
      cpf: '78912345602'
    },
    {
      id: 'donor5',
      donorCode: 'DOA005',
      name: 'Fernanda Lima',
      email: 'fernanda.lima@email.com',
      phone: '(85) 95555-4321',
      cpf: '32165498703'
    },
    {
      id: 'donor6',
      donorCode: 'DOA006',
      name: 'Roberto Almeida',
      email: 'roberto.almeida@email.com',
      phone: '(31) 94444-8765',
      cpf: '65432198704'
    },
    {
      id: 'donor7',
      donorCode: 'DOA007',
      name: 'Juliana Pereira',
      email: 'juliana.pereira@email.com',
      phone: '(47) 93333-5432',
      cpf: '85296374105'
    }
  ])
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([
    // Doações da Maria Silva (DOA001)
    {
      id: '1',
      type: 'Camiseta',
      size: 'M',
      color: 'Azul',
      quality: 'Usado - Bom Estado',
      quantity: 5,
      donorId: 'donor1',
      donatedAt: '2024-01-15'
    },
    {
      id: '2',
      type: 'Calça Jeans',
      size: 'G',
      color: 'Azul Escuro',
      quality: 'Novo',
      quantity: 3,
      donorId: 'donor1',
      donatedAt: '2024-01-15'
    },
    {
      id: '3',
      type: 'Blusa',
      size: 'M',
      color: 'Rosa',
      quality: 'Usado - Excelente Estado',
      quantity: 2,
      donorId: 'donor1',
      donatedAt: '2024-02-20'
    },
    // Doações do João Santos (DOA002)
    {
      id: '4',
      type: 'Vestido',
      size: 'P',
      color: 'Vermelho',
      quality: 'Usado - Bom Estado',
      quantity: 2,
      donorId: 'donor2',
      donatedAt: '2024-01-16'
    },
    {
      id: '5',
      type: 'Camisa',
      size: 'G',
      color: 'Branco',
      quality: 'Novo',
      quantity: 4,
      donorId: 'donor2',
      donatedAt: '2024-03-10'
    },
    // Doações da Ana Costa (DOA003)
    {
      id: '6',
      type: 'Camiseta',
      size: 'P',
      color: 'Verde',
      quality: 'Novo',
      quantity: 8,
      donorId: 'donor3',
      donatedAt: '2024-02-05'
    },
    {
      id: '7',
      type: 'Short',
      size: 'M',
      color: 'Preto',
      quality: 'Usado - Bom Estado',
      quantity: 3,
      donorId: 'donor3',
      donatedAt: '2024-02-05'
    },
    {
      id: '8',
      type: 'Saia',
      size: 'P',
      color: 'Azul Marinho',
      quality: 'Usado - Excelente Estado',
      quantity: 1,
      donorId: 'donor3',
      donatedAt: '2024-03-15'
    },
    // Doações do Carlos Oliveira (DOA004)
    {
      id: '9',
      type: 'Calça Social',
      size: 'G',
      color: 'Cinza',
      quality: 'Usado - Bom Estado',
      quantity: 2,
      donorId: 'donor4',
      donatedAt: '2024-01-20'
    },
    {
      id: '10',
      type: 'Jaqueta',
      size: 'G',
      color: 'Preto',
      quality: 'Novo',
      quantity: 1,
      donorId: 'donor4',
      donatedAt: '2024-01-20'
    },
    {
      id: '11',
      type: 'Tênis',
      size: '42',
      color: 'Branco',
      quality: 'Usado - Bom Estado',
      quantity: 1,
      donorId: 'donor4',
      donatedAt: '2024-02-28'
    },
    // Doações da Fernanda Lima (DOA005)
    {
      id: '12',
      type: 'Vestido',
      size: 'M',
      color: 'Floral',
      quality: 'Usado - Excelente Estado',
      quantity: 3,
      donorId: 'donor5',
      donatedAt: '2024-03-01'
    },
    {
      id: '13',
      type: 'Sandália',
      size: '37',
      color: 'Bege',
      quality: 'Usado - Bom Estado',
      quantity: 2,
      donorId: 'donor5',
      donatedAt: '2024-03-01'
    },
    // Doações do Roberto Almeida (DOA006)
    {
      id: '14',
      type: 'Moletom',
      size: 'GG',
      color: 'Cinza Escuro',
      quality: 'Novo',
      quantity: 2,
      donorId: 'donor6',
      donatedAt: '2024-02-10'
    },
    {
      id: '15',
      type: 'Bermuda',
      size: 'G',
      color: 'Azul',
      quality: 'Usado - Bom Estado',
      quantity: 4,
      donorId: 'donor6',
      donatedAt: '2024-02-10'
    },
    {
      id: '16',
      type: 'Camiseta',
      size: 'GG',
      color: 'Amarelo',
      quality: 'Usado - Excelente Estado',
      quantity: 6,
      donorId: 'donor6',
      donatedAt: '2024-03-20'
    },
    // Doações da Juliana Pereira (DOA007)
    {
      id: '17',
      type: 'Casaco',
      size: 'M',
      color: 'Marrom',
      quality: 'Usado - Bom Estado',
      quantity: 1,
      donorId: 'donor7',
      donatedAt: '2024-01-25'
    },
    {
      id: '18',
      type: 'Calça Jeans',
      size: 'P',
      color: 'Azul Claro',
      quality: 'Novo',
      quantity: 2,
      donorId: 'donor7',
      donatedAt: '2024-01-25'
    },
    {
      id: '19',
      type: 'Blusa',
      size: 'P',
      color: 'Lilás',
      quality: 'Usado - Excelente Estado',
      quantity: 4,
      donorId: 'donor7',
      donatedAt: '2024-03-05'
    },
    // Mais doações recentes para enriquecer relatórios
    {
      id: '20',
      type: 'Camiseta',
      size: 'M',
      color: 'Preto',
      quality: 'Novo',
      quantity: 10,
      donorId: 'donor1',
      donatedAt: '2024-10-15',
      beneficiaryId: 'beneficiary1',
      distributedAt: '2024-10-20'
    },
    {
      id: '21',
      type: 'Calça Jeans',
      size: 'G',
      color: 'Azul',
      quality: 'Usado - Bom Estado',
      quantity: 0,
      donorId: 'donor2',
      donatedAt: '2024-10-18',
      beneficiaryId: 'beneficiary1',
      distributedAt: '2024-10-25'
    },
    {
      id: '22',
      type: 'Vestido',
      size: 'M',
      color: 'Vermelho',
      quality: 'Novo',
      quantity: 0,
      donorId: 'donor3',
      donatedAt: '2024-10-20',
      beneficiaryId: 'beneficiary2',
      distributedAt: '2024-10-22'
    },
    {
      id: '23',
      type: 'Short',
      size: 'P',
      color: 'Azul',
      quality: 'Usado - Excelente Estado',
      quantity: 0,
      donorId: 'donor4',
      donatedAt: '2024-10-22',
      beneficiaryId: 'beneficiary2',
      distributedAt: '2024-10-24'
    },
    {
      id: '24',
      type: 'Camiseta',
      size: 'G',
      color: 'Branco',
      quality: 'Novo',
      quantity: 0,
      donorId: 'donor6',
      donatedAt: '2024-10-25',
      beneficiaryId: 'beneficiary1',
      distributedAt: '2024-10-26'
    },
    {
      id: '25',
      type: 'Blusa',
      size: 'M',
      color: 'Azul',
      quality: 'Usado - Bom Estado',
      quantity: 0,
      donorId: 'donor1',
      donatedAt: '2024-10-28',
      beneficiaryId: 'beneficiary3',
      distributedAt: '2024-10-29'
    },
    {
      id: '26',
      type: 'Calça Social',
      size: 'G',
      color: 'Preto',
      quality: 'Novo',
      quantity: 0,
      donorId: 'donor2',
      donatedAt: '2024-10-30',
      beneficiaryId: 'beneficiary2',
      distributedAt: '2024-10-31'
    },
    {
      id: '27',
      type: 'Camiseta',
      size: 'P',
      color: 'Verde',
      quality: 'Novo',
      quantity: 5,
      donorId: 'donor6',
      donatedAt: '2024-11-01'
    },
    {
      id: '28',
      type: 'Bermuda',
      size: 'M',
      color: 'Preto',
      quality: 'Usado - Bom Estado',
      quantity: 3,
      donorId: 'donor3',
      donatedAt: '2024-11-02'
    },
    // Mais exemplos para relatórios - Outubro 2024
    {
      id: '29',
      type: 'Tênis',
      size: '38',
      color: 'Preto',
      quality: 'Usado - Bom Estado',
      quantity: 0,
      donorId: 'donor1',
      donatedAt: '2024-10-05',
      beneficiaryId: 'beneficiary2',
      distributedAt: '2024-10-10'
    },
    {
      id: '30',
      type: 'Camiseta',
      size: 'G',
      color: 'Branco',
      quality: 'Novo',
      quantity: 8,
      donorId: 'donor1',
      donatedAt: '2024-10-08'
    },
    {
      id: '31',
      type: 'Calça Jeans',
      size: 'M',
      color: 'Azul',
      quality: 'Usado - Excelente Estado',
      quantity: 0,
      donorId: 'donor6',
      donatedAt: '2024-10-10',
      beneficiaryId: 'beneficiary1',
      distributedAt: '2024-10-15'
    },
    {
      id: '32',
      type: 'Vestido',
      size: 'P',
      color: 'Rosa',
      quality: 'Novo',
      quantity: 4,
      donorId: 'donor3',
      donatedAt: '2024-10-12'
    },
    {
      id: '33',
      type: 'Sandália',
      size: '36',
      color: 'Marrom',
      quality: 'Usado - Bom Estado',
      quantity: 0,
      donorId: 'donor2',
      donatedAt: '2024-10-14',
      beneficiaryId: 'beneficiary3',
      distributedAt: '2024-10-16'
    },
    {
      id: '34',
      type: 'Moletom',
      size: 'G',
      color: 'Cinza',
      quality: 'Novo',
      quantity: 5,
      donorId: 'donor6',
      donatedAt: '2024-10-17'
    },
    {
      id: '35',
      type: 'Short',
      size: 'M',
      color: 'Azul',
      quality: 'Usado - Bom Estado',
      quantity: 0,
      donorId: 'donor4',
      donatedAt: '2024-10-19',
      beneficiaryId: 'beneficiary1',
      distributedAt: '2024-10-21'
    },
    {
      id: '36',
      type: 'Chinelo',
      size: '40',
      color: 'Azul',
      quality: 'Novo',
      quantity: 0,
      donorId: 'donor5',
      donatedAt: '2024-10-21',
      beneficiaryId: 'beneficiary2',
      distributedAt: '2024-10-23'
    },
    {
      id: '37',
      type: 'Camiseta',
      size: 'M',
      color: 'Amarelo',
      quality: 'Usado - Excelente Estado',
      quantity: 6,
      donorId: 'donor2',
      donatedAt: '2024-10-23'
    },
    {
      id: '38',
      type: 'Saia',
      size: 'P',
      color: 'Preto',
      quality: 'Novo',
      quantity: 0,
      donorId: 'donor7',
      donatedAt: '2024-10-25',
      beneficiaryId: 'beneficiary3',
      distributedAt: '2024-10-27'
    },
    {
      id: '39',
      type: 'Blusa',
      size: 'G',
      color: 'Verde',
      quality: 'Usado - Bom Estado',
      quantity: 7,
      donorId: 'donor3',
      donatedAt: '2024-10-26'
    },
    {
      id: '40',
      type: 'Jaqueta',
      size: 'M',
      color: 'Azul Marinho',
      quality: 'Novo',
      quantity: 2,
      donorId: 'donor4',
      donatedAt: '2024-10-28'
    },
    // Novembro 2024
    {
      id: '41',
      type: 'Tênis',
      size: '42',
      color: 'Branco',
      quality: 'Usado - Excelente Estado',
      quantity: 2,
      donorId: 'donor1',
      donatedAt: '2024-11-01'
    },
    {
      id: '42',
      type: 'Camiseta',
      size: 'GG',
      color: 'Preto',
      quality: 'Novo',
      quantity: 12,
      donorId: 'donor6',
      donatedAt: '2024-11-02'
    },
    {
      id: '43',
      type: 'Calça Social',
      size: 'G',
      color: 'Cinza',
      quality: 'Usado - Bom Estado',
      quantity: 3,
      donorId: 'donor2',
      donatedAt: '2024-11-03'
    },
    // Agosto 2024 (para semestre)
    {
      id: '44',
      type: 'Camiseta',
      size: 'P',
      color: 'Laranja',
      quality: 'Novo',
      quantity: 15,
      donorId: 'donor3',
      donatedAt: '2024-08-05'
    },
    {
      id: '45',
      type: 'Calça Jeans',
      size: 'M',
      color: 'Azul Escuro',
      quality: 'Usado - Excelente Estado',
      quantity: 8,
      donorId: 'donor1',
      donatedAt: '2024-08-12'
    },
    {
      id: '46',
      type: 'Sapato',
      size: '35',
      color: 'Preto',
      quality: 'Usado - Bom Estado',
      quantity: 0,
      donorId: 'donor5',
      donatedAt: '2024-08-15',
      beneficiaryId: 'beneficiary1',
      distributedAt: '2024-08-20'
    },
    {
      id: '47',
      type: 'Vestido',
      size: 'M',
      color: 'Azul Claro',
      quality: 'Novo',
      quantity: 0,
      donorId: 'donor7',
      donatedAt: '2024-08-18',
      beneficiaryId: 'beneficiary3',
      distributedAt: '2024-08-22'
    },
    // Setembro 2024
    {
      id: '48',
      type: 'Camiseta',
      size: 'G',
      color: 'Cinza',
      quality: 'Novo',
      quantity: 10,
      donorId: 'donor6',
      donatedAt: '2024-09-03'
    },
    {
      id: '49',
      type: 'Short',
      size: 'P',
      color: 'Vermelho',
      quality: 'Usado - Bom Estado',
      quantity: 0,
      donorId: 'donor4',
      donatedAt: '2024-09-08',
      beneficiaryId: 'beneficiary2',
      distributedAt: '2024-09-10'
    },
    {
      id: '50',
      type: 'Blusa',
      size: 'M',
      color: 'Roxo',
      quality: 'Usado - Excelente Estado',
      quantity: 6,
      donorId: 'donor2',
      donatedAt: '2024-09-12'
    },
    {
      id: '51',
      type: 'Chinelo',
      size: '37',
      color: 'Rosa',
      quality: 'Novo',
      quantity: 0,
      donorId: 'donor3',
      donatedAt: '2024-09-15',
      beneficiaryId: 'beneficiary1',
      distributedAt: '2024-09-18'
    },
    {
      id: '52',
      type: 'Moletom',
      size: 'GG',
      color: 'Verde Escuro',
      quality: 'Novo',
      quantity: 4,
      donorId: 'donor1',
      donatedAt: '2024-09-20'
    },
    {
      id: '53',
      type: 'Bermuda',
      size: 'M',
      color: 'Bege',
      quality: 'Usado - Bom Estado',
      quantity: 0,
      donorId: 'donor6',
      donatedAt: '2024-09-25',
      beneficiaryId: 'beneficiary3',
      distributedAt: '2024-09-27'
    },
    // Janeiro 2024 - Início do ano com doações menores
    {
      id: '54',
      type: 'Camiseta',
      size: 'M',
      color: 'Azul',
      quality: 'Novo',
      quantity: 5,
      donorId: 'donor1',
      donatedAt: '2024-01-05'
    },
    {
      id: '55',
      type: 'Short',
      size: 'P',
      color: 'Preto',
      quality: 'Usado - Bom Estado',
      quantity: 3,
      donorId: 'donor2',
      donatedAt: '2024-01-12'
    },
    {
      id: '56',
      type: 'Blusa',
      size: 'G',
      color: 'Branco',
      quality: 'Novo',
      quantity: 4,
      donorId: 'donor3',
      donatedAt: '2024-01-20'
    },
    // Fevereiro 2024
    {
      id: '57',
      type: 'Camiseta',
      size: 'M',
      color: 'Vermelho',
      quality: 'Novo',
      quantity: 8,
      donorId: 'donor6',
      donatedAt: '2024-02-03'
    },
    {
      id: '58',
      type: 'Calça Jeans',
      size: 'G',
      color: 'Azul Escuro',
      quality: 'Usado - Excelente Estado',
      quantity: 6,
      donorId: 'donor1',
      donatedAt: '2024-02-10'
    },
    {
      id: '59',
      type: 'Vestido',
      size: 'M',
      color: 'Floral',
      quality: 'Novo',
      quantity: 5,
      donorId: 'donor5',
      donatedAt: '2024-02-15'
    },
    {
      id: '60',
      type: 'Tênis',
      size: '39',
      color: 'Rosa',
      quality: 'Usado - Bom Estado',
      quantity: 2,
      donorId: 'donor4',
      donatedAt: '2024-02-22'
    },
    // Março 2024
    {
      id: '61',
      type: 'Camiseta',
      size: 'P',
      color: 'Verde',
      quality: 'Novo',
      quantity: 10,
      donorId: 'donor3',
      donatedAt: '2024-03-05'
    },
    {
      id: '62',
      type: 'Bermuda',
      size: 'M',
      color: 'Azul',
      quality: 'Usado - Bom Estado',
      quantity: 7,
      donorId: 'donor2',
      donatedAt: '2024-03-12'
    },
    {
      id: '63',
      type: 'Jaqueta',
      size: 'G',
      color: 'Preto',
      quality: 'Novo',
      quantity: 4,
      donorId: 'donor6',
      donatedAt: '2024-03-18'
    },
    {
      id: '64',
      type: 'Sapato',
      size: '37',
      color: 'Marrom',
      quality: 'Usado - Excelente Estado',
      quantity: 3,
      donorId: 'donor7',
      donatedAt: '2024-03-25'
    },
    // Abril 2024
    {
      id: '65',
      type: 'Camiseta',
      size: 'G',
      color: 'Laranja',
      quality: 'Novo',
      quantity: 15,
      donorId: 'donor1',
      donatedAt: '2024-04-02'
    },
    {
      id: '66',
      type: 'Calça Social',
      size: 'M',
      color: 'Cinza',
      quality: 'Usado - Bom Estado',
      quantity: 5,
      donorId: 'donor4',
      donatedAt: '2024-04-08'
    },
    {
      id: '67',
      type: 'Blusa',
      size: 'P',
      color: 'Rosa',
      quality: 'Novo',
      quantity: 8,
      donorId: 'donor5',
      donatedAt: '2024-04-15'
    },
    {
      id: '68',
      type: 'Chinelo',
      size: '38',
      color: 'Verde',
      quality: 'Novo',
      quantity: 6,
      donorId: 'donor3',
      donatedAt: '2024-04-22'
    },
    // Maio 2024 - Crescimento
    {
      id: '69',
      type: 'Camiseta',
      size: 'M',
      color: 'Azul Claro',
      quality: 'Novo',
      quantity: 20,
      donorId: 'donor6',
      donatedAt: '2024-05-03'
    },
    {
      id: '70',
      type: 'Calça Jeans',
      size: 'G',
      color: 'Azul',
      quality: 'Usado - Excelente Estado',
      quantity: 12,
      donorId: 'donor1',
      donatedAt: '2024-05-10'
    },
    {
      id: '71',
      type: 'Moletom',
      size: 'G',
      color: 'Cinza',
      quality: 'Novo',
      quantity: 10,
      donorId: 'donor2',
      donatedAt: '2024-05-15'
    },
    {
      id: '72',
      type: 'Vestido',
      size: 'M',
      color: 'Vermelho',
      quality: 'Novo',
      quantity: 8,
      donorId: 'donor7',
      donatedAt: '2024-05-20'
    },
    {
      id: '73',
      type: 'Sandália',
      size: '36',
      color: 'Preto',
      quality: 'Usado - Bom Estado',
      quantity: 4,
      donorId: 'donor5',
      donatedAt: '2024-05-25'
    },
    // Junho 2024
    {
      id: '74',
      type: 'Camiseta',
      size: 'P',
      color: 'Roxo',
      quality: 'Novo',
      quantity: 18,
      donorId: 'donor3',
      donatedAt: '2024-06-05'
    },
    {
      id: '75',
      type: 'Short',
      size: 'M',
      color: 'Azul',
      quality: 'Usado - Bom Estado',
      quantity: 10,
      donorId: 'donor4',
      donatedAt: '2024-06-12'
    },
    {
      id: '76',
      type: 'Regata',
      size: 'G',
      color: 'Amarelo',
      quality: 'Novo',
      quantity: 7,
      donorId: 'donor6',
      donatedAt: '2024-06-18'
    },
    {
      id: '77',
      type: 'Tênis',
      size: '41',
      color: 'Azul',
      quality: 'Usado - Excelente Estado',
      quantity: 5,
      donorId: 'donor1',
      donatedAt: '2024-06-25'
    },
    // Julho 2024
    {
      id: '78',
      type: 'Camiseta',
      size: 'M',
      color: 'Verde Escuro',
      quality: 'Novo',
      quantity: 22,
      donorId: 'donor2',
      donatedAt: '2024-07-02'
    },
    {
      id: '79',
      type: 'Calça Jeans',
      size: 'M',
      color: 'Azul',
      quality: 'Usado - Bom Estado',
      quantity: 15,
      donorId: 'donor6',
      donatedAt: '2024-07-10'
    },
    {
      id: '80',
      type: 'Casaco',
      size: 'G',
      color: 'Preto',
      quality: 'Novo',
      quantity: 6,
      donorId: 'donor7',
      donatedAt: '2024-07-15'
    },
    {
      id: '81',
      type: 'Saia',
      size: 'P',
      color: 'Azul',
      quality: 'Usado - Excelente Estado',
      quantity: 9,
      donorId: 'donor5',
      donatedAt: '2024-07-22'
    }
  ])

  const generateDonorCode = () => {
    const nextNumber = donors.length + 1
    return `DOA${nextNumber.toString().padStart(3, '0')}`
  }

  const generateBeneficiaryCode = () => {
    const nextNumber = beneficiaries.length + 1
    return `BEN${nextNumber.toString().padStart(3, '0')}`
  }

  const addDonor = (newDonor: Omit<Donor, 'id' | 'donorCode'>) => {
    const donor: Donor = {
      ...newDonor,
      id: Date.now().toString(),
      donorCode: generateDonorCode()
    }
    setDonors(prev => [...prev, donor])
    setCurrentDonor(donor)
    return donor
  }

  const addBeneficiary = (newBeneficiary: Omit<Beneficiary, 'id' | 'beneficiaryCode'>) => {
    const beneficiary: Beneficiary = {
      ...newBeneficiary,
      id: Date.now().toString(),
      beneficiaryCode: generateBeneficiaryCode()
    }
    setBeneficiaries(prev => [...prev, beneficiary])
    setCurrentBeneficiary(beneficiary)
    return beneficiary
  }

  const addClothingItem = (newItem: Omit<ClothingItem, 'id' | 'donatedAt'>) => {
    const item: ClothingItem = {
      ...newItem,
      id: Date.now().toString(),
      donatedAt: new Date().toISOString().split('T')[0]
    }
    setClothingItems(prev => [...prev, item])
  }

  const updateClothingQuantity = (id: string, newQuantity: number) => {
    setClothingItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, newQuantity) }
          : item
      )
    )
  }

  const distributeClothing = (clothingId: string, beneficiaryId: string, quantityToDistribute: number) => {
    setClothingItems(prev => 
      prev.map(item => {
        if (item.id === clothingId) {
          const newQuantity = Math.max(0, item.quantity - quantityToDistribute)
          return { 
            ...item, 
            quantity: newQuantity,
            beneficiaryId: quantityToDistribute > 0 ? beneficiaryId : item.beneficiaryId,
            distributedAt: quantityToDistribute > 0 ? new Date().toISOString().split('T')[0] : item.distributedAt
          }
        }
        return item
      })
    )
  }

  const getCurrentDonorDonations = () => {
    if (!currentDonor) return []
    return clothingItems.filter(item => item.donorId === currentDonor.id)
  }

  const getDonorById = (donorId: string) => {
    return donors.find(donor => donor.id === donorId)
  }

  const getBeneficiaryById = (beneficiaryId: string) => {
    return beneficiaries.find(beneficiary => beneficiary.id === beneficiaryId)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onNavigateToPasswordRecovery={() => setCurrentScreen('password-recovery')} onNavigateToMenu={() => setCurrentScreen('menu')} />
      case 'password-recovery':
        return <PasswordRecoveryScreen onBack={() => setCurrentScreen('login')} />
      case 'donor':
        return <DonorRegistration onBack={() => setCurrentScreen('menu')} onRegisterDonor={addDonor} onNext={() => setCurrentScreen('donor-donations')} />
      case 'beneficiary':
        return <BeneficiaryRegistration onBack={() => setCurrentScreen('menu')} onRegisterBeneficiary={addBeneficiary} />
      case 'donor-donations':
        return <DonorDonationsScreen donor={currentDonor} donations={getCurrentDonorDonations()} onBack={() => setCurrentScreen('donor')} onNext={() => setCurrentScreen('menu')} />
      case 'menu':
        return <MenuScreen onNavigateToDonor={() => setCurrentScreen('donor')} onNavigateToBeneficiary={() => setCurrentScreen('beneficiary')} onNavigateToProduct={() => setCurrentScreen('product')} onNavigateToStock={() => setCurrentScreen('stock')} onNavigateToSearch={() => setCurrentScreen('search')} onNavigateToBeneficiarySearch={() => setCurrentScreen('beneficiary-search')} onNavigateToReports={() => setCurrentScreen('reports')} onBack={() => setCurrentScreen('login')} />
      case 'product':
        return <ProductRegistration onBack={() => setCurrentScreen('menu')} onAddClothing={addClothingItem} donors={donors} getDonorById={getDonorById} />
      case 'stock':
        return <StockScreen clothingItems={clothingItems} onUpdateQuantity={updateClothingQuantity} onDistributeClothing={distributeClothing} beneficiaries={beneficiaries} onBack={() => setCurrentScreen('menu')} getDonorById={getDonorById} getBeneficiaryById={getBeneficiaryById} />
      case 'search':
        return <DonorSearchScreen 
          donors={donors} 
          clothingItems={clothingItems} 
          onBack={() => setCurrentScreen('menu')} 
          onViewProfile={(donor) => {
            setSelectedDonorForProfile(donor)
            setCurrentScreen('profile')
          }}
        />
      case 'profile':
        return selectedDonorForProfile ? (
          <DonorProfileScreen 
            donor={selectedDonorForProfile} 
            clothingItems={clothingItems} 
            onBack={() => setCurrentScreen('search')} 
          />
        ) : (
          <div>Erro: Doador não encontrado</div>
        )
      case 'beneficiary-search':
        return <BeneficiarySearchScreen 
          beneficiaries={beneficiaries} 
          clothingItems={clothingItems} 
          onBack={() => setCurrentScreen('menu')} 
          onViewProfile={(beneficiary) => {
            setSelectedBeneficiaryForProfile(beneficiary)
            setCurrentScreen('beneficiary-profile')
          }}
        />
      case 'beneficiary-profile':
        return selectedBeneficiaryForProfile ? (
          <BeneficiaryProfileScreen 
            beneficiary={selectedBeneficiaryForProfile} 
            clothingItems={clothingItems} 
            onBack={() => setCurrentScreen('beneficiary-search')} 
          />
        ) : (
          <div>Erro: Beneficiário não encontrado</div>
        )
      case 'reports':
        return <ReportsScreen 
          clothingItems={clothingItems}
          donors={donors}
          beneficiaries={beneficiaries}
          getDonorById={getDonorById}
          getBeneficiaryById={getBeneficiaryById}
          onBack={() => setCurrentScreen('menu')} 
        />
      default:
        return <LoginScreen onNavigateToPasswordRecovery={() => setCurrentScreen('password-recovery')} onNavigateToMenu={() => setCurrentScreen('menu')} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {renderScreen()}
    </div>
  )
}