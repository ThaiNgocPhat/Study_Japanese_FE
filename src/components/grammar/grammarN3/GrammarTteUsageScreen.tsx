import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về 「って」',
    explanation:
      '📌 「って」 là một từ đa năng trong tiếng Nhật hội thoại. Nó thường được dùng để:\n' +
      '・Thay thế cho các trợ từ như 「と」「という」\n' +
      '・Trích dẫn lời nói\n' +
      '・Nhấn mạnh hoặc làm mềm câu văn (như "ấy mà", "ấy đấy")\n\n' +
      '👉 Rất phổ biến trong ngôn ngữ nói và văn nói thân mật.',
  },
  {
    title: '2. 「って」 dùng thay cho 「と」/「という」',
    explanation:
      '✏️ Dùng để **trích dẫn lời nói hoặc ý nghĩ** giống như 「と」 hoặc 「という」 nhưng tự nhiên hơn, thân mật hơn:\n\n' +
      '📝 Ví dụ:\n' +
      '・田中さんが明日来る**って**。\n' +
      '→ Nghe nói Tanaka-san sẽ đến vào ngày mai.\n\n' +
      '・彼は「行きたくない」**って**言ってた。\n' +
      '→ Anh ấy nói là "không muốn đi".\n\n' +
      '・「やめる」**って**本当？\n' +
      '→ Nghe nói nghỉ thật hả?',
  },
  {
    title: '3. 「って」 dùng thay cho 「は」「というのは」',
    explanation:
      '✏️ Dùng để **giới thiệu chủ đề** (thay cho 「は」 hoặc 「というのは」):\n\n' +
      '📝 Ví dụ:\n' +
      '・アニメ**って**楽しいね。\n' +
      '→ Anime thì vui nhỉ.\n\n' +
      '・「いただきます」**って**どういう意味？\n' +
      '→ “Itadakimasu” nghĩa là gì vậy?',
  },
  {
    title: '4. 「ってば」「ったら」 – nhấn mạnh hoặc trách nhẹ',
    explanation:
      '✏️ Dùng trong hội thoại thân mật để **gọi người nghe, nhấn mạnh hoặc trách nhẹ**:\n\n' +
      '📝 Ví dụ:\n' +
      '・もう、さっきから静かにして**ってば**！\n' +
      '→ Bảo yên lặng từ nãy giờ rồi mà!\n\n' +
      '・ねえ、お母さん**ったら**…\n' +
      '→ Này mẹ à… (trách yêu, hoặc than nhẹ)',
  },
  {
    title: '5. Lưu ý khi dùng 「って」',
    explanation:
      '⚠️ 「って」 là ngôn ngữ **thân mật**, thường dùng trong văn nói, không nên dùng trong:\n' +
      '・Văn viết trang trọng\n' +
      '・Giao tiếp trong môi trường trang trọng, công sở\n\n' +
      '✅ Trong hội thoại với bạn bè, người thân thì rất phổ biến và tự nhiên.',
  },
]

const GrammarTteUsageScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="Các cách dùng của って" grammarSections={grammarSections} />
  )
}

export default GrammarTteUsageScreen
