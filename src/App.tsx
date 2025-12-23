import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NganhDetail from "./pages/NganhDetail";
import TinTuc from "./pages/TinTuc";
import TinTucDetail from "./pages/TinTucDetail";
import KhoaDetail from "./pages/KhoaDetail";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nganh/:slug" element={<NganhDetail />} />
          <Route path="/tin-tuc" element={<TinTuc />} />
          <Route path="/tin-tuc/:slug" element={<TinTucDetail />} />
          <Route path="/khoa/:slug" element={<KhoaDetail />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
