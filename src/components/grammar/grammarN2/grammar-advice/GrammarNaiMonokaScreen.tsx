import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ないものか / ～ないものだろうか',
    explanation:
      '📌「～ないものか」hoặc「～ないものだろうか」là mẫu câu thể hiện mong muốn mạnh mẽ của người nói rằng:\n' +
      '“Liệu có thể… được không?”, “Giá mà…”, “Ước gì…”\n\n' +
      '👉 Mẫu này thường mang sắc thái **hy vọng**, **ao ước**, **thỉnh cầu**, thường được dùng trong văn viết hoặc trong lời nói có tính trang trọng.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể ない + ものか / ものだろうか\n\n' +
      '📍 Cả hai mẫu đều giống nhau về nghĩa, tuy nhiên:\n' +
      '-「～ないものだろうか」→ trang trọng hơn, lịch sự hơn\n' +
      '-「～ないものか」→ rút gọn, thường dùng trong khẩu ngữ hoặc văn viết không quá trang trọng',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '🟠 Diễn tả mong muốn, hy vọng rằng điều gì đó có thể xảy ra dù biết rằng không dễ dàng hoặc khó xảy ra.\n\n' +
      '🟢 Thường được dùng để thể hiện sự trăn trở, khát vọng cải thiện điều gì đó.\n' +
      '🟡 Mẫu này mang sắc thái **chủ quan**, thể hiện nội tâm hoặc cảm xúc mạnh của người nói.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 何とかしてこの問題を解決できないものか。\n→ Không cách nào giải quyết được vấn đề này hay sao?\n\n' +
      '2. もっと安くならないものだろうか。\n→ Ước gì nó có thể rẻ hơn một chút nhỉ.\n\n' +
      '3. 世界から戦争がなくならないものか。\n→ Ước gì chiến tranh có thể biến mất khỏi thế giới này.\n\n' +
      '4. 子どもたちが安心して遊べる公園ができないものだろうか。\n→ Ước gì có thể xây dựng công viên để trẻ em chơi an toàn.',
  },
  {
    title: '5. Ghi chú bổ sung',
    explanation:
      '✅ Thường dùng trong các bài phát biểu, viết luận hoặc lời văn trang trọng.\n' +
      '✅ Không dùng để yêu cầu trực tiếp người khác làm gì.\n' +
      '🚫 Không dùng trong các câu giao tiếp thông thường hàng ngày một cách quá suồng sã.\n\n' +
      '📝 So sánh:\n' +
      '-「～ないかな」→ văn nói, nhẹ nhàng hơn, ít trang trọng.\n' +
      '-「～ないものか」→ có phần trang trọng hơn và mang tính hy vọng/phản ánh sâu sắc hơn.',
  },
]

const GrammarNaiMonokaScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～ないものか / ～ないものだろうか"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarNaiMonokaScreen
