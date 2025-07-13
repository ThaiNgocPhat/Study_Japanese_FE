import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～し～',
    explanation:
      '📌 Mẫu ngữ pháp 「～し～」 dùng để **liệt kê nhiều lý do**, và thường được dùng để nhấn mạnh rằng **có nhiều nguyên nhân/hành động/suy nghĩ** đằng sau một kết luận hoặc đánh giá nào đó.\n\n' +
      '👉 Có thể dùng một lần (～し) hoặc nhiều lần (～し～し～).\n' +
      '👉 Thường đi với から hoặc mẫu câu đánh giá sau đó.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '✏️ Cấu trúc:\n' +
      '- Động từ (thể thường) + し\n' +
      '- Tính từ -i + し\n' +
      '- Tính từ -na + だ + し\n' +
      '- Danh từ + だ + し\n\n' +
      '📝 Ví dụ:\n' +
      '・この店は安いし、美味しいし、店員も親切です。\n' +
      '→ Quán này vừa rẻ, vừa ngon, nhân viên lại thân thiện nữa.\n\n' +
      '・あの人は頭がいいし、英語も上手だし、人気があります。\n' +
      '→ Người đó thông minh, giỏi tiếng Anh và lại còn được yêu mến nữa.\n\n' +
      '・日曜日だし、雨だし、どこにも行きたくない。\n' +
      '→ Vừa là chủ nhật lại vừa mưa, nên chẳng muốn đi đâu cả.',
  },
  {
    title: '3. Cách dùng và lưu ý',
    explanation:
      '🔹 Dùng để trình bày nhiều lý do có tính chất song song (không phân thứ tự ưu tiên).\n' +
      '🔹 Có thể dùng 1 lần khi lý do là hiển nhiên hoặc đã rõ.\n' +
      '・疲れたし、今日は早く寝ます。\n' +
      '→ Vì mệt nên hôm nay tôi sẽ ngủ sớm.\n\n' +
      '📌 Không dùng để liệt kê hành động nối tiếp về mặt thời gian (thay vào đó dùng ～て、～て).',
  },
  {
    title: '4. So sánh với các mẫu tương tự',
    explanation:
      '🆚 ～し vs ～て:\n' +
      '・～し: nhấn mạnh **lý do**, nguyên nhân.\n' +
      '・～て: nối các hành động hoặc trạng thái xảy ra tuần tự.\n\n' +
      '🆚 ～し vs ～から:\n' +
      '・～し thường dùng khi có **nhiều lý do**, không nhất thiết phải nêu tất cả.\n' +
      '・～から dùng cho lý do cụ thể và thường chỉ 1 nguyên nhân chính.',
  },
]

const GrammarShiScreen = () => {
  return <GrammarTemplateScreen screenTitle="〜し〜" grammarSections={grammarSections} />
}

export default GrammarShiScreen
