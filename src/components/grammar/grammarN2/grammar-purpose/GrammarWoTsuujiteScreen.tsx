import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～を通じて／～を通して',
    explanation:
      '📌「～を通じて／～を通して」được dùng để diễn tả:\n' +
      '① Một hành động, trạng thái diễn ra **suốt một khoảng thời gian nào đó**.\n' +
      '② Thực hiện việc gì đó **thông qua một phương tiện, cách thức nào đó**.\n\n' +
      '👉 Nghĩa: "suốt...", "thông qua...", "bằng cách..."',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸【名詞】 + を通じて（つうじて）\n' +
      '🔸【名詞】 + を通して（とおして）\n\n' +
      '✔ Hai cách dùng này gần như giống nhau, có thể thay thế trong đa số trường hợp.',
  },
  {
    title: '3. Ý nghĩa sử dụng',
    explanation:
      '✅ Diễn tả **thời gian**: Hành động hoặc trạng thái **kéo dài liên tục** trong suốt khoảng thời gian nào đó.\n' +
      '✅ Diễn tả **phương tiện, trung gian**: Thực hiện một việc gì đó **thông qua** một người, vật, tổ chức, phương tiện nào đó.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 一年を通じて、この地方では雨が少ない。\n' +
      '→ Suốt cả năm, khu vực này ít mưa.\n\n' +
      '2. インターネットを通じて、世界の情報を手に入れることができる。\n' +
      '→ Có thể lấy được thông tin thế giới thông qua Internet.\n\n' +
      '3. 子供たちはボランティア活動を通して、多くのことを学んだ。\n' +
      '→ Trẻ em đã học được nhiều điều thông qua hoạt động tình nguyện.\n\n' +
      '4. 彼とは共通の友人を通じて知り合いました。\n' +
      '→ Tôi quen anh ấy thông qua một người bạn chung.',
  },
  {
    title: '5. So sánh với mẫu tương tự',
    explanation:
      '🔹「～にわたって」: nhấn mạnh phạm vi không gian/thời gian rộng kéo dài liên tục.\n' +
      '🔹「～を通じて／通して」: tập trung vào sự **xuyên suốt (trong thời gian)** hoặc **trung gian/cách thức để hành động xảy ra**.\n\n' +
      '🟡 Ví dụ phân biệt:\n' +
      '・10年間にわたって研究した。→ Nhấn mạnh khoảng thời gian nghiên cứu liên tục suốt 10 năm.\n' +
      '・10年間を通じて研究した。→ Nhấn mạnh việc nghiên cứu suốt 10 năm, không bỏ dở giữa chừng.',
  },
  {
    title: '6. Lưu ý sử dụng',
    explanation:
      '📌 「～を通じて」 thường dùng trong văn viết, trang trọng hơn so với 「～を通して」.\n' +
      '📌 Có thể dùng cả hai dạng để diễn tả **sự trung gian** lẫn **thời gian kéo dài**.\n' +
      '📌 Không dùng với các danh từ chỉ thời điểm cụ thể (ví dụ: 一日、一瞬).',
  },
]

const GrammarWoTsuujiteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～を通じて" grammarSections={grammarSections} />
}

export default GrammarWoTsuujiteScreen
