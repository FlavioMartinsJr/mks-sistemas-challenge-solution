import { AppRoutes } from './AppRoutes.tsx'
import { QueryClient , QueryClientProvider } from "@tanstack/react-query"
import "../assets/scss/global.scss";
import { ModalProvider,CartProvider } from './pages/header/contexts';
const queryClient = new QueryClient()

export function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <CartProvider>
        
          <AppRoutes/>
        
        </CartProvider>
      </ModalProvider>
    </QueryClientProvider>
  )
}

