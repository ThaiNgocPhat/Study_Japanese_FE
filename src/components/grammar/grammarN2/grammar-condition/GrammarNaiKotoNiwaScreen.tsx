import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ないことには',
    explanation:
      '📌 Mẫu câu **「～ないことには」** diễn tả ý nghĩa: **"Nếu không..., thì không thể..."**, "**nếu không có A thì B sẽ không xảy ra / không thể thực hiện được**".\n\n' +
      '👉 Dùng khi muốn nhấn mạnh **điều kiện cần thiết** để điều gì đó xảy ra.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Động từ thể ない] + ことには\n🔹 [Tính từ -い (phủ định: ～くない)] + ことには\n🔹 [Tính từ -な (phủ định: ～でない)] + ことには\n🔹 [Danh từ + でない] + ことには\n\n' +
      '📌 Chủ yếu dùng với **động từ phủ định**.',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '✅ Nhấn mạnh rằng **nếu không có điều kiện A**, thì **kết quả hoặc hành động B là không thể** xảy ra, không thực hiện được, hoặc không biết rõ.\n\n' +
      '❗ Vế sau thường là câu phủ định, biểu hiện **khó khăn, bất khả thi, hoặc không rõ ràng**.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. お金がないことには、この計画は実行できない。\n' +
      '→ Nếu không có tiền thì kế hoạch này không thể thực hiện được.\n\n' +
      '2. 実際に会ってみないことには、どんな人か分からない。\n' +
      '→ Nếu không gặp trực tiếp thì không thể biết là người như thế nào.\n\n' +
      '3. 練習しないことには、上手になりませんよ。\n' +
      '→ Nếu không luyện tập thì không thể giỏi lên được đâu.\n\n' +
      '4. 資格がないことには、この仕事はできない。\n' +
      '→ Nếu không có bằng cấp thì không thể làm công việc này.',
  },
  {
    title: '5. Mẹo ghi nhớ',
    explanation:
      '💡 Ghi nhớ mẫu 「～ないことには」 luôn gắn với **điều kiện phủ định** ở vế đầu và **kết quả tiêu cực** hoặc **không thể** ở vế sau.\n\n' +
      '👉 Là cách nói nhấn mạnh **điều kiện tiên quyết**.\n' +
      '🚫 Không dùng với các hành động có thể xảy ra ngẫu nhiên hoặc không quan trọng.',
  },
]

const GrammarNaiKotoNiwaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ないことには" grammarSections={grammarSections} />
}

export default GrammarNaiKotoNiwaScreen
