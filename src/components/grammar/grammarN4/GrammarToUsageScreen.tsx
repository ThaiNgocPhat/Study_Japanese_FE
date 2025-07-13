import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Mẫu ～と思う: Tôi nghĩ rằng...',
    explanation:
      '🔹 Dùng để biểu đạt **ý kiến hoặc suy nghĩ** chủ quan của người nói.\n' +
      '🔹 Có thể áp dụng với động từ, tính từ, danh từ ở **thể thường**.\n\n' +
      '✅ Cấu trúc:\n' +
      '・[Thể thường] + と思います/と思う\n\n' +
      '📌 この映画はおもしろいと思います。\n' +
      '→ Tôi nghĩ bộ phim này hay.\n' +
      '📌 雨は降らないと思います。\n' +
      '→ Tôi nghĩ trời sẽ không mưa.',
  },
  {
    title: '2. Phủ định mẫu ～と思う',
    explanation:
      '✅ Có 2 cách thể hiện phủ định:\n\n' +
      '① Chuyển phần trước と sang thể phủ định:\n' +
      '📌 日本語は簡単じゃないと思いました。\n' +
      '→ Tôi nghĩ tiếng Nhật không dễ.\n\n' +
      '② Phủ định cả cụm 「と思う」:\n' +
      '📌 この映画はおもしろいと思いません。\n' +
      '→ Tôi không nghĩ phim này hay.',
  },
  {
    title: '3. Mẫu ～と言いました / ～と言っていました',
    explanation:
      '🔹 Dùng để **trích dẫn lời nói** của người khác.\n' +
      '🔹 「と言いました」: truyền đạt trực tiếp. 「と言っていました」: truyền đạt lại.\n\n' +
      '✅ Cấu trúc:\n' +
      '・[Thể thường / Câu trực tiếp] + と言いました/と言っていました\n\n' +
      '📌 田中さんは「明日休みます」と言いました。\n' +
      '→ Anh Tanaka nói: "Ngày mai tôi nghỉ."\n' +
      '📌 田中さんは明日休むと言っていました。\n' +
      '→ Anh Tanaka bảo rằng ngày mai nghỉ.',
  },
  {
    title: '4. Mẫu ～という意味です: Có nghĩa là...',
    explanation:
      '🔹 Dùng để **giải thích nghĩa của từ hoặc biểu tượng**.\n\n' +
      '✅ Cấu trúc:\n' +
      '・[Từ / Cụm từ] + という意味です\n\n' +
      '📌 「禁煙」はタバコを吸うのを禁止するという意味です。\n' +
      '→ “Cấm hút thuốc” nghĩa là không được hút thuốc.\n' +
      '📌 「ともだち」は英語で「Friend」という意味です。\n' +
      '→ “ともだち” có nghĩa là “Friend” trong tiếng Anh.',
  },
  {
    title: '5. Mẫu ～と言います: Nói là / Gọi là...',
    explanation:
      '🔹 Dùng khi **giới thiệu tên** hoặc hỏi cách gọi.\n\n' +
      '✅ Cấu trúc:\n' +
      '・[Tên / Danh từ] + と言います\n\n' +
      '📌 わたしは佐藤と言います。\n' +
      '→ Tôi tên là Sato.\n' +
      '📌 「これは日本語で何と言いますか」ー「はし」と言います。\n' +
      '→ Cái này tiếng Nhật nói là gì? / Gọi là “はし”.',
  },
  {
    title: '6. Mẫu ～と読みます: Đọc là...',
    explanation:
      '🔹 Dùng để hỏi/giải thích **cách đọc** từ/cụm từ.\n\n' +
      '✅ Cấu trúc:\n' +
      '・[Từ / Cụm từ] + と読みます\n\n' +
      '📌 この漢字は何と読みますか。\n' +
      '→ Chữ Hán này đọc là gì?\n' +
      '📌 「普通」は「ふつう」と読みます。\n' +
      '→ “普通” đọc là “ふつう”.',
  },
  {
    title: '7. Mẫu ～と書いてある: Viết là...',
    explanation:
      '🔹 Diễn tả **nội dung được viết ra** như biển báo, ghi chú...\n\n' +
      '✅ Cấu trúc:\n' +
      '・～と書いてあります\n\n' +
      '📌 ここに「立入禁止」と書いてあります。\n' +
      '→ Ở đây có ghi là “Cấm vào”.\n' +
      '📌 手紙に「親展」と書いてある。\n' +
      '→ Trên thư ghi là “Riêng tư”.',
  },
]

const GrammarToUsageScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="Các mẫu câu sử dụng trợ từ と"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarToUsageScreen
