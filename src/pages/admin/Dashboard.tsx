import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper, GraduationCap, Building2, FileText, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const Dashboard: React.FC = () => {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const [newsRes, programsRes, departmentsRes, registrationsRes] = await Promise.all([
        supabase.from('news').select('id, is_published', { count: 'exact' }),
        supabase.from('programs').select('id, is_active', { count: 'exact' }),
        supabase.from('departments').select('id, is_active', { count: 'exact' }),
        supabase.from('admission_registrations').select('id, status', { count: 'exact' }),
      ]);

      const pendingRegistrations = registrationsRes.data?.filter(r => r.status === 'pending').length || 0;

      return {
        news: newsRes.count || 0,
        publishedNews: newsRes.data?.filter(n => n.is_published).length || 0,
        programs: programsRes.count || 0,
        activePrograms: programsRes.data?.filter(p => p.is_active).length || 0,
        departments: departmentsRes.count || 0,
        activeDepartments: departmentsRes.data?.filter(d => d.is_active).length || 0,
        registrations: registrationsRes.count || 0,
        pendingRegistrations,
      };
    },
  });

  const { data: recentRegistrations } = useQuery({
    queryKey: ['recent-registrations'],
    queryFn: async () => {
      const { data } = await supabase
        .from('admission_registrations')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      return data || [];
    },
  });

  const statCards = [
    {
      title: 'Tin tức',
      value: stats?.news || 0,
      subtitle: `${stats?.publishedNews || 0} đã xuất bản`,
      icon: Newspaper,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Ngành học',
      value: stats?.programs || 0,
      subtitle: `${stats?.activePrograms || 0} đang hoạt động`,
      icon: GraduationCap,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Đơn vị',
      value: stats?.departments || 0,
      subtitle: `${stats?.activeDepartments || 0} đang hoạt động`,
      icon: Building2,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Đăng ký tuyển sinh',
      value: stats?.registrations || 0,
      subtitle: `${stats?.pendingRegistrations || 0} chờ xử lý`,
      icon: FileText,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tổng quan</h1>
        <p className="text-muted-foreground mt-1">Chào mừng đến với trang quản trị</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Đăng ký gần đây
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentRegistrations && recentRegistrations.length > 0 ? (
              <div className="space-y-4">
                {recentRegistrations.map((reg) => (
                  <div key={reg.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                    <div>
                      <p className="font-medium">{reg.full_name}</p>
                      <p className="text-sm text-muted-foreground">{reg.program_name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {reg.status === 'pending' ? (
                        <span className="flex items-center gap-1 text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                          <AlertCircle className="h-3 w-3" />
                          Chờ xử lý
                        </span>
                      ) : reg.status === 'approved' ? (
                        <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          <CheckCircle className="h-3 w-3" />
                          Đã duyệt
                        </span>
                      ) : (
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">
                          {reg.status}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">Chưa có đăng ký nào</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Hướng dẫn nhanh
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">📰 Quản lý Tin tức</h4>
                <p className="text-sm text-muted-foreground">
                  Tạo, chỉnh sửa và xuất bản các bài tin tức, thông báo, sự kiện.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">🎓 Quản lý Ngành học</h4>
                <p className="text-sm text-muted-foreground">
                  Cập nhật thông tin các ngành đào tạo, học phí, cơ hội nghề nghiệp.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">🏛️ Quản lý Đơn vị</h4>
                <p className="text-sm text-muted-foreground">
                  Quản lý thông tin các Khoa, Phòng ban, Trung tâm.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
