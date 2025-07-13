import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～に応じて',
    explanation:
      '📌「～に応じて」（におうじて）dùng để diễn đạt sự thay đổi tương ứng hoặc phù hợp với một điều gì đó. Nghĩa là: "ứng với...", "tùy theo...", "phù hợp với...".\n\n' +
      '🔸 Đây là mẫu ngữ pháp thường dùng trong văn viết hoặc các ngữ cảnh trang trọng.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹【名詞】 + に応じて\n' +
      '🔹【名詞】 + に応じ（た／て）+ 名詞\n\n' +
      '📌 Có thể biến đổi linh hoạt tùy theo ngữ cảnh:\n' +
      '・に応じて\n' +
      '・に応じた + 名詞\n' +
      '・に応じた対応（たいおう）: xử lý phù hợp\n',
  },
  {
    title: '3. Ý nghĩa sử dụng',
    explanation:
      '✅ Diễn tả việc thay đổi cho phù hợp, tương ứng với điều gì đó như: mức độ, tình huống, năng lực, nhu cầu,...\n\n' +
      '🔸 Thường dùng trong thông báo, quy định, hoặc các bối cảnh công việc, hành chính.\n' +
      '🔸 Không dùng cho những thay đổi ngẫu nhiên, không kiểm soát được.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 収入（しゅうにゅう）**に応じて**、生活スタイルを変える。\n' +
      '→ Thay đổi lối sống phù hợp với thu nhập.\n\n' +
      '2. 成績**に応じて**、奨学金（しょうがくきん）が支給（しきゅう）される。\n' +
      '→ Học bổng sẽ được cấp tương ứng với thành tích.\n\n' +
      '3. 年齢（ねんれい）**に応じた**運動をすることが大切です。\n' +
      '→ Việc vận động phù hợp với độ tuổi là rất quan trọng.\n\n' +
      '4. お客様のご希望**に応じて**、商品をおすすめします。\n' +
      '→ Chúng tôi sẽ giới thiệu sản phẩm theo nguyện vọng của khách hàng.',
  },
  {
    title: '5. So sánh với các mẫu tương tự',
    explanation:
      '🔹「～に応じて」 nhấn mạnh sự **tương ứng, thích ứng** linh hoạt theo điều gì đó.\n' +
      '🔹「～に従って」 thì nhấn mạnh sự **tuân theo, đi cùng với** một xu hướng, quá trình.\n' +
      '🔹「～によって」 dùng rộng hơn, thường để chỉ **nguyên nhân, phương pháp, tác nhân**.',
  },
  {
    title: '6. Lưu ý sử dụng',
    explanation:
      '📌 Thường đi với các từ chỉ mức độ, điều kiện, nhu cầu như:\n' +
      '・年齢、能力、収入、状況、希望、需要（じゅよう）、場合\n\n' +
      '📌 Không dùng khi kết quả vế sau là điều hoàn toàn ngẫu nhiên hoặc không liên quan logic.',
  },
]

const GrammarNiOujiteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～に応じて" grammarSections={grammarSections} />
}

export default GrammarNiOujiteScreen
