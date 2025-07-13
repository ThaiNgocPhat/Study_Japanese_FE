import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
const GrammarN2CategoryScreen = () => {
  const topics: TopicItem[] = [
    {
      title: 'Điều kiện – Giả định',
      screen: 'GrammarConditionScreen',
    },
    {
      title: 'Lý do – Nguyên nhân',
      screen: 'GrammarReasonScreen',
    },
    {
      title: 'Mục đích – Kết quả',
      screen: 'GrammarPurposeScreen',
    },
    {
      title: 'Tương phản – Đối lập',
      screen: 'GrammarContrastScreen',
    },
    {
      title: 'Nhấn mạnh – So sánh – Bổ sung',
      screen: 'GrammarEmphasisScreen',
    },
    {
      title: 'Suy đoán – Phán đoán',
      screen: 'GrammarGuessScreen',
    },
    {
      title: 'Thay đổi – Phát triển',
      screen: 'GrammarChangeScreen',
    },
    {
      title: 'Giới hạn – Nhấn mạnh',
      screen: 'GrammarLimitScreen',
    },
    {
      title: 'Ý chí – Khuyên bảo – Mong muốn',
      screen: 'GrammarAdviceScreen',
    },
    {
      title: 'Trạng thái – Hành vi lặp lại',
      screen: 'GrammarStateScreen',
    },
    {
      title: 'Thời điểm – Hành động liên tiếp',
      screen: 'GrammarTimeScreen',
    },
    {
      title: 'Bị động – Tự phát – Cảm xúc',
      screen: 'GrammarPassiveScreen',
    },
    {
      title: 'Phủ định – Nghi vấn – Lựa chọn',
      screen: 'GrammarNegativeScreen',
    },
    {
      title: 'Các mẫu đặc biệt khác',
      screen: 'GrammarSpecialScreen',
    },
  ]
  return <TopicListScreen screenTitle="14 chủ đề ngữ pháp N2" topics={topics} />
}

export default GrammarN2CategoryScreen
