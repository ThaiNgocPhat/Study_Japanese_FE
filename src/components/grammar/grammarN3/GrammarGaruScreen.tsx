import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～がる」',
    explanation:
      '📌 「～がる」 là mẫu ngữ pháp dùng để **biểu hiện cảm xúc, mong muốn hoặc trạng thái** của người khác (không phải người nói), thông qua những gì người nói quan sát thấy.\n\n' +
      '👉 Dịch nghĩa: “trông có vẻ…”, “tỏ ra…”, “muốn…” (khi nhìn từ bên ngoài).',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔹 Tính từ -i (bỏ い) + がる\n' +
      '🔹 Tính từ -na + がる\n' +
      '🔹 Động từ thể たい（たいです）→ たがる\n\n' +
      '📍 Mẫu thường gặp:\n' +
      '・うれしい → うれしがる（tỏ ra vui）\n' +
      '・怖い（こわい）→ 怖がる（tỏ ra sợ）\n' +
      '・恥ずかしい（はずかしい）→ 恥ずかしがる（tỏ ra ngại）\n' +
      '・欲しい（ほしい）→ 欲しがる（muốn – ai đó）\n' +
      '・行きたい → 行きたがる（muốn đi – ai đó）',
  },
  {
    title: '3. Cách chia và sử dụng',
    explanation:
      '🔸「～がる」 là động từ nhóm 1, có thể chia như động từ bình thường:\n\n' +
      '・子どもがアイスクリームを**欲しがっています**。\n' +
      '→ Đứa bé đang muốn kem.\n\n' +
      '・彼は恥ずかしがって、何も話さなかった。\n' +
      '→ Cậu ấy xấu hổ nên không nói gì cả.\n\n' +
      '🔸 Khi muốn nói **ai đó thường xuyên có xu hướng như vậy**, dùng 「～がり」 như một danh từ:\n' +
      '・寒がり（さむがり）: người hay bị lạnh\n' +
      '・暑がり（あつがり）: người hay bị nóng\n' +
      '・怖がり（こわがり）: người hay sợ',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '⚠️ Không dùng 「～がる」 để nói về **cảm xúc của chính mình**.\n\n' +
      '🛑 Sai:\n' +
      '・私は行きたがります ❌\n\n' +
      '✅ Đúng:\n' +
      '・私は行きたいです。\n\n' +
      '📍 「～がる」 thường dùng khi:\n' +
      '・Nhận xét, miêu tả hành động người khác (qua biểu hiện)\n' +
      '・Thể hiện khách quan, không khẳng định chắc chắn nội tâm bên trong của người đó\n\n' +
      '✅ Ví dụ:\n' +
      '・彼は新しいゲームをやりたがっている。\n' +
      '→ Anh ấy có vẻ rất muốn chơi trò chơi mới.\n\n' +
      '・子どもは犬を怖がります。\n' +
      '→ Trẻ con thường sợ chó.',
  },
]

const GrammarGaruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～がる" grammarSections={grammarSections} />
}

export default GrammarGaruScreen
