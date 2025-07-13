import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～たところで',
    explanation:
      '📌 Mẫu câu **「～たところで」** dùng để diễn đạt ý nghĩa: **"Dù có làm A thì cũng vô ích / không thay đổi được gì / không có kết quả tốt"**.\n\n' +
      '👉 Nhấn mạnh sự **tiêu cực**, **bất lực** hoặc **vô nghĩa** của hành động ở vế đầu.\n' +
      '🧊 Tương đương với: "Dù cho...", "Dẫu có...", "Cho dù..." nhưng với sắc thái **bi quan, thất vọng**.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Động từ thể た] + ところで\n\n' +
      '📌 Thường đi với các động từ thể hiện hành động nỗ lực, nhưng **vế sau không theo kỳ vọng**.',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '✅ Dùng để nhấn mạnh rằng **kết quả không thay đổi** dù có làm điều gì đó.\n' +
      '❗ Vế sau thường là **phủ định** hoặc mang ý nghĩa **tiêu cực / vô ích**.\n\n' +
      '⛔ Không dùng trong những câu mang nghĩa kỳ vọng, khích lệ.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 今さら謝ったところで、許してもらえないだろう。\n' +
      '→ Dù bây giờ có xin lỗi thì chắc cũng không được tha thứ đâu.\n\n' +
      '2. 一生懸命勉強したところで、合格できるとは限らない。\n' +
      '→ Dù có học hành chăm chỉ thì cũng chưa chắc đã đậu.\n\n' +
      '3. 本当のことを言ったところで、誰も信じてくれない。\n' +
      '→ Dù tôi có nói thật thì cũng không ai tin cả.\n\n' +
      '4. 急いだところで、間に合わないよ。\n' +
      '→ Dù có vội thì cũng không kịp đâu.',
  },
  {
    title: '5. Ghi nhớ nhanh',
    explanation:
      '💡 Hãy nhớ:\n' +
      '・「～たところで」 thường đi với các vế sau mang nghĩa **phủ định, không kết quả**.\n' +
      '・Dùng khi bạn muốn diễn đạt sự **bất lực**, hoặc **mất hy vọng** về điều gì đó.\n\n' +
      '🆘 Tránh dùng trong văn phong tích cực hoặc khuyến khích người khác.',
  },
]

const GrammarTatokorodeScreen = () => {
  return <GrammarTemplateScreen screenTitle="～たところで" grammarSections={grammarSections} />
}

export default GrammarTatokorodeScreen
