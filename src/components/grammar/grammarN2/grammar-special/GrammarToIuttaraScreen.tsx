import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～といったら」dùng để nhấn mạnh sự ngạc nhiên, kinh ngạc, hoặc mức độ cao của một sự việc nào đó khi nhắc đến một chủ đề cụ thể.\n\n' +
      '📌 Ý nghĩa: "Nói đến… thì… (đến mức ngạc nhiên)", "Nếu nói… thì quả thật…"\n\n' +
      '📎 Cấu trúc:\n' +
      '[Danh từ] + といったら',
  },
  {
    title: '2. Đặc điểm',
    explanation:
      '✅ Dùng để nhấn mạnh mức độ bất ngờ, ngạc nhiên, ấn tượng mạnh về chủ đề được đề cập.\n' +
      '✅ Có thể dùng thay thế cho「～というと」hoặc「～といえば」nhưng sắc thái cảm xúc mạnh hơn.\n' +
      '✅ Thường đi kèm các từ cảm thán như 「すごい」「大変」「ひどい」v.v.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 富士山といったら、登るのが本当に大変でした。\n→ Nói đến núi Phú Sĩ thì việc leo lên thật sự rất vất vả.\n\n' +
      '② 夏の暑さといったら、耐えられないほどです。\n→ Cái nóng mùa hè thì đến mức không thể chịu nổi.\n\n' +
      '③ 彼の料理の上手さといったら、プロ並みです。\n→ Nói đến độ giỏi nấu ăn của anh ấy thì ngang tầm đầu bếp chuyên nghiệp.\n\n' +
      '④ 試験の難しさといったら、涙が出るほどだった。\n→ Nói đến độ khó của kỳ thi thì đến mức muốn khóc luôn.',
  },
  {
    title: '4. So sánh với ～というと / ～といえば',
    explanation:
      '🔸「～といったら」: nhấn mạnh mức độ cảm xúc, bất ngờ, kinh ngạc (mạnh hơn)\n' +
      '🔸「～というと / といえば」: thiên về nêu đề tài, liên tưởng, xác nhận thông tin\n\n' +
      '🧠 Ví dụ phân biệt:\n' +
      '・京都というと、神社や寺が多いですね。\n→ Nói đến Kyoto thì có nhiều đền chùa.\n' +
      '・京都といったら、人の多さにびっくりしました。\n→ Nói đến Kyoto thì tôi rất ngạc nhiên vì quá đông người.',
  },
]

const GrammarToIuttaraScreen = () => {
  return <GrammarTemplateScreen screenTitle="～といったら" grammarSections={grammarSections} />
}

export default GrammarToIuttaraScreen
