import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const grammarSections = [
  {
    title: '1. Cách dùng 「～のに」',
    explanation:
      '📌 「～のに」 dùng để diễn tả **sự tương phản** giữa hai vế câu: "Mặc dù ... nhưng ...".\n\n' +
      '👉 Cấu trúc:\n' +
      '・[Động từ thể thường (普通形)] + のに\n' +
      '・[Tính từ -i] + のに\n' +
      '・[Tính từ -na + な] + のに\n' +
      '・[Danh từ + な] + のに',
  },
  {
    title: '2. Ví dụ cơ bản',
    explanation:
      '🔹 このレストランは 安いのに、けっこう おいしいです。\n' +
      '→ Nhà hàng này tuy rẻ nhưng khá ngon.\n\n' +
      '🔹 春なのに、まだ 寒いです。\n' +
      '→ Mặc dù đã là mùa xuân rồi nhưng vẫn lạnh.\n\n' +
      '🔹 薬を 飲んだのに、まだ ねつが 下がりません。\n' +
      '→ Dù đã uống thuốc nhưng vẫn không hạ sốt.',
  },
  {
    title: '3. Ví dụ nâng cao',
    explanation:
      '🔹 仕事中なのに、パソコンで ゲームをしています。\n' +
      '→ Mặc dù đang làm việc nhưng lại chơi game trên máy tính.\n\n' +
      '🔹 彼女は きれいなのに、恋人が いない。\n' +
      '→ Cô ấy xinh đẹp nhưng không có người yêu.\n\n' +
      '🔹 家が 近いのに、会社に 遅れた。\n' +
      '→ Nhà thì gần nhưng vẫn đến công ty muộn.',
  },
  {
    title: '4. Lưu ý',
    explanation:
      '✅ 「～のに」 thể hiện sự tiếc nuối, bất ngờ hoặc không hài lòng về một tình huống trái ngược với kỳ vọng.\n' +
      '❌ Không sử dụng mẫu này để đưa ra mệnh lệnh hay yêu cầu ở vế sau.',
  },
]

const GrammarNoniScreen = () => {
  return <GrammarTemplateScreen screenTitle="～のに: Mặc dù" grammarSections={grammarSections} />
}

export default GrammarNoniScreen
