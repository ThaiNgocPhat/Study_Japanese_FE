import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～ずにはいられない」có ý nghĩa giống với「～ないではいられない」, dùng để diễn tả **cảm xúc hoặc hành động không thể kiềm chế được**.\n\n' +
      '📌 Ý nghĩa: “không thể không…”, “buộc phải…”, “phải làm…”\n\n' +
      '📎 Cấu trúc:\n' +
      '[Vない (bỏ ない)] + ずにはいられない\n' +
      '📌 Đặc biệt: 「する」→「せずにはいられない」\n\n' +
      '👉 Mang tính văn viết hơn so với「～ないではいられない」.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 彼の優しさに感動せずにはいられなかった。\n→ Tôi đã không thể không cảm động trước sự tử tế của anh ấy.\n\n' +
      '② この曲を聞くと、歌わずにはいられない。\n→ Nghe bài hát này là tôi không thể không hát theo.\n\n' +
      '③ あの映画は何度見ても、泣かずにはいられない。\n→ Dù xem bộ phim đó bao nhiêu lần đi nữa, tôi vẫn không thể không khóc.\n\n' +
      '④ 彼の話は面白くて、笑わずにはいられなかった。\n→ Câu chuyện của anh ấy quá hài nên tôi không thể nhịn cười.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Mẫu ngữ pháp này dùng trong văn viết hoặc trong hoàn cảnh trang trọng.\n' +
      '🔸 Chủ ngữ thường là người nói hoặc ngôi thứ nhất, thể hiện cảm xúc cá nhân.\n' +
      '🔸 Tương đương nghĩa với「～ないではいられない」nhưng có sắc thái trang trọng hơn.\n\n' +
      '📘 Là mẫu ngữ pháp quan trọng trong kỳ thi JLPT N2.',
  },
]

const GrammarZuNiwaIrarenaiScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～ずにはいられない" grammarSections={grammarSections} />
  )
}

export default GrammarZuNiwaIrarenaiScreen
