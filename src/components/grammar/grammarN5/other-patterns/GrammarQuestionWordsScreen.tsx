import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarQuestionWordsScreen = () => {
  const grammarSections = [
    {
      title: '1. 疑問詞 là gì?',
      explanation:
        '🔎 疑問詞（ぎもんし）là **từ nghi vấn**, dùng để hỏi về người, vật, thời gian, địa điểm, số lượng,...\n\n' +
        '📌 Tùy ngữ cảnh, nhiều nghi vấn từ có hình thức **lịch sự hơn** (ví dụ: どなた thay cho だれ)',
    },
    {
      title: '2. Các nhóm nghi vấn từ phổ biến',
      explanation:
        '🧍‍♂️ **Người**:\n' +
        '・だれ (ai), どなた (ai – lịch sự)\n' +
        '・だれの / どなたの: của ai\n' +
        '・だれと / どなたと: với ai\n\n' +
        '📦 **Vật/Đồ vật**:\n' +
        '・なに / なん: cái gì\n' +
        '・どれ / どの + [danh từ]: cái nào / cái … nào\n' +
        '・どちら / どちらの: (lịch sự) cái nào/ của … nào\n\n' +
        '🕰️ **Thời gian**:\n' +
        '・いつ: khi nào\n' +
        '・なんじ: mấy giờ\n' +
        '・なんにち: ngày mấy\n' +
        '・なんようび: thứ mấy\n' +
        '・なんがつ: tháng mấy\n\n' +
        '🧭 **Địa điểm**:\n' +
        '・どこ / どちら: ở đâu / đâu (lịch sự)\n' +
        '・どこで / どちらで: ở đâu (diễn ra hành động)\n' +
        '・どこに / どちらに: ở đâu (tồn tại)\n' +
        '・どこへ / どちらへ: đến đâu (hướng đi)\n\n' +
        '🔢 **Số lượng/Đếm**:\n' +
        '・いくつ: bao nhiêu cái (chung)\n' +
        '・なんにん: bao nhiêu người\n' +
        '・なんこ: mấy cái (vật nhỏ)\n' +
        '・なんぼん / なんほん: mấy cái (dài như bút, chai…)\n' +
        '・なんまい: mấy tờ (mỏng như giấy)\n' +
        '・なんさつ: mấy quyển (sách, vở)\n' +
        '・なんかい / なんど: mấy lần\n' +
        '・なんじかん: mấy tiếng\n' +
        '・なんぷん: mấy phút\n' +
        '・どのくらい / どのぐらい: khoảng bao lâu / bao nhiêu\n\n' +
        '💬 **Hỏi lý do, phương tiện**:\n' +
        '・どうして / なんで / なぜ: tại sao\n' +
        '・なにで / なんで: bằng cách nào (phương tiện đi lại, phương pháp)\n\n' +
        '🌐 **Khác**:\n' +
        '・どこの + danh từ: của nước/công ty nào\n' +
        '・どちらの + danh từ: của ai/của bên nào (lịch sự)',
    },
    {
      title: '3. Ví dụ tổng hợp',
      explanation:
        '🔹 これは なんですか？→ Cái này là cái gì?\n' +
        '🔹 あのひとは だれですか？→ Người kia là ai?\n' +
        '🔹 いま なんじですか？→ Bây giờ là mấy giờ?\n' +
        '🔹 どこで しごとを しますか？→ Bạn làm việc ở đâu?\n' +
        '🔹 なんで がっこうへ いきますか？→ Bạn đến trường bằng gì?\n' +
        '🔹 どのくにの くるまですか？→ Xe này của nước nào?\n' +
        '🔹 きのう なんじかん べんきょうしましたか？→ Hôm qua bạn học mấy tiếng?\n' +
        '🔹 なんまい シャツを かいましたか？→ Bạn đã mua mấy cái áo (mỏng)?',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Tổng hợp từ nghi vấn – 疑問詞"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarQuestionWordsScreen
