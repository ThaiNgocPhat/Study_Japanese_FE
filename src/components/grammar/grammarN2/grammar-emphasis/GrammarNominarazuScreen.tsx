import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～のみならず',
    explanation:
      '📌 「～のみならず」là mẫu câu dùng để diễn tả ý: **không chỉ A mà B cũng…**\n' +
      'Đây là cách nói trang trọng hơn của 「～だけでなく」, thường dùng trong văn viết hoặc hoàn cảnh lịch sự.\n\n' +
      '👉 Nghĩa: “Không chỉ… mà còn…”, “Không những… mà còn…”',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Danh từ + のみならず\n' +
      '🔹 Động từ thể thường + のみならず\n' +
      '🔹 Tính từ -i + のみならず\n' +
      '🔹 Tính từ -na (bỏ な) + である + のみならず\n\n' +
      '📌 Vế sau thường là một sự việc mang tính mở rộng hoặc cùng hướng với vế trước.',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Dùng khi muốn liệt kê không chỉ một sự việc mà còn những điều tương tự đi kèm.\n' +
      '✅ Hay được dùng trong bài viết, bài thuyết trình, báo chí, văn trang trọng.\n' +
      '✅ Có thể đi kèm với các phó từ như:「ばかりか」「それどころか」「さらには」ở vế sau để tăng mức độ nhấn mạnh.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 彼は英語のみならず、フランス語も話せる。\n' +
      '→ Anh ấy không chỉ nói được tiếng Anh mà còn cả tiếng Pháp nữa.\n\n' +
      '2. この映画は日本のみならず、海外でも高く評価されている。\n' +
      '→ Bộ phim này không chỉ ở Nhật mà cả ở nước ngoài cũng được đánh giá cao.\n\n' +
      '3. 環境問題は一国のみならず、全世界の課題である。\n' +
      '→ Vấn đề môi trường không chỉ là vấn đề của một quốc gia mà là vấn đề của toàn thế giới.\n\n' +
      '4. 彼女は美しいのみならず、心も優しい。\n' +
      '→ Cô ấy không chỉ xinh đẹp mà còn tốt bụng nữa.',
  },
  {
    title: '5. So sánh với các mẫu tương tự',
    explanation:
      '🔸 「～だけでなく」: Thông dụng hơn, dùng cả trong văn nói và viết.\n' +
      '🔸 「～ばかりか」: Dùng khi muốn **nhấn mạnh sự bất ngờ** hoặc mức độ cao hơn.\n' +
      '🔸 「～のみならず」: Dùng trong **ngữ cảnh trang trọng**, có sắc thái văn viết nhiều hơn.',
  },
]

const GrammarNominarazuScreen = () => {
  return <GrammarTemplateScreen screenTitle="～のみならず" grammarSections={grammarSections} />
}

export default GrammarNominarazuScreen
