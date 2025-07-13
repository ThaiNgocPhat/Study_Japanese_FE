import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về ～ておく',
    explanation:
      '📌 Mẫu câu ～ておく dùng để diễn đạt:\n' +
      '① Làm sẵn, chuẩn bị trước cho một mục đích nào đó trong tương lai.\n' +
      '② Làm và **giữ nguyên trạng thái**.\n' +
      '③ Giải quyết xong (hoặc bỏ qua) một việc gì đó.\n\n' +
      '💬 Trong văn nói:\n' +
      '・～ておく → ～とく\n' +
      '・～でおく → ～どく\n' +
      'Ví dụ: 調べておく → 調べとく／片付けておく → 片付けとく',
  },
  {
    title: '2. Cấu trúc của ～ておく',
    explanation:
      '✏️ Cấu trúc:\n' +
      '【Vて】 + おく\n\n' +
      '📌 Là mẫu câu khá phổ biến khi diễn tả sự chuẩn bị.\n\n' +
      '📝 Ví dụ:\n' +
      '・旅行の前にチケットを買っておきます。\n' +
      '→ Tôi sẽ mua vé trước khi đi du lịch.\n\n' +
      '・晩ごはんを作っておきました。\n' +
      '→ Tôi đã nấu sẵn cơm tối rồi.',
  },
  {
    title: '3. Cách dùng: Chuẩn bị sẵn (trước khi điều gì đó xảy ra)',
    explanation:
      '💡 Làm gì đó sẵn sàng cho một tình huống tương lai.\n\n' +
      '📝 Ví dụ:\n' +
      '・会議の資料をコピーしておきます。\n' +
      '→ Tôi sẽ photo tài liệu họp sẵn.\n\n' +
      '・水をたくさん買っておいたほうがいいです。\n' +
      '→ Nên mua sẵn nhiều nước (phòng khi cần).',
  },
  {
    title: '4. Cách dùng: Giữ nguyên trạng thái',
    explanation:
      '💡 Làm gì đó và để **nguyên trạng thái**, không thay đổi sau đó.\n\n' +
      '📝 Ví dụ:\n' +
      '・ドアを開けておいてください。\n' +
      '→ Hãy để cửa mở sẵn (không cần đóng).\n\n' +
      '・エアコンはつけておいてください。\n' +
      '→ Cứ để máy lạnh mở nhé.',
  },
  {
    title: '5. Cách dùng: Giải quyết sẵn, xử lý xong',
    explanation:
      '💡 Dùng khi nói về việc **làm trước để không phải làm sau**, hoặc **dọn dẹp, xử lý sẵn**.\n\n' +
      '📝 Ví dụ:\n' +
      '・部屋を片付けておきました。\n' +
      '→ Tôi đã dọn phòng sẵn rồi.\n\n' +
      '・質問がある人は、メモしておいてください。\n' +
      '→ Ai có câu hỏi thì hãy ghi chú sẵn nhé.',
  },
  {
    title: '6. Dạng rút gọn trong văn nói',
    explanation:
      '🗣 Trong giao tiếp hàng ngày, thường rút gọn:\n\n' +
      '・～ておく → ～とく\n' +
      '・～でおく → ～どく\n\n' +
      '📖 Ví dụ:\n' +
      '・これ、読んどいて。\n' +
      '→ Cái này đọc trước nhé.\n\n' +
      '・お弁当、作っといたよ。\n' +
      '→ Cơm hộp mẹ đã làm sẵn rồi đó.',
  },
]

const GrammarTeOkuScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ておく" grammarSections={grammarSections} />
}

export default GrammarTeOkuScreen
