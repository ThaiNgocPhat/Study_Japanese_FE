import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu các mẫu ～ば…',
    explanation:
      '📌 Đây là các mẫu câu được hình thành từ thể điều kiện **～ば**, kết hợp với các biểu đạt cảm xúc, mong muốn hoặc tiếc nuối.\n\n' +
      '📝 Gồm 3 mẫu chính:\n' +
      '・～ばと思う：Ước gì…, giá mà… (mong muốn)\n' +
      '・～ばいいのに：Giá mà… thì tốt, ước gì… (gợi ý nhẹ nhàng, nuối tiếc)\n' +
      '・～ばよかった：Lẽ ra nên…, phải chi đã… (hối hận, tiếc nuối)',
  },
  {
    title: '2. Cấu trúc & Cách chia',
    explanation:
      '✏️ Động từ/ Tính từ/ Danh từ chia ở **thể điều kiện ～ば**:\n' +
      '・V-ば + と思う / いいのに / よかった\n' +
      '・い形容詞: い → ければ\n' +
      '・な形容詞/ Danh từ: なら（ば）\n\n' +
      '📝 Ví dụ chia:\n' +
      '・行く → 行けば\n' +
      '・安い → 安ければ\n' +
      '・便利（べんり）→ 便利なら（ば）\n' +
      '・学生 → 学生なら（ば）',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📍 ～ばと思う:\n' +
      '・もっと日本語が話せればと思います。\n' +
      '→ Tôi ước gì mình nói được tiếng Nhật nhiều hơn.\n\n' +
      '📍 ～ばいいのに:\n' +
      '・休めばいいのに。\n' +
      '→ Giá mà bạn nghỉ ngơi thì tốt biết mấy.\n' +
      '・彼も来ればいいのに。\n' +
      '→ Giá mà anh ấy cũng đến.\n\n' +
      '📍 ～ばよかった:\n' +
      '・もっと早く起きればよかった。\n' +
      '→ Lẽ ra tôi nên dậy sớm hơn.\n' +
      '・彼に本当のことを言えばよかった。\n' +
      '→ Phải chi tôi đã nói thật với anh ấy.',
  },
  {
    title: '4. Ghi nhớ nhanh & phân biệt',
    explanation:
      '🔹 ～ばと思う：Biểu đạt **mong muốn nhẹ nhàng** hoặc **ước gì** cho hiện tại hoặc tương lai.\n' +
      '🔹 ～ばいいのに：Mang tính **gợi ý nhẹ nhàng** hoặc **tiếc nuối nhẹ** với điều chưa xảy ra.\n' +
      '🔹 ～ばよかった：Dùng để **tiếc nuối, hối hận** về điều đã xảy ra (hoặc đã không làm).\n\n' +
      '💡 Tùy ngữ cảnh, mẫu này có thể thể hiện cả sự tiếc nuối, gợi ý, hoặc mong muốn – rất phổ biến trong hội thoại đời thường.',
  },
]

const GrammarBaToOmouScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～ばと思う/ ばいいのに/ばよかった"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarBaToOmouScreen
