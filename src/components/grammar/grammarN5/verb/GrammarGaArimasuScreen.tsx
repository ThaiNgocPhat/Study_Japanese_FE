import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarGaArimasuScreen = () => {
  const grammarSections = [
    {
      title: '1. Giới thiệu ～があります／～がいます',
      explanation:
        'Cấu trúc này dùng để diễn tả **sự tồn tại** của người, vật hoặc sự vật ở một nơi nào đó:\n\n' +
        '🔸 **あります（ある）**: Dùng với **vật vô tri vô giác** (bàn ghế, cây cối, đồ vật...)\n' +
        '🔹 **います（いる）**: Dùng với **người và động vật** (sinh vật có sự sống)',
      examples: [],
    },
    {
      title: '2. Cấu trúc câu khẳng định',
      explanation:
        '👉 Danh từ (chỉ người / vật) + が + あります／います。\n\n' +
        '🔸 **Vật / đồ vật:**\n' +
        '・つくえのうえに ほんが あります。→ Trên bàn có quyển sách。\n' +
        '・にわに きが あります。→ Trong vườn có cây。\n\n' +
        '🔹 **Người / động vật:**\n' +
        '・こうえんに こどもが います。→ Ở công viên có trẻ em。\n' +
        '・いえに いぬが います。→ Trong nhà có con chó。',
      examples: [],
    },
    {
      title: '3. Cấu trúc phủ định và nghi vấn',
      explanation:
        '🔸 **Phủ định:** ～が **ありません／いません**\n' +
        '・かばんのなかに でんわが ありません。→ Trong cặp không có điện thoại。\n' +
        '・うちに ねこが いません。→ Nhà tôi không có mèo。\n\n' +
        '🔸 **Câu hỏi:** ～が **ありますか／いますか？**\n' +
        '・ここにトイレがありますか？→ Ở đây có nhà vệ sinh không?\n' +
        '・がっこうに せんせいが いますか？→ Trường học có thầy cô không?',
      examples: [],
    },
    {
      title: '4. Lưu ý khi dùng trợ từ「が」',
      explanation:
        'Trợ từ **が** dùng để chỉ đối tượng chính của câu (người/vật tồn tại). Nếu muốn nói **ở đâu có cái gì**, thì dùng:\n\n' +
        '👉「Địa điểm + に + Danh từ + が + あります／います」\n\n' +
        '🔹 Ví dụ:\n' +
        '・へやに テレビが あります。\n' +
        '・こうえんに こどもが います。',
      examples: [],
    },
    {
      title: '5. Ứng dụng thực tế',
      explanation:
        'Bạn có thể dùng mẫu câu này để hỏi đường, miêu tả cảnh vật, hoặc mô tả nơi ở:\n\n' +
        '🗣️ トイレは ありますか？→ Có nhà vệ sinh không?\n' +
        '🏠 わたしのいえに おおきい にわが あります。→ Nhà tôi có một khu vườn lớn。\n' +
        '🐶 いえに いぬが います。→ Trong nhà có chó。',
      examples: [],
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="～があります／～がいます"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarGaArimasuScreen
