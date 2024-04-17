export const generalConfig = {
  hmr: false,
 
  services: {
  
    temperature: {
      // Get
      getTemperatura: '/app/temperature/getTemperature',
      setTemperature: '/app/temperature/setTemperature',
      setRangeTemperature: '/app/temperature/setRangeTemperature'
    },
  }
};
