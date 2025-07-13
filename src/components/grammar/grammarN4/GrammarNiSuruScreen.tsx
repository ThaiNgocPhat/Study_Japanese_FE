import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～にする',
    explanation:
      '📌「～にする」là mẫu ngữ pháp thường dùng để **diễn tả sự lựa chọn, quyết định** của người nói hoặc người khác.\n\n' +
      '👉 Có thể hiểu là: “chọn cái gì”, “quyết định là…”',
  },
  {
    title: '2. Cấu trúc và cách dùng',
    explanation:
      '🧩 Cấu trúc:\n' +
      '・[Danh từ] + にする\n' +
      '・[Danh từ + に] / [Tính từ (bỏ い/な)] + する\n\n' +
      '📝 Ví dụ:\n' +
      '・飲み物はコーヒー**にします**。\n' +
      '→ Tôi chọn cà phê (cho đồ uống).\n\n' +
      '・ホテルは静かなところ**にしたい**です。\n' +
      '→ Tôi muốn chọn khách sạn ở nơi yên tĩnh.\n\n' +
      '・部屋をきれい**にしました**。\n' +
      '→ Tôi đã làm cho căn phòng trở nên sạch sẽ.',
  },
  {
    title: '3. Cách dùng phổ biến trong hội thoại',
    explanation:
      '🔸 Trong giao tiếp hàng ngày, đặc biệt khi **gọi món ăn, chọn đồ, quyết định phương án**, mẫu này cực kỳ phổ biến:\n\n' +
      '📝 Ví dụ:\n' +
      '・何にしますか？\n' +
      '→ Bạn chọn món gì?\n\n' +
      '・これにします。\n' +
      '→ Tôi chọn cái này.\n\n' +
      '・来週の旅行は京都**にしよう**！\n' +
      '→ Tuần sau đi Kyoto nhé! (quyết định)',
  },
  {
    title: '4. Phân biệt にする・になる・にしている',
    explanation:
      '🆚 にする：**Chủ động quyết định, chọn lựa**\n' +
      '🆚 になる：**Trở thành (tự nhiên, không chủ ý)**\n' +
      '🆚 にしている：**Thói quen lựa chọn liên tục**\n\n' +
      '📝 Ví dụ:\n' +
      '・私は先生**にしました**。\n' +
      '→ Tôi đã chọn làm giáo viên.\n\n' +
      '・彼は先生**になりました**。\n' +
      '→ Anh ấy đã trở thành giáo viên.\n\n' +
      '・毎朝コーヒー**にしています**。\n' +
      '→ Sáng nào tôi cũng chọn uống cà phê (thói quen).',
  },
  {
    title: '5. Mẹo học',
    explanation:
      '💡 Mẹo ghi nhớ:\n' +
      '・Muốn diễn tả “tôi chọn cái A” → [A + にする]\n' +
      '・Muốn nói “trở nên…” → にする / にするようにする\n\n',
  },
]

const GrammarNiSuruScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～にする (quyết định/chọn)"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarNiSuruScreen
