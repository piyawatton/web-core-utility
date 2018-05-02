import Fingerprint2 from 'fingerprintjs2'

const generateFingerPrint = async () => {
  const fingerprint = new Promise((resolve, reject) => {
    try {
      new Fingerprint2().get((result) => {
        resolve(result)
      })
    } catch (e) {
      reject(e);
    }
  });
  return fingerprint
}

export default generateFingerPrint
