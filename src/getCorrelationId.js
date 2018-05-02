
const getCorrelationId = () => {
  return `${localStorage.getItem('correlation-id')}-${new Date().getTime()}` || 'correlation-id done not exist!'
}

export default getCorrelationId
