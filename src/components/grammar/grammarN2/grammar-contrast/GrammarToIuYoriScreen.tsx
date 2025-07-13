import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～というより',
    explanation:
      '📌「～というより」được dùng khi muốn **so sánh** hai cách nói hoặc hai đánh giá, và cho rằng **cách nói sau mới chính xác hơn hoặc phù hợp hơn**.\n\n' +
      '👉 Nghĩa: "nói đúng hơn là...", "phải nói là..."',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸 [Thể thường (普通形)] + というより\n' +
      '🔸 Tính từ -na / Danh từ + だ + というより\n\n' +
      '📍 Dạng phổ biến nhất: A というより B（B chính xác hơn A）',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Dùng để **chỉnh sửa, điều chỉnh lại cách diễn đạt**, cho rằng cách nói ở vế sau sẽ phù hợp hơn, đúng hơn so với vế trước.\n' +
      '✅ Thường được dùng để **giải thích, nhận xét, hoặc nêu ý kiến** trong hội thoại hay văn viết.\n' +
      '✅ Vế sau thường nhấn mạnh hơn vế trước.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 彼は歌手というより俳優として有名だ。\n' +
      '→ Anh ấy nổi tiếng là một diễn viên hơn là ca sĩ.\n\n' +
      '2. あの店は、安いというよりまずい。\n' +
      '→ Quán đó không hẳn là rẻ mà phải nói là đồ ăn dở.\n\n' +
      '3. 怒っているというより、がっかりしているようだ。\n' +
      '→ Có vẻ như không phải đang tức giận mà là đang thất vọng.\n\n' +
      '4. これは趣味というより仕事みたいになっている。\n' +
      '→ Cái này không còn là sở thích nữa mà giống như công việc rồi.\n\n' +
      '5. あの子はかわいいというより、きれいだね。\n' +
      '→ Đứa bé đó không phải là dễ thương mà đúng hơn là xinh đẹp.',
  },
  {
    title: '5. Lưu ý khi sử dụng',
    explanation:
      '🔹 Cấu trúc này thiên về so sánh, chỉnh sửa lại cách đánh giá.\n' +
      '🔹 Thường dùng trong văn nói, văn viết mang tính cá nhân, bình luận.\n' +
      '🔹 Có thể dùng trong các câu mang sắc thái hài hước, phê bình nhẹ nhàng.',
  },
]

const GrammarToIuYoriScreen = () => {
  return <GrammarTemplateScreen screenTitle="～というより" grammarSections={grammarSections} />
}

export default GrammarToIuYoriScreen
