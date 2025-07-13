import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～てしょうがない」',
    explanation:
      '📌 「～てしょうがない」 là mẫu ngữ pháp dùng để **diễn tả cảm xúc rất mạnh mẽ**, đến mức không thể chịu được, không kiềm chế được.\n' +
      '👉 Nghĩa: **rất…**, **vô cùng…**, **… không chịu được**.\n' +
      '📍 Tương đương trong văn nói: 「～てたまらない」「～てならない」 nhưng sắc thái thân mật hơn.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔹 [Động từ thể て] + しょうがない\n' +
      '🔹 [Tính từ -i (bỏ い) + くて] + しょうがない\n' +
      '🔹 [Tính từ -na + で] + しょうがない\n\n' +
      '📝 Ví dụ:\n' +
      '・お腹が空いて**しょうがない**。\n' +
      '→ Đói bụng **không chịu được**.\n\n' +
      '・うれしくて**しょうがない**。\n' +
      '→ Vui **vô cùng**.\n\n' +
      '・彼のことが気になって**しょうがない**。\n' +
      '→ Tôi **cứ lo lắng mãi** về anh ấy.',
  },
  {
    title: '3. Các lưu ý khi sử dụng',
    explanation:
      '📍 Dùng khi **cảm xúc, cảm giác tự nhiên phát sinh** mà không điều khiển được.\n' +
      '📍 Không dùng cho hành động có chủ ý.\n\n' +
      '🛑 Không đúng:\n' +
      '・彼に電話して**しょうがない** ❌\n' +
      '→ Vì gọi điện là hành động có chủ ý.\n\n' +
      '✅ Đúng:\n' +
      '・彼に会いたくて**しょうがない**。\n' +
      '→ Tôi **rất muốn gặp** anh ấy. (cảm xúc mạnh mẽ)',
  },
  {
    title: '4. Biến thể tương đương',
    explanation:
      '🟡 「～てたまらない」: mạnh hơn, thường dùng trong tình huống cảm xúc cực độ\n' +
      '🟡 「～てならない」: hơi trang trọng, dùng trong văn viết nhiều hơn\n\n' +
      '📖 Ví dụ:\n' +
      '・彼のことが好きで**たまらない**。\n' +
      '→ Tôi yêu anh ấy **không chịu được**.\n\n' +
      '・将来が不安で**ならない**。\n' +
      '→ Tôi **rất lo lắng** về tương lai.',
  },
]

const GrammarTeShouganaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～てしょうがない" grammarSections={grammarSections} />
}

export default GrammarTeShouganaiScreen
