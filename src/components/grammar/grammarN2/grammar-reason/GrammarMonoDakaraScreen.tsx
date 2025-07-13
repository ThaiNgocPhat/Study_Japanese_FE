import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ものだから',
    explanation:
      '📌「～ものだから」 được dùng để **giải thích lý do, nguyên nhân** một cách nhẹ nhàng, thường là để biện minh cho hành động hoặc thái độ của người nói.\n' +
      '👉 Dịch: "Vì...", "Do..."\n' +
      '✨ Thường được dùng trong văn nói và mang sắc thái cá nhân, thể hiện sự cảm xúc hoặc hoàn cảnh riêng.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể thường + ものだから\n' +
      '🔹 Tính từ -i + ものだから\n' +
      '🔹 Tính từ -na + な + ものだから\n' +
      '🔹 Danh từ + な + ものだから\n\n' +
      '📌 Dạng rút gọn trong hội thoại thân mật: ～もんだから / ～もんで',
  },
  {
    title: '3. Ý nghĩa và sắc thái',
    explanation:
      '🔎 Mẫu câu này được dùng để giải thích lý do **mang tính cá nhân**, và thường dùng khi người nói muốn **xin lỗi, biện hộ hoặc làm dịu tình huống**.\n' +
      '❗ Không dùng trong văn viết trang trọng.\n' +
      '❗ Vế sau thường là sự thật, kết quả do vế trước gây ra.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 道が混んでいたものだから、遅れてしまいました。\n' +
      '→ Vì đường đông nên tôi đã đến trễ.\n\n' +
      '2. 子どもなものだから、よくわからないんです。\n' +
      '→ Vì là trẻ con nên nó không hiểu rõ đâu.\n\n' +
      '3. 疲れていたものだから、早く寝てしまいました。\n' +
      '→ Vì mệt nên tôi đã đi ngủ sớm.\n\n' +
      '4. 初めてなものだから、うまくできませんでした。\n' +
      '→ Vì là lần đầu nên tôi đã không làm tốt.',
  },
  {
    title: '5. So sánh với 「～ので」、「～から」',
    explanation:
      '🔁 「～から」「～ので」: chung chung, trung tính.\n' +
      '🔁 「～ものだから」: thiên về cảm xúc cá nhân, lý do mang tính cá nhân hơn, thường là **biện minh** hoặc **xin lỗi**.\n\n' +
      '📝 Ví dụ:\n' +
      '・遅れたから、すみません。\n' +
      '→ Tôi xin lỗi vì đã đến trễ. (trung lập)\n' +
      '・遅れたものだから、すみません。\n' +
      '→ Tôi xin lỗi, vì lý do bất đắc dĩ nên đã đến trễ. (mềm mỏng, cá nhân hơn)',
  },
]

const GrammarMonoDakaraScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ものだから" grammarSections={grammarSections} />
}

export default GrammarMonoDakaraScreen
