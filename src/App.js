import { Outlet } from 'react-router-dom'
import { AuthContextProvider } from './components/context/AuthContext'
import Navbar from './components/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
