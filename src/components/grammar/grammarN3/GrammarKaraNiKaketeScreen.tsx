import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～から～にかけて」',
    explanation:
      '📌 Mẫu 「～から～にかけて」 dùng để chỉ **khoảng thời gian hoặc phạm vi không rõ ràng** từ đâu đến đâu đó.\n' +
      '👉 Có thể dịch là: “Từ… đến khoảng…”, “Trong suốt khoảng từ… đến…”.\n' +
      '🔹 Thường dùng khi người nói **không xác định rõ ràng mốc đầu–cuối**, chỉ mang tính tương đối.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔸 [Danh từ chỉ thời gian/địa điểm] + から + [Danh từ chỉ thời gian/địa điểm] + にかけて\n\n' +
      '📝 Ví dụ:\n' +
      '・7月から9月にかけて、雨の日が多いです。\n' +
      '→ Từ khoảng tháng 7 đến tháng 9, có nhiều ngày mưa.\n\n' +
      '・東京から大阪にかけて、桜が咲き始めました。\n' +
      '→ Từ Tokyo đến Osaka, hoa anh đào đã bắt đầu nở.',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '🔹 Mẫu câu này dùng trong **miêu tả chung chung** các hiện tượng xảy ra liên tục hoặc trải dài trong thời gian/khu vực.\n' +
      '🔹 KHÁC với 「～から～まで」 là xác định rõ ràng hơn về điểm đầu và cuối.\n\n' +
      '✅ Ví dụ:\n' +
      '・夕方から夜にかけて、風が強くなるでしょう。\n' +
      '→ Từ chiều đến tối, gió có thể sẽ mạnh lên.\n\n' +
      '・九州から関西にかけて、台風の影響が出ています。\n' +
      '→ Từ Kyushu đến Kansai đang chịu ảnh hưởng của bão.',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '⚠️ 「～から～にかけて」 không dùng trong các câu yêu cầu, mệnh lệnh, hay mang ý chí cá nhân.\n\n' +
      '🔹 Dùng nhiều trong văn viết, bản tin thời tiết, miêu tả sự kiện, thống kê, xu hướng,…\n' +
      '🔹 Vế sau thường là hành động, hiện tượng tự nhiên, sự kiện,… không mang tính chủ ý cá nhân.',
  },
]

const GrammarKaraNiKaketeScreen = () => {
  return <GrammarTemplateScreen screenTitle="～から～にかけて" grammarSections={grammarSections} />
}

export default GrammarKaraNiKaketeScreen
