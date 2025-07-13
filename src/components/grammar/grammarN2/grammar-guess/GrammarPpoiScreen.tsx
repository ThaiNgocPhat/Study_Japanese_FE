import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～っぽい',
    explanation:
      '📌「～っぽい」là hậu tố gắn sau danh từ, động từ hoặc tính từ để biểu thị ý:\n' +
      '① Mang tính chất giống như…\n' +
      '② Có xu hướng thường hay…\n' +
      '③ Dễ xảy ra/dễ làm…\n\n' +
      '💡 Có thể hiểu là “trông có vẻ”, “ra dáng”, “giống như”, hoặc “thường hay” tùy theo ngữ cảnh.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Danh từ + っぽい\n' +
      '🔹 Động từ gốc + っぽい\n' +
      '🔹 Tính từ -i (chỉ một số, ví dụ: 忘れっぽい)\n\n' +
      '📍Chú ý: Đây là một **tính từ -i**, nên có thể chia như: っぽくない、っぽかった…',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '① **Giống như … (về cảm giác, ấn tượng):**\n' +
      '　この服は男っぽいですね。\n' +
      '　→ Bộ đồ này trông giống đồ con trai nhỉ.\n\n' +
      '② **Có xu hướng, thường hay …:**\n' +
      '　彼は怒りっぽい。\n' +
      '　→ Anh ấy dễ nổi giận.\n\n' +
      '③ **Dễ làm gì đó (theo xu hướng):**\n' +
      '　私は忘れっぽいです。\n' +
      '　→ Tôi hay quên lắm.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 子どもっぽい考え方はやめたほうがいい。\n' +
      '→ Cậu nên bỏ cách suy nghĩ trẻ con đi.\n\n' +
      '2. 彼は飽きっぽくて、何をしても続かない。\n' +
      '→ Anh ta hay chán, làm gì cũng không lâu bền.\n\n' +
      '3. 彼女は涙（なみだ）っぽい性格ですね。\n' +
      '→ Cô ấy là người mau nước mắt.\n\n' +
      '4. この料理は油っぽくてちょっと苦手だ。\n' +
      '→ Món này hơi nhiều dầu mỡ, mình không thích lắm.',
  },
  {
    title: '5. So sánh với ～らしい và ～みたい',
    explanation:
      '🔸 ～っぽい: Thiên về **ấn tượng chủ quan**, hoặc **khuynh hướng, xu hướng**, thường dùng trong văn nói.\n' +
      '🔸 ～らしい: Nói về tính chất điển hình, đặc trưng.\n' +
      '🔸 ～みたい: Mang nghĩa so sánh “giống như”, phổ biến trong hội thoại.\n\n' +
      '📍Ví dụ so sánh:\n' +
      '　彼は子どもっぽい。→ Anh ta cư xử trẻ con.\n' +
      '　彼は子どもらしい。→ Anh ta hồn nhiên, đúng kiểu trẻ con.\n' +
      '　彼は子どもみたい。→ Anh ta giống như một đứa trẻ.',
  },
]

const GrammarPpoiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～っぽい" grammarSections={grammarSections} />
}

export default GrammarPpoiScreen
