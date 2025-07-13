import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu: 「もう」và「まだ」',
    explanation:
      '📌「もう」và「まだ」là hai phó từ rất hay gặp trong giao tiếp tiếng Nhật, liên quan đến **thời điểm** và **trạng thái hành động**.\n\n' +
      '🔁 Chúng thường được dùng để **hỏi hoặc nói về việc gì đó đã xảy ra hay chưa, vẫn còn tiếp diễn hay đã kết thúc**.',
  },
  {
    title: '2. Cách dùng 「もう」',
    explanation:
      '🟢 「もう」= “đã”, “rồi”, “sắp”…\n\n' +
      '👉 Diễn tả việc gì đó **đã xảy ra, đã hoàn thành** hoặc **sắp xảy ra**.\n' +
      '👉 Cũng dùng trong câu hỏi và phủ định để diễn tả thay đổi trạng thái.\n\n' +
      '📝 Ví dụ:\n' +
      '・もう食べました。\n' +
      '→ Tôi đã ăn rồi.\n\n' +
      '・もう宿題をしましたか？\n' +
      '→ Bạn đã làm bài tập chưa?\n\n' +
      '・もう行きません。\n' +
      '→ Tôi không đi nữa (đã thay đổi quyết định).',
  },
  {
    title: '3. Cách dùng 「まだ」',
    explanation:
      '🔵 「まだ」= “vẫn còn”, “chưa”\n\n' +
      '👉 Diễn tả hành động **chưa xảy ra** hoặc **đang tiếp diễn, chưa kết thúc**.\n' +
      '👉 Dùng trong cả câu khẳng định và phủ định.\n\n' +
      '📝 Ví dụ:\n' +
      '・まだ食べていません。\n' +
      '→ Tôi vẫn chưa ăn.\n\n' +
      '・まだ雨が降っています。\n' +
      '→ Trời vẫn còn đang mưa.\n\n' +
      '・彼はまだ学生です。\n' +
      '→ Anh ấy vẫn còn là sinh viên.',
  },
  {
    title: '4. So sánh đối chiếu',
    explanation:
      '📊 So sánh nhanh:\n' +
      '・もう + Vました: Đã làm gì đó.\n' +
      '  Ví dụ: もう帰りました。→ Tôi đã về rồi.\n\n' +
      '・まだ + Vていません: Vẫn chưa làm gì đó.\n' +
      '  Ví dụ: まだ帰っていません。→ Tôi vẫn chưa về.\n\n' +
      '・もう + Vません／Vない: Không làm nữa.\n' +
      '  Ví dụ: もうテレビを見ません。→ Tôi không xem TV nữa.\n\n' +
      '・まだ + です／います: Vẫn đang... / vẫn còn là...\n' +
      '  Ví dụ: まだテレビを見ています。→ Tôi vẫn đang xem TV.',
  },
  {
    title: '5. Mẹo học',
    explanation:
      '💡 Mẹo học:\n' +
      '・「もう」 = đã làm rồi / thay đổi trạng thái\n' +
      '・「まだ」 = chưa / vẫn đang tiếp diễn\n\n',
  },
]

const GrammarMouMadaScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="Phân biệt 「もう」 và「 まだ」"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarMouMadaScreen
