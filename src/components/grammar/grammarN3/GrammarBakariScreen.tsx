import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về 「～ばかり」',
    explanation:
      '📌 「～ばかり」 là mẫu ngữ pháp được dùng để diễn tả ý nghĩa: **chỉ toàn là..., suốt..., toàn làm gì đó**.\n' +
      '📌 Tuỳ vào cấu trúc đi kèm, nó có thể mang nhiều sắc thái khác nhau như:\n' +
      '・Sự phàn nàn: "toàn làm A", "chỉ có B thôi"\n' +
      '・Thói quen xấu, hành vi lặp lại nhiều\n' +
      '・Ý nghĩa số lượng lớn hoặc thiên lệch về một phía',
  },
  {
    title: '2. Cấu trúc với danh từ + 「ばかり」',
    explanation:
      '🔹 [Danh từ] + ばかり\n\n' +
      '📝 Ví dụ:\n' +
      '・このクラスは女の子ばかりですね。\n' +
      '→ Lớp này toàn là con gái nhỉ.\n\n' +
      '・甘いものばかり食べてはいけません。\n' +
      '→ Không được chỉ toàn ăn đồ ngọt.',
  },
  {
    title: '3. Cấu trúc với động từ thể て + 「ばかりいる」',
    explanation:
      '🔹 [Động từ thể て] + ばかりいる\n\n' +
      '📌 Diễn tả hành động lặp đi lặp lại nhiều lần, mang sắc thái **tiêu cực**, chỉ trích.\n\n' +
      '📝 Ví dụ:\n' +
      '・彼は遊んでばかりいる。\n' +
      '→ Anh ta chỉ toàn chơi thôi.\n\n' +
      '・テレビを見てばかりいないで、勉強しなさい。\n' +
      '→ Đừng có chỉ xem tivi mãi, hãy học đi.',
  },
  {
    title: '4. Cấu trúc với động từ thể quá khứ + 「ばかり」',
    explanation:
      '🔹 [Động từ thể た] + ばかり\n\n' +
      '📌 Dùng để diễn tả hành động **vừa mới xảy ra** (nghĩa tương tự 「～たところ」).\n\n' +
      '📝 Ví dụ:\n' +
      '・今、家に帰ったばかりです。\n' +
      '→ Tôi vừa mới về đến nhà.\n\n' +
      '・食べたばかりなのに、もうお腹がすいた。\n' +
      '→ Vừa mới ăn xong mà đã đói rồi.',
  },
  {
    title: '5. Lưu ý và so sánh',
    explanation:
      '📌 Phân biệt:\n' +
      '・「～ばかり」 với danh từ/động từ → nghĩa là "chỉ toàn..."\n' +
      '・「～たばかり」 → nhấn mạnh thời điểm "vừa mới..."\n\n' +
      '🧠 Ngoài ra còn có cách nói 「～ばかりでなく」 nghĩa là "không chỉ... mà còn...", khác hoàn toàn.\n\n' +
      '📝 Ví dụ:\n' +
      '・この店は値段ばかり高くて、美味しくない。\n' +
      '→ Quán này chỉ được cái giá cao chứ không ngon.\n\n' +
      '・先週、日本に来たばかりです。\n' +
      '→ Tôi vừa đến Nhật tuần trước.',
  },
]

const GrammarBakariScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ばかり" grammarSections={grammarSections} />
}

export default GrammarBakariScreen
