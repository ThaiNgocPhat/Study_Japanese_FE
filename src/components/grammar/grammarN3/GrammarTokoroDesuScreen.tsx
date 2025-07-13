import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về 「～ところです」',
    explanation:
      '📌 Mẫu câu 「～ところです」 dùng để **diễn tả thời điểm** diễn ra hành động, chia thành 3 loại chính:\n\n' +
      '🔹 **～ところだ**: sắp làm gì đó\n' +
      '🔹 **～ているところだ**: đang làm gì đó\n' +
      '🔹 **～たところだ**: vừa mới làm gì xong\n\n' +
      '👉 Đây là mẫu câu rất thường gặp trong đời sống và thi JLPT N4~N3.',
  },
  {
    title: '2. Cách dùng 「Vるところです」',
    explanation:
      '🔹 [Động từ thể từ điển] + ところです\n\n' +
      '📌 Dùng khi **sắp sửa bắt đầu một hành động**.\n\n' +
      '📝 Ví dụ:\n' +
      '・今から出かける**ところです**。\n' +
      '→ Bây giờ tôi **sắp đi ra ngoài**.\n\n' +
      '・会議を始める**ところです**。\n' +
      '→ Sắp bắt đầu cuộc họp.',
  },
  {
    title: '3. Cách dùng 「Vているところです」',
    explanation:
      '🔹 [Động từ thể ている] + ところです\n\n' +
      '📌 Dùng khi **hành động đang diễn ra đúng lúc nói**.\n\n' +
      '📝 Ví dụ:\n' +
      '・今、昼ごはんを食べている**ところです**。\n' +
      '→ Tôi **đang ăn** trưa.\n\n' +
      '・田中さんは今、電話している**ところです**。\n' +
      '→ Anh Tanaka **đang gọi điện thoại**.',
  },
  {
    title: '4. Cách dùng 「Vたところです」',
    explanation:
      '🔹 [Động từ thể た] + ところです\n\n' +
      '📌 Dùng khi **hành động vừa mới kết thúc**, ngay trước lúc nói.\n\n' +
      '📝 Ví dụ:\n' +
      '・さっき駅に着いた**ところです**。\n' +
      '→ Tôi **vừa mới đến ga** lúc nãy.\n\n' +
      '・今、レポートを書いた**ところです**。\n' +
      '→ Tôi **vừa mới viết xong báo cáo**.',
  },
  {
    title: '5. Phân biệt các mẫu 「Vる／Vている／Vた ところです」',
    explanation:
      '🧠 Tổng hợp nhanh:\n\n' +
      '・Vるところ → Sắp làm (tương lai gần)\n' +
      '・Vているところ → Đang làm (hiện tại tiếp diễn)\n' +
      '・Vたところ → Vừa mới làm xong (quá khứ gần)\n\n' +
      '📝 Ví dụ:\n' +
      '・今から食べる**ところ** → Sắp ăn\n' +
      '・今、食べている**ところ** → Đang ăn\n' +
      '・今、食べた**ところ** → Vừa ăn xong',
  },
]

const GrammarTokoroDesuScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ところです" grammarSections={grammarSections} />
}

export default GrammarTokoroDesuScreen
