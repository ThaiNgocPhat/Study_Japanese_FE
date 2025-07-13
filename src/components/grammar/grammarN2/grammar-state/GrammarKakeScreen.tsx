import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～かけ」diễn tả một hành động đang trong trạng thái nửa chừng, chưa hoàn thành.\n' +
      '👉 Nghĩa tiếng Việt: "đang làm dở...", "bỏ dở..."\n\n' +
      '📌 Cấu trúc:\n' +
      '[Động từ -ます (bỏ ます)] + かけ',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Dùng để nói về hành động vừa mới bắt đầu hoặc làm dở dang, chưa hoàn tất.\n' +
      '✅ Có thể mang nghĩa tích cực hoặc tiêu cực tùy ngữ cảnh.\n\n' +
      'Ví dụ:\n' +
      '・読みかけの本\n' +
      '→ Quyển sách đang đọc dở.\n' +
      '・話しかける\n' +
      '→ Bắt đầu nói chuyện với ai đó.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 昨日読みかけの本を続けて読みました。\n' +
      '→ Tôi tiếp tục đọc cuốn sách mà hôm qua còn đang đọc dở.\n\n' +
      '② 彼は話しかけても返事をしなかった。\n' +
      '→ Tôi nói chuyện với anh ấy nhưng anh ấy không trả lời.\n\n' +
      '③ 作りかけの料理を冷蔵庫に入れた。\n' +
      '→ Tôi bỏ món ăn đang nấu dở vào trong tủ lạnh.',
  },
]

const GrammarKakeScreen = () => {
  return <GrammarTemplateScreen screenTitle="～かけ" grammarSections={grammarSections} />
}

export default GrammarKakeScreen
