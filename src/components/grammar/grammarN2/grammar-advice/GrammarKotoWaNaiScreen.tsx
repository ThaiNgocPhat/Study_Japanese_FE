import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ことはない',
    explanation:
      '📌「～ことはない」là mẫu câu dùng để **khuyên nhủ** hoặc **bày tỏ ý kiến rằng không cần thiết phải làm gì đó**.\n\n' +
      '👉 Thường được dùng để nói với ai đó rằng **không cần phải lo lắng hay làm việc gì đó quá mức**.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể từ điển + ことはない\n\n' +
      '📝 Chỉ dùng với động từ, không dùng với tính từ hay danh từ.',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '🟠 Diễn tả ý: **không cần thiết phải…**, **không việc gì phải…**\n' +
      '🟢 Thường dùng để khuyên ai đó nhẹ nhàng, không bắt buộc, không ra lệnh.\n' +
      '🟡 Dùng trong các tình huống thân mật hoặc cả văn viết, mang tính khích lệ, an ủi.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 心配することはないよ。\n→ Không cần lo đâu.\n\n' +
      '2. 無理に行くことはない。\n→ Không cần phải cố đi đâu.\n\n' +
      '3. 高いものを買うことはない。\n→ Không cần phải mua đồ đắt tiền.\n\n' +
      '4. 君が謝ることはない。\n→ Cậu không cần phải xin lỗi đâu.',
  },
  {
    title: '5. Ghi chú bổ sung',
    explanation:
      '✅ Đây là mẫu câu nhẹ nhàng, khuyên nhủ, không mang tính ép buộc.\n' +
      '✅ Có thể thay thế cho mẫu 「～なくてもいい」 nhưng mang tính **khẳng định mạnh hơn**.\n\n' +
      '📝 So sánh:\n' +
      '-「行くことはない」→ Hoàn toàn không cần đi.\n' +
      '-「行かなくてもいい」→ Không đi cũng được (mang tính lựa chọn hơn).',
  },
]

const GrammarKotoWaNaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ことはない" grammarSections={grammarSections} />
}

export default GrammarKotoWaNaiScreen
