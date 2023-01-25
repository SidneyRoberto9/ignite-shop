export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const capitalizeText = (text: string) => {
  const lower = text.toLowerCase()
  const capitalize = lower.replace(/\b./g, (word) => word.toUpperCase())

  return capitalize
}
