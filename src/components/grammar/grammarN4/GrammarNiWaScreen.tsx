import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～には',
    explanation:
      '📌「～には」là cách kết hợp của trợ từ「に」(chỉ mục đích, địa điểm, thời điểm...) và「は」(nhấn mạnh chủ đề).\n\n' +
      '👉 Mẫu này thường dùng để **nhấn mạnh mục đích, đối tượng, điều kiện, lý do,...** trong câu văn.\n' +
      '💡 Dịch nghĩa thường là: “để mà…”, “đối với…”, “về việc…”',
  },
  {
    title: '2. Cấu trúc thường gặp',
    explanation:
      '🧩 Cấu trúc:\n' +
      '・[Danh từ / Động từ ở dạng từ điển] + には + [Câu chính]\n\n' +
      '📝 Ví dụ:\n' +
      '・日本語を上手になる**には**、毎日練習しなければなりません。\n' +
      '→ Để giỏi tiếng Nhật thì phải luyện tập mỗi ngày.\n\n' +
      '・健康**には**睡眠（すいみん）が大切です。\n' +
      '→ Đối với sức khỏe thì giấc ngủ rất quan trọng.\n\n' +
      '・この問題**には**、いろいろな意見があります。\n' +
      '→ Về vấn đề này thì có nhiều ý kiến khác nhau.',
  },
  {
    title: '3. Các cách hiểu và tình huống sử dụng',
    explanation:
      '🔸「～には」có thể được hiểu theo nhiều nghĩa tùy ngữ cảnh:\n\n' +
      '① **Để làm gì đó (mục đích)**:\n' +
      '・日本に行く**には**パスポートが必要です。\n' +
      '→ Để đi Nhật thì cần hộ chiếu.\n\n' +
      '② **Đối với ai/vấn đề gì đó (đánh giá, nhận định)**:\n' +
      '・子ども**には**ちょっと難しいかもしれません。\n' +
      '→ Đối với trẻ em thì có thể hơi khó.\n\n' +
      '③ **Về, liên quan đến (chủ đề cụ thể)**:\n' +
      '・この小説**には**深い意味があります。\n' +
      '→ Cuốn tiểu thuyết này có ý nghĩa sâu sắc.',
  },
  {
    title: '4. Phân biệt ～には với ～のために／～について',
    explanation:
      '📌 So sánh:\n\n' +
      '・～には：nhấn mạnh chủ đề hoặc điều kiện cho vế sau\n' +
      '・～のために：mục đích rõ ràng, thiên về hành động hơn\n' +
      '・～について：nói “về nội dung” cụ thể nào đó\n\n' +
      '📝 Ví dụ:\n' +
      '・健康**には**野菜がいい。\n' +
      '→ Đối với sức khỏe thì rau là tốt.\n\n' +
      '・健康**のために**運動する。\n' +
      '→ Tập thể dục để khỏe mạnh.\n\n' +
      '・健康**について**の本を読んでいます。\n' +
      '→ Đang đọc sách nói về sức khỏe.',
  },
  {
    title: '5. Mẹo học',
    explanation:
      '💡 Mẹo nhớ:\n' +
      '・Khi muốn nhấn mạnh **mục đích, điều kiện, đối tượng đánh giá** → dùng「～には」\n\n',
  },
]

const GrammarNiWaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～には" grammarSections={grammarSections} />
}

export default GrammarNiWaScreen
