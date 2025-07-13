import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về 「まるで～よう／みたい」',
    explanation:
      '📌 「まるで」 là một **phó từ** dùng để nhấn mạnh mức độ **giống nhau** giữa hai sự vật, sự việc.\n\n' +
      '👉 Khi đi với 「～よう」 hoặc 「～みたい」, nó mang nghĩa: "**cứ như là…**, **giống hệt như…**".\n\n' +
      '📝 Thường dùng khi **so sánh ví von**, hoặc diễn đạt cảm xúc ngạc nhiên trước một điều gì đó giống đến mức không ngờ.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Cấu trúc 1: まるで + [Danh từ / Câu] + みたい\n' +
      '🔹 Cấu trúc 2: まるで + [Câu / Động từ / Tính từ] + ようだ\n\n' +
      '📌 Nếu đứng ở cuối câu:\n' +
      '- 「みたい」 thường là văn nói\n' +
      '- 「ようだ」 thường là văn viết hoặc trang trọng hơn\n\n' +
      '📝 Ví dụ:\n' +
      '・彼の話し方は、まるで女の人みたいだ。\n' +
      '→ Cách nói chuyện của anh ấy cứ như là con gái vậy.\n\n' +
      '・まるで夢を見ているようです。\n' +
      '→ Cứ như đang mơ vậy.',
  },
  {
    title: '3. Cách dùng và sắc thái',
    explanation:
      '🔹 Dùng để so sánh hoặc ví von giữa hai sự vật không phải là một.\n' +
      '🔸 Nhấn mạnh tính **giống nhau đến mức đáng ngạc nhiên**.\n\n' +
      '📝 Ví dụ:\n' +
      '・このケーキ、まるで本物のフルーツみたい！\n' +
      '→ Cái bánh này trông cứ như trái cây thật ấy!\n\n' +
      '・まるで映画のワンシーンのような光景でした。\n' +
      '→ Quang cảnh giống hệt như một cảnh trong phim vậy.\n\n' +
      '・まるで彼のことを知らないような言い方だね。\n' +
      '→ Cậu nói cứ như thể không hề biết anh ta vậy.',
  },
  {
    title: '4. So sánh với khi không có 「まるで」',
    explanation:
      '🔸 Không có 「まるで」:\n' +
      '・彼は子どもみたいだ。\n' +
      '→ Anh ấy giống trẻ con.\n\n' +
      '🔸 Có 「まるで」:\n' +
      '・彼はまるで子どもみたいだ。\n' +
      '→ Anh ấy **cứ y như** trẻ con vậy.\n\n' +
      '📌 Khi thêm 「まるで」, câu mang **sắc thái mạnh hơn, nhấn mạnh hơn**, thường gợi cảm xúc rõ rệt hơn.',
  },
]

const GrammarMarudeYouMitaiScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="まるで～よう/ みたい" grammarSections={grammarSections} />
  )
}

export default GrammarMarudeYouMitaiScreen
