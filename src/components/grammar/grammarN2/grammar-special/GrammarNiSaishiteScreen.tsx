import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～に際して」dùng để diễn tả **thời điểm đặc biệt** khi bắt đầu một điều gì đó quan trọng hoặc có tính trang trọng.\n\n' +
      '📌 Cấu trúc:\n' +
      '[Danh từ] + に際して\n' +
      '[Động từ thể từ điển] + に際して\n\n' +
      '📎 Dịch là: “Khi…”, “Vào lúc…”, “Nhân dịp…”, mang tính trang trọng hơn so với「～とき」',
  },
  {
    title: '2. Đặc điểm',
    explanation:
      '✅ Thường dùng trong các văn bản nghi thức, diễn văn, thông báo, bài phát biểu...\n' +
      '✅ Diễn tả thời điểm xảy ra hành động quan trọng như: khai trương, kết hôn, bắt đầu công việc, đăng ký, thi cử…\n' +
      '✅ Không dùng cho những hành động thường ngày hoặc mang tính tự nhiên.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 入学（にゅうがく）に際して、お祝いの言葉を申し上げます。\n→ Nhân dịp nhập học, tôi xin gửi lời chúc mừng.\n\n' +
      '② 契約（けいやく）に際して、注意すべきことを説明します。\n→ Khi ký hợp đồng, tôi sẽ giải thích những điều cần lưu ý.\n\n' +
      '③ 開会（かいかい）に際して、一言（ひとこと）ご挨拶（あいさつ）申し上げます。\n→ Nhân dịp khai mạc, tôi xin có đôi lời phát biểu.\n\n' +
      '④ 海外に出発するに際して、家族にお礼を言った。\n→ Trước khi xuất phát ra nước ngoài, tôi đã cảm ơn gia đình.',
  },
  {
    title: '4. So sánh với các mẫu khác',
    explanation:
      '🔸「～にあたって」có ý nghĩa tương tự, dùng cho thời điểm bắt đầu hành động quan trọng (nhưng thường tích cực hơn).\n' +
      '🔸「～とき」thì trung lập, thân mật, dùng trong nhiều ngữ cảnh hàng ngày hơn.\n\n' +
      '🧠 Ví dụ:\n' +
      '・結婚にあたって、多くの人にお世話になりました。\n→ Trong dịp kết hôn, tôi đã được nhiều người giúp đỡ.\n' +
      '・契約に際して、慎重に内容を確認した。\n→ Khi ký hợp đồng, tôi đã cẩn thận xác nhận nội dung.',
  },
]

const GrammarNiSaishiteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～に際して" grammarSections={grammarSections} />
}

export default GrammarNiSaishiteScreen
