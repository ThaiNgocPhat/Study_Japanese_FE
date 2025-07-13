import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng ～つもりです',
    explanation:
      '🔸 Mẫu câu này diễn tả **dự định hoặc ý định** làm một việc gì đó trong tương lai gần.\n' +
      '🔸 Thường dùng khi người nói đã suy nghĩ từ trước, không phải quyết định tức thì.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '✅ Động từ thể từ điển + つもりです\n' +
      '→ Tôi định làm…\n\n' +
      '✅ Động từ thể từ điển + つもりはありません/つもりはない\n' +
      '→ Tôi không định làm…\n\n' +
      '✅ Động từ thể từ điển + つもりでした/つもりだった\n' +
      '→ Tôi đã định làm… (dự định trong quá khứ)',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📌 わたしは大阪にいくつもりです。\n' +
      '→ Tôi định đi Osaka.\n\n' +
      '📌 かれは日本にりゅうがくするつもりです。\n' +
      '→ Anh ấy định đi du học Nhật.\n\n' +
      '📌 かのじょはあたらしいくつをかうつもりです。\n' +
      '→ Cô ấy định mua giày mới.\n\n' +
      '📌 わたしは大阪にいくつもりはありません。\n' +
      '→ Tôi không định đi Osaka.',
  },
  {
    title: '4. Lưu ý về cách dùng',
    explanation:
      '📎 Không dùng dạng quá khứ cho động từ đứng trước 「つもり」.\n\n' +
      '（✕）りゅうがくしたつもりです。\n' +
      '（〇）りゅうがくするつもりです。\n\n' +
      '👉 「つもりはない」 mạnh hơn 「～ないつもりです」 về sắc thái phủ định.',
  },
  {
    title: '5. So sánh sắc thái',
    explanation:
      '📌 いくつもりはない → Không có ý định đi (nhấn mạnh hơn).\n' +
      '📌 いかないつもりです → Có ý định là sẽ không đi (mềm hơn một chút).',
  },
]

const GrammarTsumoriScreen = () => {
  return <GrammarTemplateScreen screenTitle="～つもりです" grammarSections={grammarSections} />
}

export default GrammarTsumoriScreen
