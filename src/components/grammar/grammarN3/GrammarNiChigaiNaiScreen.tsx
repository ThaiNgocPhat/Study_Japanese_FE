import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～に違いない」',
    explanation:
      '📌 「～に違いない」 dùng để diễn đạt **suy đoán chắc chắn**, kiểu như “chắc chắn là…”, “nhất định là…”.\n\n' +
      '👉 Người nói dùng khi có căn cứ rõ ràng hoặc tin tưởng cao vào điều mình suy đoán.\n\n' +
      '🔎 Thường dùng trong văn viết, hội thoại trang trọng.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔸 Động từ thể thường + に違いない\n' +
      '🔸 Tính từ -i + に違いない\n' +
      '🔸 Tính từ -na + に違いない\n' +
      '🔸 Danh từ + に違いない\n\n' +
      '📝 Ví dụ:\n' +
      '・あの人は先生に違いない。\n' +
      '→ Người đó chắc chắn là giáo viên.\n\n' +
      '・これは彼の字に違いない。\n' +
      '→ Cái này chắc chắn là chữ của anh ấy.\n\n' +
      '・彼はうそをついているに違いない。\n' +
      '→ Nhất định là anh ta đang nói dối.',
  },
  {
    title: '3. So sánh với 「～はずだ」 và 「～ようだ」',
    explanation:
      '🟢 「～に違いない」: Suy đoán **chắc chắn**, mang tính khẳng định mạnh mẽ.\n' +
      '🟡 「～はずだ」: Suy đoán logic, theo lý thuyết hoặc theo thông tin sẵn có, nhưng không mạnh bằng.\n' +
      '🔵 「～ようだ」: Chỉ là suy đoán nhẹ, cảm nhận, hình như vậy.\n\n' +
      '📝 Ví dụ:\n' +
      '・あの人は犯人に違いない。\n' +
      '→ Người đó chắc chắn là thủ phạm.\n\n' +
      '・あの人は犯人のはずだ。\n' +
      '→ Theo lẽ thường thì người đó là thủ phạm.\n\n' +
      '・あの人は犯人のようだ。\n' +
      '→ Hình như người đó là thủ phạm.',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '✅ Không dùng 「～に違いない」 khi không có căn cứ rõ ràng.\n' +
      '✅ Không dùng để nói về bản thân mình (vì mình không "suy đoán" về chính mình).\n\n' +
      '❌ Tôi sẽ đậu kỳ thi に違いない。\n' +
      '→ Câu sai, nên dùng: 合格するはずだ。\n\n' +
      '📖 Dạng phủ định: 「～に違いない」 không có dạng phủ định rõ ràng, thay vào đó dùng cách diễn đạt khác như:\n' +
      '・そんなことはないと思います。\n' +
      '・ありえない。',
  },
]

const GrammarNiChigaiNaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～に違いない" grammarSections={grammarSections} />
}

export default GrammarNiChigaiNaiScreen
