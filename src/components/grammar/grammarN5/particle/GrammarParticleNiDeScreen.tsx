import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarParticleNiDeScreen = () => {
  const grammarSections = [
    {
      title: '1. 「に」 – Nơi **đến**, **tồn tại**, **thời điểm**',
      explanation:
        '👉 Dùng trợ từ 「に」 khi nói đến:\n\n' +
        '📌 **Nơi đến:** chỉ địa điểm mà ai đó hướng đến.\n' +
        '・がっこうに いきます。→ Đi đến trường.\n\n' +
        '📌 **Nơi tồn tại:** chỉ nơi có người/vật.\n' +
        '・へやに いぬが います。→ Có con chó trong phòng.\n\n' +
        '📌 **Thời điểm:** chỉ mốc thời gian.\n' +
        '・7じに おきます。→ Thức dậy lúc 7 giờ.',
    },
    {
      title: '2. 「で」 – Nơi **hành động xảy ra**, **phương tiện**, **công cụ**',
      explanation:
        '👉 Dùng trợ từ 「で」 khi nói đến:\n\n' +
        '📌 **Địa điểm hành động:** nơi mà hành động thực sự xảy ra.\n' +
        '・きっさてんで コーヒーを のみます。→ Uống cà phê ở quán.\n\n' +
        '📌 **Phương tiện:** phương tiện di chuyển.\n' +
        '・バスで がっこうへ いきます。→ Đi học bằng xe buýt.\n\n' +
        '📌 **Công cụ:** phương tiện làm hành động.\n' +
        '・はしで たべます。→ Ăn bằng đũa.',
    },
    {
      title: '3. So sánh nhanh: 「に」 vs 「で」',
      explanation:
        '🔎 Cùng xem hai câu dưới đây để phân biệt:\n\n' +
        '▶️ 学校に いきます。→ Đến trường (nơi **đến**)\n' +
        '▶️ 学校で べんきょうします。→ Học ở trường (nơi **diễn ra hành động**)\n\n' +
        '📌 **に**: Trường là đích đến.\n' +
        '📌 **で**: Trường là nơi học diễn ra.',
    },
    {
      title: '4. Ghi nhớ dễ dàng 💡',
      explanation:
        '🧠 Mẹo học nhanh:\n\n' +
        '・**に** → nơi đến, nơi có ai/cái gì, thời gian\n' +
        '・**で** → nơi làm việc gì đó, công cụ, phương tiện\n\n' +
        '👉 Hãy thay đổi ví dụ với từng động từ bạn biết để luyện tập nhé!\n' +
        'Ví dụ:\n' +
        '・スーパーに いきます。→ Tôi đi siêu thị.\n' +
        '・スーパーで パンを かいます。→ Tôi mua bánh ở siêu thị.',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Phân biệt 「に」、「で」"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarParticleNiDeScreen
