import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const GrammarDeshouScreen = () => {
  const grammarSections = [
    {
      title: '1. Diễn tả suy đoán – Chắc là…',
      explanation:
        '👉 Cấu trúc:\n' +
        '・[Động từ thể thường] + でしょう\n' +
        '・[Tính từ -i] + でしょう\n' +
        '・[Tính từ -na/Danh từ] (bỏ な) + でしょう\n\n' +
        '📌 Dùng để **dự đoán một điều gì đó** mà mình **không chắc chắn 100%**, thường dựa vào cảm giác hoặc thông tin có sẵn.\n\n' +
        '🔹 Ví dụ:\n' +
        '・あしたは はれるでしょう。→ Mai chắc là trời sẽ nắng.\n' +
        '・かれは たぶん こないでしょう。→ Anh ấy có lẽ sẽ không đến.\n' +
        '・きのう、Aチームが かったでしょう。→ Hôm qua chắc đội A thắng rồi.',
    },
    {
      title: '2. Xác nhận với người nghe – đúng không?',
      explanation:
        '👉 Dùng「でしょう？」để xác nhận lại suy nghĩ của mình với người khác, hoặc như tự hỏi chính mình.\n\n' +
        '🔹 Ví dụ:\n' +
        '・あしたは 日曜日でしょう？→ Mai là Chủ Nhật phải không?\n' +
        '・あのひとは たなかさんでしょう？→ Người đó là anh Tanaka phải không?\n' +
        '・このもんだいは かんたんでしょう？→ Câu hỏi này dễ nhỉ?',
    },
    {
      title: '3. Dùng để hỏi lịch sự: ～でしょうか',
      explanation:
        '👉「～でしょうか」là cách hỏi lịch sự, nhẹ nhàng hơn「ですか」.\n\n' +
        '🔹 Ví dụ:\n' +
        '・これは いくらでしょうか。→ Cái này bao nhiêu tiền vậy ạ?\n' +
        '・あのひとは だれでしょうか。→ Người kia là ai vậy?',
    },
    {
      title: '4. Cách nói thân mật: ～だろう',
      explanation:
        '👉 Trong hội thoại thân mật hoặc văn nói, người ta dùng「だろう」thay cho「でしょう」.\n\n' +
        '🔹 Ví dụ:\n' +
        '・かれは たぶん こないだろう。→ Chắc anh ấy sẽ không đến.\n' +
        '・あしたは あめが ふるだろう。→ Mai chắc sẽ mưa.\n' +
        '・Aチームが かっただろう。→ Đội A chắc là thắng rồi.',
    },
  ]

  return <GrammarTemplateScreen screenTitle="～でしょう" grammarSections={grammarSections} />
}

export default GrammarDeshouScreen
