import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～おそれがある',
    explanation:
      '📌 「～おそれがある」 được dùng để diễn tả **lo ngại, e rằng** điều gì đó **không mong muốn** có thể xảy ra.\n' +
      '⚠️ Mẫu câu này thường xuất hiện trong văn viết, các bản tin, cảnh báo hoặc tài liệu trang trọng.\n' +
      '👉 Mang nghĩa tiêu cực, dùng khi nói đến nguy cơ, rủi ro hoặc hậu quả xấu.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔸 Động từ thể từ điển + おそれがある\n' +
      '🔸 Danh từ + の + おそれがある\n\n' +
      '📍 Không dùng cho hành động tích cực hoặc mang tính chủ quan nhẹ nhàng.\n' +
      '✔️ Dùng khi cần nêu cảnh báo, dự đoán nghiêm trọng.\n',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📝 台風が接近しているため、洪水（こうずい）になる**おそれがあります**。\n' +
      '→ Do bão đang tiến gần, e rằng sẽ có lũ lụt.\n\n' +
      '📝 この薬は副作用（ふくさよう）が出る**おそれがあります**。\n' +
      '→ Thuốc này có nguy cơ gây ra tác dụng phụ.\n\n' +
      '📝 火事（かじ）の**おそれがある**ので、電気ストーブを消してください。\n' +
      '→ Vì có nguy cơ cháy nên hãy tắt lò sưởi điện đi.\n\n' +
      '📝 大雨の影響で、電車が遅れる**おそれがあります**。\n' +
      '→ Do ảnh hưởng của mưa to, e rằng tàu sẽ đến trễ.',
  },
  {
    title: '4. Ghi chú sử dụng',
    explanation:
      '📖 「おそれがある」 thường dùng trong ngữ cảnh:\n' +
      '・Cảnh báo thiên tai, bệnh tật, tai nạn\n' +
      '・Thông báo chính thức, y tế, an toàn\n\n' +
      '⚠️ Không dùng trong văn nói hằng ngày, thay vào đó có thể dùng:\n' +
      '・かもしれません (có thể)\n' +
      '・～そうです (nghe nói)\n\n' +
      '🔁 Từ đồng nghĩa (văn viết):\n' +
      '・危険性がある（きけんせいがある）: có nguy cơ nguy hiểm\n' +
      '・可能性がある（かのうせい）: có khả năng (trung tính hơn)',
  },
]

const GrammarOsoreGaAruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～おそれがある" grammarSections={grammarSections} />
}

export default GrammarOsoreGaAruScreen
