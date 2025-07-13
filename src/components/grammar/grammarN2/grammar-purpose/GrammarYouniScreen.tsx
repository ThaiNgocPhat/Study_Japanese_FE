import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ように',
    explanation:
      '📌「～ように」 là mẫu câu dùng để:\n' +
      '① Diễn tả mục đích (để mà...)\n' +
      '② Diễn tả kết quả/kỳ vọng (sao cho...)\n' +
      '③ Diễn tả theo như, giống như...',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹【Vる／Vない／Vた】+ ように\n' +
      '🔹【V可能形】+ ように\n' +
      '🔹【名詞の / 普通形】+ ように (dạng diễn tả giống như)\n\n' +
      '⚠️ Chủ yếu dùng với động từ **không chủ ý** (có thể, hiểu, biết, nhìn thấy...).',
  },
  {
    title: '3. Ý nghĩa & phân biệt',
    explanation:
      '✅ Nghĩa 1 – Mục đích:\n' +
      '・Dùng để nói về mục tiêu nhằm đạt được một trạng thái/kết quả nào đó.\n' +
      '・Khác với「～ために」: không dùng với động từ mang ý chí mạnh.\n\n' +
      '✅ Nghĩa 2 – Giống như, theo như:\n' +
      '・Dùng để mô tả sự việc giống như một điều đã biết.\n\n' +
      '📌 Phân biệt:\n' +
      '・「～ように」: dùng với **khả năng, trạng thái**.\n' +
      '・「～ために」: dùng với **hành động có mục đích rõ**.',
  },
  {
    title: '4. Ví dụ minh họa (mục đích)',
    explanation:
      '1. 忘れない**ように**、メモしてください。\n' +
      '→ Hãy ghi chú lại để khỏi quên.\n\n' +
      '2. 子どもが読める**ように**、ふりがなをつけました。\n' +
      '→ Tôi đã thêm furigana để trẻ em có thể đọc.\n\n' +
      '3. 日本語が上手に話せる**ように**、毎日練習しています。\n' +
      '→ Tôi luyện tập mỗi ngày để có thể nói tiếng Nhật giỏi.',
  },
  {
    title: '5. Ví dụ minh họa (theo như, giống như)',
    explanation:
      '1. 先生が言った**ように**、練習すれば大丈夫です。\n' +
      '→ Làm theo lời thầy nói, nếu luyện tập là sẽ ổn thôi.\n\n' +
      '2. 予定通りに、会議は3時に始まりました。\n' +
      '→ Cuộc họp đã bắt đầu lúc 3 giờ như dự định.\n\n' +
      '3. 彼の言う**ように**、これは簡単ではありません。\n' +
      '→ Như anh ấy nói, việc này không đơn giản.',
  },
  {
    title: '6. Lưu ý sử dụng',
    explanation:
      '🔸 Không dùng cho các động từ thể hiện hành động có chủ ý mạnh như「決める」「選ぶ」「努力する」v.v.\n' +
      '🔸 Khi muốn diễn đạt mục đích với động từ mang ý chí mạnh → dùng「～ために」.\n' +
      '🔸 Trong văn nói, có thể rút gọn thành 「ようにね」,「ようにして」',
  },
]

const GrammarYouniScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ように" grammarSections={grammarSections} />
}

export default GrammarYouniScreen
