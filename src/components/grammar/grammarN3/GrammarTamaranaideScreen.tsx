import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～てたまらない／～てならない」',
    explanation:
      '📌 Cả hai mẫu này đều dùng để diễn tả **cảm xúc, cảm giác rất mạnh đến mức không thể chịu được**.\n\n' +
      '👉 Nghĩa:\n' +
      '・「～てたまらない」: ... không chịu được\n' +
      '・「～てならない」: ... vô cùng, không kiềm được (thường trang trọng hơn)\n\n' +
      '📍 Chủ yếu đi với các từ diễn tả **cảm xúc, cảm giác, mong muốn, lo lắng...**',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔹 [Động từ thể て] + たまらない／ならない\n' +
      '🔹 [Tính từ -i (bỏ い) + くて] + たまらない／ならない\n' +
      '🔹 [Tính từ -na + で] + たまらない／ならない\n\n' +
      '📝 Ví dụ:\n' +
      '・会いたくて**たまらない**。\n' +
      '→ Rất muốn gặp không chịu được.\n\n' +
      '・暑くて**たまらない**。\n' +
      '→ Nóng không chịu được.\n\n' +
      '・将来が心配で**ならない**。\n' +
      '→ Tôi vô cùng lo lắng về tương lai.',
  },
  {
    title: '3. So sánh 「たまらない」 và 「ならない」',
    explanation:
      '📌 Cả hai mẫu đều mạnh mẽ, nhưng:\n\n' +
      '🔸「たまらない」:\n' +
      '・Sắc thái **gần gũi, cảm xúc mãnh liệt hơn**\n' +
      '・Dùng trong văn nói, cảm xúc bộc phát\n\n' +
      '🔸「ならない」:\n' +
      '・Trang trọng hơn, dùng cả trong văn viết\n' +
      '・Thường đi với cảm xúc nội tâm như lo lắng, tiếc nuối, cảm động\n\n' +
      '📝 Ví dụ:\n' +
      '・この映画は感動して**ならない**。\n' +
      '→ Bộ phim này cảm động không chịu được.\n\n' +
      '・かゆくて**たまらない**。\n' +
      '→ Ngứa không chịu nổi.',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '⚠️ Không dùng cho hành động chủ động (tự bản thân quyết định làm) mà chỉ dùng cho **cảm giác tự nhiên**.\n\n' +
      '🛑 Sai:\n' +
      '・ゲームをして**たまらない** ❌\n' +
      '✅ Đúng:\n' +
      '・ゲームがしたくて**たまらない**。\n' +
      '→ Muốn chơi game vô cùng.',
  },
]

const GrammarTamaranaideScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～て・でたまらない/ ならない"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarTamaranaideScreen
