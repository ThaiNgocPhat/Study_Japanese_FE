import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～に決まっている',
    explanation:
      '📌 「～に決まっている」 dùng để nhấn mạnh **suy nghĩ chắc chắn** của người nói, mang nghĩa:\n' +
      '👉 “Chắc chắn là…”, “Không thể sai được”, “Tất nhiên là…”.\n\n' +
      '💡 Thường được dùng trong văn nói để thể hiện sự quả quyết.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔸 [Thể thường] + に決まっている\n' +
      '🔸 Tính từ -na / Danh từ + に決まっている\n\n' +
      '✔️ Có thể dùng với:\n' +
      '・Động từ ở thể thường (辞書形・た形・ない形…)\n' +
      '・Tính từ đuôi い và đuôi な\n' +
      '・Danh từ\n\n' +
      '❗ Không sử dụng trong văn viết trang trọng, mang tính chủ quan.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📝 あんな高いもの、売れない**に決まっている**よ。\n' +
      '→ Đồ đắt như thế thì chắc chắn là không bán được rồi.\n\n' +
      '📝 テストの点が悪い？遊んでばかりいたんだから、悪い**に決まっている**よ。\n' +
      '→ Điểm kiểm tra kém à? Cứ chơi hoài thì chắc chắn là điểm kém rồi còn gì.\n\n' +
      '📝 あの店の料理はおいしい**に決まっている**。いつも混んでるもん。\n' +
      '→ Món ăn ở quán đó chắc chắn ngon rồi. Lúc nào cũng đông mà.\n\n' +
      '📝 彼がそんなことを言うはずがない。何かの間違い**に決まっている**。\n' +
      '→ Anh ấy không đời nào nói như thế đâu. Chắc chắn là nhầm lẫn gì đó rồi.',
  },
  {
    title: '4. So sánh với các mẫu tương tự',
    explanation:
      '🔁 So sánh:\n\n' +
      '・～はずだ／～はずがない：diễn đạt sự suy đoán có lý do rõ ràng, mang tính logic hơn\n' +
      '・～に違いない：diễn đạt sự phán đoán khá chắc chắn, thường dùng trong văn viết\n' +
      '・～に決まっている：mang tính cảm xúc chủ quan, thường dùng trong văn nói\n\n' +
      '🧠 Ví dụ:\n' +
      '・あの人が犯人の**はずがない**。\n' +
      '・あの人が犯人に**違いない**。\n' +
      '・あの人が犯人に**決まっている**！',
  },
]

const GrammarNiKimatteIruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～に決まっている" grammarSections={grammarSections} />
}

export default GrammarNiKimatteIruScreen
