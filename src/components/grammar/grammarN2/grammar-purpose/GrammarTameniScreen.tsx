import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ために',
    explanation:
      '📌「～ために」 có hai cách dùng chính:\n' +
      '① Diễn tả **mục đích**: "để..."\n' +
      '② Diễn tả **nguyên nhân/lý do**: "vì..."\n\n' +
      '🌱 Trong N2, thường gặp hơn ở nghĩa nguyên nhân/lý do, nhưng có thể phân biệt được theo ngữ cảnh và dạng động từ theo sau.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸【Vる / Danh từ + の】+ ため（に）\n\n' +
      '✅ Khi mang nghĩa **mục đích**:\n' +
      '・Phía sau là động từ mang hành động có chủ ý.\n\n' +
      '✅ Khi mang nghĩa **nguyên nhân/lý do**:\n' +
      '・Phía sau là kết quả, sự việc xảy ra do nguyên nhân ở vế trước.\n' +
      '・Không dùng cho các câu mang cảm xúc/cảm giác cá nhân như うれしい、かなしい、～たい, v.v.',
  },
  {
    title: '3. Ý nghĩa và phân biệt',
    explanation:
      '🔹 Nghĩa 1 – Mục đích:\n' +
      '👉 Để làm gì đó, với mục tiêu đạt được điều gì đó.\n\n' +
      '🔹 Nghĩa 2 – Nguyên nhân:\n' +
      '👉 Vì một lý do nào đó mà dẫn đến kết quả.\n\n' +
      '⚠️ Phân biệt với:\n' +
      '・「～ように」: dùng với động từ không chủ ý (được, có thể, biết v.v.)\n' +
      '・「～ので」「～から」: lý do đơn thuần, không trang trọng bằng 「～ために」',
  },
  {
    title: '4. Ví dụ minh họa (mục đích)',
    explanation:
      '1. 日本で働く**ために**、日本語を勉強しています。\n' +
      '→ Tôi học tiếng Nhật để làm việc tại Nhật.\n\n' +
      '2. 健康(けんこう)の**ために**、毎朝ジョギングをしています。\n' +
      '→ Tôi chạy bộ mỗi sáng vì sức khỏe.\n\n' +
      '3. 家族(かぞく)の**ために**、一生懸命働いています。\n' +
      '→ Tôi làm việc chăm chỉ vì gia đình.',
  },
  {
    title: '5. Ví dụ minh họa (nguyên nhân)',
    explanation:
      '1. 台風(たいふう)の**ために**、飛行機が欠航(けっこう)になりました。\n' +
      '→ Vì bão nên chuyến bay bị hủy.\n\n' +
      '2. 病気(びょうき)の**ために**、仕事を辞めました。\n' +
      '→ Vì bệnh nên tôi nghỉ việc.\n\n' +
      '3. 工事(こうじ)の**ために**、この道は通れません。\n' +
      '→ Vì đang thi công nên không thể đi qua con đường này.',
  },
  {
    title: '6. Lưu ý khi sử dụng',
    explanation:
      '🔸 Có thể thay bằng「～ため」 (bỏ に) trong văn viết.\n' +
      '🔸 Không dùng「～ために」 với các động từ biểu thị cảm xúc khi mang nghĩa nguyên nhân.\n' +
      '🔸 Tránh dùng「～ために」 trong hội thoại thân mật với người quen; nên dùng「～から」「～ので」 thay thế.',
  },
]

const GrammarTameniScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ために" grammarSections={grammarSections} />
}

export default GrammarTameniScreen
