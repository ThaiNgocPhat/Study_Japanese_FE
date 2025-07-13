import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～一方で',
    explanation:
      '📌「～一方で」được dùng để thể hiện sự **đối lập, so sánh hai mặt** của một vấn đề, hoặc để **nêu hai tình huống song song** tồn tại.\n\n' +
      '👉 Nghĩa: "mặt khác thì...", "trong khi...", "đồng thời..."',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸【Động từ thể thường / Tính từ -i / Tính từ -na + な / Danh từ + である】 + 一方で',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '✅ Dùng để **so sánh đối lập hai khía cạnh** của cùng một sự việc hoặc hai sự việc khác nhau.\n' +
      '✅ Cũng được dùng để **diễn tả hai hành động, trạng thái song song tồn tại** (không nhất thiết đối lập).\n' +
      '📌 Có thể đứng giữa hoặc đầu câu, nhưng thường dùng ở văn viết hoặc cách nói trang trọng.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 都会の生活は便利な一方で、ストレスも多い。\n' +
      '→ Cuộc sống thành phố tuy tiện lợi, nhưng mặt khác cũng nhiều căng thẳng.\n\n' +
      '2. 父は厳しい一方で、やさしいところもある。\n' +
      '→ Bố tôi nghiêm khắc, nhưng mặt khác cũng có sự dịu dàng.\n\n' +
      '3. 仕事が忙しい一方で、収入も増えている。\n' +
      '→ Trong khi công việc bận rộn, thì thu nhập cũng đang tăng lên.\n\n' +
      '4. この大学では、日本語を教える一方で、日本文化も紹介している。\n' +
      '→ Trường đại học này vừa dạy tiếng Nhật, vừa giới thiệu văn hóa Nhật Bản.',
  },
  {
    title: '5. So sánh với mẫu tương tự',
    explanation:
      '🔹「～反面（はんめん）」 cũng mang nghĩa đối lập nhưng thường mang sắc thái **trái chiều rõ rệt** hơn.\n' +
      '🔹「～一方では...、一方では...」 dùng để nêu hai mặt song song một cách cân bằng.\n\n' +
      '📍Ví dụ:\n' +
      '・この薬はよく効く反面、副作用もある。\n' +
      '→ Loại thuốc này có hiệu quả, nhưng ngược lại cũng có tác dụng phụ.\n\n' +
      '・一方では働きたいが、一方ではもっと勉強もしたい。\n' +
      '→ Một mặt tôi muốn đi làm, nhưng mặt khác cũng muốn học thêm.',
  },
  {
    title: '6. Lưu ý sử dụng',
    explanation:
      '🔸 Là cách nói trang trọng, thường dùng trong viết luận, báo chí hoặc trong văn phong học thuật.\n' +
      '🔸 Tránh dùng trong hội thoại thân mật hằng ngày, thay vào đó có thể dùng mẫu như 「けど」 hoặc 「でも」.',
  },
]

const GrammarIppouScreen = () => {
  return <GrammarTemplateScreen screenTitle="～一方で" grammarSections={grammarSections} />
}

export default GrammarIppouScreen
