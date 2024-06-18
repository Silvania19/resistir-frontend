export const generalConfig = {
  hmr: false,
 
  services: {
  
    temperature: {
      // Get
      getTemperatura: '/app/temperature/getTemperature',
      getRangeTemperature: '/app/temperature/getRangeTemperature',

      //Post
      setRangeTemperature: '/app/temperature/setRangeTemperature'
    },
  }
};
