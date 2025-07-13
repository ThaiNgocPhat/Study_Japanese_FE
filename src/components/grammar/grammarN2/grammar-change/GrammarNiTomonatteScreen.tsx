import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～に伴って',
    explanation:
      '📌「～に伴って（にともなって）」là mẫu ngữ pháp diễn tả **sự thay đổi kéo theo một sự thay đổi khác**, mang tính trang trọng, thường dùng trong văn viết hoặc các tình huống trang nghiêm.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Danh từ] + に伴って／に伴い\n🔹 [Động từ thể từ điển] + の + に伴って／に伴い\n\n※「に伴い」là dạng văn viết của「に伴って」\n\nVí dụ:\n- 経済の発展に伴って…\n- 人口が増えるのに伴って…',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '🔸 Diễn tả **một sự thay đổi dẫn đến một sự thay đổi khác xảy ra đồng thời**.\n' +
      '🔹 Cả hai vế thường là **sự việc mang tính khách quan, quy luật, tự nhiên**, không mang ý chí hay mệnh lệnh cá nhân.\n' +
      '🔸 Tương tự như「～につれて」và「～に従って」nhưng trang trọng hơn.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 経済の発展に伴って、都市の人口も増えてきた。\n→ Cùng với sự phát triển kinh tế, dân số các thành phố cũng tăng lên.\n\n' +
      '2. 時代の変化に伴い、人々の考え方も変わった。\n→ Cùng với sự thay đổi của thời đại, cách nghĩ của con người cũng thay đổi.\n\n' +
      '3. 台風の接近に伴って、警報が出された。\n→ Cùng với việc cơn bão tiến đến gần, cảnh báo đã được phát ra.\n\n' +
      '4. 人口が増加するのに伴って、住宅の需要も高まっている。\n→ Cùng với sự gia tăng dân số, nhu cầu nhà ở cũng tăng cao.',
  },
  {
    title: '5. So sánh với các mẫu tương tự',
    explanation:
      '✅「～につれて」: Tự nhiên hơn, dùng trong cả văn nói.\n' +
      '✅「～に従って」: Nhấn mạnh logic hoặc quy luật.\n' +
      '✅「～に伴って」: Trang trọng hơn, thường dùng trong văn viết, các thông báo chính thức.',
  },
]

const GrammarNiTomonatteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～に伴って" grammarSections={grammarSections} />
}

export default GrammarNiTomonatteScreen
