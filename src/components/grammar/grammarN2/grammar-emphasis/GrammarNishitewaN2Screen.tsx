import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～にしては',
    explanation:
      '📌「～にしては」diễn tả sự việc xảy ra **khác với những gì người nói tưởng tượng** dựa trên một tiêu chuẩn, sự thật, hay thông tin nào đó.\n' +
      '👉 Nghĩa: “Dù là… nhưng…”, “So với… thì không giống…”.\n' +
      '❗ Thể hiện cảm giác bất ngờ, không phù hợp, trái với lẽ thường.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Danh từ + にしては\n\n' +
      '📌 Không dùng với những sự việc không rõ ràng hoặc mơ hồ (ví dụ: あの人、学生にしては… → KHÔNG rõ ràng nếu không biết chắc người đó là sinh viên).',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Nhấn mạnh sự **khác thường**, không phù hợp với điều được cho là bình thường hoặc dự đoán từ vế trước.\n' +
      '✅ Vế sau thường là nhận xét, đánh giá trái với kỳ vọng.\n' +
      '→ Thường dùng để **so sánh ngầm** với tiêu chuẩn thông thường.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 外国人にしては日本語が上手だ。\n' +
      '→ Dù là người nước ngoài nhưng tiếng Nhật lại giỏi.\n\n' +
      '2. 初めてにしては、よくできましたね。\n' +
      '→ Dù là lần đầu nhưng làm tốt đấy nhỉ.\n\n' +
      '3. 子どもにしては、字がきれいですね。\n' +
      '→ Dù là trẻ con mà chữ đẹp quá ha.\n\n' +
      '4. このかばん、安いにしては丈夫ですね。\n' +
      '→ Cái túi này, dù rẻ nhưng bền ghê.',
  },
  {
    title: '5. So sánh với mẫu tương tự',
    explanation:
      '🔸 ～わりに（は）: Cũng dùng để nói điều bất ngờ, nhưng phạm vi rộng hơn (không chỉ với danh từ).\n' +
      '🔸 ～にしては: Chỉ đi với danh từ, nhấn mạnh sự **trái kỳ vọng** so với tiêu chuẩn.\n\n' +
      '📝 Ví dụ so sánh:\n' +
      '学生のわりに、よく知っている。\n' +
      '→ So với một sinh viên thì biết nhiều ghê.\n\n' +
      '学生にしては、よく知っている。\n' +
      '→ Dù là sinh viên mà biết nhiều thật.',
  },
]

const GrammarNishitewaN2Screen = () => {
  return <GrammarTemplateScreen screenTitle="～にしては" grammarSections={grammarSections} />
}

export default GrammarNishitewaN2Screen
