import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～次第で」diễn tả rằng kết quả hoặc tình huống sẽ thay đổi tùy thuộc vào điều kiện hoặc tình trạng trước đó.\n' +
      '👉 Mang nghĩa "tùy vào ~ mà sẽ ...", "phụ thuộc vào ~ mà ..."\n\n' +
      '📌 Cấu trúc:\n' +
      '[Danh từ] + 次第で\n' +
      'hoặc\n' +
      '[Danh từ] + 次第では',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Dùng để nói rằng kết quả, tình hình sẽ khác nhau tùy thuộc vào điều kiện hay tình huống đã nêu.\n' +
      '✅ Thường dùng trong văn nói trang trọng hoặc văn viết, trong các câu đưa ra khả năng, lựa chọn hay điều kiện.\n\n' +
      'Ví dụ:\n' +
      '・結果次第で、昇進が決まる。\n' +
      '→ Tùy kết quả mà việc thăng chức sẽ được quyết định.\n' +
      '・天気次第では、試合が中止になるかもしれない。\n' +
      '→ Tùy vào thời tiết mà có thể trận đấu sẽ bị hủy.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① あなたの努力次第で、合格できるかどうかが決まります。\n' +
      '→ Tùy vào nỗ lực của bạn mà việc đỗ hay không sẽ được quyết định.\n\n' +
      '② 会議の結果次第では、計画を変更する可能性があります。\n' +
      '→ Tùy vào kết quả cuộc họp mà có thể thay đổi kế hoạch.\n\n' +
      '③ 状況次第で対応を考えます。\n' +
      '→ Tùy vào tình hình mà tôi sẽ cân nhắc cách xử lý.',
  },
]

const GrammarShidaiDeScreen = () => {
  return <GrammarTemplateScreen screenTitle="～次第で" grammarSections={grammarSections} />
}

export default GrammarShidaiDeScreen
