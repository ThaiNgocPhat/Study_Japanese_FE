import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～かねる」diễn tả sự không thể thực hiện một hành động nào đó vì lý do chủ quan hoặc khách quan.\n' +
      '👉 Thường dùng trong các câu lịch sự, trang trọng để từ chối nhẹ nhàng hoặc thể hiện sự do dự.\n\n' +
      '📌 Cấu trúc:\n' +
      '[Động từ thể masu (bỏ ます)] + かねる\n\n' +
      'Ví dụ: 「承知しかねます」(Tôi không thể chấp nhận/không thể đồng ý)',
  },
  {
    title: '2. Cách dùng và ý nghĩa',
    explanation:
      '✅ Thể hiện sự từ chối hoặc không thể làm điều gì đó một cách nhẹ nhàng, lịch sự.\n' +
      '✅ Thường dùng trong công việc, giao tiếp trang trọng.\n' +
      '✅ Có thể hiểu là “khó có thể làm…”, “không thể…”\n\n' +
      'Ví dụ:\n' +
      '・その提案には賛成しかねます。\n' +
      '→ Tôi khó có thể đồng ý với đề xuất đó.\n' +
      '・お手伝いしかねます。\n' +
      '→ Tôi không thể giúp được.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① ご要望には応じかねます。\n' +
      '→ Tôi không thể đáp ứng yêu cầu của quý vị.\n\n' +
      '② その問題についてはお答えしかねます。\n' +
      '→ Tôi không thể trả lời về vấn đề đó.\n\n' +
      '③ 申し訳ありませんが、その件はお引き受けしかねます。\n' +
      '→ Xin lỗi, tôi không thể nhận vụ đó.',
  },
]

const GrammarKaneruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～かねる" grammarSections={grammarSections} />
}

export default GrammarKaneruScreen
