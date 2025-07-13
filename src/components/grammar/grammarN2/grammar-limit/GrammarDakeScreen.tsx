import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp',
    explanation:
      '📌 Các mẫu ngữ pháp với「だけ」liên quan đến giới hạn, xứng đáng, và kỳ vọng:\n' +
      '・～だけ: chỉ, đến mức\n' +
      '・～だけに: chính vì\n' +
      '・～だけあって: quả đúng là, đúng như kỳ vọng\n\n' +
      '👉 Ba mẫu này mang sắc thái khác nhau nhưng cùng liên quan đến mức độ, lý do, và đánh giá.',
  },
  {
    title: '2. ～だけ',
    explanation:
      '🔹 Cách dùng:\n・[Động từ thể khả năng] + だけ + [Động từ]\n→ Làm hết mức có thể, trong giới hạn cho phép.\n\n' +
      '🔸 Ví dụ:\n1. 食べたいだけ食べてください。\n→ Hãy ăn bao nhiêu tùy thích.\n2. 行けるだけ行ってみよう。\n→ Thử đi hết mức có thể.',
  },
  {
    title: '3. ～だけに',
    explanation:
      '🔹 Ý nghĩa: "chính vì… nên…"\n→ Nhấn mạnh mối liên hệ giữa nguyên nhân và kết quả, với cảm xúc mạnh hơn.\n\n' +
      '🔸 Ví dụ:\n1. 彼は努力しただけに、合格して本当にうれしそうだ。\n→ Chính vì đã nỗ lực nên khi đậu, anh ấy thật sự rất vui.\n' +
      '2. 有名なレストランだけに、サービスがすばらしい。\n→ Chính vì là nhà hàng nổi tiếng nên dịch vụ rất tuyệt vời.',
  },
  {
    title: '4. ～だけあって',
    explanation:
      '🔹 Ý nghĩa: "quả đúng là…", "đúng như kỳ vọng"\n→ Dùng để khen ngợi điều gì đó xứng đáng với điều kiện hoặc danh tiếng.\n\n' +
      '🔸 Ví dụ:\n1. 高かっただけあって、このカバンは長持ちします。\n→ Quả đúng là đắt, cái túi này dùng được lâu.\n' +
      '2. 彼はプロだけあって、演奏がすばらしい。\n→ Đúng là dân chuyên, màn trình diễn thật tuyệt vời.',
  },
  {
    title: '5. So sánh và lưu ý',
    explanation:
      '✅「だけ」→ chỉ giới hạn số lượng hoặc mức độ\n✅「だけに」→ nhấn mạnh nguyên nhân, thường mang cảm xúc\n✅「だけあって」→ đánh giá mang tính khen ngợi, kỳ vọng đúng\n\n📝 Cả ba mẫu đều thường dùng trong N2 trở lên, đặc biệt là trong văn viết hoặc khi nói trang trọng.',
  },
]

const GrammarDakeScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～だけ / ～だけに / ～だけあって"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarDakeScreen
