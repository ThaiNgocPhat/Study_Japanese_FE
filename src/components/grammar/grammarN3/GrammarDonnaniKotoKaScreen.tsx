import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ～どんなに～ことか',
    explanation:
      '📌 Mẫu câu **「～どんなに～ことか」** dùng để nhấn mạnh **cảm xúc mạnh mẽ** của người nói như: vui, buồn, lo lắng, nhớ nhung…\n\n' +
      '👉 Mang nghĩa: “biết bao nhiêu”, “rất là…”, “thật là…” và thường dùng trong văn viết, diễn thuyết hoặc lời kể, hồi tưởng.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '✏️ どんなに + [Động từ ở thể thường / Tính từ] + ことか\n\n' +
      '📌 Có thể thay 「どんなに」 bằng các từ cảm thán tương đương như:\n' +
      '・なんと（～ことか）\n' +
      '・どれほど（～ことか）\n' +
      '・どれだけ（～ことか）\n' +
      '・何回（なんかい）（～ことか）\n\n' +
      '❗ Chủ yếu dùng trong câu cảm thán và **hiếm khi xuất hiện trong văn nói hàng ngày**.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 日本にいる間、家族のことを**どんなに考えたことか**。\n' +
      '→ Trong thời gian ở Nhật, tôi đã nghĩ về gia đình biết bao nhiêu lần.\n\n' +
      '② 一人で外国に住むのが**どれほど大変なことか**、想像できないでしょう。\n' +
      '→ Sống một mình ở nước ngoài khó khăn đến mức nào chắc bạn không tưởng tượng nổi đâu.\n\n' +
      '③ 合格できたと聞いたとき、**どんなにうれしかったことか**。\n' +
      '→ Khi nghe tin đậu, tôi đã vui biết bao nhiêu.\n\n' +
      '④ 子どもが無事に帰ってきたときは、**なんとうれしかったことか**。\n' +
      '→ Khi đứa trẻ trở về an toàn, tôi đã vui biết chừng nào.',
  },
  {
    title: '4. Ghi nhớ nhanh',
    explanation:
      '💡 Đây là mẫu câu **cảm thán mạnh** với cách dùng trang trọng hơn bình thường.\n' +
      '📖 Thường xuất hiện trong văn viết, nhật ký, thư từ hoặc văn học.\n\n' +
      '🔁 Có thể thay thế bằng các từ tương tự để diễn đạt mức độ cảm xúc khác nhau:\n' +
      '・どれほど、どれだけ、なんと、何回…',
  },
]

const GrammarDonnaniKotoKaScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～どんなに～ことか" grammarSections={grammarSections} />
  )
}

export default GrammarDonnaniKotoKaScreen
