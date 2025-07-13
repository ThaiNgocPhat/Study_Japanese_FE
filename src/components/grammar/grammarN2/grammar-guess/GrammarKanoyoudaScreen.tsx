import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～かのようだ',
    explanation:
      '📌「～かのようだ」dùng để so sánh, ví von, diễn đạt cảm giác “cứ như là…”, “giống như là… (nhưng thực tế không phải vậy)”.\n' +
      '👉 Đây là cách nói thể hiện sự **khác biệt giữa thực tế và cảm giác, ấn tượng** của người nói.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Động từ thể thường] + かのようだ\n' +
      '🔹 [Động từ thể た] + かのようだ\n\n' +
      '📍 Ngoài ra có thể chia ở dạng:\n' +
      '　・かのように + [Động từ khác]\n' +
      '　・かのような + [Danh từ]',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '💡 Dùng để so sánh một hành động, trạng thái với một việc tưởng tượng như thể là nó thực sự đã xảy ra, dù thực tế không phải vậy.\n\n' +
      '🗣 Một số cách hiểu:\n' +
      '　・Cứ như thể là…\n' +
      '　・Giống như là… (thật ra không phải)\n' +
      '　・Như thể…',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 彼はまるで何も知らないかのような顔をしている。\n' +
      '→ Anh ta làm bộ mặt cứ như thể chẳng biết gì.\n\n' +
      '2. 雨が降ったかのように、地面がぬれている。\n' +
      '→ Mặt đất ướt như thể vừa có mưa vậy.\n\n' +
      '3. 彼女はまるで夢の中にいるかのように幸せそうだった。\n' +
      '→ Cô ấy trông hạnh phúc như thể đang sống trong giấc mơ.\n\n' +
      '4. 彼の話し方は、すべてを知っているかのようだ。\n' +
      '→ Cách nói chuyện của anh ấy cứ như thể biết tất cả mọi thứ vậy.\n\n' +
      '5. 彼はまるで自分が正しいかのように主張した。\n' +
      '→ Anh ta đã khẳng định như thể mình đúng hoàn toàn.',
  },
  {
    title: '5. Lưu ý sử dụng',
    explanation:
      '🔸 Thường đi với cụm từ nhấn mạnh sự so sánh như 「まるで」(cứ như là), 「あたかも」(y như là).\n' +
      '🔸 Dùng để nhấn mạnh sự khác biệt giữa ấn tượng và thực tế.\n' +
      '🔸 Không dùng để miêu tả sự thật – mang tính phán đoán cảm tính.\n' +
      '🔸 Cần phân biệt với 「ようだ」 thường vì 「かのようだ」 nhấn mạnh hơn vào sự **giả định sai lệch** với thực tế.',
  },
]

const GrammarKanoyoudaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～かのようだ" grammarSections={grammarSections} />
}

export default GrammarKanoyoudaScreen
