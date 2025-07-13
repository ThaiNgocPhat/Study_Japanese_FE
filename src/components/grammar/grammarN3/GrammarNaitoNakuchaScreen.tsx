import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu chung',
    explanation:
      '📌 「～ないと」 và 「～なくちゃ」 là những mẫu câu rút gọn của cách nói **phải làm gì đó**, mang nghĩa bắt buộc giống như 「～なければならない」.\n\n' +
      '👉 Đây là cách nói **thân mật, thường dùng trong văn nói**.\n' +
      '👉 Diễn tả sự **nhắc nhở**, **tự nhận thức phải làm** hoặc **bổn phận** cần làm.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '✏️ Cách chia:\n' +
      '- Động từ thể ない (bỏ い) + ないと\n' +
      '- Động từ thể ない (bỏ い) + なくちゃ\n\n' +
      '📝 Ví dụ:\n' +
      '・早く寝ないと。\n' +
      '→ Phải ngủ sớm thôi.\n\n' +
      '・勉強しなくちゃテストに合格できないよ。\n' +
      '→ Phải học thôi, không thì không đậu được kỳ thi đâu.\n\n' +
      '・明日までにレポートを出さないと。\n' +
      '→ Phải nộp báo cáo trước ngày mai.\n\n' +
      '・もう行かなくちゃ！\n' +
      '→ Mình phải đi rồi!',
  },
  {
    title: '3. So sánh với ～なければならない',
    explanation:
      '🆚 ～ないと / ～なくちゃ:\n' +
      '・Dùng trong hội thoại thân mật, tự nhiên.\n' +
      '・Mang sắc thái nhẹ nhàng hơn, đôi khi như lời tự nhủ.\n\n' +
      '🆚 ～なければならない:\n' +
      '・Mang tính trang trọng, thường dùng trong văn viết hoặc tình huống nghiêm túc.\n\n' +
      '📌 Ví dụ so sánh:\n' +
      '・宿題をしなければなりません。→ Trang trọng\n' +
      '・宿題しないと。→ Tự nhiên, thân mật',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '⚠️ Đây là cách nói thân mật, **không nên dùng trong văn viết trang trọng hoặc giao tiếp với người trên** (sếp, thầy cô...)\n\n' +
      '📖 Trong văn nói, người Nhật thường lược bỏ cả chủ ngữ và trợ từ, khiến mẫu câu này cực kỳ ngắn gọn:\n' +
      '・行かなくちゃ。\n' +
      '・やらないと。',
  },
]

const GrammarNaitoNakuchaScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～ないと、～なくちゃ" grammarSections={grammarSections} />
  )
}

export default GrammarNaitoNakuchaScreen
