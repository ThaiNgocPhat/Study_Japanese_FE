import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～場合は',
    explanation:
      '📌「～場合（ばあい）は」có nghĩa là **"trong trường hợp..."**, dùng để trình bày một điều kiện hoặc tình huống cụ thể, trang trọng hơn so với các mẫu điều kiện khác như ～たら hay ～ば。\n\n' +
      '👉 Rất phổ biến trong **văn viết, thông báo, hướng dẫn sử dụng, quy định, v.v.**\n\n' +
      '📝 Ví dụ:\n' +
      '・火事の場合は、非常口から避難してください。\n' +
      '→ Trong trường hợp xảy ra cháy, hãy sơ tán qua cửa thoát hiểm.',
  },
  {
    title: '2. Cấu trúc sử dụng',
    explanation:
      '🧩 Cấu trúc:\n' +
      '[Động từ thể thường / Tính từ / Danh từ + の] + 場合（ばあい）は\n\n' +
      '✅ Động từ:\n' +
      '・雨が降る → 雨が降る場合は（trong trường hợp trời mưa）\n\n' +
      '✅ Tính từ -i:\n' +
      '・熱い → 熱い場合は（nếu nóng）\n\n' +
      '✅ Tính từ -na:\n' +
      '・静か → 静かな場合は（nếu yên tĩnh）\n\n' +
      '✅ Danh từ:\n' +
      '・地震 → 地震の場合は（trong trường hợp động đất）\n' +
      '・キャンセル → キャンセルの場合は（trong trường hợp hủy）',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📘 Một số ví dụ phổ biến:\n\n' +
      '・病気の場合は、無理しないでください。\n' +
      '→ Trong trường hợp bị bệnh, đừng cố quá.\n\n' +
      '・遅れる場合は、電話してください。\n' +
      '→ Nếu trễ thì hãy gọi điện.\n\n' +
      '・地震の場合は、机の下に隠れてください。\n' +
      '→ Trong trường hợp có động đất, hãy trốn dưới gầm bàn.\n\n' +
      '・パスワードを忘れた場合は、管理者に連絡してください。\n' +
      '→ Nếu quên mật khẩu, hãy liên hệ với quản trị viên.',
  },
  {
    title: '4. Lưu ý khi sử dụng',
    explanation:
      '🔍「～場合は」mang tính **trang trọng, quy chuẩn** và không mang tính hội thoại tự nhiên như「～たら」「～なら」.\n\n' +
      '✅ Rất thường thấy trong:\n' +
      '- Thông báo công cộng\n' +
      '- Nội quy, quy định\n' +
      '- Email, văn bản hành chính\n\n' +
      '⚠️ Không dùng trong hội thoại thân mật hằng ngày:\n' +
      '→ ❌ 風邪の場合は、薬を飲んでね。\n' +
      '→ ✅ 風邪をひいたら、薬を飲んでね。',
  },
  {
    title: '5. Mẹo học và ứng dụng',
    explanation:
      '💡 Mẹo ghi nhớ:\n' +
      '・Hễ thấy tình huống cần **diễn đạt trang trọng** → dùng「～場合は」\n\n' +
      '📖 Thường dùng để **đưa ra hướng dẫn ứng xử, quy tắc xử lý trong tình huống cụ thể**.\n\n' +
      '🧠 Học bằng cách đọc các bảng hướng dẫn sử dụng, nội quy công cộng, thông báo – sẽ gặp rất nhiều「～場合は」!',
  },
]

const GrammarBaaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～場合は" grammarSections={grammarSections} />
}

export default GrammarBaaiScreen
