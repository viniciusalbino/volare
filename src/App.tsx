// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
// ⚠️ Footer REMOVIDO para evitar duplicação

// ---------- React Query ----------
const queryClient = new QueryClient();

// ---------- Layout --------------
/**
 * Layout global com Header fixo e <Outlet /> para o conteúdo das rotas.
 * O Footer permanece apenas nas páginas que realmente precisarem dele,
 * evitando exibição duplicada na home.
 */
const Layout = () => (
  <>
    <Header />
    <main className="min-h-screen bg-white">
      <Outlet />
    </main>
  </>
);

// ---------- App ------------------
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Um único sistema de toast */}
      <Toaster />

      <BrowserRouter>
        <Routes>
          {/* Rotas que herdam o layout com Header */}
          <Route element={<Layout />}>
            <Route index element={<Index />} />
            {/* Adicione novas rotas aqui, acima do catch‑all */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;