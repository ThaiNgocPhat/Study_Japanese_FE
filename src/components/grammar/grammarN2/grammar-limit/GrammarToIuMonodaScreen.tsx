import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～というものだ」được dùng để thể hiện sự đánh giá, cảm xúc mạnh mẽ của người nói về một điều gì đó, thường mang sắc thái “thật là…” hoặc “đúng là…”.\n\n' +
      '📌 Dùng khi người nói muốn nhấn mạnh điều gì đó là đúng theo lẽ thường, cảm xúc thông thường hoặc sự đánh giá khách quan.\n\n' +
      '📌 Cấu trúc:\n・[Thể thường (普通形)] + というものだ\n  ※ Với danh từ, không cần だ\n\n' +
      '💡 Đây là mẫu câu trang trọng, thường gặp trong văn viết hoặc khi muốn bày tỏ sự cảm thán, đánh giá.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 初対面であんなにプライベートなことを聞くのは失礼というものだ。\n→ Việc hỏi chuyện riêng tư như thế ngay lần đầu gặp mặt thì thật là thất lễ.\n\n' +
      '② 毎日2時間もかけて通勤するのは大変というものだ。\n→ Mỗi ngày tốn đến 2 tiếng để đi làm thì thật là vất vả.\n\n' +
      '③ 子どもを叱る時に手をあげるのはやりすぎというものだ。\n→ Khi la mắng trẻ con mà dùng đến bạo lực thì thật là quá đáng.\n\n' +
      '④ 試合に負けて泣くのは悔しいというものだ。\n→ Sau trận thua mà bật khóc thì đúng là nỗi tiếc nuối.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Không dùng trong tình huống cần sự khách quan hoàn toàn, vì mang cảm xúc người nói.\n\n' +
      '🔸 Thường không dùng với những nội dung hoàn toàn trung lập.\n\n' +
      '📌 Đây là mẫu ngữ pháp thường gặp trong đề thi JLPT N2.',
  },
]

const GrammarToIuMonodaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～というものだ" grammarSections={grammarSections} />
}

export default GrammarToIuMonodaScreen
