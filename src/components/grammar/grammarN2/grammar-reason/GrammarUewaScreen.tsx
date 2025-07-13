import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～上は',
    explanation:
      '📌「～上は」 (うえは) mang nghĩa: **"một khi đã..."**, dùng để biểu thị rằng khi đã quyết định một điều gì đó thì kết quả hoặc hành động tiếp theo là điều đương nhiên.\n' +
      '🟡 Thường đi với các động từ chỉ quyết định, hành động đã rồi, mang sắc thái trách nhiệm hoặc quyết tâm.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể từ điển + 上は\n' +
      '🔹 Động từ thể quá khứ + 上は\n\n' +
      '※ Chủ yếu đi với các động từ như: やる、行く、決める、受ける、引き受ける、辞める v.v.',
  },
  {
    title: '3. Ý nghĩa và sắc thái',
    explanation:
      '🔍 Ý nghĩa: **"Một khi đã... thì phải..." / "Vì đã... nên đương nhiên..."**\n' +
      '💡 Vế sau thường là:\n' +
      '・Ý chí, nguyện vọng của người nói (～つもりだ、～決心だ)\n' +
      '・Suy luận đương nhiên (～べきだ、～はずだ、～にちがいない)\n' +
      '・Mệnh lệnh, yêu cầu, khuyên bảo (～なさい、～べきだ、～てください)',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 約束した上は、守らなければいけない。\n' +
      '→ Một khi đã hứa thì phải giữ lời.\n\n' +
      '2. 引き受けた上は、最後まで責任を持ってやるべきだ。\n' +
      '→ Một khi đã nhận thì phải có trách nhiệm làm đến cùng.\n\n' +
      '3. 日本で働くと決めた上は、しっかり日本語を勉強しようと思う。\n' +
      '→ Một khi đã quyết định làm việc ở Nhật thì tôi sẽ học tiếng Nhật nghiêm túc.\n\n' +
      '4. 試合に出る上は、勝つつもりで頑張ってください。\n' +
      '→ Một khi đã tham gia trận đấu thì hãy cố gắng với quyết tâm chiến thắng.',
  },
  {
    title: '5. So sánh với 「～からには」 và 「～以上は」',
    explanation:
      '🔸「～上は」 gần giống với「～からには」và「～以上は」 về ý nghĩa "một khi đã... thì...".\n' +
      '🔹 Tuy nhiên, 「～上は」 thường dùng trong văn viết hoặc tình huống trang trọng hơn.\n' +
      '🔸「～上は」 tập trung vào hành động hoặc quyết định đã xảy ra, từ đó dẫn đến nghĩa vụ hoặc kết quả hiển nhiên.',
  },
]

const GrammarUewaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～上は" grammarSections={grammarSections} />
}

export default GrammarUewaScreen
