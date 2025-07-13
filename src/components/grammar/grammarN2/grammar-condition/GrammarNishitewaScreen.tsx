import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～にしては',
    explanation:
      '📌 Mẫu câu 「～にしては」 dùng để diễn tả **một điều gì đó khác với điều được dự đoán** dựa trên một thông tin, sự thật, tiêu chuẩn nào đó. \n\n' +
      '👉 Nghĩa tiếng Việt thường là: **“Dù là…, vậy mà…” / “So với…, thì…”**.\n\n' +
      '🔸 Mẫu này thể hiện sự **trái với lẽ thông thường** hoặc trái với **dự đoán logic**.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Danh từ + にしては\n' +
      '🔹 Động từ thể thường + にしては\n\n' +
      '✅ Không dùng với tính từ.\n' +
      '✅ Không đi với các danh từ không thể đo lường hoặc không rõ tiêu chuẩn (ví dụ: 明日、今週...)',
  },
  {
    title: '3. Ý nghĩa và sắc thái',
    explanation:
      '🔹 Mẫu này thường dùng để **so sánh với kỳ vọng thông thường** hoặc **những gì người nói tưởng tượng ra** dựa trên thông tin có sẵn.\n\n' +
      '📌 So sánh với:\n' +
      '・「～わりに」: linh hoạt hơn, dùng được cả với tính từ.\n' +
      '・「～にしては」: dùng khi có **tiêu chuẩn rõ ràng** để so sánh (tuổi tác, kinh nghiệm, nghề nghiệp,...)',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 初めてにしては、よくできましたね。\n' +
      '→ Dù là lần đầu nhưng làm tốt đấy nhỉ.\n\n' +
      '2. 外国人にしては日本語が上手ですね。\n' +
      '→ Dù là người nước ngoài nhưng tiếng Nhật giỏi quá.\n\n' +
      '3. 子どもにしては、難しいことをよく知っている。\n' +
      '→ Dù là trẻ con nhưng biết được nhiều điều khó thật.\n\n' +
      '4. たくさん練習したにしては、あまり上手じゃない。\n' +
      '→ Dù luyện tập nhiều mà vẫn chưa giỏi lắm.',
  },
  {
    title: '5. Mẹo ghi nhớ và lưu ý',
    explanation:
      '💡 Những từ thường đi kèm:\n' +
      '・初めてにしては\n' +
      '・子どもにしては\n' +
      '・外国人にしては\n' +
      '・新人にしては\n\n' +
      '⚠️ Không nhầm với「～として」 (với tư cách là) hoặc「～のに」 (mặc dù).\n' +
      '⚠️ Vế sau không nên là mệnh lệnh hoặc yêu cầu trực tiếp.',
  },
]

const GrammarNishitewaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～にしては" grammarSections={grammarSections} />
}

export default GrammarNishitewaScreen
