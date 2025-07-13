import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về ～ちゃう',
    explanation:
      '📌 「～ちゃう」 là cách nói rút gọn (thân mật) của mẫu ngữ pháp **～てしまう**, diễn tả **hành động đã hoàn tất** hoặc **hành động xảy ra ngoài ý muốn**.\n\n' +
      '👉 Dùng trong **văn nói thân mật** (giữa bạn bè, người thân...)\n' +
      '👉 Có thể mang cả sắc thái tích cực lẫn tiêu cực, tùy vào ngữ cảnh.',
  },
  {
    title: '2. Cấu trúc rút gọn',
    explanation:
      '✏️ Cách chia:\n' +
      '- Động từ thể て + しまう → ～ちゃう\n' +
      '- Động từ thể で + しまう → ～じゃう\n\n' +
      '📌 Biến đổi:\n' +
      '・食べてしまう → 食べちゃう\n' +
      '・忘れてしまう → 忘れちゃう\n' +
      '・飲んでしまう → 飲んじゃう\n' +
      '・寝てしまう → 寝ちゃう\n' +
      '・壊れてしまう → 壊れちゃう\n\n' +
      '✏️ Phủ định: ～ちゃわない／～じゃわない（hiếm dùng） hoặc dùng ～ちゃった (quá khứ)',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '📌 Ý nghĩa 1: **Làm xong một hành động gì đó hoàn toàn** (hoàn tất)\n' +
      '・宿題、もうやっちゃった。\n' +
      '→ Tớ làm xong bài tập rồi đó.\n\n' +
      '📌 Ý nghĩa 2: **Lỡ làm gì đó / việc xảy ra ngoài ý muốn**\n' +
      '・財布を忘れちゃった！\n' +
      '→ Lỡ quên ví mất rồi!\n\n' +
      '・電車に乗り遅れちゃった。\n' +
      '→ Trễ tàu mất rồi.\n\n' +
      '📌 Ý nghĩa 3: **Thể hiện cảm xúc tiếc nuối, bất ngờ**\n' +
      '・全部食べちゃったの！？\n' +
      '→ Ăn hết luôn rồi á!?',
  },
  {
    title: '4. Lưu ý khi sử dụng',
    explanation:
      '🔸 「～ちゃう」 chỉ nên dùng trong **văn nói thân mật**.\n' +
      '🔸 Trong văn viết, hội thoại trang trọng hoặc trong công việc nên dùng dạng gốc 「～てしまう」.\n\n' +
      '📝 Ví dụ so sánh:\n' +
      '・レポートを忘れちゃった。→ thân mật\n' +
      '・レポートを忘れてしまいました。→ trang trọng',
  },
]

const GrammarChauScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ちゃう" grammarSections={grammarSections} />
}

export default GrammarChauScreen
