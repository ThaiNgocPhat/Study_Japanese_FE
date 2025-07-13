import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹 Mẫu ngữ pháp「～てたまらない」dùng để **diễn tả cảm xúc, trạng thái mạnh mẽ đến mức không thể chịu đựng nổi**.\n\n' +
      '📌 Ý nghĩa: “rất...”, “...không chịu nổi”, “...vô cùng”\n\n' +
      '📎 Cấu trúc:\n' +
      '[Vて] + たまらない\n' +
      '[Aい（くて）] + たまらない\n' +
      '[Aな（で）] + たまらない\n\n' +
      '✅ Thường dùng với từ thể hiện cảm xúc hoặc cảm giác cơ thể (うれしい、会いたい、痛い、眠い、ほしい、など)',
  },
  {
    title: '2. Ví dụ minh họa',
    explanation:
      '① 会いたくてたまらない。\n→ Nhớ đến mức không chịu nổi.\n\n' +
      '② 頭が痛くてたまらない。\n→ Đau đầu khủng khiếp.\n\n' +
      '③ 息子の合格がうれしくてたまらない。\n→ Tôi vui sướng vô cùng khi con trai đỗ.\n\n' +
      '④ この映画は悲しくてたまらなかった。\n→ Bộ phim này buồn không chịu nổi.\n\n' +
      '⑤ 暑くてたまらないので、冷房（れいぼう）をつけた。\n→ Nóng không chịu nổi nên tôi bật điều hòa.',
  },
  {
    title: '3. Ghi chú và lưu ý',
    explanation:
      '🔸 「～てたまらない」mạnh hơn「～てしょうがない」về cảm xúc, nhấn mạnh cảm xúc quá mức.\n' +
      '🔸 Không dùng cho các hành động có chủ ý như 勉強してたまらない ❌\n' +
      '🔸 Chủ ngữ thường là ngôi thứ nhất (tôi), hoặc ngôi thứ ba với biểu hiện cảm xúc rõ ràng.\n\n' +
      '📘 Là mẫu ngữ pháp trọng điểm trong JLPT N2.',
  },
]

const GrammarTeTamaranaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～てたまらない" grammarSections={grammarSections} />
}

export default GrammarTeTamaranaScreen
