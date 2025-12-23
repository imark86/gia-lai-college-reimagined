import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");



const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RegistrationEmailRequest {
  fullName: string;
  email: string;
  programName: string;
  programCode: string;
  registrationId: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send registration email");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, programName, programCode, registrationId }: RegistrationEmailRequest = await req.json();
    
    console.log(`Sending confirmation email to ${email} for registration ${registrationId}`);

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Trường Cao đẳng Gia Lai <onboarding@resend.dev>",
        to: [email],
        subject: "Xác nhận đăng ký tuyển sinh - Trường Cao đẳng Gia Lai",
        html: `
          <!DOCTYPE html>
          <html lang="vi">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
              <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px 20px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">TRƯỜNG CAO ĐẲNG GIA LAI</h1>
                <p style="color: #93c5fd; margin: 10px 0 0 0; font-size: 14px;">Thông báo xác nhận đăng ký tuyển sinh</p>
              </div>
              <div style="padding: 30px 20px;">
                <h2 style="color: #1e3a8a; margin-top: 0;">Xin chào ${fullName}!</h2>
                <p style="color: #374151; line-height: 1.6;">
                  Chúng tôi xin thông báo đã nhận được hồ sơ đăng ký tuyển sinh của bạn. Dưới đây là thông tin chi tiết:
                </p>
                <div style="background-color: #f0f9ff; border-left: 4px solid #3b82f6; padding: 15px 20px; margin: 20px 0;">
                  <p style="margin: 5px 0; color: #1e40af;"><strong>Mã đăng ký:</strong> ${registrationId.slice(0, 8).toUpperCase()}</p>
                  <p style="margin: 5px 0; color: #1e40af;"><strong>Ngành đăng ký:</strong> ${programName}</p>
                  <p style="margin: 5px 0; color: #1e40af;"><strong>Mã ngành:</strong> ${programCode}</p>
                </div>
                <h3 style="color: #1e3a8a;">Các bước tiếp theo:</h3>
                <ol style="color: #374151; line-height: 1.8;">
                  <li>Chuẩn bị hồ sơ bản cứng theo yêu cầu</li>
                  <li>Nộp hồ sơ tại trụ sở chính hoặc các cơ sở đào tạo</li>
                  <li>Theo dõi email để nhận thông báo kết quả xét tuyển</li>
                </ol>
                <div style="background-color: #fef3c7; border-radius: 8px; padding: 15px 20px; margin: 20px 0;">
                  <p style="color: #92400e; margin: 0; font-size: 14px;">
                    <strong>📞 Hotline tuyển sinh:</strong> 0269 3824 598<br>
                    <strong>📧 Email:</strong> tuyensinh@cdgl.edu.vn
                  </p>
                </div>
                <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">
                  Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ Phòng Đào tạo qua hotline hoặc email trên.
                </p>
              </div>
              <div style="background-color: #1e3a8a; padding: 20px; text-align: center;">
                <p style="color: #93c5fd; margin: 0; font-size: 12px;">
                  © 2026 Trường Cao đẳng Gia Lai<br>
                  Địa chỉ: 126 Lê Thánh Tôn, P. Hội Thương, TP. Pleiku, Gia Lai
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const data = await emailResponse.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-registration-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
