type RomajiMap = Record<string, string>

export function generateKanaQuestions(
  kanaGrid: string[][],
  romajiMap: RomajiMap,
  count: number = 10,
) {
  const flattenKana = kanaGrid.flat().filter((kana) => romajiMap[kana])

  function getRandomOptions(correct: string): string[] {
    const all = Object.values(romajiMap).filter((r) => r !== correct)
    const random3 = all.sort(() => 0.5 - Math.random()).slice(0, 3)
    return [...random3, correct].sort(() => 0.5 - Math.random())
  }

  const shuffledKana = flattenKana.sort(() => 0.5 - Math.random()).slice(0, count)

  return shuffledKana.map((kana) => ({
    kana,
    correct: romajiMap[kana],
    options: getRandomOptions(romajiMap[kana]),
  }))
}
