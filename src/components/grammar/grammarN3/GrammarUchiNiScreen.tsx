import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～うちに」',
    explanation:
      '📌 Mẫu ngữ pháp 「～うちに」 dùng để diễn đạt:\n' +
      '➡️ “Trong khi còn…”, “trong lúc đang…”, “trước khi điều gì đó thay đổi”.\n\n' +
      '👉 Mẫu này được dùng để **làm việc gì đó trong khoảng thời gian** mà trạng thái hoặc hành động nào đó vẫn còn tiếp diễn.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔹 Động từ thể từ điển / thể ている / thể ない + うちに\n' +
      '🔹 Tính từ -i + うちに\n' +
      '🔹 Tính từ -na (＋な) + うちに\n' +
      '🔹 Danh từ + の + うちに\n\n' +
      '📝 Ví dụ:\n' +
      '・明るいうちに帰ってきてください。\n' +
      '→ Hãy về nhà khi trời còn sáng.\n\n' +
      '・熱いうちに食べてください。\n' +
      '→ Hãy ăn khi còn nóng.\n\n' +
      '・若いうちにいろいろな経験をしたほうがいい。\n' +
      '→ Nên trải nghiệm nhiều khi còn trẻ.',
  },
  {
    title: '3. Phân biệt và cách dùng',
    explanation:
      '📍 Có hai cách hiểu chính:\n\n' +
      '① Trong lúc đang… (một hành động diễn ra song song hoặc xen kẽ)\n' +
      '　例：音楽を聞いているうちに、眠ってしまいました。\n' +
      '　→ Trong khi đang nghe nhạc thì tôi ngủ quên mất.\n\n' +
      '② Trong khi còn… (trạng thái chưa thay đổi, tranh thủ làm gì đó)\n' +
      '　例：忘れないうちにメモしておこう。\n' +
      '　→ Tranh thủ ghi chú lại trước khi quên.',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '⚠️ Khác với 「間に」 (trong lúc), 「うちに」 mang ý nghĩa **tranh thủ, hoặc thay đổi trạng thái**.\n\n' +
      '🔸「～うちに」 KHÔNG dùng cho hành động kéo dài liên tục, mà thường đi kèm hành động mang tính khoảnh khắc hoặc một lần.\n\n' +
      '❌ Sai:\n' +
      '・日本にいるうちに、毎日勉強します。\n\n' +
      '✅ Đúng:\n' +
      '・日本にいるうちに、富士山に登りたい。\n' +
      '→ Trong thời gian còn ở Nhật, tôi muốn leo núi Phú Sĩ.',
  },
]

const GrammarUchiNiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～うちに" grammarSections={grammarSections} />
}

export default GrammarUchiNiScreen
