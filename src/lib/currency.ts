export const AED_TO_USD = 0.2723

export function toUSD(aed: number) {
  return Math.round(aed * AED_TO_USD)
}
