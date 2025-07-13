import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～がち」diễn tả một trạng thái hoặc hành động thường xuyên xảy ra, hay có xu hướng làm điều gì đó, thường mang nghĩa tiêu cực hoặc không tốt lắm.\n' +
      '👉 Nghĩa tiếng Việt: "thường hay...", "có xu hướng...", "hay bị..."\n\n' +
      '📌 Cấu trúc:\n' +
      '[Danh từ hoặc động từ thể masu (bỏ ます)] + がち',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Dùng để nói về việc thường xuyên xảy ra điều gì đó, hay có xu hướng xảy ra một việc gì đó không tốt hoặc không mong muốn.\n' +
      '✅ Thường dùng trong văn viết hoặc trang trọng hơn.\n\n' +
      'Ví dụ:\n' +
      '・忘れがち\n' +
      '→ Thường hay quên.\n' +
      '・遅れがち\n' +
      '→ Hay bị trễ.\n' +
      '・病気がち\n' +
      '→ Thường hay ốm.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 最近、疲れがちで、よく眠れない。\n' +
      '→ Gần đây tôi hay mệt mỏi, không ngủ ngon.\n\n' +
      '② この時期は風邪をひきがちですから、気をつけてください。\n' +
      '→ Thời điểm này thường hay bị cảm, nên hãy chú ý nhé.\n\n' +
      '③ 彼はミスがちなので、気をつけたほうがいい。\n' +
      '→ Anh ấy thường hay mắc lỗi, nên cẩn thận hơn.',
  },
]

const GrammarGachiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～がち" grammarSections={grammarSections} />
}

export default GrammarGachiScreen
