import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～気味」diễn tả cảm giác hoặc tình trạng hơi có xu hướng như thế, thường mang nghĩa hơi tiêu cực hoặc không thoải mái.\n' +
      '👉 Nghĩa tiếng Việt: "có vẻ...", "cảm giác...", "hơi có xu hướng..."\n\n' +
      '📌 Cấu trúc:\n' +
      '[Danh từ hoặc Động từ thể masu (bỏ ます)] + 気味',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Dùng để nói về trạng thái, cảm giác, tình trạng không hoàn toàn rõ ràng nhưng có dấu hiệu hay cảm giác như vậy.\n' +
      '✅ Thường dùng khi muốn biểu đạt sự lo lắng, mệt mỏi, hoặc triệu chứng nhẹ.\n\n' +
      'Ví dụ:\n' +
      '・疲れ気味\n' +
      '→ Hơi mệt, có cảm giác mệt\n' +
      '・風邪気味\n' +
      '→ Có cảm giác bị cảm, hơi giống bị cảm',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 最近疲れ気味で、よく眠れません。\n' +
      '→ Gần đây tôi hơi mệt và không ngủ ngon.\n\n' +
      '② 朝から風邪気味で、喉が痛いです。\n' +
      '→ Từ sáng tôi có cảm giác bị cảm, đau họng.\n\n' +
      '③ ちょっと顔色が悪い気味ですね。\n' +
      '→ Trông bạn có vẻ hơi xanh xao một chút.',
  },
]

const GrammarKimiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～気味" grammarSections={grammarSections} />
}

export default GrammarKimiScreen
