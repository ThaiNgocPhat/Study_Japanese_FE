import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～たとたん」diễn tả “vừa mới làm xong hành động A thì ngay lập tức hành động B xảy ra”.\n' +
      '👉 Mẫu câu nhấn mạnh tính bất ngờ hoặc xảy ra ngay lập tức của hành động ở vế sau sau khi hành động ở vế trước kết thúc.\n\n' +
      '📌 Cấu trúc:\n' +
      '[Động từ thể た] + とたん（に）',
  },
  {
    title: '2. Cách dùng',
    explanation:
      '✅ Dùng khi muốn nói hai hành động xảy ra gần như đồng thời, hành động sau xảy ra ngay khi hành động trước kết thúc.\n' +
      '✅ Hành động sau thường mang tính bất ngờ hoặc không mong đợi.\n' +
      '✅ Không dùng cho những hành động mang tính chủ ý kéo dài.\n\n' +
      'Ví dụ:\n' +
      '・家に入ったとたん、電話が鳴った。\n' +
      '→ Vừa mới vào nhà thì điện thoại reo.\n' +
      '・彼が話し始めたとたん、みんなが黙った。',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① ドアを開けたとたん、猫が飛び出した。\n' +
      '→ Vừa mở cửa thì con mèo lao ra.\n\n' +
      '② 電車が発車したとたん、大雨が降り始めた。\n' +
      '→ Vừa tàu chạy thì trời bắt đầu mưa to.\n\n' +
      '③ 先生が話し終わったとたん、生徒たちは席を立った。\n' +
      '→ Vừa thầy giáo nói xong thì học sinh đứng dậy.',
  },
]

const GrammarTatoTanscreen = () => {
  return <GrammarTemplateScreen screenTitle="～たとたん" grammarSections={grammarSections} />
}

export default GrammarTatoTanscreen
