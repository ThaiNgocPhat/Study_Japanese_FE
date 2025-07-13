import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹 Mẫu ngữ pháp「～てしょうがない」dùng để **diễn tả cảm xúc, trạng thái mạnh mẽ không thể kiểm soát được**.\n\n' +
      '📌 Ý nghĩa: “rất...”, “...không chịu được”, “...vô cùng”\n\n' +
      '📎 Cấu trúc:\n' +
      '[Vて] + しょうがない / 仕方がない / たまらない\n' +
      '[Aい（くて）] + しょうがない\n' +
      '[Aな（で）] + しょうがない\n\n' +
      '✅ Thường dùng với các từ thể hiện cảm xúc hoặc trạng thái cơ thể như:\n' +
      '　会いたい、欲しい、眠い、痛い、心配だ、うれしい、かなしい…',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① お腹が空いてしょうがない。\n→ Tôi đói không chịu nổi.\n\n' +
      '② 明日の面接が心配で仕方がない。\n→ Tôi lo lắng kinh khủng về buổi phỏng vấn ngày mai.\n\n' +
      '③ 子どもがかわいくてたまらない。\n→ Thấy con dễ thương không chịu nổi.\n\n' +
      '④ 頭が痛くてしょうがないので、今日は早く帰ります。\n→ Vì đau đầu kinh khủng nên hôm nay tôi sẽ về sớm.\n\n' +
      '⑤ この歌を聞くと、彼のことが思い出されてしょうがない。\n→ Cứ nghe bài này là lại nhớ anh ấy vô cùng.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 Là cách nói khá cảm xúc, nên **thường dùng trong văn nói hoặc viết thân mật**.\n' +
      '🔸 「～てたまらない」「～て仕方がない」có sắc thái tương tự, nhưng:\n' +
      '　　・たまらない → mạnh nhất, dùng khi cảm xúc quá mức, đôi khi mang hơi tiêu cực\n' +
      '　　・しょうがない → mức độ trung bình\n' +
      '　　・仕方がない → thường trang trọng hơn\n\n' +
      '⚠️ Không dùng với hành động có chủ ý hoặc khách quan như: 勉強してしょうがない ❌\n\n' +
      '📘 Là mẫu ngữ pháp quan trọng trong JLPT N2.',
  },
]

const GrammarTeShouganaiN2Screen = () => {
  return <GrammarTemplateScreen screenTitle="～てしょうがない" grammarSections={grammarSections} />
}

export default GrammarTeShouganaiN2Screen
