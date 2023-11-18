import ApiService from '@/plugins/axios'

const example = [
  {
    timestamp: 1624454400,
    level: 'INFO',
    message: 'Hello World!',
    ip: { value: '88.19.176.143' },
    geolocation: {
      city: 'San Vicent del Raspeig',
      region: 'Valencia',
      country: 'ES',
      latitude: '38.3964',
      longitude: '-0.5255'
    }
  }
]

class LoggerApiService {
  /**
   * Get logs
   *
   * @return {Promise}
   */
  getLogs() {
    //return ApiService.get('/logs')
    return example
  }
}

export default new LoggerApiService()
