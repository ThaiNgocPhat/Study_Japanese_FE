import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～たら',
    explanation:
      '📌「～たら」là mẫu câu điều kiện (条件形: じょうけんけい) dùng để diễn tả: **nếu A xảy ra thì B sẽ xảy ra**.\n\n' +
      '👉 Mẫu này rất thường gặp trong hội thoại hàng ngày và mang tính **giả định cá nhân hoặc điều kiện cụ thể một lần**.\n\n' +
      '📝 Ví dụ:\n' +
      '・時間があったら、あそびに行こう。\n' +
      '→ Nếu có thời gian thì cùng đi chơi nhé.',
  },
  {
    title: '2. Cách chia mẫu câu ～たら',
    explanation:
      '🧩 **Động từ (thể た) + ら:**\n' +
      '・行く → 行ったら\n' +
      '・食べる → 食べたら\n' +
      '・する → したら\n' +
      '・来る（くる）→ きたら\n\n' +
      '🧩 **Tính từ -i:** Bỏ い + かったら\n' +
      '・安い → 安かったら\n' +
      '・大きい → 大きかったら\n\n' +
      '🧩 **Tính từ -na / Danh từ:** Bỏ な / thêm だったら\n' +
      '・きれい → きれいだったら\n' +
      '・簡単 → 簡単だったら\n' +
      '・雨 → 雨だったら\n' +
      '・いい天気 → いい天気だったら',
  },
  {
    title: '3. Ví dụ minh họa mẫu ～たら',
    explanation:
      '📘 Một số ví dụ dễ hiểu:\n\n' +
      '・仕事が終わったら、メールをしてください。\n' +
      '→ Nếu xong việc thì email cho tôi nhé.\n\n' +
      '・薬を飲んだら、調子がよくなりますよ。\n' +
      '→ Nếu uống thuốc thì sức khỏe sẽ khá hơn.\n\n' +
      '・ひまだったら、部屋を掃除して。\n' +
      '→ Nếu rảnh thì dọn dẹp phòng đi.\n\n' +
      '・高かったら、買わない。\n' +
      '→ Nếu đắt thì tôi sẽ không mua.',
  },
  {
    title: '4. So sánh ～たら và ～ば',
    explanation:
      '🔍 Cả hai mẫu đều dùng để diễn tả điều kiện, nhưng có sự khác biệt:\n\n' +
      '✅ **～たら:**\n' +
      '・Điều kiện xảy ra 1 lần hoặc trong hoàn cảnh cụ thể\n' +
      '・Nhấn mạnh vế kết quả hơn\n' +
      '📝 Ví dụ: あした雨だったら、出かけません。\n' +
      '→ Nếu mai mưa thì tôi không ra ngoài.\n\n' +
      '✅ **～ば:**\n' +
      '・Mang tính khái quát, lặp lại, có thể áp dụng nhiều lần\n' +
      '・Nhấn mạnh điều kiện hơn kết quả\n' +
      '📝 Ví dụ: 安ければ、買います。\n' +
      '→ Nếu rẻ thì tôi sẽ mua.',
  },
  {
    title: '5. ～たら dùng diễn tả hành động liên tiếp',
    explanation:
      '⏱ Ngoài điều kiện, ～たら còn dùng để nối **hai hành động theo trình tự thời gian** (xảy ra trước – sau).\n\n' +
      '📝 Ví dụ:\n' +
      '・お酒を飲んだら、気持ちが悪くなった。\n' +
      '→ Uống rượu xong thì thấy khó chịu.\n\n' +
      '・洗濯をしたら、シャツがピンクになった。\n' +
      '→ Giặt xong thì áo sơ mi trắng chuyển thành màu hồng.\n\n' +
      '・彼が来たら、会議を始めます。\n' +
      '→ Khi anh ta đến thì bắt đầu cuộc họp.',
  },
  {
    title: '6. Mẹo học và ứng dụng thực tế',
    explanation:
      '💡 **Ghi nhớ nhanh:**\n' +
      '・Động từ → thể た + ら\n' +
      '・Tính từ -i → ～かったら\n' +
      '・Tính từ -na / Danh từ → ～だったら\n\n' +
      '📌 Dùng ～たら khi muốn nhấn mạnh kết quả sẽ xảy ra nếu điều kiện được đáp ứng một lần.\n' +
      '📖 Thường dùng trong rủ rê, đề xuất, lời mời, hoặc kể chuyện quá khứ.\n\n' +
      '🧠 Mẹo học: hãy đặt câu mẫu hằng ngày theo cấu trúc:\n' +
      '「Aたら、B」để luyện phản xạ!',
  },
]

const GrammarTaraScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="Câu điều kiện ～たら" grammarSections={grammarSections} />
  )
}

export default GrammarTaraScreen
