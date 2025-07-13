import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～らしい',
    explanation:
      '📌「～らしい」là mẫu ngữ pháp diễn tả:\n' +
      '① Suy đoán dựa trên thông tin nghe được (giống như 「～そうだ」 dạng truyền đạt).\n' +
      '② Tính chất đặc trưng, “đúng là …”, “ra dáng là …”\n' +
      '③ Cảm giác “giống như là …” (dựa trên ấn tượng, quan sát).',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Danh từ + らしい\n' +
      '🔹 *Không dùng với động từ hoặc tính từ -i* (trừ khi là danh từ hóa)\n\n' +
      '📌 Chú ý: Khác với 「そうだ」(truyền đạt thông tin), 「らしい」mang tính **suy đoán có cơ sở**, hoặc **nêu đặc trưng**.',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '① **Suy đoán/Nghe nói:**\n' +
      '　日本では、子どもでも敬語を使うらしい。\n' +
      '　→ Nghe nói ở Nhật, ngay cả trẻ con cũng dùng kính ngữ.\n\n' +
      '② **Nêu đặc trưng/Đúng chất:**\n' +
      '　彼は本当に男らしいね。\n' +
      '　→ Anh ấy thật đúng là đàn ông (nam tính).\n\n' +
      '③ **Giống như/Gần giống:**\n' +
      '　春らしい天気ですね。\n' +
      '　→ Thời tiết hôm nay giống như mùa xuân nhỉ.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. あの人は先生らしい話し方をする。\n' +
      '→ Người đó nói chuyện ra dáng giáo viên.\n\n' +
      '2. この料理は日本らしい味がする。\n' +
      '→ Món này có vị rất Nhật.\n\n' +
      '3. 彼は子どもらしく遊んでいる。\n' +
      '→ Cậu bé chơi đúng kiểu trẻ con.\n\n' +
      '4. 東京は今日、雪が降るらしいよ。\n' +
      '→ Nghe nói hôm nay Tokyo sẽ có tuyết.',
  },
  {
    title: '5. So sánh với ～そうだ và ～っぽい',
    explanation:
      '🔹 ～そうだ（truyền đạt): nghe từ người khác, không phải cảm nhận cá nhân.\n' +
      '🔹 ～らしい（suy đoán hoặc nêu đặc trưng): dựa trên cảm nhận hoặc thông tin có phần chắc chắn.\n' +
      '🔹 ～っぽい: thiên về ấn tượng chủ quan, có thể mang sắc thái tiêu cực.\n\n' +
      '📍Ví dụ:\n' +
      '　あの子は子どもっぽい。→ Cư xử như con nít (chưa chín chắn)\n' +
      '　あの子は子どもらしい。→ Hồn nhiên đúng kiểu trẻ con',
  },
]

const GrammarRashiiN2Screen = () => {
  return <GrammarTemplateScreen screenTitle="～らしい" grammarSections={grammarSections} />
}

export default GrammarRashiiN2Screen
