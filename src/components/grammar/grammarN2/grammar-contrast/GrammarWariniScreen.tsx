import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～わりに',
    explanation:
      '📌「～わりに」dùng để so sánh mức độ giữa hai vế. Dù có A nhưng kết quả lại B, thường mang nghĩa **"so với A thì B (không tương xứng)"** hoặc "B không như mong đợi từ A".\n\n' +
      '👉 Nghĩa: "Dù... nhưng...", "so với... thì..."',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸 Động từ thể thường (普通形) + わりに\n' +
      '🔸 Tính từ -i + わりに\n' +
      '🔸 Tính từ -na (な) + わりに\n' +
      '🔸 Danh từ + の + わりに',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Dùng khi điều được nói đến ở vế sau **không giống như mình tưởng tượng, dự đoán, hay thông thường** dựa trên thông tin ở vế trước.\n' +
      '✅ Mẫu câu này mang sắc thái đánh giá chủ quan của người nói.\n' +
      '✅ Không dùng cho các sự việc hiển nhiên, sự thật khách quan.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. このケーキは安いわりに、おいしいです。\n' +
      '→ Bánh này rẻ nhưng ngon hơn mong đợi.\n\n' +
      '2. 彼は年のわりに若く見える。\n' +
      '→ So với tuổi thì anh ấy trông trẻ.\n\n' +
      '3. 日本語を勉強している期間が短いわりに、彼の会話はとても上手だ。\n' +
      '→ So với thời gian học tiếng Nhật ngắn thì hội thoại của anh ấy rất giỏi.\n\n' +
      '4. 忙しいわりに、よく遊びに行きますね。\n' +
      '→ Dù bận mà bạn vẫn hay đi chơi nhỉ.\n\n' +
      '5. このアパートは駅から遠いわりに家賃が高い。\n' +
      '→ Căn hộ này xa ga mà tiền thuê lại cao.',
  },
  {
    title: '5. Lưu ý khi sử dụng',
    explanation:
      '🔹「～わりに」dùng để nhấn mạnh sự **không cân xứng** giữa hai điều.\n' +
      '🔹 Không dùng khi cả hai vế tương xứng hoặc rõ ràng hợp lý.\n' +
      '🔹 Tương tự mẫu「～にしては」nhưng 「～わりに」mang sắc thái rộng và trung tính hơn.',
  },
]

const GrammarWariniScreen = () => {
  return <GrammarTemplateScreen screenTitle="～わりに" grammarSections={grammarSections} />
}

export default GrammarWariniScreen
