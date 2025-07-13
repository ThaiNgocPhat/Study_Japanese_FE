import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～といっても',
    explanation:
      '📌 Mẫu câu 「～といっても」 được dùng để **đính chính**, **nêu ngoại lệ** hoặc **giảm nhẹ ý nghĩa** của điều vừa được nói ra.\n\n' +
      '👉 Dịch nghĩa tiếng Việt thường là: **"Nói là... nhưng mà..." / "Tuy nói là... nhưng..."**.\n\n' +
      '🔸 Thường dùng khi thực tế **khác với những gì người nghe có thể tưởng tượng hoặc kỳ vọng**.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Danh từ / Động từ / Tính từ ở thể thường] + といっても\n\n' +
      '✅ Không cần chia đặc biệt, chỉ cần ở dạng thường (ふつうけい).',
  },
  {
    title: '3. Ý nghĩa và sắc thái',
    explanation:
      '🔸 Dùng để **giảm nhẹ**, **nói lại thực tế thấp hơn** hoặc **ít đặc biệt hơn** so với kỳ vọng.\n\n' +
      '🔹 Người nói thường đưa ra thông tin A, sau đó dùng ～といっても để điều chỉnh kỳ vọng về A.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 日本に住んでいるといっても、まだ半年だけです。\n' +
      '→ Nói là sống ở Nhật, nhưng thực ra mới chỉ có nửa năm thôi.\n\n' +
      '2. 旅行といっても、近くの温泉に行っただけです。\n' +
      '→ Nói là đi du lịch, nhưng chỉ là đi suối nước nóng gần nhà thôi.\n\n' +
      '3. 忙しいといっても、寝る時間はちゃんとあります。\n' +
      '→ Nói là bận, nhưng vẫn có thời gian ngủ đầy đủ.\n\n' +
      '4. 料理ができるといっても、簡単なものしか作れません。\n' +
      '→ Nói là biết nấu ăn, nhưng chỉ nấu được mấy món đơn giản thôi.',
  },
  {
    title: '5. So sánh và lưu ý',
    explanation:
      '📌 So sánh với 「～けど」「～が」:\n' +
      '・「～といっても」 nhấn mạnh hơn vào **việc thực tế khác với tưởng tượng**.\n\n' +
      '💡 Mẹo nhớ:\n' +
      '・Dùng khi muốn **giảm nhẹ ấn tượng** do câu trước tạo ra.\n\n' +
      '⚠️ Vế sau không nên mang tính đối lập hoàn toàn, mà là điều chỉnh/khiêm tốn nhẹ nhàng.',
  },
]

const GrammarToIttemoScreen = () => {
  return <GrammarTemplateScreen screenTitle="～といっても" grammarSections={grammarSections} />
}

export default GrammarToIttemoScreen
