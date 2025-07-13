import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～てほしい」',
    explanation:
      '📌 Mẫu 「～てほしい」 dùng để diễn đạt **mong muốn người khác làm gì đó cho mình** hoặc **muốn ai đó đừng làm gì đó**.\n\n' +
      '👉 Nghĩa: “muốn ai đó làm…”, “mong ai đó…”.\n' +
      '🗣️ Đây là cách diễn đạt mong muốn đối với **người khác** (không dùng cho bản thân mình).',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔹 [Động từ thể て] + ほしい\n' +
      '🔹 [Động từ thể ない] + で + ほしい（khi muốn ai đó **đừng làm** gì đó）\n\n' +
      '📝 Ví dụ:\n' +
      '・あなたに来てほしいです。\n' +
      '→ Tôi muốn bạn đến.\n\n' +
      '・先生にゆっくり話してほしい。\n' +
      '→ Tôi muốn thầy cô nói chậm lại.\n\n' +
      '・子どもには元気でいてほしい。\n' +
      '→ Tôi mong con khỏe mạnh.',
  },
  {
    title: '3. Phủ định: không muốn ai làm gì',
    explanation:
      '🔸 Khi muốn ai đó **đừng làm** gì đó, dùng:\n' +
      '→ [Vない] + で + ほしい\n\n' +
      '📝 Ví dụ:\n' +
      '・そんなことを言わないでほしい。\n' +
      '→ Tôi muốn bạn đừng nói điều như vậy.\n\n' +
      '・みんなには心配しないでほしいです。\n' +
      '→ Tôi không muốn mọi người lo lắng.',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '📍「～てほしい」 thể hiện mong muốn chủ quan, cần cẩn thận khi dùng với người lớn, cấp trên vì có thể gây cảm giác yêu cầu, áp đặt.\n\n' +
      '✅ Lịch sự hơn:\n' +
      '・～ていただきたいです。\n' +
      '→ Tôi rất mong (người lớn) làm gì đó.\n\n' +
      '📌 Chủ ngữ trong câu là người **người nói mong muốn** làm hành động đó, còn “tôi” là người có mong muốn.\n\n' +
      'Ví dụ:\n' +
      '・母に野菜をもっと食べてほしいです。\n' +
      '→ Tôi muốn mẹ ăn rau nhiều hơn.',
  },
]

const GrammarTeHoshiiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～てほしい" grammarSections={grammarSections} />
}

export default GrammarTeHoshiiScreen
