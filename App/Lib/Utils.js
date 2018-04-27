import moment from 'moment'

// Function for formattingTime
export const formattingTime = (date) => {
  const dateFormat = new Date(date)
  const momentDate = moment(dateFormat, 'DD-MM-YYYY HH:mm')
  return momentDate.format('DD-MM-YYYY HH:mm')
}
