import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～にあたって」diễn tả thời điểm đặc biệt, quan trọng khi bắt đầu một sự việc, hành động.\n\n' +
      '📌 Cấu trúc:\n' +
      '[Danh từ] + にあたって\n' +
      '[Động từ thể từ điển] + にあたって\n\n' +
      '📎 Dịch là: "Khi bắt đầu...", "Nhân dịp...", mang tính trang trọng.',
  },
  {
    title: '2. Đặc điểm',
    explanation:
      '✅ Thường dùng trong các văn cảnh trang trọng như thông báo, phát biểu, thư từ chính thức.\n' +
      '✅ Diễn tả thời điểm chuẩn bị hoặc bắt đầu một sự kiện quan trọng.\n' +
      '✅ Có ý nghĩa tích cực, thể hiện sự chuẩn bị kỹ càng hoặc ý thức nghiêm túc.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 新しいプロジェクトを始めるにあたって、計画を立てた。\n' +
      '→ Khi bắt đầu dự án mới, tôi đã lập kế hoạch.\n\n' +
      '② 入学にあたって、保護者説明会が行われる。\n' +
      '→ Nhân dịp nhập học, sẽ có buổi họp phụ huynh.\n\n' +
      '③ 海外赴任にあたって、家族と相談した。\n' +
      '→ Khi chuẩn bị đi công tác nước ngoài, tôi đã bàn bạc với gia đình.',
  },
  {
    title: '4. So sánh với 「～に際して」',
    explanation:
      '🔸「～にあたって」và「～に際して」có nghĩa tương tự nhưng 「～にあたって」thường nhấn mạnh đến **giai đoạn chuẩn bị, bắt đầu** một cách tích cực.\n' +
      '🔸「～に際して」mang tính trang trọng hơn, dùng trong các văn bản, thông báo nghiêm túc.\n' +
      '🔸 Ví dụ:\n' +
      '・就任にあたって、決意を述べた。\n' +
      '・就任に際して、決意を述べた。',
  },
]

const GrammarNiAtatteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～にあたって" grammarSections={grammarSections} />
}

export default GrammarNiAtatteScreen
