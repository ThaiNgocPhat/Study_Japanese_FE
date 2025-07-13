import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～とは限らない',
    explanation:
      '📌 Mẫu câu「～とは限らない」diễn tả ý nghĩa: **"Không hẳn là...", "Không nhất thiết là...", "Không phải lúc nào cũng..."**.\n' +
      '👉 Dùng khi muốn **phủ định một điều mà người khác cho là đúng trong mọi trường hợp**.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Thể thường (普通形)] + とは限らない\n' +
      '  ・Danh từ / Tính từ-na: dùng nguyên thể hoặc thêm「だ」\n\n' +
      '📍 Lưu ý: cũng có thể gặp dạng ngắn hơn là「～とは限らん」（thân mật）',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '💡 Mẫu này thể hiện **một ý kiến phản biện nhẹ nhàng** hoặc một ngoại lệ với suy nghĩ/phán đoán chung.\n' +
      '👉 Thường dùng với các từ chỉ tần suất, sự phổ biến như:\n' +
      '「いつも」「必ずしも」「誰でも」「どこでも」v.v.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 高いものが必ずしもいいとは限らない。\n' +
      '→ Không hẳn đồ đắt là tốt.\n\n' +
      '2. 有名な先生の授業が面白いとは限らない。\n' +
      '→ Không phải lúc nào lớp của giáo viên nổi tiếng cũng thú vị.\n\n' +
      '3. 日本人だからといって、漢字が書けるとは限らない。\n' +
      '→ Không phải là người Nhật thì lúc nào cũng viết được chữ Hán.\n\n' +
      '4. 雨だからといって、試合が中止になるとは限らない。\n' +
      '→ Không hẳn trời mưa thì trận đấu sẽ bị hoãn.\n\n' +
      '5. 新聞に書いてあることがすべて本当とは限らない。\n' +
      '→ Không phải tất cả những gì viết trên báo đều là sự thật.',
  },
  {
    title: '5. Ghi chú bổ sung',
    explanation:
      '✅ Có thể dùng thay bằng:「～わけではない」「～というわけではない」nhưng sắc thái hơi khác:\n' +
      '・「～とは限らない」→ mang nghĩa "không phải luôn đúng", khách quan hơn.\n' +
      '・「～わけではない」→ mang nghĩa "không hẳn là", nhưng có chút chủ quan, cảm xúc cá nhân.',
  },
]

const GrammarTowaKagiranaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～とは限らない" grammarSections={grammarSections} />
}

export default GrammarTowaKagiranaiScreen
