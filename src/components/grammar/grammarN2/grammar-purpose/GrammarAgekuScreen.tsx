import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～あげく（に）',
    explanation:
      '📌「～あげく」diễn tả ý nghĩa **sau một quá trình kéo dài với nhiều khó khăn/vất vả, cuối cùng lại nhận kết quả không như mong muốn hoặc tiêu cực**.\n\n' +
      '👉 Nghĩa: "Sau khi... thì rốt cuộc là...", "Cuối cùng thì..." (với kết quả không tốt)',
  },
  {
    title: '2. Cấu trúc',
    explanation: '🔸【動詞た形】 + あげく（に）\n' + '🔸【名詞 + の】 + あげく（に）',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '✅ Nhấn mạnh **quá trình dài, nhiều lần lặp lại, vất vả**, nhưng **kết quả lại không như ý**, thậm chí **tiêu cực** hoặc **đáng tiếc**.\n' +
      '✅ Mẫu câu mang cảm xúc thất vọng, nuối tiếc của người nói.\n' +
      '❗ Thường dùng với các từ như: 迷う（まよう）, 喧嘩する（けんかする）, 苦労する（くろうする）, 悩む（なやむ）など。',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. いろいろ悩んだあげく、やっぱり留学をやめることにしました。\n' +
      '→ Sau bao nhiêu trăn trở, cuối cùng tôi đã quyết định từ bỏ việc du học.\n\n' +
      '2. けんかのあげく、二人は別れてしまった。\n' +
      '→ Sau một trận cãi nhau kịch liệt, hai người đã chia tay.\n\n' +
      '3. 長時間の議論のあげく、結論が出なかった。\n' +
      '→ Sau cuộc tranh luận kéo dài, cuối cùng cũng không đưa ra được kết luận.\n\n' +
      '4. 高いお金を払ったあげく、何も得られなかった。\n' +
      '→ Sau khi bỏ ra số tiền lớn, cuối cùng lại chẳng nhận được gì.',
  },
  {
    title: '5. So sánh với ～末に（すえに）',
    explanation:
      '🔹「～末に」: Tập trung vào quá trình lâu dài và kết quả thường **tốt/khách quan**.\n' +
      '🔹「～あげく」: Nhấn mạnh **kết quả tiêu cực hoặc không như ý muốn**.\n\n' +
      '📍Ví dụ:\n' +
      '・悩んだ末に、医者になることを決めた。\n' +
      '→ Sau nhiều trăn trở, tôi đã quyết định làm bác sĩ. (→ kết quả tích cực)\n\n' +
      '・悩んだあげく、どれも買わなかった。\n' +
      '→ Sau khi đắn đo, cuối cùng chẳng mua cái nào. (→ kết quả không như mong muốn)',
  },
  {
    title: '6. Lưu ý sử dụng',
    explanation:
      '🔸 Mang tính văn viết, thường xuất hiện trong sách, bài luận, văn nói trang trọng.\n' +
      '🔸 Không dùng cho hành động đơn giản, không có quá trình dài hoặc không mang cảm xúc thất vọng.\n' +
      '🔸 Chủ ngữ thường là người (cảm xúc rõ rệt).',
  },
]

const GrammarAgekuScreen = () => {
  return <GrammarTemplateScreen screenTitle="～あげく" grammarSections={grammarSections} />
}

export default GrammarAgekuScreen
