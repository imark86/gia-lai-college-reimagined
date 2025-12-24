import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Search, Eye, Trash2, Loader2, CheckCircle, Clock, XCircle, Download, Mail, Phone, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface Registration {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  address: string;
  date_of_birth: string;
  gender: string;
  id_card_number: string;
  high_school: string;
  graduation_year: number;
  education_level: string;
  program_code: string;
  program_name: string;
  priority_group: string | null;
  notes: string | null;
  status: string;
  created_at: string;
}

const statusConfig: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  pending: { label: 'Chờ xử lý', icon: Clock, color: 'bg-yellow-100 text-yellow-700' },
  approved: { label: 'Đã duyệt', icon: CheckCircle, color: 'bg-green-100 text-green-700' },
  rejected: { label: 'Từ chối', icon: XCircle, color: 'bg-red-100 text-red-700' },
  contacted: { label: 'Đã liên hệ', icon: Phone, color: 'bg-blue-100 text-blue-700' },
};

const RegistrationsManager: React.FC = () => {
  const queryClient = useQueryClient();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<Registration | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const { data: registrations, isLoading } = useQuery({
    queryKey: ['admin-registrations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('admission_registrations')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data as Registration[];
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('admission_registrations')
        .update({ status })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-registrations'] });
      toast.success('Cập nhật trạng thái thành công');
    },
    onError: (error: any) => {
      toast.error('Lỗi: ' + error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('admission_registrations')
        .delete()
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-registrations'] });
      toast.success('Xóa thành công');
      setIsDetailOpen(false);
    },
    onError: (error: any) => {
      toast.error('Lỗi: ' + error.message);
    },
  });

  const filteredRegistrations = registrations?.filter((reg) => {
    const matchesSearch = 
      reg.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.phone.includes(searchQuery) ||
      reg.program_name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || reg.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  }) || [];

  const handleViewDetail = (item: Registration) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleStatusChange = (id: string, status: string) => {
    updateMutation.mutate({ id, status });
  };

  const exportToCSV = () => {
    if (!filteredRegistrations.length) {
      toast.error('Không có dữ liệu để xuất');
      return;
    }

    const headers = [
      'Họ tên', 'Email', 'Điện thoại', 'Địa chỉ', 'Ngày sinh', 'Giới tính',
      'CMND/CCCD', 'Trường THPT', 'Năm tốt nghiệp', 'Trình độ', 'Mã ngành',
      'Tên ngành', 'Đối tượng ưu tiên', 'Ghi chú', 'Trạng thái', 'Ngày đăng ký'
    ];

    const rows = filteredRegistrations.map((reg) => [
      reg.full_name,
      reg.email,
      reg.phone,
      reg.address,
      reg.date_of_birth,
      reg.gender,
      reg.id_card_number,
      reg.high_school,
      reg.graduation_year,
      reg.education_level,
      reg.program_code,
      reg.program_name,
      reg.priority_group || '',
      reg.notes || '',
      statusConfig[reg.status]?.label || reg.status,
      format(new Date(reg.created_at), 'dd/MM/yyyy HH:mm'),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `dang-ky-tuyen-sinh-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();
    toast.success('Xuất file thành công');
  };

  const stats = {
    total: registrations?.length || 0,
    pending: registrations?.filter(r => r.status === 'pending').length || 0,
    approved: registrations?.filter(r => r.status === 'approved').length || 0,
    rejected: registrations?.filter(r => r.status === 'rejected').length || 0,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Đăng ký tuyển sinh</h1>
          <p className="text-muted-foreground mt-1">Quản lý hồ sơ đăng ký xét tuyển</p>
        </div>
        
        <Button onClick={exportToCSV} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Xuất Excel
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-sm text-muted-foreground">Tổng đăng ký</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            <p className="text-sm text-muted-foreground">Chờ xử lý</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
            <p className="text-sm text-muted-foreground">Đã duyệt</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
            <p className="text-sm text-muted-foreground">Từ chối</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm theo tên, email, SĐT..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                {Object.entries(statusConfig).map(([value, config]) => (
                  <SelectItem key={value} value={value}>
                    {config.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : filteredRegistrations.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Họ tên</TableHead>
                  <TableHead>Liên hệ</TableHead>
                  <TableHead>Ngành đăng ký</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Ngày đăng ký</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRegistrations.map((item) => {
                  const status = statusConfig[item.status] || statusConfig.pending;
                  const StatusIcon = status.icon;
                  
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{item.full_name}</p>
                          <p className="text-xs text-muted-foreground">{item.gender}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {item.email}
                          </p>
                          <p className="flex items-center gap-1 text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {item.phone}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{item.program_name}</p>
                          <p className="text-xs text-muted-foreground">{item.program_code}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={item.status}
                          onValueChange={(value) => handleStatusChange(item.id, value)}
                        >
                          <SelectTrigger className={`w-32 h-8 text-xs ${status.color}`}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(statusConfig).map(([value, config]) => (
                              <SelectItem key={value} value={value}>
                                {config.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        {format(new Date(item.created_at), 'dd/MM/yyyy', { locale: vi })}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleViewDetail(item)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive"
                            onClick={() => {
                              if (confirm('Bạn có chắc muốn xóa hồ sơ này?')) {
                                deleteMutation.mutate(item.id);
                              }
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              {searchQuery || statusFilter !== 'all' 
                ? 'Không tìm thấy kết quả phù hợp'
                : 'Chưa có đăng ký nào'
              }
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Chi tiết hồ sơ đăng ký</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-3">Thông tin cá nhân</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Họ tên:</span> {selectedItem.full_name}</p>
                    <p><span className="text-muted-foreground">Giới tính:</span> {selectedItem.gender}</p>
                    <p><span className="text-muted-foreground">Ngày sinh:</span> {format(new Date(selectedItem.date_of_birth), 'dd/MM/yyyy')}</p>
                    <p><span className="text-muted-foreground">CMND/CCCD:</span> {selectedItem.id_card_number}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Liên hệ</h4>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      {selectedItem.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      {selectedItem.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      {selectedItem.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-3">Học vấn</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Trường THPT:</span> {selectedItem.high_school}</p>
                    <p><span className="text-muted-foreground">Năm tốt nghiệp:</span> {selectedItem.graduation_year}</p>
                    <p><span className="text-muted-foreground">Trình độ:</span> {selectedItem.education_level}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Đăng ký</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Ngành:</span> {selectedItem.program_name}</p>
                    <p><span className="text-muted-foreground">Mã ngành:</span> {selectedItem.program_code}</p>
                    {selectedItem.priority_group && (
                      <p><span className="text-muted-foreground">Ưu tiên:</span> {selectedItem.priority_group}</p>
                    )}
                  </div>
                </div>
              </div>

              {selectedItem.notes && (
                <div>
                  <h4 className="font-semibold mb-2">Ghi chú</h4>
                  <p className="text-sm bg-muted p-3 rounded-lg">{selectedItem.notes}</p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-sm text-muted-foreground">
                  Đăng ký lúc: {format(new Date(selectedItem.created_at), 'HH:mm dd/MM/yyyy', { locale: vi })}
                </div>
                <div className="flex items-center gap-2">
                  <Select
                    value={selectedItem.status}
                    onValueChange={(value) => {
                      handleStatusChange(selectedItem.id, value);
                      setSelectedItem({ ...selectedItem, status: value });
                    }}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(statusConfig).map(([value, config]) => (
                        <SelectItem key={value} value={value}>
                          {config.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegistrationsManager;
