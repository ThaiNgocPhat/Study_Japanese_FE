import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～反面',
    explanation:
      '📌「～反面」dùng để diễn tả **hai mặt trái ngược nhau** của cùng một sự việc, sự vật hoặc hiện tượng.\n\n' +
      '👉 Nghĩa: "mặt khác thì...", "ngược lại thì..."',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸 [Động từ thể thường / Tính từ -i / Tính từ -na + な / Danh từ + である] + 反面',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '✅ Diễn tả **mặt đối lập** của cùng một vấn đề, thường dùng để **đánh giá hai mặt tích cực và tiêu cực**.\n' +
      '✅ Thường dùng trong **văn viết, bài phân tích, nhận xét**.\n' +
      '⚠️ Vế sau không dùng mệnh lệnh, yêu cầu.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. この仕事は給料が高い反面、とても忙しいです。\n' +
      '→ Công việc này lương cao, nhưng mặt khác lại rất bận.\n\n' +
      '2. 一人暮らしは自由な反面、さびしさもあります。\n' +
      '→ Sống một mình thì tự do, nhưng mặt khác cũng cô đơn.\n\n' +
      '3. このパソコンは性能がいい反面、値段も高いです。\n' +
      '→ Máy tính này hiệu năng tốt, nhưng giá cũng cao.\n\n' +
      '4. 日本語を勉強するのは楽しい反面、難しいところもあります。\n' +
      '→ Học tiếng Nhật thì vui, nhưng cũng có chỗ khó.',
  },
  {
    title: '5. So sánh với mẫu tương tự',
    explanation:
      '🔹「～一方で」cũng dùng để nêu hai mặt đối lập hoặc song song, nhưng có thể bao hàm cả **sự đồng thời** hoặc **hai tình huống riêng biệt**.\n\n' +
      '📍Ví dụ:\n' +
      '・彼は先生として厳しい反面、生徒にはとても人気がある。\n' +
      '→ Anh ấy nghiêm khắc với tư cách là thầy giáo, nhưng lại rất được học sinh yêu thích.\n\n' +
      '・彼は教師の一方で、作家としても活躍している。\n' +
      '→ Anh ấy vừa là giáo viên, vừa hoạt động với tư cách là nhà văn.',
  },
  {
    title: '6. Lưu ý sử dụng',
    explanation:
      '🔸 Chủ yếu dùng trong phân tích, đánh giá hai mặt của một vấn đề.\n' +
      '🔸 Không dùng để nối hai sự kiện không liên quan.\n' +
      '🔸 Không dùng với mệnh lệnh, ý chí, yêu cầu ở vế sau.',
  },
]

const GrammarHanmenScreen = () => {
  return <GrammarTemplateScreen screenTitle="～反面" grammarSections={grammarSections} />
}

export default GrammarHanmenScreen
