export const generalConfig = {
  hmr: false,
 
  services: {
  
    temperature: {
      // Get
      getTemperatura: '/app/temperature/getTemperature',

      //Post
      setTemperature: '/app/temperature/setTemperature',
      setRangeTemperature: '/app/temperature/setRangeTemperature'
    },
  }
};
