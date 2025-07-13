import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ～ていただけませんか',
    explanation:
      '🙏 Mẫu câu này là một cách nói **rất lịch sự** để yêu cầu hoặc nhờ vả ai đó làm gì đó cho mình.\n\n' +
      '👉 Dùng trong văn cảnh trang trọng, với người lớn tuổi, người có địa vị cao hơn, hoặc trong các tình huống công việc, dịch vụ.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '✏️ Cấu trúc:\n' +
      '[Động từ thể て] + いただけませんか？\n\n' +
      '📖 Đây là kính ngữ của mẫu ～てくれませんか, với いただけます là thể khả năng của động từ いただく (khiêm nhường ngữ của もらう).\n\n' +
      '📝 Ví dụ:\n' +
      '・もう一度説明していただけませんか？\n' +
      '→ Anh/chị có thể vui lòng giải thích lại lần nữa không ạ?\n\n' +
      '・ここに名前を書いていただけませんか？\n' +
      '→ Bạn có thể viết tên vào đây giúp tôi được không?\n\n' +
      '・窓を閉めていただけませんか？\n' +
      '→ Bạn có thể đóng cửa sổ giúp được không ạ?',
  },
  {
    title: '3. So sánh với các cách yêu cầu khác',
    explanation:
      '🔁 Cùng là cách yêu cầu nhờ vả, nhưng mức độ lịch sự khác nhau:\n\n' +
      '・～てくれる？ → Thân mật, dùng với bạn bè\n' +
      '・～てくれませんか？ → Lịch sự vừa phải\n' +
      '・～ていただけませんか？ → Rất lịch sự, trang trọng\n\n' +
      '📌 Tùy vào người đối diện và hoàn cảnh giao tiếp, hãy chọn mẫu phù hợp.',
  },
  {
    title: '4. Biến thể nâng cao',
    explanation:
      '🔹 Có thể thay bằng dạng lịch sự hơn:\n' +
      '・～ていただけないでしょうか？\n' +
      '→ Ví dụ: 手伝っていただけないでしょうか。\n' +
      '→ Không biết anh/chị có thể giúp tôi được không ạ?\n\n' +
      '🎓 Mẫu này mềm mại và lịch sự hơn nữa, thường thấy trong thư từ, hội thoại trang trọng.',
  },
]

const GrammarTeItadakemasenScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～ていただけませんか" grammarSections={grammarSections} />
  )
}

export default GrammarTeItadakemasenScreen
