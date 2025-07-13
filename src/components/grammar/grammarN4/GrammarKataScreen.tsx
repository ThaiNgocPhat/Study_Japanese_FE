import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Ý nghĩa & Cấu trúc',
    explanation:
      '🔹 Mẫu câu diễn tả **cách làm một việc gì đó**\n\n' +
      '🔧 Cấu trúc:\n' +
      '[Động từ thể ます (bỏ ます)] + 方（かた）\n\n' +
      '📌 Đây là danh từ nên thường kết hợp với の để bổ nghĩa thêm, ví dụ: 本の読み方 (cách đọc sách)',
  },
  {
    title: '2. Ví dụ biến đổi từ động từ',
    explanation:
      '📘 Ví dụ chuyển từ động từ:\n' +
      '・読みます（よみます）→ 読み方（よみかた）: cách đọc\n' +
      '・話します（はなします）→ 話し方（はなしかた）: cách nói\n' +
      '・使います（つかいます）→ 使い方（つかいかた）: cách sử dụng\n' +
      '・作ります（つくります）→ 作り方（つくりかた）: cách làm, cách chế biến',
  },
  {
    title: '3. Câu ví dụ thực tế',
    explanation:
      '📝 Ví dụ:\n' +
      '① このりょうりの作り方をしっていますか。\n' +
      '→ Cậu biết cách làm món ăn này không?\n\n' +
      '② このゲームのあそびかたがわかりますか。\n' +
      '→ Cậu biết cách chơi game này không?\n\n' +
      '③ このカメラの使い方をおしえてください。\n' +
      '→ Hãy chỉ cho tôi cách dùng máy ảnh này.\n\n' +
      '④ 漢字の読み方はむずかしいです。\n' +
      '→ Cách đọc kanji rất khó.\n\n' +
      '⑤ けいたいでメールのおくりかたがわかりません。\n' +
      '→ Tôi không biết cách gửi mail bằng điện thoại.',
  },
  {
    title: '4. Ghi nhớ & lưu ý',
    explanation:
      '💡 Ghi nhớ:\n' +
      '・「～かた」 biến động từ thành **danh từ** chỉ phương pháp\n' +
      '・Có thể kết hợp với の để nói “cách của cái gì đó”\n\n' +
      '📌 Ví dụ:\n' +
      '・にほんごの話し方: cách nói tiếng Nhật\n' +
      '・電話のかけ方: cách gọi điện thoại\n\n' +
      '🚫 Không áp dụng được với tất cả động từ. Một số động từ bất quy tắc cần luyện nhiều qua ví dụ.',
  },
]

const GrammarKataScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～かた: Cách (làm gì)" grammarSections={grammarSections} />
  )
}

export default GrammarKataScreen
