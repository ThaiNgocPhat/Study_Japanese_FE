import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～にほかならない」có nghĩa là "chính là...", "không gì khác ngoài..."\n' +
      '→ Dùng để khẳng định mạnh mẽ rằng điều gì đó chính là A, không phải B hay C.\n\n' +
      '📌 Cấu trúc:\n・[Danh từ] + にほかならない\n\n' +
      '💡 Mẫu câu mang tính nhấn mạnh và thường dùng trong văn viết, phát biểu, lập luận.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① このプロジェクトの成功は、皆さんの努力の結果にほかならない。\n→ Sự thành công của dự án này chính là kết quả từ nỗ lực của mọi người.\n\n' +
      '② 親が子供を叱るのは、愛情にほかならない。\n→ Việc cha mẹ la mắng con cái chính là vì yêu thương.\n\n' +
      '③ この制度は国民の声にほかならない。\n→ Chế độ này chính là tiếng nói của nhân dân.\n\n' +
      '④ 彼の行動は勇気の証にほかならない。\n→ Hành động của anh ấy chính là minh chứng cho lòng dũng cảm.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Thường đi với những danh từ thể hiện lý do, nguyên nhân, bản chất như: 愛情, 努力, 証, 結果…\n\n' +
      '🔸 Không dùng với các từ mang sắc thái tiêu cực hoặc những điều chưa chắc chắn.\n\n' +
      '🔸 So với「です」thì「にほかならない」mang tính khẳng định mạnh và trang trọng hơn.\n\n' +
      '📌 Là mẫu ngữ pháp thường gặp trong N2 hoặc N1.',
  },
]

const GrammarNiHokaNaranaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～にほかならない" grammarSections={grammarSections} />
}

export default GrammarNiHokaNaranaiScreen
