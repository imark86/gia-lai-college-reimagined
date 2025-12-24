import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';
import {
  LayoutDashboard,
  Newspaper,
  GraduationCap,
  Building2,
  Users,
  LogOut,
  Home,
  FileText,
} from 'lucide-react';

const menuItems = [
  { title: 'Tổng quan', url: '/admin', icon: LayoutDashboard },
  { title: 'Tin tức & Sự kiện', url: '/admin/news', icon: Newspaper },
  { title: 'Ngành học', url: '/admin/programs', icon: GraduationCap },
  { title: 'Đơn vị', url: '/admin/departments', icon: Building2 },
  { title: 'Đăng ký tuyển sinh', url: '/admin/registrations', icon: FileText },
];

const AdminLayout: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/auth');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <Sidebar className="border-r">
          <div className="p-4 border-b">
            <h2 className="font-bold text-lg text-primary flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Admin Panel
            </h2>
          </div>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Quản lý nội dung</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.url}
                          end={item.url === '/admin'}
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                          activeClassName="bg-primary/10 text-primary font-medium"
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-auto">
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
                      >
                        <Home className="h-5 w-5" />
                        <span>Xem trang web</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-destructive/10 text-destructive transition-colors w-full"
                      >
                        <LogOut className="h-5 w-5" />
                        <span>Đăng xuất</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col min-h-screen">
          <header className="h-14 border-b bg-background/95 backdrop-blur flex items-center px-4 gap-4 sticky top-0 z-10">
            <SidebarTrigger />
            <div className="flex-1" />
            <span className="text-sm text-muted-foreground">
              {user?.email}
            </span>
          </header>
          
          <div className="flex-1 p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
