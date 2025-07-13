import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹 Mẫu ngữ pháp「～てならない」dùng để **diễn tả cảm giác hoặc trạng thái rất mạnh mẽ, không thể ngừng lại, không thể chịu đựng được**.\n\n' +
      '📌 Ý nghĩa: “không thể không…, rất…, không chịu nổi…”\n\n' +
      '📎 Cấu trúc:\n' +
      '[Vて] + ならない\n' +
      '[Aい（くて）] + ならない\n' +
      '[Aな（で）] + ならない\n\n' +
      '✅ Thường dùng để diễn tả cảm giác không thể cưỡng lại, ví dụ như cảm xúc mạnh mẽ, lo lắng, mong muốn, v.v.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 心配でならない。\n→ Lo lắng không chịu nổi.\n\n' +
      '② 彼のことが好きでならない。\n→ Tôi rất thích anh ấy, không thể dừng lại.\n\n' +
      '③ こんなに美しい景色を見て、感動せずにはいられない。\n→ Tôi không thể không cảm động khi nhìn thấy cảnh đẹp như thế này.\n\n' +
      '④ 今夜は寝てならない。\n→ Tối nay tôi phải ngủ, không thể không ngủ.\n\n' +
      '⑤ 勉強しなくてはならない。\n→ Tôi phải học, không thể không học.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 「～てならない」thường được sử dụng trong những tình huống không thể cưỡng lại được cảm xúc, hành động hoặc trạng thái rất mạnh mẽ.\n' +
      '🔸 Mẫu này khác với「～てたまらない」vì「～てたまらない」nhấn mạnh vào cảm xúc mạnh mẽ còn「～てならない」thường mang tính bắt buộc, không thể không làm.\n\n' +
      '📘 Là mẫu ngữ pháp quan trọng trong JLPT N2.',
  },
]

const GrammarTeNaranaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～てならない" grammarSections={grammarSections} />
}

export default GrammarTeNaranaiScreen
