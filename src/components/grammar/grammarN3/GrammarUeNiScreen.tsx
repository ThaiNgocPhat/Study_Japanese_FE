import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu 「～うえに」',
    explanation:
      '📌 「～うえに」 là mẫu ngữ pháp dùng để nói rằng **“không chỉ… mà còn…”**, nhằm **tăng cường mức độ** của một sự việc.\n\n' +
      '👉 Thường được dùng khi cả hai vế đều mang nghĩa **tốt** hoặc **xấu** giống nhau.\n' +
      '👉 Mang sắc thái trang trọng, hay dùng trong văn viết hoặc trong các bài phát biểu.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸 Động từ thể thường + うえに\n' +
      '🔸 Tính từ -i + うえに\n' +
      '🔸 Tính từ -na + な/である + うえに\n' +
      '🔸 Danh từ + の/である + うえに\n\n' +
      '📝 Lưu ý: Không dùng khi hai vế đối lập nhau (ví dụ: “rẻ nhưng không ngon”).',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📝 Ví dụ 1:\n' +
      '彼は頭がいい**うえに**、性格もいいです。\n' +
      '→ Anh ấy không chỉ thông minh mà còn tốt tính nữa.\n\n' +
      '📝 Ví dụ 2:\n' +
      'この店は料理が美味しい**うえに**、値段も安いです。\n' +
      '→ Quán này không chỉ món ăn ngon mà giá còn rẻ.\n\n' +
      '📝 Ví dụ 3:\n' +
      '彼女はピアノが上手な**うえに**、英語も話せます。\n' +
      '→ Cô ấy không chỉ giỏi piano mà còn nói được tiếng Anh.\n\n' +
      '📝 Ví dụ 4:\n' +
      '今日は熱がある**うえに**、せきも出る。\n' +
      '→ Hôm nay tôi không chỉ bị sốt mà còn bị ho nữa.',
  },
  {
    title: '4. Phân biệt với mẫu tương tự',
    explanation:
      '🔁 「～し、～し」:\n' +
      '・Dùng trong văn nói, liệt kê lý do, cảm xúc chung chung.\n' +
      '・Ví dụ: 安いし、美味しいし、ここで食べましょう。\n\n' +
      '🔁 「～だけでなく、～も」:\n' +
      '・Dùng để nhấn mạnh “không chỉ… mà còn…”, văn phong trung tính.\n' +
      '・Ví dụ: 彼は日本語だけでなく、英語も話せます。\n\n' +
      '🔁 「～うえに」:\n' +
      '・Tăng cường mức độ, dùng trong văn viết, có sự logic chặt chẽ.\n' +
      '・Cả hai vế cùng tích cực hoặc cùng tiêu cực.',
  },
]

const GrammarUeNiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～うえに" grammarSections={grammarSections} />
}

export default GrammarUeNiScreen
