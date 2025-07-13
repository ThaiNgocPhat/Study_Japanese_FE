import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～かな」',
    explanation:
      '📌 「～かな」 là mẫu câu thường dùng trong văn nói, để biểu hiện sự **băn khoăn, tự hỏi hoặc hy vọng** một điều gì đó.\n' +
      '👉 Có thể dịch là: “Không biết là…”, “Liệu có… không nhỉ”, “Mong là…”.\n' +
      '🔹 Cách nói này mang tính **tự nhiên, nhẹ nhàng** và được dùng rất phổ biến trong giao tiếp hằng ngày.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔸 [Thể thông thường (普通形)] + かな\n\n' +
      '📍 Với động từ hoặc tính từ, giữ nguyên dạng thông thường:\n' +
      '・行くかな（Không biết có đi không nhỉ）\n' +
      '・高いかな（Không biết có đắt không nhỉ）\n\n' +
      '📍 Với danh từ hoặc tính từ -na, **bỏ 「だ」** nếu có:\n' +
      '・学生かな（Không biết có phải học sinh không nhỉ）\n' +
      '・元気かな（Không biết có khỏe không nhỉ）',
  },
  {
    title: '3. Cách dùng và sắc thái',
    explanation:
      '🔹 Dùng khi người nói **tự hỏi bản thân**, không yêu cầu trả lời.\n' +
      '🔹 Cũng có thể dùng để **diễn đạt hy vọng** một cách nhẹ nhàng (đặc biệt là trong văn nói).\n\n' +
      '🧒 Với nam giới: thường dùng 「～かな」 hoặc 「～かなあ」\n' +
      '👧 Với nữ giới: thường dùng 「～かしら」 (lịch sự hơn)',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '・明日晴れるかな。\n' +
      '→ Không biết mai có nắng không nhỉ.\n\n' +
      '・彼、もう帰ったかな。\n' +
      '→ Không biết anh ấy đã về chưa nhỉ.\n\n' +
      '・間に合うかなあ…。\n' +
      '→ Không biết có kịp không nữa…\n\n' +
      '・N1に合格できるかな。\n' +
      '→ Không biết có đậu N1 không nhỉ.\n\n' +
      '・彼女、怒ってるかな？\n' +
      '→ Không biết cô ấy có đang giận không nhỉ?',
  },
]

const GrammarKanaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～かな" grammarSections={grammarSections} />
}

export default GrammarKanaScreen
