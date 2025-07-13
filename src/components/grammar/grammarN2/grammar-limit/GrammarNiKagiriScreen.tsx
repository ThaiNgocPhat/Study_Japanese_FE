import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～に限り',
    explanation:
      '📌「～に限り」dùng để biểu thị sự giới hạn trong một phạm vi cụ thể, mang nghĩa "chỉ riêng...", "chỉ đối với...". Đây là mẫu câu trang trọng, thường dùng trong thông báo, văn bản chính thức.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Danh từ + に限り\n\n🔸 Không dùng với động từ hoặc tính từ.\n🔸 Khác với「だけ」ở chỗ「に限り」mang tính trang trọng và nhấn mạnh phạm vi đối tượng được đề cập.',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Dùng khi muốn nhấn mạnh rằng "chỉ đối với..." một nhóm người, một đối tượng nào đó thì điều gì đó mới xảy ra hoặc áp dụng.\n\n' +
      '⛔ Không dùng trong văn nói thông thường. Thường gặp trong biển báo, nội quy, thông báo công cộng...',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 本日に限り、全商品が半額になります。\n→ Chỉ riêng hôm nay, toàn bộ sản phẩm sẽ giảm giá một nửa.\n\n' +
      '2. 70歳以上の方に限り、入場は無料です。\n→ Chỉ đối với những người trên 70 tuổi, vào cửa sẽ miễn phí.\n\n' +
      '3. このチラシをお持ちのお客様に限り、500円割引いたします。\n→ Chỉ khách hàng có mang tờ rơi này mới được giảm 500 yên.\n\n' +
      '4. 関係者に限り、立ち入りが許可されています。\n→ Chỉ những người có liên quan mới được phép vào khu vực này.',
  },
  {
    title: '5. Phân biệt với mẫu tương tự',
    explanation:
      '🔹「～に限り」khác với:\n- 「～だけ」: dùng phổ biến trong văn nói, ít trang trọng.\n- 「～に限って」: mang nghĩa đặc biệt, trái ngược với thông thường hoặc nói về điều gì không mong muốn xảy ra đúng vào lúc nào đó.\n\n' +
      '✴ Ví dụ phân biệt:\n- 学生だけが入れます。→ Chỉ học sinh được vào. (văn nói)\n- 学生に限り入れます。→ Chỉ học sinh được vào. (trang trọng, dùng trong thông báo).',
  },
]

const GrammarNiKagiriScreen = () => {
  return <GrammarTemplateScreen screenTitle="～に限り" grammarSections={grammarSections} />
}

export default GrammarNiKagiriScreen
