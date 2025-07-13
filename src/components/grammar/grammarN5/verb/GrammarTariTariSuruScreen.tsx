import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarTariTariSuruScreen = () => {
  const grammarSections = [
    {
      title: '1. Giới thiệu mẫu câu ～たり、～たりする',
      explanation:
        'Mẫu câu **～たり、～たりする** dùng để **liệt kê một vài hành động tiêu biểu** trong nhiều hành động xảy ra, thường mang ý nghĩa "nào là... rồi nào là...".\n\n' +
        '👉 **Cấu trúc:**\n[Chủ ngữ] は/が + [V-た] り、[V-た] り + します。',
    },
    {
      title: '2. Cách chia động từ',
      explanation:
        'Các động từ trong mẫu này **phải chia về thể た**, sau đó thêm 「り」:\n\n' +
        '・たべる → たべ**た** → たべたり\n' +
        '・ねる → ね**た** → ねたり\n' +
        '・あそぶ → あそ**んだ** → あそんだり',
    },
    {
      title: '3. Ví dụ liệt kê hành động tiêu biểu',
      explanation:
        '🔹 **わたしは なつやすみに テニスをしたり およいだりしました。**\n→ Nghỉ hè tôi nào là chơi tennis, nào là đi bơi v.v\n\n' +
        '🔹 **ともだちと えいがをみたり、プールにいったりします。**\n→ Tôi thường đi xem phim hoặc đi bể bơi với bạn bè.',
    },
    {
      title: '4. Dùng với hành động lặp đi lặp lại, trái nghĩa',
      explanation:
        'Mẫu này cũng được dùng để mô tả trạng thái **hành động đối lập xảy ra luân phiên**, lặp đi lặp lại:\n\n' +
        '🔹 **あめが ふったり、やんだりしています。**\n→ Trời cứ mưa rồi lại tạnh.\n\n' +
        '🔹 **東京と大阪を いったりきたりします。**\n→ Tôi cứ đi đi về về giữa Tokyo và Osaka.\n\n' +
        '🔹 **やすみのひに たべたり、ねたり しています。**\n→ Ngày nghỉ thì tôi cứ ăn rồi ngủ, ăn rồi ngủ.',
    },
    {
      title: '5. Lưu ý nhỏ',
      explanation:
        '✅ Mẫu này thường đi kèm các từ như:\n・ときどき（thỉnh thoảng）\n・よく（thường xuyên）\n・いろいろ（nhiều thứ）\n\n✅ Thường dùng ở **thì quá khứ** hoặc **thì tiếp diễn hiện tại** để mô tả hành động đang/đã diễn ra theo kiểu không đầy đủ.',
    },
  ]

  return (
    <GrammarTemplateScreen screenTitle="～たり、～たりする" grammarSections={grammarSections} />
  )
}

export default GrammarTariTariSuruScreen
