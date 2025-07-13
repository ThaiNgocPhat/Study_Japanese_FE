import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Tự động từ và tha động từ là gì?',
    explanation:
      '📌 Trong tiếng Nhật, nhiều động từ xuất hiện theo cặp: một là **tự động từ (自動詞)** – tự bản thân xảy ra, và một là **tha động từ (他動詞)** – có tác động lên đối tượng.\n\n' +
      '👉 Hiểu đơn giản:\n' +
      '- **Tự động từ**: không cần tân ngữ, hành động tự diễn ra.\n' +
      '- **Tha động từ**: cần tân ngữ, chủ thể gây ra hành động lên một vật/người khác.',
  },
  {
    title: '2. Ví dụ phân biệt',
    explanation:
      '🔄 Một số cặp phổ biến:\n\n' +
      '・ドアが開きます。 (Cửa **tự mở**)【自動詞】\n' +
      '・ドアを開けます。 (Tôi **mở** cửa)【他動詞】\n\n' +
      '・電気が消えました。 (Đèn **tự tắt**)【自動詞】\n' +
      '・電気を消しました。 (Tôi **tắt** đèn)【他動詞】\n\n' +
      '・コップが割れた。 (Cái cốc **bị vỡ**)【自動詞】\n' +
      '・コップを割った。 (Tôi **làm vỡ** cái cốc)【他動詞】',
  },
  {
    title: '3. Cấu trúc sử dụng',
    explanation:
      '🧩 Với **tha động từ**:\n' +
      '👉 Chủ ngữ + は + [Tân ngữ + を] + động từ\n' +
      '➡️ Hành động **chủ động**, có **tác động** lên đối tượng\n\n' +
      '🧩 Với **tự động từ**:\n' +
      '👉 [Chủ thể của sự thay đổi] + が + động từ\n' +
      '➡️ Hành động **tự xảy ra**, **không có tân ngữ** trực tiếp\n\n' +
      '📝 Ví dụ:\n' +
      '・母は窓を閉めました。 (Mẹ đã đóng cửa sổ)\n' +
      '・窓が閉まりました。 (Cửa sổ đã tự đóng)',
  },
  {
    title: '4. Một số cặp động từ thường gặp',
    explanation:
      '📖 Dưới đây là một số cặp **tha động từ – tự động từ** thường gặp:\n\n' +
      '・始める（tha）– 始まる（tự）: bắt đầu\n' +
      '・出す（tha）– 出る（tự）: lấy ra – ra ngoài\n' +
      '・止める（tha）– 止まる（tự）: dừng lại\n' +
      '・上げる（tha）– 上がる（tự）: nâng lên\n' +
      '・下げる（tha）– 下がる（tự）: hạ xuống\n' +
      '・入れる（tha）– 入る（tự）: cho vào – đi vào\n' +
      '・閉める（tha）– 閉まる（tự）: đóng lại\n' +
      '・付ける（tha）– 付く（tự）: bật lên\n' +
      '・消す（tha）– 消える（tự）: tắt\n' +
      '・壊す（tha）– 壊れる（tự）: làm hỏng – bị hỏng\n' +
      '・割る（tha）– 割れる（tự）: làm vỡ – bị vỡ',
  },
  {
    title: '5. Mẹo ghi nhớ',
    explanation:
      '🧠 Một số mẹo giúp phân biệt nhanh:\n\n' +
      '✅ Tha động từ thường đi với **を**, còn tự động từ đi với **が**.\n' +
      '✅ Tha động từ thường có đối tượng cụ thể (cái gì, ai đó).\n' +
      '✅ Hãy học các cặp cùng lúc để dễ nhớ hơn.\n\n' +
      '💡 Ví dụ liên hệ:\n' +
      '・エアコンをつけました。 (Tôi bật điều hòa)\n' +
      '・エアコンがつきました。 (Điều hòa đã được bật lên)',
  },
]

const GrammarJidouTadoushiScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="Tự động từ và tha động từ"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarJidouTadoushiScreen
