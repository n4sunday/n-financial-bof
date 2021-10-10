import moment from 'moment'

export const getYear = () => {
  return moment().year()
}

export const formatCurrency = (data: number) => {
  return data ? data : 0
}
