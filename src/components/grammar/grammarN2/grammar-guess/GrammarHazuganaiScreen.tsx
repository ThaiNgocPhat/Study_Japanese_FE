import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～はずがない',
    explanation:
      '📌「～はずがない」diễn tả sự **phủ định chắc chắn** dựa trên căn cứ logic, kinh nghiệm, hoặc lẽ thường.\n' +
      '👉 Nghĩa là: "Lẽ nào lại...", "Chắc chắn không...", "Không thể nào...".',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Động từ thể thường] + はずがない\n' +
      '🔹 [Tính từ -i] + はずがない\n' +
      '🔹 [Tính từ -na] + な + はずがない\n' +
      '🔹 [Danh từ] + の + はずがない',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '💡 Dùng khi người nói **tin chắc rằng điều gì đó không thể xảy ra** dựa trên thông tin có sẵn, suy luận logic hoặc hiểu biết cá nhân.\n' +
      '✳️ Cách nói mềm hơn「わけがない」, nhưng vẫn mang sắc thái phủ định chắc chắn.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 彼がそんなひどいことをするはずがない。\n' +
      '→ Anh ấy chắc chắn không thể làm điều tệ bạc như vậy.\n\n' +
      '2. この問題は簡単だから、間違えるはずがない。\n' +
      '→ Bài này dễ nên không thể sai được.\n\n' +
      '3. 彼女がパーティーに来るはずがないよ。旅行中だから。\n' +
      '→ Cô ấy chắc chắn không thể đến dự tiệc đâu, vì đang đi du lịch mà.\n\n' +
      '4. この店の料理がまずいはずがない。\n' +
      '→ Món ăn của quán này không thể dở được.\n\n' +
      '5. こんな簡単な漢字、読めないはずがないよ。\n' +
      '→ Chữ Hán đơn giản như thế này thì không thể nào không đọc được.',
  },
  {
    title: '5. So sánh với ～わけがない',
    explanation:
      '🔸 「～わけがない」mang sắc thái phủ định mạnh mẽ, cảm tính hơn.\n' +
      '🔸 「～はずがない」mang tính lý trí, dựa vào suy luận logic, sự thật.\n\n' +
      '📌 Ví dụ:\n' +
      '・そんなバカな話、信じる**わけがない**。\n' +
      '・そんなバカな話、信じる**はずがない**。\n' +
      '→ Cả hai đều đúng, nhưng câu dùng 「わけがない」 mạnh mẽ và cảm tính hơn.',
  },
]

const GrammarHazuganaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～はずがない" grammarSections={grammarSections} />
}

export default GrammarHazuganaiScreen
