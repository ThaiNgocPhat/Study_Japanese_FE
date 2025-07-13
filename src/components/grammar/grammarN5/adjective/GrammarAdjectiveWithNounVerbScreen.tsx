import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarAdjectiveWithNounVerbScreen = () => {
  const grammarSections = [
    {
      title: '1. Tính từ + Danh từ 📝',
      explanation:
        'Tính từ thường được dùng để mô tả danh từ đi sau. Tuỳ theo loại tính từ (đuôi -い hoặc -な), ta có cấu trúc:\n\n' +
        '✅ **Tính từ -い + Danh từ**\n' +
        '・あたらしいシャツ → cái áo sơ mi mới\n' +
        '・おいしいたべもの → món ăn ngon\n' +
        '・おおきいへや → căn phòng lớn\n\n' +
        '✅ **Tính từ -な + Danh từ**\n' +
        '・きれいなひと → người đẹp\n' +
        '・すきなスポーツ → môn thể thao yêu thích\n' +
        '・まじめながくせい → học sinh nghiêm túc',
    },
    {
      title: '2. Tính từ + Động từ (Dùng như trạng từ) 🚀',
      explanation:
        'Muốn miêu tả **cách thức hành động diễn ra**? Hãy biến tính từ thành trạng từ!\n\n' +
        '🔹 **Tính từ -い**: Bỏ い, thêm **く** trước động từ\n' +
        '・こどもたちは たのしく あそびます。→ Trẻ con chơi vui vẻ.\n' +
        '・かれは はやく たべます。→ Anh ta ăn nhanh.\n' +
        '・にくを うすく きってください。→ Hãy cắt thịt mỏng ra.\n\n' +
        '🔸 **Tính từ -な**: Bỏ な, thêm **に** trước động từ\n' +
        '・まじめに かんがえてください。→ Hãy suy nghĩ nghiêm túc.\n' +
        '・かのじょは きれいに じを かきます。→ Cô ấy viết chữ đẹp.\n' +
        '・おじいさんは まいにち げんきに いきています。→ Ông sống khỏe mỗi ngày.',
    },
    {
      title: '3. Mẹo nhớ nhanh 🧠✨',
      explanation:
        '✅ Nếu bổ nghĩa cho **danh từ** → giữ nguyên (い/な) tính từ\n' +
        '✅ Nếu bổ nghĩa cho **động từ** → đổi:\n' +
        '・Tính từ -い → く\n' +
        '・Tính từ -な → に\n\n' +
        '💡 Hãy luyện viết ví dụ riêng của bạn để nhớ lâu hơn nhé!',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Kết hợp Tính từ trong câu"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarAdjectiveWithNounVerbScreen
