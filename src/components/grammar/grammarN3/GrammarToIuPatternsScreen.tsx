import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về 「という」',
    explanation:
      '📌「という」 là một cách nói phổ biến trong tiếng Nhật, dùng để **trích dẫn**, **định nghĩa**, hoặc **nhấn mạnh tên gọi, thông tin**.\n' +
      '👉 Tùy vào ngữ cảnh, 「という」 có thể mang nhiều ý nghĩa khác nhau như:\n' +
      '・Gọi là\n' +
      '・Nghe nói là\n' +
      '・Cái gọi là\n' +
      '・Theo như...',
  },
  {
    title: '2. Mẫu 1: [Danh từ] + という + [Danh từ]',
    explanation:
      '📝 Diễn đạt "cái gọi là... / có tên là..."\n\n' +
      'Ví dụ:\n' +
      '・さくら**という**花を知っていますか。\n' +
      '→ Bạn có biết loài hoa tên là sakura không?\n\n' +
      '・山田さん**という**人から電話がありました。\n' +
      '→ Có cuộc gọi từ người tên là Yamada.',
  },
  {
    title: '3. Mẫu 2: Câu thường + という',
    explanation:
      '📝 Dùng để trích dẫn thông tin, thường dùng trong văn viết hoặc kể lại.\n\n' +
      'Ví dụ:\n' +
      '・田中さんは来ない**という**。\n' +
      '→ Nghe nói anh Tanaka không đến.\n\n' +
      '・事故があった**という**ニュースを見ました。\n' +
      '→ Tôi đã xem tin nói rằng có tai nạn.',
  },
  {
    title: '4. Mẫu 3: [～というのは] + ... です',
    explanation:
      '📝 Dùng để **định nghĩa hoặc giải thích** một từ, cụm từ.\n\n' +
      'Ví dụ:\n' +
      '・「掃除**というのは**、部屋をきれいにすることです。」\n' +
      '→ “Sōji” nghĩa là làm sạch phòng.\n\n' +
      '・JLPT**というのは**日本語の試験のことです。\n' +
      '→ JLPT là kỳ thi tiếng Nhật.',
  },
  {
    title: '5. Mẫu 4: [ということだ]',
    explanation:
      '📝 Dùng để **tóm tắt, truyền đạt thông tin** đã nghe được từ người khác.\n\n' +
      'Ví dụ:\n' +
      '・明日は休み**ということです。**\n' +
      '→ Nghe nói ngày mai được nghỉ.\n\n' +
      '・彼は日本に帰った**ということだ。**\n' +
      '→ Nghe nói anh ấy đã về Nhật.',
  },
  {
    title: '6. Mẫu 5: [というふうに]',
    explanation:
      '📝 Dùng để diễn đạt “theo cách như vậy”, thường gặp trong văn viết hoặc nói trang trọng.\n\n' +
      'Ví dụ:\n' +
      '・先生は「頑張ってください」**というふうに**言いました。\n' +
      '→ Thầy giáo nói theo cách là “hãy cố gắng nhé”.',
  },
  {
    title: '7. Mẫu 6: [というより]・[というか]',
    explanation:
      '📝 Dùng để chỉnh sửa, bổ sung hoặc làm rõ lại điều vừa nói.\n\n' +
      '・これは趣味**というより**仕事ですね。\n' +
      '→ Cái này không hẳn là sở thích mà đúng hơn là công việc.\n\n' +
      '・寒い**というか**、むしろ痛いくらいだ。\n' +
      '→ Không chỉ lạnh mà cảm giác gần như là đau ấy.',
  },
]

const GrammarToIuPatternsScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="Các mẫu câu với という" grammarSections={grammarSections} />
  )
}

export default GrammarToIuPatternsScreen
