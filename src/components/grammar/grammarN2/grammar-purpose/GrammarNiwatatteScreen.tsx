import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～にわたって',
    explanation:
      '📌「～にわたって」dùng để diễn tả sự việc diễn ra **trên một phạm vi rộng lớn**, kéo dài về **không gian** hoặc **thời gian**.\n\n' +
      '👉 Nghĩa: "trong suốt...", "trải suốt...", "trên khắp..."',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸【名詞】 + にわたって\n' +
      '🔸【名詞】 + にわたる + 【名詞】\n\n' +
      '✔ Dạng thường đi kèm: 時間 (thời gian), 場所 (địa điểm), 範囲 (phạm vi), 分野 (lĩnh vực), 期間 (giai đoạn), etc.',
  },
  {
    title: '3. Ý nghĩa sử dụng',
    explanation:
      '✅ Dùng khi muốn nói rằng điều gì đó kéo dài/trải rộng **liên tục** trong một **khoảng thời gian** hoặc **không gian cụ thể**.\n' +
      '✅ Nhấn mạnh độ **rộng lớn**, **toàn bộ**, hoặc **trải dài liên tục** của phạm vi đó.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 会議は3日間（みっかかん）**にわたって**行われました。\n' +
      '→ Cuộc họp đã được tổ chức suốt trong 3 ngày.\n\n' +
      '2. その台風は九州全域（ぜんいき）**にわたって**被害をもたらした。\n' +
      '→ Cơn bão đó đã gây thiệt hại trên khắp vùng Kyushu.\n\n' +
      '3. 彼は長年（ながねん）**にわたる**研究の成果を発表した。\n' +
      '→ Anh ấy đã công bố kết quả của nghiên cứu kéo dài nhiều năm.\n\n' +
      '4. この博物館には時代（じだい）**にわたる**貴重（きちょう）な資料が展示されている。\n' +
      '→ Bảo tàng này trưng bày những tư liệu quý giá trải qua nhiều thời đại.',
  },
  {
    title: '5. So sánh với mẫu tương tự',
    explanation:
      '🔹「～を通じて」: nhấn mạnh quá trình liên tục, xuyên suốt, thường đi với phương tiện (メールを通じて).\n' +
      '🔹「～にわたって」: nhấn mạnh sự trải dài về không gian/thời gian cụ thể.\n' +
      '🔹「～間」: chỉ thời gian nhưng không nhấn mạnh độ bao phủ rộng như 「にわたって」.',
  },
  {
    title: '6. Lưu ý sử dụng',
    explanation:
      '📌 Không dùng với hành động chỉ xảy ra tại **một thời điểm cụ thể**.\n' +
      '📌 Không dùng với các danh từ không mang tính khoảng rộng như「一人」「一回」「一日」.\n\n' +
      '📌 Hay gặp trong các văn bản trang trọng, tin tức, báo chí, báo cáo nghiên cứu.',
  },
]

const GrammarNiwatatteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～にわたって" grammarSections={grammarSections} />
}

export default GrammarNiwatatteScreen
