import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ことだし',
    explanation:
      '📌「～ことだし」 được dùng để **nêu lý do, nguyên nhân chính** trong số nhiều lý do khác để đưa ra quyết định hoặc hành động.\n' +
      '👉 Dịch: "Vì… nên…", "Do… nên…"\n' +
      '✨ Mẫu câu này thường đi kèm với những hành động, quyết định hay đề xuất ở vế sau.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể thường + ことだし\n' +
      '🔹 Tính từ -i + ことだし\n' +
      '🔹 Tính từ -na + な + ことだし\n' +
      '🔹 Danh từ + である + ことだし\n\n' +
      '📌 Dạng rút gọn trong văn nói: ～し (mang ý nghĩa tương tự nhưng đơn giản hơn)',
  },
  {
    title: '3. Ý nghĩa và sắc thái',
    explanation:
      '🔎 Diễn tả một lý do chính mà từ đó người nói đưa ra một hành động hay nhận định. Hàm ý còn có các lý do khác nữa nhưng không nhắc đến.\n' +
      '📌 Sử dụng nhiều trong văn nói, lịch sự và tự nhiên.\n' +
      '📌 Vế sau thường là: 「～ましょう」「～たほうがいい」「～よう」「～たらどう」…',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 雨も降っていることだし、今日は家でゆっくりしよう。\n' +
      '→ Vì trời cũng đang mưa nên hôm nay ở nhà nghỉ ngơi thôi.\n\n' +
      '2. 彼は疲れていることだし、早く帰らせてあげたほうがいいよ。\n' +
      '→ Vì anh ấy cũng đang mệt, nên để anh ấy về sớm thì hơn.\n\n' +
      '3. 来週は試験があることだし、今週末は勉強しようと思う。\n' +
      '→ Vì tuần sau có bài kiểm tra, nên cuối tuần này tôi định học.\n\n' +
      '4. 初めてのことだし、うまくいかなくても仕方がないよ。\n' +
      '→ Vì đây là lần đầu, nên dù không suôn sẻ cũng là điều dễ hiểu.',
  },
  {
    title: '5. So sánh với 「～ので」「～から」',
    explanation:
      '🔁 「～から」「～ので」: đưa lý do đơn thuần.\n' +
      '🔁 「～ことだし」: đưa lý do **chính**, hàm ý còn nhiều lý do khác, thường dùng để **đề xuất hành động** hay đưa ra **quyết định** nhẹ nhàng.\n\n' +
      '📝 Ví dụ:\n' +
      '・寒いから、帰りましょう。\n' +
      '→ Vì lạnh nên về thôi. (lý do trực tiếp)\n' +
      '・寒いことだし、帰りましょう。\n' +
      '→ Vì cũng đang lạnh (và có lẽ còn lý do khác nữa) nên về thôi. (nhẹ nhàng, lịch sự hơn)',
  },
]

const GrammarKotoDashiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ことだし" grammarSections={grammarSections} />
}

export default GrammarKotoDashiScreen
