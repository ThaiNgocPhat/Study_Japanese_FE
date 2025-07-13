import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu chung',
    explanation:
      '📌 Hai mẫu câu:\n' +
      '・～かもしれません: có thể, có lẽ (xác suất thấp, không chắc chắn)\n' +
      '・～はずです: chắc chắn là..., nhất định là... (xác suất cao, có cơ sở)',
  },
  {
    title: '2. ～かもしれません（かも）',
    explanation:
      '🧠 Dùng khi **dự đoán một khả năng có thể xảy ra**, nhưng **không chắc chắn** (xác suất ~30–50%).\n\n' +
      '✏️ Cấu trúc:\n' +
      '[Động từ thể thường] + かもしれません\n' +
      '[Tính từ -i/-na / Danh từ (thể thường)] + かもしれません\n\n' +
      '🗣 Trong văn nói, thường rút gọn thành **かも**.\n\n' +
      '📝 Ví dụ:\n' +
      '・彼は来ないかもしれません。\n' +
      '→ Có thể anh ấy sẽ không đến.\n\n' +
      '・明日は雨かもしれない。\n' +
      '→ Mai có thể sẽ mưa.\n\n' +
      '・この料理はおいしくないかも。\n' +
      '→ Món này có thể không ngon lắm.',
  },
  {
    title: '3. ～はずです',
    explanation:
      '🧠 Dùng khi **khẳng định điều gì đó chắc chắn**, dựa trên thông tin, kinh nghiệm, hoặc logic.\n\n' +
      '✏️ Cấu trúc:\n' +
      '[Động từ thể thường] + はずです\n' +
      '[Tính từ -i/-na / Danh từ (thể thường)] + はずです\n\n' +
      '📝 Ví dụ:\n' +
      '・彼は日本に住んでいたから、日本語が話せるはずです。\n' +
      '→ Vì anh ấy đã từng sống ở Nhật, nên chắc chắn biết nói tiếng Nhật.\n\n' +
      '・今日は祝日だから、銀行は休みのはずです。\n' +
      '→ Hôm nay là ngày lễ, chắc chắn ngân hàng sẽ nghỉ.\n\n' +
      '・10時に出たなら、もう着いているはずです。\n' +
      '→ Nếu đã rời đi lúc 10 giờ thì giờ này chắc đã đến rồi.',
  },
  {
    title: '4. So sánh ～かもしれません và ～はずです',
    explanation:
      '📊 So sánh nhanh:\n' +
      '・～かもしれません: Mức độ chắc chắn thấp (khoảng 30–50%), mang nghĩa "có thể, có lẽ".\n' +
      '・～はずです: Mức độ chắc chắn cao (khoảng 80–100%), mang nghĩa "chắc chắn, hợp lý, có cơ sở".\n\n' +
      '📌 Hãy chú ý ngữ cảnh khi sử dụng hai mẫu này để tránh hiểu sai mức độ chắc chắn.\n\n' +
      'Ví dụ:\n' +
      '・彼はまだ学生かもしれません。\n' +
      '→ Có thể anh ấy vẫn còn là học sinh. (Không chắc)\n\n' +
      '・彼はまだ学生のはずです。\n' +
      '→ Nhất định anh ấy vẫn là học sinh. (Có căn cứ)',
  },
  {
    title: '5. Lưu ý khi sử dụng',
    explanation:
      '✅ 「～かもしれません」 không dùng khi bạn **chắc chắn hoặc có bằng chứng rõ ràng**.\n' +
      '✅ 「～はずです」 nên dùng khi có **lý do hợp lý hoặc cơ sở** để phán đoán.\n' +
      '🚫 Không nên dùng ～はずです với sự việc mình không có căn cứ rõ ràng, dễ gây hiểu nhầm.',
  },
]

const GrammarKamoshiremasenHasuScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～かもしれません、～はずです"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarKamoshiremasenHasuScreen
