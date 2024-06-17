export const generalConfig = {
  hmr: false,
 
  services: {
  
    temperature: {
      // Get
      getTemperatura: '/app/temperature/getTemperature',

      //Post
      setRangeTemperature: '/app/temperature/setRangeTemperature'
    },
  }
};
