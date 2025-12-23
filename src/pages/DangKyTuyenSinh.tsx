import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { GraduationCap, User, Phone, Mail, MapPin, School, Calendar, FileText, CheckCircle, Loader2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const registrationSchema = z.object({
  fullName: z.string().trim().min(2, "Họ tên phải có ít nhất 2 ký tự").max(100, "Họ tên không được quá 100 ký tự"),
  dateOfBirth: z.string().min(1, "Vui lòng chọn ngày sinh"),
  gender: z.string().min(1, "Vui lòng chọn giới tính"),
  idCardNumber: z.string().trim().min(9, "Số CCCD/CMND không hợp lệ").max(12, "Số CCCD/CMND không hợp lệ"),
  phone: z.string().trim().regex(/^(0[3-9])+([0-9]{8})$/, "Số điện thoại không hợp lệ"),
  email: z.string().trim().email("Email không hợp lệ").max(255, "Email không được quá 255 ký tự"),
  address: z.string().trim().min(10, "Địa chỉ phải có ít nhất 10 ký tự").max(500, "Địa chỉ không được quá 500 ký tự"),
  highSchool: z.string().trim().min(3, "Tên trường phải có ít nhất 3 ký tự").max(200, "Tên trường không được quá 200 ký tự"),
  graduationYear: z.string().min(1, "Vui lòng chọn năm tốt nghiệp"),
  programCode: z.string().min(1, "Vui lòng chọn ngành học"),
  priorityGroup: z.string().optional(),
  notes: z.string().max(1000, "Ghi chú không được quá 1000 ký tự").optional(),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const programs = [
  { code: "6510302", name: "Công nghệ kỹ thuật Cơ khí", level: "Cao đẳng" },
  { code: "6510305", name: "Công nghệ kỹ thuật Ô tô", level: "Cao đẳng" },
  { code: "6480201", name: "Công nghệ thông tin", level: "Cao đẳng" },
  { code: "6520201", name: "Kỹ thuật điện", level: "Cao đẳng" },
  { code: "6720201", name: "Dược", level: "Cao đẳng" },
  { code: "6720301", name: "Y sĩ đa khoa", level: "Cao đẳng" },
  { code: "6720501", name: "Điều dưỡng", level: "Cao đẳng" },
  { code: "6340301", name: "Kế toán", level: "Cao đẳng" },
  { code: "6340404", name: "Quản trị kinh doanh", level: "Cao đẳng" },
  { code: "6810201", name: "Du lịch", level: "Cao đẳng" },
  { code: "6620302", name: "Thú y", level: "Cao đẳng" },
  { code: "6620105", name: "Trồng trọt và BVTV", level: "Cao đẳng" },
  { code: "6210403", name: "Thiết kế đồ họa", level: "Cao đẳng" },
  { code: "5510399", name: "Sửa chữa máy nông nghiệp", level: "Trung cấp" },
  { code: "5620108", name: "Chăn nuôi - Thú y", level: "Trung cấp" },
];

const priorityGroups = [
  { value: "01", label: "Nhóm 01 - Con liệt sĩ, thương binh, bệnh binh..." },
  { value: "02", label: "Nhóm 02 - Dân tộc thiểu số, hộ nghèo..." },
  { value: "03", label: "Nhóm 03 - Con công nhân, nông dân..." },
  { value: "none", label: "Không thuộc diện ưu tiên" },
];

const currentYear = new Date().getFullYear();
const graduationYears = Array.from({ length: 10 }, (_, i) => currentYear - i);

const DangKyTuyenSinh = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      gender: "",
      idCardNumber: "",
      phone: "",
      email: "",
      address: "",
      highSchool: "",
      graduationYear: "",
      programCode: "",
      priorityGroup: "",
      notes: "",
    },
  });

  const onSubmit = async (data: RegistrationForm) => {
    setIsSubmitting(true);
    
    try {
      const selectedProgram = programs.find(p => p.code === data.programCode);
      
      // Save to database
      const { data: registration, error: dbError } = await supabase
        .from('admission_registrations')
        .insert({
          full_name: data.fullName,
          date_of_birth: data.dateOfBirth,
          gender: data.gender,
          id_card_number: data.idCardNumber,
          phone: data.phone,
          email: data.email,
          address: data.address,
          high_school: data.highSchool,
          graduation_year: parseInt(data.graduationYear),
          program_code: data.programCode,
          program_name: selectedProgram?.name || "",
          education_level: selectedProgram?.level || "Cao đẳng",
          priority_group: data.priorityGroup || null,
          notes: data.notes || null,
        })
        .select()
        .single();

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Không thể lưu thông tin đăng ký");
      }

      // Send confirmation email
      try {
        const { error: emailError } = await supabase.functions.invoke('send-registration-email', {
          body: {
            fullName: data.fullName,
            email: data.email,
            programName: selectedProgram?.name || "",
            programCode: data.programCode,
            registrationId: registration.id,
          },
        });

        if (emailError) {
          console.error("Email error:", emailError);
          // Don't throw - registration was successful, just email failed
          toast.warning("Đăng ký thành công nhưng không thể gửi email xác nhận");
        }
      } catch (emailErr) {
        console.error("Email sending failed:", emailErr);
      }

      setIsSuccess(true);
      toast.success("Đăng ký tuyển sinh thành công!");
      
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(error.message || "Có lỗi xảy ra, vui lòng thử lại");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <Helmet>
          <title>Đăng ký thành công - Trường Cao đẳng Gia Lai</title>
        </Helmet>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center bg-card rounded-2xl shadow-xl p-12"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-14 h-14 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">Đăng ký thành công!</h1>
              <p className="text-muted-foreground text-lg mb-6">
                Cảm ơn bạn đã đăng ký tuyển sinh tại Trường Cao đẳng Gia Lai. 
                Chúng tôi đã gửi email xác nhận đến địa chỉ email của bạn.
              </p>
              <div className="bg-primary/5 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-3">Các bước tiếp theo:</h3>
                <ul className="text-left text-muted-foreground space-y-2">
                  <li>✓ Kiểm tra email để xem thông tin chi tiết</li>
                  <li>✓ Chuẩn bị hồ sơ bản cứng theo yêu cầu</li>
                  <li>✓ Nộp hồ sơ tại trụ sở chính hoặc các cơ sở đào tạo</li>
                  <li>✓ Theo dõi kết quả xét tuyển qua email hoặc website</li>
                </ul>
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                  Đăng ký thêm
                </Button>
                <Button onClick={() => window.location.href = "/"}>
                  Về trang chủ
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Đăng ký tuyển sinh trực tuyến - Trường Cao đẳng Gia Lai</title>
        <meta name="description" content="Đăng ký tuyển sinh trực tuyến năm 2026 tại Trường Cao đẳng Gia Lai. Nhận học từ tháng 9/2026, ưu đãi giảm 70% học phí." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
        {/* Hero Section */}
        <section className="bg-primary py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                <GraduationCap className="w-5 h-5" />
                <span className="font-medium">Tuyển sinh năm 2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Đăng ký tuyển sinh trực tuyến
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Điền đầy đủ thông tin bên dưới để đăng ký xét tuyển vào Trường Cao đẳng Gia Lai
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 -mt-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl p-8 md:p-12"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6 pb-2 border-b">
                      <User className="w-5 h-5 text-primary" />
                      Thông tin cá nhân
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Họ và tên <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Nguyễn Văn A" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ngày sinh <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Giới tính <span className="text-destructive">*</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chọn giới tính" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Nam">Nam</SelectItem>
                                <SelectItem value="Nữ">Nữ</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="idCardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Số CCCD/CMND <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="001234567890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6 pb-2 border-b">
                      <Phone className="w-5 h-5 text-primary" />
                      Thông tin liên hệ
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Số điện thoại <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="0901234567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Địa chỉ thường trú <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Education Information */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6 pb-2 border-b">
                      <School className="w-5 h-5 text-primary" />
                      Thông tin học vấn
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="highSchool"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Trường THPT đã học <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="THPT Pleiku" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="graduationYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Năm tốt nghiệp <span className="text-destructive">*</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chọn năm tốt nghiệp" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {graduationYears.map(year => (
                                  <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6 pb-2 border-b">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Ngành học đăng ký
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="programCode"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Ngành học <span className="text-destructive">*</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chọn ngành học" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="" disabled>-- Chọn ngành học --</SelectItem>
                                {programs.map(program => (
                                  <SelectItem key={program.code} value={program.code}>
                                    {program.name} ({program.code}) - {program.level}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="priorityGroup"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Đối tượng ưu tiên (nếu có)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chọn đối tượng ưu tiên" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {priorityGroups.map(group => (
                                  <SelectItem key={group.value} value={group.value}>
                                    {group.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6 pb-2 border-b">
                      <FileText className="w-5 h-5 text-primary" />
                      Ghi chú thêm
                    </h2>
                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ghi chú (tùy chọn)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Thông tin bổ sung hoặc câu hỏi của bạn..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Info Box */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Thông tin tuyển sinh 2026
                    </h3>
                    <ul className="text-amber-700 text-sm space-y-1">
                      <li>• Thời gian nhận hồ sơ: 01/3/2026 - 30/11/2026</li>
                      <li>• Dự kiến nhập học: Tháng 9/2026</li>
                      <li>• Ưu đãi: Giảm 70% học phí theo Nghị định 81/2021/NĐ-CP</li>
                      <li>• Hotline tư vấn: 0269 3824 598</li>
                    </ul>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="min-w-[250px] h-14 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Đang xử lý...
                        </>
                      ) : (
                        <>
                          <GraduationCap className="w-5 h-5 mr-2" />
                          Gửi đăng ký
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default DangKyTuyenSinh;
