import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NganhDetail from "./pages/NganhDetail";
import TinTuc from "./pages/TinTuc";
import TinTucDetail from "./pages/TinTucDetail";
import KhoaDetail from "./pages/KhoaDetail";
import FAQ from "./pages/FAQ";
import DangKyTuyenSinh from "./pages/DangKyTuyenSinh";
import NotFound from "./pages/NotFound";
import AdminAuth from "./pages/AdminAuth";
import AdminLayout from "./components/admin/AdminLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";
import NewsManager from "./pages/admin/NewsManager";
import ProgramsManager from "./pages/admin/ProgramsManager";
import DepartmentsManager from "./pages/admin/DepartmentsManager";
import RegistrationsManager from "./pages/admin/RegistrationsManager";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
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
            <Route path="/dang-ky-tuyen-sinh" element={<DangKyTuyenSinh />} />
            
            {/* Admin Routes */}
            <Route path="/admin/auth" element={<AdminAuth />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="news" element={<NewsManager />} />
              <Route path="programs" element={<ProgramsManager />} />
              <Route path="departments" element={<DepartmentsManager />} />
              <Route path="registrations" element={<RegistrationsManager />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
