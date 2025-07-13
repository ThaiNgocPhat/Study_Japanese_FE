import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～なら',
    explanation:
      '📌「～なら」là mẫu câu điều kiện được dùng khi **người nói muốn đưa ra lời khuyên, đề xuất, phán đoán hoặc phản hồi lại một thông tin nào đó**.\n\n' +
      '👉 Mẫu này thường được sử dụng khi **người nói phản ứng lại** với điều đã được nêu ra trong hội thoại, nên còn gọi là **"điều kiện ngữ cảnh"**.\n\n' +
      '📝 Ví dụ:\n' +
      '・京都へ行くなら、お寺を見たほうがいいですよ。\n' +
      '→ Nếu đi Kyoto thì bạn nên thăm chùa đấy.',
  },
  {
    title: '2. Cấu trúc sử dụng',
    explanation:
      '🧩 Cấu trúc:\n' +
      '[Động từ thể thường / Tính từ / Danh từ] + なら\n\n' +
      '✅ Động từ:\n' +
      '・行く → 行くなら（nếu đi）\n' +
      '・食べる → 食べるなら（nếu ăn）\n\n' +
      '✅ Tính từ -i:\n' +
      '・安い → 安いなら（nếu rẻ）\n\n' +
      '✅ Tính từ -na / Danh từ:\n' +
      '・静か → 静かなら（nếu yên tĩnh）\n' +
      '・学生 → 学生なら（nếu là học sinh）\n\n' +
      '📌 Có thể dùng ở hiện tại, quá khứ, khẳng định và phủ định:\n' +
      '・行かないなら（nếu không đi）\n' +
      '・雨だったなら（nếu đã mưa）',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📘 Một số câu thường gặp:\n\n' +
      '・暇なら、映画を見に行きませんか？\n' +
      '→ Nếu rảnh thì đi xem phim nhé?\n\n' +
      '・お金がないなら、貸してあげますよ。\n' +
      '→ Nếu không có tiền thì tôi cho mượn nhé.\n\n' +
      '・この料理が好きなら、もっと食べて。\n' +
      '→ Nếu thích món này thì ăn thêm đi.\n\n' +
      '・英語を勉強するなら、このアプリが便利ですよ。\n' +
      '→ Nếu học tiếng Anh thì app này tiện lắm đó.',
  },
  {
    title: '4. Lưu ý sử dụng ～なら',
    explanation:
      '📌「～なら」không chỉ là điều kiện giả định, mà còn mang tính **phản hồi thông tin, đưa ra ý kiến dựa trên ngữ cảnh**.\n\n' +
      '⚠️ Không dùng trong các điều kiện tất yếu hay hiện tượng tự nhiên như với「～と」.\n\n' +
      '📌 Không yêu cầu mệnh đề trước nhất định phải xảy ra, chỉ cần **người nói nhận định nếu điều đó là thật thì…**.\n\n' +
      '📝 Ví dụ:\n' +
      '・富士山に登るなら、朝早く出発したほうがいいですよ。\n' +
      '→ Nếu định leo núi Phú Sĩ thì nên xuất phát sớm.',
  },
  {
    title: '5. So sánh nhanh với các mẫu điều kiện khác',
    explanation:
      '🔁 **～なら vs ～ば／～たら／～と**\n\n' +
      '・～なら: phản ứng, khuyên bảo, gợi ý (ngữ cảnh hội thoại)\n' +
      '・～ば: điều kiện mang tính khái quát, kết quả logic\n' +
      '・～たら: điều kiện xảy ra một lần, nhấn mạnh kết quả\n' +
      '・～と: điều kiện tất yếu, lặp lại, hiện tượng tự nhiên\n\n' +
      '🧠 Mẹo: Khi ai đó nêu ra ý kiến A, bạn muốn đưa lời khuyên hay nhận định với điều kiện đó thì dùng ～なら!',
  },
]

const GrammarNaraScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="Câu điều kiện ～なら" grammarSections={grammarSections} />
  )
}

export default GrammarNaraScreen
