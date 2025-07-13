import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～末に（すえに）',
    explanation:
      '📌「～末に」diễn tả ý nghĩa **sau một khoảng thời gian dài thực hiện một hành động nào đó**, thì cuối cùng đạt được một kết quả hay đưa ra được một quyết định.\n\n' +
      '👉 Nghĩa: "Sau khi…", "sau một hồi…", "cuối cùng thì…"',
  },
  {
    title: '2. Cấu trúc',
    explanation: '🔸【動詞た形】 + 末に\n' + '🔸【名詞】 + の + 末に',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '✅ Mẫu câu này nhấn mạnh quá trình **kéo dài, gian nan, nhiều suy nghĩ, do dự, hoặc nỗ lực**, cuối cùng đưa ra được kết quả.\n' +
      '✅ Thường đi với các động từ như: 悩む（なやむ）, 考える（かんがえる）, 話し合う（はなしあう）, 続ける（つづける）など。\n' +
      '❗ Vế sau thường là kết quả quan trọng, mang tính quyết định hoặc có thay đổi lớn.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. いろいろ悩んだ末に、留学することにしました。\n' +
      '→ Sau rất nhiều trăn trở, cuối cùng tôi đã quyết định đi du học.\n\n' +
      '2. 長い議論の末に、やっと契約が結ばれた。\n' +
      '→ Sau một cuộc tranh luận dài, cuối cùng hợp đồng cũng được ký kết.\n\n' +
      '3. 考えた末に、会社を辞めることにした。\n' +
      '→ Sau khi suy nghĩ kỹ, tôi đã quyết định nghỉ việc.\n\n' +
      '4. 激しい練習の末に、彼はチャンピオンになった。\n' +
      '→ Sau những buổi luyện tập khắc nghiệt, cuối cùng anh ấy đã trở thành nhà vô địch.',
  },
  {
    title: '5. So sánh với mẫu tương tự',
    explanation:
      '🔹「～た結果（けっか）」: Tập trung vào **kết quả sau hành động** (không nhất thiết phải là quá trình dài hay khó khăn).\n' +
      '🔹「～末に」: Nhấn mạnh **quá trình lâu dài, nhiều nỗ lực/suy nghĩ**.\n\n' +
      '📍Ví dụ:\n' +
      '・調査した結果、原因が分かった。\n' +
      '→ Sau khi điều tra thì biết được nguyên nhân. (→ không nhấn mạnh quá trình dài)\n\n' +
      '・調査を重ねた末に、原因が分かった。\n' +
      '→ Sau quá trình điều tra nhiều lần, cuối cùng mới hiểu nguyên nhân. (→ nhấn mạnh quá trình)',
  },
  {
    title: '6. Lưu ý sử dụng',
    explanation:
      '🔸 Mẫu câu mang tính văn viết, thường dùng trong báo chí, luận văn, văn trang trọng.\n' +
      '🔸 Không dùng với kết quả mang tính tiêu cực quá mạnh như tai nạn, chết người, thất bại to lớn.\n' +
      '🔸 Không dùng để diễn tả hành động hàng ngày, sự việc diễn ra ngắn hạn.',
  },
]

const GrammarSueniScreen = () => {
  return <GrammarTemplateScreen screenTitle="～末に" grammarSections={grammarSections} />
}

export default GrammarSueniScreen
