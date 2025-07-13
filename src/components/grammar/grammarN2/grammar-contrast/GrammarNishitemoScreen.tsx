import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～にしても / ～にしろ / ～にせよ',
    explanation:
      '📌 Đây là các mẫu ngữ pháp dùng để **nêu giả định** hoặc **nêu ví dụ**, với hàm ý: dù là A thì cũng... / cho dù A thì B cũng vậy.\n\n' +
      '👉 Nghĩa: "Dù là...", "Cho dù...", "Ngay cả..."',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸 Danh từ / Động từ / Tính từ thể thường + にしても / にしろ / にせよ\n\n' +
      '📌 Các mẫu này có thể dùng theo cặp:\n' +
      '・Aにしても、Bにしても...\n' +
      '・Aにしろ、Bにしろ...\n' +
      '・Aにせよ、Bにせよ...\n\n' +
      '🟡 Lưu ý: 「にしても」là dạng hay dùng trong văn nói, còn 「にしろ」「にせよ」lịch sự hoặc dùng trong văn viết, diễn văn.',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Dùng khi muốn nói rằng **dù trong hoàn cảnh nào đi nữa, thì kết luận hoặc đánh giá cũng giống nhau**.\n' +
      '✅ Dùng để nêu lên quan điểm, đánh giá mang tính phê phán, cảm xúc của người nói.\n' +
      '✅ Có thể dùng để nêu lên **nhiều khả năng** đều dẫn đến cùng một kết luận.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 行くにしても、もう少し早く出発したほうがいい。\n' +
      '→ Dù có đi chăng nữa thì cũng nên xuất phát sớm hơn một chút.\n\n' +
      '2. 留学するにしろ、しないにしろ、よく考えてから決めなさい。\n' +
      '→ Dù là đi du học hay không đi, thì cũng hãy suy nghĩ kỹ rồi hãy quyết định.\n\n' +
      '3. お金持ちにせよ、そうでないにせよ、人を見下すべきではない。\n' +
      '→ Dù là người giàu hay không thì cũng không nên coi thường người khác.\n\n' +
      '4. 結果がどうであるにせよ、最善を尽くすことが大事だ。\n' +
      '→ Dù kết quả thế nào đi nữa thì việc cố gắng hết sức vẫn là điều quan trọng.',
  },
  {
    title: '5. Lưu ý khi sử dụng',
    explanation:
      '🔹 Thường đi kèm các từ mang ý so sánh đối lập hoặc nhiều lựa chọn như:\n' +
      '「～にしても、～にしても」「～にしろ、～にしろ」v.v.\n\n' +
      '🔹 Vế sau KHÔNG diễn tả sự thật đơn thuần mà là **đánh giá, phán đoán, khuyên nhủ**.\n' +
      '🔹 Không dùng cho những kết quả khách quan hiển nhiên, mà dùng khi người nói muốn nhấn mạnh cảm xúc, ý kiến chủ quan.',
  },
]

const GrammarNishitemoScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～にしても / ～にしろ / ～にせよ"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarNishitemoScreen
