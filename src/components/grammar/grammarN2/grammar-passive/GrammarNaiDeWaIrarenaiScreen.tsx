import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹 Mẫu「～ないではいられない」diễn tả **một cảm xúc, hành động nào đó quá mạnh mẽ, đến mức không thể không làm**.\n\n' +
      '📌 Ý nghĩa: “không thể không…”, “phải…”, “buộc phải…”\n\n' +
      '📎 Cấu trúc:\n' +
      '[Vない] + ではいられない\n' +
      '👉 Trong văn nói thường rút gọn thành: ～ないじゃいられない\n\n' +
      '✅ Thường dùng để thể hiện cảm xúc, hành vi không thể kiềm chế.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 彼の話を聞いて、笑わないではいられなかった。\n→ Nghe chuyện của anh ấy, tôi không thể không bật cười.\n\n' +
      '② あの映画を見ると、泣かないではいられない。\n→ Cứ xem bộ phim đó là tôi lại không thể không khóc.\n\n' +
      '③ 彼女の努力を見ると、応援しないではいられない。\n→ Thấy cô ấy nỗ lực, tôi không thể không cổ vũ.\n\n' +
      '④ この音楽を聞くと、踊らないではいられない。\n→ Nghe bản nhạc này là tôi không thể không nhảy theo.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Mẫu câu này nhấn mạnh tính **tự nhiên, không thể kiểm soát** của hành động hay cảm xúc.\n' +
      '🔸 Thường dùng để thể hiện tâm trạng sâu sắc của người nói.\n' +
      '🔸 Chủ ngữ thường là ngôi thứ nhất hoặc được hiểu ngầm trong ngữ cảnh.\n\n' +
      '📘 Là mẫu ngữ pháp trọng điểm trong JLPT N2.',
  },
]

const GrammarNaiDeWaIrarenaiScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～ないではいられない" grammarSections={grammarSections} />
  )
}

export default GrammarNaiDeWaIrarenaiScreen
