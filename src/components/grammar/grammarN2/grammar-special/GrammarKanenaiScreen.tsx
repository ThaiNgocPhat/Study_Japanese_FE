import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～かねない」diễn tả khả năng một hành động hoặc kết quả xấu, không mong muốn có thể xảy ra.\n' +
      '👉 Mang nghĩa "có thể dẫn đến", "có thể xảy ra (điều xấu)".\n\n' +
      '📌 Cấu trúc:\n' +
      '[Động từ thể masu (bỏ ます)] + かねない\n\n' +
      'Ví dụ: 「彼は失敗しかねない」(Anh ấy có thể thất bại)',
  },
  {
    title: '2. Cách dùng và ý nghĩa',
    explanation:
      '✅ Dùng để diễn tả sự cảnh báo, lo lắng về khả năng xảy ra điều không tốt.\n' +
      '✅ Thường mang ý nghĩa tiêu cực hoặc cảnh báo.\n\n' +
      'Ví dụ:\n' +
      '・そんなことを言うと、誤解を招きかねない。\n' +
      '→ Nếu nói như thế, có thể gây ra hiểu lầm.\n' +
      '・遅刻しかねないので、急いだほうがいい。\n' +
      '→ Vì có thể bị trễ, nên nên nhanh lên.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 無理をすると、体を壊しかねない。\n' +
      '→ Nếu làm quá sức, có thể làm hỏng cơ thể.\n\n' +
      '② 彼の態度は問題を起こしかねない。\n' +
      '→ Thái độ của anh ấy có thể gây ra vấn đề.\n\n' +
      '③ このままだと、失敗しかねない。\n' +
      '→ Nếu cứ thế này, có thể sẽ thất bại.',
  },
]

const GrammarKanenaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～かねない" grammarSections={grammarSections} />
}

export default GrammarKanenaiScreen
