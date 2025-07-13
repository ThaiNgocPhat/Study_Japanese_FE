import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～に沿って',
    explanation:
      '📌「～に沿って」（にそって）dùng để diễn tả sự tuân theo, dựa trên, hoặc bám sát theo một chuẩn mực, quy định, phương châm, quy trình... nào đó.\n\n' +
      '👉 Nghĩa: "theo...", "dựa trên...", "bám sát..."',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸【名詞】 + に沿って\n' +
      '🔸【名詞】 + に沿った + 【名詞】\n\n' +
      '✔ Dạng biến thể:\n' +
      '・に沿って + V\n' +
      '・に沿った + danh từ\n',
  },
  {
    title: '3. Ý nghĩa sử dụng',
    explanation:
      '✅ Diễn tả hành động, sự việc được thực hiện theo một phương châm, tiêu chuẩn, luật lệ, kế hoạch, v.v.\n\n' +
      '🔹 Thường dùng trong các ngữ cảnh trang trọng, hành chính, học thuật, công việc.\n' +
      '🔹 Nhấn mạnh sự không lệch ra ngoài khuôn khổ đã định sẵn.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 計画（けいかく）**に沿って**、プロジェクトを進めましょう。\n' +
      '→ Hãy tiến hành dự án theo đúng kế hoạch.\n\n' +
      '2. 方針（ほうしん）**に沿った**指導（しどう）が行われた。\n' +
      '→ Việc chỉ đạo đã được thực hiện theo đúng phương châm.\n\n' +
      '3. お客様のご希望**に沿って**、商品を提案します。\n' +
      '→ Chúng tôi sẽ đề xuất sản phẩm theo đúng mong muốn của khách hàng.\n\n' +
      '4. 法律（ほうりつ）**に沿って**判断する必要がある。\n' +
      '→ Cần phải phán đoán theo đúng pháp luật.',
  },
  {
    title: '5. So sánh với các mẫu tương tự',
    explanation:
      '🔹「～に従って」: nhấn mạnh việc làm theo một sự thay đổi, xu hướng hay mệnh lệnh.\n' +
      '🔹「～に応じて」: nhấn mạnh sự thay đổi tương ứng tùy theo tình huống.\n' +
      '🔹「～に沿って」: nhấn mạnh sự bám sát theo phương châm, kế hoạch, tiêu chuẩn.',
  },
  {
    title: '6. Lưu ý sử dụng',
    explanation:
      '📌 Không dùng「～に沿って」với các danh từ không mang tính định hướng như “人”, “もの” thông thường.\n\n' +
      '📌 Thường đi kèm với các danh từ như:\n' +
      '・計画、方針、方角、テーマ、法律、ルール、指示、目的、要望（ようぼう）',
  },
]

const GrammarNiSotteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～に沿って" grammarSections={grammarSections} />
}

export default GrammarNiSotteScreen
