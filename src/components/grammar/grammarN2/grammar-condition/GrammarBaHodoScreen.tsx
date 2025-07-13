import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ば～ほど',
    explanation:
      '📌 Mẫu câu 「～ば～ほど」 được dùng để diễn tả ý nghĩa: **"Càng... thì càng..."**.\n' +
      '👉 Dùng để chỉ sự thay đổi tương ứng giữa hai vế trong câu.\n\n' +
      '🔄 Vế trước và vế sau thường dùng cùng một động từ, tính từ hoặc cấu trúc tương đồng để thể hiện sự tăng tiến.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ:\n' +
      '・Vれば Vるほど\n' +
      '　例: 見れば見るほど → Càng xem thì càng...\n\n' +
      '🔹 Tính từ -i:\n' +
      '・Aければ Aいほど\n' +
      '　例: 高ければ高いほど → Càng cao thì càng...\n\n' +
      '🔹 Tính từ -na:\n' +
      '・Aなら(ば) Aなほど\n' +
      '　例: 静かなら静かなほど → Càng yên tĩnh thì càng...\n\n' +
      '🔹 Danh từ:\n' +
      '・Nであればあるほど\n' +
      '　例: 学生であればあるほど → Càng là học sinh thì càng...',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. この本は読めば読むほど面白い。\n' +
      '→ Cuốn sách này càng đọc càng thú vị.\n\n' +
      '2. 日本語は勉強すればするほど上手になります。\n' +
      '→ Tiếng Nhật càng học càng giỏi.\n\n' +
      '3. 試験の点数は高ければ高いほどいいです。\n' +
      '→ Điểm thi càng cao càng tốt.\n\n' +
      '4. 静かなら静かなほど勉強に集中できます。\n' +
      '→ Càng yên tĩnh thì càng tập trung học được.\n\n' +
      '5. 学生であればあるほど、お金に困ることが多い。\n' +
      '→ Càng là sinh viên thì càng hay gặp khó khăn về tiền bạc.',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '🔎 Trong văn nói, có thể rút gọn lặp lại thành:\n' +
      '・安ければ安いほど → 安いほど\n' +
      '・行けば行くほど → 行くほど\n\n' +
      '📌 Thường dùng trong các câu miêu tả sự so sánh có tính chất liên tục, thay đổi theo mức độ.\n\n' +
      '⚠️ Không dùng cho những điều không có sự thay đổi tăng dần.',
  },
]

const GrammarBaHodoScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ば～ほど" grammarSections={grammarSections} />
}

export default GrammarBaHodoScreen
