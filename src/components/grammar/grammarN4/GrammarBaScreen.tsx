import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu thể điều kiện ～ば',
    explanation:
      '📌 Mẫu câu điều kiện ～ば (条件形: じょうけんけい) được dùng để diễn tả **nếu điều kiện A xảy ra thì B sẽ xảy ra**.\n\n' +
      '👉 Thường dùng để nói về kết quả, lời khuyên, hoặc giả định trong tương lai.\n\n' +
      '📝 Ví dụ:\n' +
      '・毎日がんばれば、日本語が上手になります。\n' +
      '→ Nếu ngày nào cũng nỗ lực, bạn sẽ nói tiếng Nhật giỏi.',
  },
  {
    title: '2. Cách chia thể điều kiện với động từ',
    explanation:
      '🧩 **Nhóm 1:** Đổi đuôi う → え + ば\n' +
      '・書く → 書けば　(nếu viết)\n' +
      '・読む → 読めば　(nếu đọc)\n' +
      '・頑張る → 頑張れば　(nếu cố gắng)\n\n' +
      '🧩 **Nhóm 2:** Bỏ る → れば\n' +
      '・食べる → 食べれば　(nếu ăn)\n' +
      '・寝る → 寝れば　(nếu ngủ)\n\n' +
      '🧩 **Nhóm 3 (bất quy tắc):**\n' +
      '・する → すれば\n' +
      '・来る（くる）→ くれば\n\n' +
      '🧩 **Thể phủ định:**\n' +
      '・書かない → 書かなければ　(nếu không viết)\n' +
      '・しない → しなければ　(nếu không làm)',
  },
  {
    title: '3. Cách chia với tính từ và ～たい',
    explanation:
      '🧩 **Tính từ -i:**\n' +
      '・安い → 安ければ (nếu rẻ)\n' +
      '・小さい → 小さければ (nếu nhỏ)\n' +
      '・安くなければ (nếu không rẻ)\n\n' +
      '🧩 **Tính từ -na:**\n' +
      '・好き → 好きならば / 好きであれば (nếu thích)\n' +
      '・好きじゃなければ (nếu không thích)\n\n' +
      '🧩 **Động từ ～たい:**\n' +
      '・食べたい → 食べたければ (nếu muốn ăn)\n' +
      '・行きたくなければ (nếu không muốn đi)',
  },
  {
    title: '4. Cách chia với danh từ & trợ từ',
    explanation:
      '🧩 **Danh từ:** giống tính từ -na\n' +
      '・いい天気 → いい天気ならば / であれば\n' +
      '・いい天気じゃなければ (nếu trời không đẹp)\n\n' +
      '🧩 **Trợ từ (thời gian, người…):** cũng chia như danh từ\n' +
      '・7時からならば (nếu từ 7h)\n' +
      '・友達とでなければ (nếu không phải với bạn)',
  },
  {
    title: '5. Ví dụ minh họa',
    explanation:
      '📘 Một số câu thực tế với mẫu ～ば:\n\n' +
      '・結婚すれば、料理が上手になります。\n' +
      '→ Nếu kết hôn, bạn sẽ nấu ăn giỏi hơn.\n\n' +
      '・運動して、たくさん食べなければ、やせることができます。\n' +
      '→ Nếu tập thể dục và không ăn nhiều, có thể giảm cân.\n\n' +
      '・安ければ、買います。\n' +
      '→ Nếu rẻ thì tôi sẽ mua.\n\n' +
      '・時間があれば、映画を見に行きたいです。\n' +
      '→ Nếu có thời gian, tôi muốn đi xem phim.',
  },
  {
    title: '6. Mẹo học và lưu ý',
    explanation:
      '💡 **Ghi nhớ nhanh:**\n' +
      '・Nhóm 1: Đổi đuôi う → え + ば\n' +
      '・Nhóm 2: る → れば\n' +
      '・する → すれば | くる → くれば\n\n' +
      '📌 Với thể phủ định: ない → なければ\n\n' +
      '🔁 Hãy luyện tập bằng cách biến đổi thật nhiều động từ thường dùng.\n\n' +
      '🧠 Gợi ý: học qua flashcard hoặc đặt câu với “～ば” mỗi ngày để nhớ lâu hơn!',
  },
]

const GrammarBaScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="Câu điều kiện ～ば" grammarSections={grammarSections} />
  )
}

export default GrammarBaScreen
