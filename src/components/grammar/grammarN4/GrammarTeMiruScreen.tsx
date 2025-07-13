import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～てみる',
    explanation:
      '📌 Mẫu câu ～てみる được dùng để diễn tả **thử làm một hành động nào đó**, nhằm xem kết quả sẽ ra sao.\n' +
      '👉 Trong tiếng Việt tương đương với: "thử làm...", "thử xem sao...".\n\n' +
      '🧠 Được dùng khi người nói muốn thử nghiệm, trải nghiệm điều gì đó mới hoặc chưa biết.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '✏️ Cấu trúc:\n' +
      '[Động từ thể て] + みる\n\n' +
      '📖 Động từ みる ở đây không mang nghĩa là "nhìn thấy", mà là "thử".\n\n' +
      '📝 Ví dụ:\n' +
      '・このケーキを食べてみます。\n' +
      '→ Tôi sẽ thử ăn chiếc bánh này.\n\n' +
      '・日本語で話してみてください。\n' +
      '→ Hãy thử nói bằng tiếng Nhật nhé.\n\n' +
      '・新しい服を着てみた。\n' +
      '→ Tôi đã thử mặc bộ đồ mới.',
  },
  {
    title: '3. Cách chia thể quá khứ và phủ định',
    explanation:
      '🕒 Có thể chia みる theo thì như một động từ bình thường:\n\n' +
      '・～てみた（đã thử）\n' +
      '・～てみます（sẽ thử）\n' +
      '・～てみない（không thử）\n' +
      '・～てみなかった（đã không thử）\n\n' +
      '📝 Ví dụ:\n' +
      '・一度言ってみたけど、わかってもらえなかった。\n' +
      '→ Tôi đã thử nói một lần, nhưng không được hiểu.\n\n' +
      '・行ってみないと分かりません。\n' +
      '→ Không thử đi thì sẽ không biết được.',
  },
  {
    title: '4. Lưu ý khi sử dụng',
    explanation:
      '🔹 みる là động từ nhóm 2 → có thể chia các thể khác như みたい、みれば、みよう... bình thường.\n' +
      '🔹 Thường dùng trong văn nói thân mật, tự nhiên.\n\n' +
      '🚫 Không nhầm với 「～て見る」 nghĩa là "làm rồi **nhìn thấy**".\n\n' +
      'Ví dụ:\n' +
      '・映画を見てみた。→ Tôi đã thử xem phim. (xem thử)\n' +
      '・空を見てみた。→ Tôi đã thử nhìn lên trời. (nhìn thử)',
  },
]

const GrammarTeMiruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～てみる" grammarSections={grammarSections} />
}

export default GrammarTeMiruScreen
