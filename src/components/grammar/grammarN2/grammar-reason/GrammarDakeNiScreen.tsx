import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～だけに',
    explanation:
      '📌「～だけに」 dùng để **nhấn mạnh mối quan hệ giữa nguyên nhân và kết quả**, thể hiện rằng vì một lý do nào đó nên kết quả xảy ra là điều hoàn toàn hợp lý hoặc ngược lại là kết quả không như mong đợi càng gây ấn tượng mạnh.\n' +
      '👉 Dịch: "Chính vì… nên càng…", "Chính vì… nên lại càng…"',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể thường + だけに\n' +
      '🔹 Tính từ -i + だけに\n' +
      '🔹 Tính từ -na (な) + だけに\n' +
      '🔹 Danh từ + である + だけに\n\n' +
      '📌 Có thể đứng giữa câu hoặc đầu câu.',
  },
  {
    title: '3. Ý nghĩa và sắc thái',
    explanation:
      '🔍 Diễn tả một kết quả, cảm xúc, ấn tượng mạnh mẽ **do chính nguyên nhân được nêu ra** gây ra.\n' +
      '🔹 Thường là điều gì đó đặc biệt, vượt trội, hoặc ngược lại – gây bất ngờ vì không đúng như mong đợi.\n' +
      '📌 Vế sau thể hiện cảm xúc mạnh, kết quả tương xứng hoặc trái ngược, thường không dùng cho hành động ý chí của người nói.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 頑張って練習しただけに、試合で負けたのはショックだった。\n' +
      '→ Chính vì đã luyện tập chăm chỉ nên việc thua trong trận đấu thật sự là cú sốc.\n\n' +
      '2. 彼は経験者だけに、仕事が早いですね。\n' +
      '→ Chính vì anh ấy là người có kinh nghiệm nên làm việc rất nhanh nhẹn.\n\n' +
      '3. 親が有名人だけに、子どもは自由に行動できないことが多い。\n' +
      '→ Chính vì cha mẹ là người nổi tiếng nên con cái thường không được tự do hành động.\n\n' +
      '4. あの店は人気があるだけに、いつも混んでいる。\n' +
      '→ Chính vì cửa hàng đó nổi tiếng nên lúc nào cũng đông khách.',
  },
  {
    title: '5. Phân biệt với 「～だけあって」',
    explanation:
      '🔹「～だけあって」 cũng có nghĩa là “quả không hổ là…”, nhưng thường đi với đánh giá tích cực và chủ yếu dùng khi **khen ngợi**.\n' +
      '🔹「～だけに」 có thể dùng trong cả hai chiều hướng: tích cực (khen) hoặc tiêu cực (bất ngờ, tiếc nuối).\n\n' +
      '📝 Ví dụ:\n' +
      '・このホテルは高いだけあって、サービスが素晴らしい。\n' +
      '→ Quả đúng là khách sạn đắt, dịch vụ tuyệt vời.\n\n' +
      '・このホテルは高いだけに、期待はずれだったらがっかりする。\n' +
      '→ Chính vì khách sạn đắt, nếu không như mong đợi thì sẽ thất vọng lắm.',
  },
]

const GrammarDakeNiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～だけに" grammarSections={grammarSections} />
}

export default GrammarDakeNiScreen
