import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ものだ',
    explanation:
      '📌 「～ものだ」 là mẫu câu đa nghĩa, tùy theo văn cảnh mà có thể biểu thị:\n' +
      '- Lẽ thường, điều hiển nhiên\n' +
      '- Cảm xúc, cảm thán mạnh mẽ\n' +
      '- Hồi tưởng quá khứ\n' +
      '👉 Đây là mẫu ngữ pháp trình độ N2, được dùng khá linh hoạt trong văn viết và nói.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể từ điển / thể ない + ものだ\n' +
      '🔹 Động từ thể quá khứ + ものだ\n\n' +
      '※ Không dùng với danh từ hay tính từ.',
  },
  {
    title: '3. Ý nghĩa & cách dùng chính',
    explanation:
      '① 💡 **Lẽ thường, điều hiển nhiên (bản chất tự nhiên, quy luật, đạo lý)**\n' +
      '　例：人間は年をとると忘れっぽくなるものだ。\n' +
      '　→ Con người khi có tuổi thì hay quên là chuyện thường.\n\n' +
      '② 😲 **Cảm thán, cảm xúc mạnh về điều gì đó (ngạc nhiên, khâm phục, xúc động)**\n' +
      '　例：時間が過ぎるのは早いものだ。\n' +
      '　→ Thời gian trôi thật nhanh quá.\n\n' +
      '③ 🕰 **Hồi tưởng lại thói quen, sự việc trong quá khứ**\n' +
      '　例：子どものころは、よく川で遊んだものだ。\n' +
      '　→ Hồi nhỏ tôi thường chơi ở bờ sông.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 若いころはよく夜遅くまで遊んだものだ。\n→ Hồi còn trẻ tôi hay chơi đến khuya.\n\n' +
      '2. 学生時代は毎日図書館で勉強したものだ。\n→ Thời sinh viên ngày nào tôi cũng học ở thư viện.\n\n' +
      '3. 本は人の心を豊かにするものだ。\n→ Sách là thứ làm phong phú tâm hồn con người.\n\n' +
      '4. 彼の努力には感心するものだ。\n→ Thật khâm phục sự nỗ lực của anh ấy.\n\n' +
      '5. 時間というのは、本当に早く過ぎるものですね。\n→ Thời gian trôi qua nhanh thật đấy nhỉ.',
  },
  {
    title: '5. Ghi chú bổ sung',
    explanation:
      '✅ Thường dùng với sắc thái cảm xúc, mang tính chủ quan.\n' +
      '✅ Không nên nhầm với 「ものです」 trong cách nói lịch sự thông thường.\n' +
      '❌ Không dùng để nêu sự thật khách quan đơn thuần.\n\n' +
      '📝 Một số cách nói biến thể:\n' +
      '- ～たものだ: hồi tưởng thói quen trong quá khứ\n' +
      '- ～というものだ: nhấn mạnh quan điểm hoặc phán đoán của người nói',
  },
]

const GrammarMonoDaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ものだ" grammarSections={grammarSections} />
}

export default GrammarMonoDaScreen
