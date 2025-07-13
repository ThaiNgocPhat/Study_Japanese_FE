import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ばかりに',
    explanation:
      '📌「～ばかりに」 dùng để diễn tả **một kết quả tiêu cực xảy ra chỉ vì một lý do nào đó**, dù lý do đó không lớn hoặc không đáng kể.\n' +
      '👉 Dịch: "Chỉ vì… mà…", "Chỉ tại… nên… (kết quả xấu)"',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể thường + ばかりに\n' +
      '🔹 Tính từ -i + ばかりに\n' +
      '🔹 Tính từ -na (な) + ばかりに\n' +
      '🔹 Danh từ + である + ばかりに',
  },
  {
    title: '3. Ý nghĩa và sắc thái',
    explanation:
      '🔍 Diễn đạt sự tiếc nuối, bất mãn hoặc hối hận vì một nguyên nhân gây ra hậu quả không mong muốn.\n' +
      '⚠️ Chủ yếu dùng với kết quả tiêu cực, không vui.\n' +
      '📌 Vế sau thường là kết quả không tốt, khó khăn hoặc ngoài ý muốn.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. お金がないばかりに、夢をあきらめなければならなかった。\n' +
      '→ Chỉ vì không có tiền mà tôi đã phải từ bỏ giấc mơ.\n\n' +
      '2. 住所を間違えて書いたばかりに、手紙が届かなかった。\n' +
      '→ Chỉ vì ghi sai địa chỉ mà lá thư đã không đến nơi.\n\n' +
      '3. 私がヘンなことを言ったばかりに、みんながしらけてしまった。\n' +
      '→ Chỉ vì tôi nói điều kỳ cục mà mọi người trở nên mất hứng.\n\n' +
      '4. 有名人であるばかりに、プライバシーがない。\n' +
      '→ Chỉ vì là người nổi tiếng nên không có sự riêng tư.',
  },
  {
    title: '5. So sánh với 「～せいで」 và 「～ために」',
    explanation:
      '🔸「～せいで」 và 「～ために」 cũng dùng để nêu nguyên nhân kết quả xấu, nhưng:\n' +
      '・「～ばかりに」 nhấn mạnh cảm xúc tiếc nuối, và nguyên nhân thường là một **việc nhỏ nhặt**.\n' +
      '📝 Ví dụ:\n' +
      '・遅刻したせいで、先生に怒られた。\n' +
      '→ Vì đến muộn nên bị thầy mắng. (không nhất thiết là điều tiếc nuối)\n\n' +
      '・遅刻したばかりに、大事な話を聞き逃した。\n' +
      '→ Chỉ vì đến muộn mà lỡ mất chuyện quan trọng. (→ tiếc nuối, nhấn mạnh hậu quả)',
  },
]

const GrammarBakariniScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ばかりに" grammarSections={grammarSections} />
}

export default GrammarBakariniScreen
