import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～させられる」là thể **bị động sai khiến** (bị ép buộc làm gì đó).\n' +
      '→ Diễn tả việc bị ai đó bắt buộc làm điều mà bản thân không mong muốn.\n\n' +
      '📌 Nghĩa: “bị bắt làm…”, “bị ép làm…”\n\n' +
      '📎 Cấu trúc:\n' +
      '・Nhóm 1: chuyển sang thể 受け身 (bị động) đặc biệt:\n' +
      '　　例: 書く → 書かせられる、行く → 行かされる\n' +
      '・Nhóm 2: [Vます] + させられる\n' +
      '　　例: 食べる → 食べさせられる\n' +
      '・Nhóm 3:\n' +
      '　　する → させられる\n' +
      '　　くる → こさせられる\n\n' +
      '📝 Dùng khi muốn nhấn mạnh cảm giác bị ép buộc.',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 子どものとき、野菜を食べさせられました。\n→ Hồi nhỏ tôi bị bắt ăn rau.\n\n' +
      '② 毎日残業させられて、本当に疲れています。\n→ Ngày nào cũng bị bắt làm thêm, thật sự mệt mỏi.\n\n' +
      '③ 先生に作文を何回も書かされました。\n→ Tôi bị cô giáo bắt viết văn nhiều lần.\n\n' +
      '④ 上司に飲み会に行かされました。\n→ Tôi bị sếp bắt đi nhậu.\n\n' +
      '⑤ 雨の中、走らされて風邪をひいた。\n→ Tôi bị bắt chạy trong mưa rồi bị cảm.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Mẫu「～させられる」thường dùng để than phiền, bày tỏ cảm giác không hài lòng.\n' +
      '🔸 Các động từ nhóm 1 có cách chia đặc biệt, cần lưu ý như:\n' +
      '　・読む → 読まされる（口語）/ 読ませられる（文語）\n' +
      '　・行く → 行かされる（bất quy tắc nhẹ）\n\n' +
      '⚠️ Tránh nhầm với thể bị động đơn thuần (～られる), vì ～させられる có nghĩa “bị ép buộc”, chứ không chỉ “bị”.\n\n' +
      '📘 Đây là cấu trúc phổ biến trong JLPT N2.',
  },
]

const GrammarSaserareruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～させられる" grammarSections={grammarSections} />
}

export default GrammarSaserareruScreen
