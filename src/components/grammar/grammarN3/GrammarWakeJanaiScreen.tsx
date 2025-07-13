import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～わけじゃない / わけではない」',
    explanation:
      '📌 「～わけじゃない」 dùng để **phủ định một phần**, mang nghĩa: “Không hẳn là…”, “Không có nghĩa là…”.\n\n' +
      '👉 Khác với 「～わけがない」 (phủ định mạnh mẽ tuyệt đối), thì 「～わけじゃない」 mang sắc thái nhẹ nhàng hơn, dùng để **chỉnh sửa hiểu lầm, hoặc nhấn mạnh không hoàn toàn đúng**.\n\n' +
      '💡 「～わけじゃない」 là văn nói, còn 「～わけではない」 là cách nói trang trọng/lịch sự hơn.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔹 [Động từ thể thường] + わけじゃない / わけではない\n' +
      '🔹 [Tính từ -i] + わけじゃない / わけではない\n' +
      '🔹 [Tính từ -na (bỏ な)] + なわけじゃない / なわけではない\n' +
      '🔹 [Danh từ] + のわけじゃない / のわけではない\n\n' +
      '👉 Có thể dùng cả 2 dạng tùy theo mức độ trang trọng của tình huống.',
  },
  {
    title: '3. Cách dùng và sắc thái',
    explanation:
      '🔸 Dùng để **phủ định một phần**, hoặc chỉnh lại nhận định chưa đúng.\n' +
      '🔸 Dùng khi bạn **không hoàn toàn phủ định**, mà muốn nói “không hẳn là như vậy”.\n\n' +
      '📝 Ví dụ:\n' +
      '・嫌いなわけじゃないけど、あまり食べたくない。\n' +
      '→ Không phải là ghét, nhưng không muốn ăn lắm.\n\n' +
      '・全部覚えているわけではありません。\n' +
      '→ Không phải tôi nhớ hết đâu.\n\n' +
      '・彼のことを信じていないわけじゃない。\n' +
      '→ Không phải là tôi không tin anh ấy.\n\n' +
      '・日本に住んでいたからといって、日本語が話せるわけではない。\n' +
      '→ Không phải cứ sống ở Nhật là nói được tiếng Nhật.',
  },
  {
    title: '4. So sánh với các mẫu tương tự',
    explanation:
      '🆚 ～わけじゃない：Phủ định một phần, thường dùng để làm rõ hiểu lầm.\n' +
      '🆚 ～わけがない：Phủ định mạnh mẽ, "không thể nào có chuyện đó".\n' +
      '🆚 ～というわけではない：Trang trọng hơn, cũng dùng để phủ định một phần.\n\n' +
      '🔎 Ví dụ:\n' +
      '・忙しいから行けないわけじゃない。\n' +
      '→ Không hẳn là vì bận nên không thể đi (mà là lý do khác).',
  },
]

const GrammarWakeJanaiScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～わけじゃない/ わけではない"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarWakeJanaiScreen
