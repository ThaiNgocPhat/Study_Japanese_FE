import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～わけにはいかない」',
    explanation:
      '📌 Mẫu câu 「～わけにはいかない」 dùng để diễn tả **một hành động nào đó tuy có thể làm nhưng không thể làm được vì lý do đạo đức, xã hội, tâm lý, trách nhiệm...**\n\n' +
      '👉 Nghĩa: "Không thể (làm)...", "Không thể nào (mà)...", dù thực tế thì vẫn có khả năng thực hiện.\n\n' +
      '💡 Mang sắc thái **cản trở mang tính chủ quan** hoặc do hoàn cảnh xã hội/đạo đức chi phối.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔹 Động từ thể từ điển + わけにはいかない\n\n' +
      '📝 Ví dụ:\n' +
      '・明日試験があるので、遊ぶわけにはいきません。\n' +
      '→ Vì ngày mai có bài thi nên không thể đi chơi được.\n\n' +
      '・大事な会議なので、遅れるわけにはいかない。\n' +
      '→ Vì là cuộc họp quan trọng nên không thể đi trễ được.\n\n' +
      '・親の期待に応えたいから、やめるわけにはいかない。\n' +
      '→ Vì muốn đáp lại kỳ vọng của bố mẹ nên không thể bỏ giữa chừng.',
  },
  {
    title: '3. Trường hợp ngược: ～ないわけにはいかない',
    explanation:
      '📌 Khi phủ định động từ, mẫu câu sẽ là:\n' +
      '🔹 Động từ thể ない + わけにはいかない\n\n' +
      '👉 Nghĩa: “Không thể không…”, “Buộc phải…”\n\n' +
      '📝 Ví dụ:\n' +
      '・彼の頼みだから、聞かないわけにはいかない。\n' +
      '→ Vì là nhờ vả từ anh ấy nên không thể không nghe.\n\n' +
      '・ここまで来たら、やらないわけにはいかない。\n' +
      '→ Đã đến nước này thì không thể không làm.\n\n' +
      '・お世話になった人だから、手伝わないわけにはいきません。\n' +
      '→ Vì là người đã giúp mình nên không thể không giúp lại.',
  },
  {
    title: '4. So sánh và lưu ý sử dụng',
    explanation:
      '🔸 Khác với 「～ことができない」 (không thể về mặt năng lực), 「～わけにはいかない」 nhấn mạnh lý do **tinh thần, xã hội, đạo đức**.\n\n' +
      '🆚 ～ことができない：Không làm được (vì không biết, không giỏi...)\n' +
      '🆚 ～わけにはいかない：Không thể làm (vì không nên, không hợp lý)\n\n' +
      '📖 Ví dụ:\n' +
      '・今日は大事な日なので、休むわけにはいきません。\n' +
      '→ Hôm nay là ngày quan trọng nên không thể nghỉ được.\n\n' +
      '・彼女に本当のことを言わないわけにはいかない。\n' +
      '→ Không thể không nói sự thật với cô ấy.',
  },
]

const GrammarWakeNiWaIkanaiScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～わけにはいかない" grammarSections={grammarSections} />
  )
}

export default GrammarWakeNiWaIkanaiScreen
