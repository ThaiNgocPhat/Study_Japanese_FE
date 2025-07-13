import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～に限らず',
    explanation:
      '📌「～に限らず」có nghĩa là "không chỉ... mà còn...", dùng để mở rộng phạm vi đối tượng được nói đến. Đây là mẫu câu thường gặp trong văn viết hoặc các bài thi JLPT.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Danh từ + に限らず\n\n🔸 Có thể đi kèm với những từ mang nghĩa giới hạn như「学生」「日本」「休日」v.v.',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Diễn tả rằng một sự việc không chỉ áp dụng cho đối tượng A mà còn áp dụng cho các đối tượng khác tương tự.\n' +
      '→ Mở rộng phạm vi so với điều tưởng như là bị giới hạn.\n\n' +
      '✴ Dịch: "Không chỉ… mà còn… / Không giới hạn ở…".\n\n' +
      '📍 Thường dùng trong văn viết trang trọng, sách vở, bài báo.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. このイベントは学生に限らず、誰でも参加できます。\n→ Sự kiện này không chỉ sinh viên mà ai cũng có thể tham gia.\n\n' +
      '2. 日本に限らず、世界中で環境問題が注目されている。\n→ Không chỉ ở Nhật Bản, vấn đề môi trường đang được quan tâm trên toàn thế giới.\n\n' +
      '3. この番組は子供に限らず、大人にも人気がある。\n→ Chương trình này không chỉ trẻ em mà cả người lớn cũng yêu thích.\n\n' +
      '4. 平日はもちろん、週末に限らずいつでも利用できます。\n→ Không chỉ ngày thường, mà cả cuối tuần cũng có thể sử dụng bất kỳ lúc nào.',
  },
  {
    title: '5. Phân biệt với mẫu tương tự',
    explanation:
      '🔸「～だけでなく」: dùng phổ biến trong văn nói và viết, mang nghĩa gần giống.\n' +
      '🔸「～のみならず」: trang trọng hơn, dùng trong văn viết nhiều hơn.\n\n' +
      '✴ Ví dụ phân biệt:\n- 子供だけでなく、大人も楽しめる。\n- 子供に限らず、大人も楽しめる。\n→ Cả hai đều đúng, nhưng mẫu に限らず trang trọng và văn viết hơn.',
  },
]

const GrammarNiKagirazuN2Screen = () => {
  return <GrammarTemplateScreen screenTitle="～に限らず" grammarSections={grammarSections} />
}

export default GrammarNiKagirazuN2Screen
