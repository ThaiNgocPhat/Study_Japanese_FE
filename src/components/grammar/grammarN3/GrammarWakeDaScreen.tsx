import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～わけだ」 và các biến thể',
    explanation:
      '📌 「～わけ」 là một mẫu ngữ pháp dùng để **giải thích lý do, kết luận logic, hoặc phủ định mạnh mẽ**.\n\n' +
      '🟢 「～わけだ」：Đương nhiên là…, thì ra là vậy, vì vậy nên…\n' +
      '🔴 「～わけがない / わけはない」：Làm gì có chuyện…, tuyệt đối không thể…\n\n' +
      '👉 Được dùng nhiều trong văn nói lẫn văn viết, đặc biệt là khi giải thích hoặc nhấn mạnh lập luận.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔹 [Động từ thể thông thường] + わけだ\n' +
      '🔹 [Tính từ -i] + わけだ\n' +
      '🔹 [Tính từ -na (bỏ な)] + なわけだ\n' +
      '🔹 [Danh từ] + のわけだ\n\n' +
      '📍 Với 「わけがない / わけはない」: cấu trúc chia tương tự như trên.\n' +
      '→ Nhấn mạnh phủ định (không có lý nào mà…)',
  },
  {
    title: '3. Cách dùng ～わけだ',
    explanation:
      '🔸 Diễn tả **kết luận hợp lý** từ thông tin có sẵn.\n' +
      '→ “Thì ra là vậy”, “Hèn gì…”, “Vì thế nên…”\n\n' +
      '📝 Ví dụ:\n' +
      '・彼は日本に10年住んでいたから、日本語が上手なわけだ。\n' +
      '→ Anh ấy sống ở Nhật 10 năm nên đương nhiên giỏi tiếng Nhật rồi.\n\n' +
      '・電気がつかない。電池を入れてないわけだ。\n' +
      '→ Đèn không sáng. Thì ra là chưa lắp pin.',
  },
  {
    title: '4. Cách dùng ～わけがない／わけはない',
    explanation:
      '🔸 Dùng để **phủ định mạnh mẽ**, mang nghĩa: “Làm gì có chuyện…”, “Tuyệt đối không thể…”.\n' +
      '🔸 Cách nói cứng, nhấn mạnh sự vô lý hoặc phản đối điều gì đó.\n\n' +
      '📝 Ví dụ:\n' +
      '・こんな難しい問題、私に解けるわけがない。\n' +
      '→ Bài khó thế này thì tôi giải sao nổi.\n\n' +
      '・彼がそんなことを言うわけはない。\n' +
      '→ Không đời nào anh ấy nói mấy điều như thế.\n\n' +
      '・お金がないんだから、旅行なんて行けるわけがないよ。\n' +
      '→ Tiền không có thì làm gì mà đi du lịch được.',
  },
  {
    title: '5. So sánh nhanh các mẫu',
    explanation:
      '🟢 ～わけだ：Kết luận, giải thích hợp lý\n' +
      '→ “Hèn gì…”, “Vì thế nên…”\n\n' +
      '🔴 ～わけがない / わけはない：Phủ định mạnh mẽ\n' +
      '→ “Không thể nào…”, “Tuyệt đối không…”\n\n' +
      '📝 Lưu ý: 「わけがない」 và 「わけはない」 gần như giống nhau, nhưng 「わけがない」 phổ biến hơn trong hội thoại.',
  },
]

const GrammarWakeDaScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～わけだ/ わけがない/ わけはない"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarWakeDaScreen
