import md5 from 'blueimp-md5'
import generateFingerPrint from './generateFingerPrint'

const setCorrelationId = () => {
  generateFingerPrint().then((uid) => {
    localStorage.setItem('correlation-id', `CID${md5(uid)}`)
  })
}

export default setCorrelationId
