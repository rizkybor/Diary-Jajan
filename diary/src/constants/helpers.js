import moment from 'moment'

const dateFormat = (date) => {
    let formatedDate = moment(date).format('DD-MM-YYYY')
    return formatedDate
  }


const onlyNumber = ($event) => {
let keyCode = $event.keyCode ? $event.keyCode : $event.which
if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
    // 46 is dot
    $event.preventDefault()
}
}

export default {
    dateFormat,
    onlyNumber
}