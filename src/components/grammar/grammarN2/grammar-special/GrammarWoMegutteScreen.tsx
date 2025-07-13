import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～をめぐって」dùng để diễn tả ý nghĩa “xoay quanh vấn đề…”, “liên quan đến…”\n\n' +
      '📌 Cấu trúc:\n' +
      '[Danh từ] + をめぐって\n\n' +
      '📎 Diễn tả các hành động, tranh luận, đối lập… có liên quan đến một chủ đề nào đó. Đây là cách nói trang trọng, thường dùng trong văn viết hoặc ngữ cảnh nghiêm túc.',
  },
  {
    title: '2. Đặc điểm',
    explanation:
      '✅ Danh từ trước 「をめぐって」thường là chủ đề gây tranh cãi, thảo luận, tranh luận (例: 問題, 意見, 契約, 権利...)\n' +
      '✅ Hay đi kèm với các động từ: 議論する、争う、話し合う、対立する、うわさする、意見が分かれる…\n' +
      '❗ Không dùng cho hành động cá nhân trực tiếp như “nghe, nhìn, học”…',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① その問題をめぐって、いろいろな意見が出ている。\n→ Nhiều ý kiến khác nhau được đưa ra xoay quanh vấn đề đó.\n\n' +
      '② 環境保護（かんきょうほご）をめぐって、会議が行われました。\n→ Một cuộc họp đã được tổ chức xoay quanh việc bảo vệ môi trường.\n\n' +
      '③ 新しい法律（ほうりつ）をめぐって、議論（ぎろん）が続いている。\n→ Cuộc tranh luận vẫn đang tiếp tục xoay quanh đạo luật mới.\n\n' +
      '④ 遺産（いさん）をめぐって、家族の間に争いが起きた。\n→ Đã xảy ra tranh chấp trong gia đình xoay quanh tài sản thừa kế.',
  },
  {
    title: '4. So sánh với mẫu khác',
    explanation:
      '🔸「～について」→ trung lập, đơn giản hơn, dùng cả trong hội thoại.\n' +
      '🔸「～をめぐって」→ trang trọng hơn, diễn tả ý kiến trái chiều, tranh cãi, thảo luận.\n\n' +
      '🧠 Ví dụ:\n' +
      '・環境問題について話す。\n→ Nói về vấn đề môi trường.\n' +
      '・環境問題をめぐって議論する。\n→ Tranh luận xoay quanh vấn đề môi trường.',
  },
]

const GrammarWoMegutteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～をめぐって" grammarSections={grammarSections} />
}

export default GrammarWoMegutteScreen
