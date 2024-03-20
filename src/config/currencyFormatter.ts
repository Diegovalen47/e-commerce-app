import numeral from 'numeral'

export const currencyFormatter = (value: number) => {
  return numeral(value).format('$0,0.00')
}

export const toNumber = (value: string) => {
  return numeral(value).value()
}
