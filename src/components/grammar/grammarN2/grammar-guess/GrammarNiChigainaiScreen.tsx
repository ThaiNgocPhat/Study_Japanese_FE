import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～に違いない',
    explanation:
      '📌「～に違いない」dùng để biểu thị **suy đoán mạnh mẽ, chắc chắn của người nói** dựa trên bằng chứng hoặc cảm giác cá nhân.\n' +
      '👉 Nghĩa: “Chắc chắn là…”, “Không thể sai được…”, “Hẳn là…”',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể thông thường (普通形) + に違いない\n' +
      '🔹 Tính từ -i / -na + に違いない\n' +
      '🔹 Danh từ + に違いない\n\n' +
      '📍 Tính từ -na và Danh từ KHÔNG thêm 「だ」 trước 「に違いない」',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Dùng khi người nói **rất chắc chắn** về điều mình nói (nhưng không phải là sự thật 100%).\n' +
      '✅ Mang tính **suy luận logic hoặc trực giác**, không phải là sự thật đã được xác nhận.\n' +
      '📝 Gần nghĩa với 「きっと～と思う」 nhưng 「～に違いない」 mạnh mẽ và khách quan hơn.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. あのかばんは高かったに違いない。\n' +
      '→ Cái túi đó chắc chắn là đắt tiền rồi.\n\n' +
      '2. かぎが開いている。誰かが入ったに違いない。\n' +
      '→ Cửa mở kìa. Chắc chắn có ai đó đã vào rồi.\n\n' +
      '3. 彼は犯人に違いない。\n' +
      '→ Anh ta chắc chắn là hung thủ.\n\n' +
      '4. この声は山田さんに違いありません。\n' +
      '→ Giọng này chắc chắn là của anh Yamada.',
  },
  {
    title: '5. So sánh với mẫu tương tự',
    explanation:
      '🔸 ～はずだ: Cũng mang ý suy đoán nhưng dựa trên logic và có căn cứ rõ ràng hơn.\n' +
      '🔸 ～に違いない: Suy đoán mạnh, dựa vào cảm giác hoặc quan sát của người nói.\n\n' +
      '📍Ví dụ:\n' +
      '電気がついているから、田中さんは家にいるはずだ。\n' +
      '→ Vì đèn đang sáng nên chắc hẳn anh Tanaka đang ở nhà. (dựa vào logic)\n\n' +
      '電気がついている。田中さんは家にいるに違いない。\n' +
      '→ Đèn sáng kìa. Chắc chắn anh Tanaka đang ở nhà. (suy đoán cảm tính)',
  },
]

const GrammarNiChigainaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～に違いない" grammarSections={grammarSections} />
}

export default GrammarNiChigainaiScreen
