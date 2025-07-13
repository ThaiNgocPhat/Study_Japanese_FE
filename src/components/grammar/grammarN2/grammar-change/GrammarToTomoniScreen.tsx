import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～とともに',
    explanation:
      '📌「～とともに」là mẫu ngữ pháp mang nghĩa: **cùng với, đồng thời với, càng... càng...**.\n' +
      'Tùy vào ngữ cảnh, mẫu này có thể mang nhiều sắc thái khác nhau như: đồng thời, cùng xảy ra, hoặc sự thay đổi kéo theo thay đổi khác.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Danh từ + とともに\n🔹 Động từ thể từ điển + とともに\n🔹 Biến đổi đi kèm (giống mẫu ～につれて／～に従って）\n\nVí dụ:\n- 家族とともに暮らす。\n- 年を取るとともに、体力が落ちてきた。',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ **Cùng với ai/cái gì**: Biểu thị hành động cùng thực hiện với ai đó.\n' +
      '　Ví dụ: 先生とともに研究を進めている。\n\n' +
      '✅ **Đồng thời xảy ra**: Hai sự việc xảy ra đồng thời.\n' +
      '　Ví dụ: 地震とともに火事が起こった。\n\n' +
      '✅ **Càng… càng…**: Một sự thay đổi kéo theo một sự thay đổi khác.\n' +
      '　Ví dụ: インターネットの普及とともに、情報も簡単に手に入るようになった。',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 技術の進歩とともに、生活が便利になった。\n→ Cùng với sự tiến bộ của công nghệ, cuộc sống trở nên tiện lợi hơn.\n\n' +
      '2. 年齢を重ねるとともに、考え方も変わってきた。\n→ Càng lớn tuổi thì cách suy nghĩ cũng thay đổi.\n\n' +
      '3. 家族とともに日本に移住した。\n→ Tôi đã chuyển đến Nhật sống cùng với gia đình.\n\n' +
      '4. 新製品の発売とともに、売り上げも伸びてきた。\n→ Cùng với việc ra mắt sản phẩm mới, doanh thu cũng tăng lên.',
  },
  {
    title: '5. Ghi nhớ',
    explanation:
      '🔸「～とともに」có thể đi với danh từ, động từ và dùng trong nhiều ngữ cảnh khác nhau: hành động đồng thời, thay đổi kéo theo thay đổi, hay đơn thuần là “cùng với”.\n' +
      '🔹 Đây là mẫu ngữ pháp thường gặp trong văn viết, tin tức, báo chí.',
  },
]

const GrammarToTomoniScreen = () => {
  return <GrammarTemplateScreen screenTitle="～とともに" grammarSections={grammarSections} />
}

export default GrammarToTomoniScreen
