import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～というと」được dùng để **nêu lên một chủ đề** hoặc **liên tưởng đến một điều gì đó khi nghe thấy một từ khóa cụ thể**.\n\n' +
      '📌 Ý nghĩa: “nói đến… thì…”, “nếu nói … thì…”, “nói tới … thì nghĩ ngay đến…”\n\n' +
      '📎 Cấu trúc:\n' +
      '[Danh từ / Mệnh đề] + というと\n\n' +
      '📍 Thường được dùng để dẫn dắt cuộc hội thoại, xác nhận thông tin, hoặc bày tỏ sự liên tưởng.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 日本のアニメというと、ドラえもんを思い出す。\n→ Nói đến anime Nhật Bản thì tôi nhớ đến Doraemon.\n\n' +
      '② 京都というと、お寺が多いイメージですね。\n→ Nói đến Kyoto thì hình ảnh nhiều ngôi chùa hiện lên.\n\n' +
      '③ 春というと、桜ですね。\n→ Nói tới mùa xuân thì nghĩ ngay đến hoa anh đào.\n\n' +
      '④ IT業界というと、忙しいイメージがありますね。\n→ Nói đến ngành IT thì thường gắn liền với hình ảnh bận rộn.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Có thể thay thế bằng「～といえば」trong nhiều trường hợp tương đương.\n' +
      '🔸 Nếu sử dụng với mục đích xác nhận thông tin, thường đi kèm với 「～のことですか？」\n' +
      '🔸 Mẫu này giúp mở rộng cuộc hội thoại hoặc triển khai nội dung liên quan đến một từ khóa.',
  },
]

const GrammarToIutoScreen = () => {
  return <GrammarTemplateScreen screenTitle="～というと" grammarSections={grammarSections} />
}

export default GrammarToIutoScreen
