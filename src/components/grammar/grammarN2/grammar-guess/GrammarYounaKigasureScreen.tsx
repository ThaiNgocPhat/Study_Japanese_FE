import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ような気がする',
    explanation:
      '📌「～ような気がする」được dùng để diễn đạt cảm giác, linh cảm, hoặc suy nghĩ mơ hồ rằng “hình như là…”, “có cảm giác như…”.\n' +
      '👉 Đây là cách nói mang tính chủ quan, thường được sử dụng khi người nói không chắc chắn hoàn toàn.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Động từ thể thường] + ような気がする\n' +
      '🔹 [Tính từ -i] + ような気がする\n' +
      '🔹 [Tính từ -na (bỏ な)] + なような気がする\n' +
      '🔹 [Danh từ] + のような気がする\n\n' +
      '📍 Có thể chia ở dạng quá khứ, phủ định: ～ような気がしない／～ような気がした…',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '💡 Dùng khi người nói không chắc chắn, chỉ dựa vào cảm giác hoặc trực giác.\n\n' +
      '🗣 Một số cách hiểu:\n' +
      '　・Có cảm giác là…\n' +
      '　・Hình như…\n' +
      '　・Tôi nghĩ là… (nhưng không chắc chắn)',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 彼の話は、どこかで聞いたような気がします。\n' +
      '→ Câu chuyện của anh ấy, tôi cảm thấy như đã nghe ở đâu đó rồi.\n\n' +
      '2. 今日は雨が降りそうな気がする。\n' +
      '→ Hôm nay có cảm giác là trời sẽ mưa.\n\n' +
      '3. この料理、前にも食べたような気がする。\n' +
      '→ Món ăn này, tôi cảm thấy như đã từng ăn rồi.\n\n' +
      '4. 彼は嘘をついているような気がする。\n' +
      '→ Tôi có cảm giác là anh ta đang nói dối.\n\n' +
      '5. あの人とは、前に会ったことがあるような気がします。\n' +
      '→ Tôi có cảm giác là đã từng gặp người đó rồi.',
  },
  {
    title: '5. Lưu ý sử dụng',
    explanation:
      '🔸 Đây là cách diễn đạt mang tính **chủ quan**, thể hiện phán đoán không chắc chắn.\n' +
      '🔸 Không nên dùng trong văn viết trang trọng hay báo cáo mang tính chắc chắn.\n' +
      '🔸 Thường kết hợp với 「ような気がする」「ような気がしない」để thể hiện sự không chắc chắn theo hướng tích cực/tiêu cực.',
  },
]

const GrammarYounaKigasureScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ような気がする" grammarSections={grammarSections} />
}

export default GrammarYounaKigasureScreen
