import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về 「～ように」「～ような」',
    explanation:
      '📌「よう」 dùng để **so sánh, ví von** hoặc **chỉ mục đích**, và sẽ thay đổi hình thức tùy theo vị trí trong câu:\n\n' +
      '・「ように」 thường đi với động từ để nói về **mục đích hoặc kết quả**.\n' +
      '・「ような」 đi trước danh từ để mô tả **danh từ giống như điều gì đó**.\n\n' +
      '👉 Có thể hiểu nôm na:\n' +
      '- 「ように」: như là (trước động từ)\n' +
      '- 「ような」: như là… (bổ nghĩa danh từ)',
  },
  {
    title: '2. Cấu trúc và ví dụ với 「～ように」',
    explanation:
      '🔹 [Động từ thường / thể phủ định / thể khả năng] + ように\n\n' +
      '📝 Ví dụ:\n' +
      '・忘れないように、メモしてください。\n' +
      '→ Hãy ghi chú lại để không quên.\n\n' +
      '・子どもでもわかるように、やさしい言葉で話してください。\n' +
      '→ Hãy nói bằng từ ngữ dễ hiểu để cả trẻ con cũng hiểu được.\n\n' +
      '・先生が言ったように、文法を復習してください。\n' +
      '→ Hãy ôn lại ngữ pháp như thầy cô đã nói.',
  },
  {
    title: '3. Cấu trúc và ví dụ với 「～ような」',
    explanation:
      '🔹 [Danh từ / Động từ thường (ngắn)] + ような + Danh từ\n\n' +
      '📝 Ví dụ:\n' +
      '・これは夢のような話です。\n' +
      '→ Đây là câu chuyện giống như mơ.\n\n' +
      '・田中さんのような人と働きたいです。\n' +
      '→ Tôi muốn làm việc với người giống như anh Tanaka.\n\n' +
      '・雪のような白い花ですね。\n' +
      '→ Đúng là bông hoa trắng như tuyết nhỉ.',
  },
  {
    title: '4. So sánh 「～ように」 và 「～ような」',
    explanation:
      '📌 Tóm tắt:\n' +
      '・「ように」 đi với **động từ** → biểu đạt mục đích, kết quả, sự ví von hành động\n' +
      '・「ような」 đi với **danh từ** → dùng để ví von, so sánh danh từ\n\n' +
      '🧩 Ví dụ đối chiếu:\n' +
      '・彼のように話したい。\n' +
      '→ Tôi muốn nói chuyện như anh ấy.\n\n' +
      '・彼のような話し方が好きです。\n' +
      '→ Tôi thích cách nói chuyện giống như của anh ấy.',
  },
]

const GrammarYouniYounaScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～ように/ ～ ような" grammarSections={grammarSections} />
  )
}

export default GrammarYouniYounaScreen
