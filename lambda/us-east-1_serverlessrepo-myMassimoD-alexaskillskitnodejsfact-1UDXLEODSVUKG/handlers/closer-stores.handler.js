const 
  messages = require('../messages'),
  request = require('request');

const PERMISSIONS = ['read::alexa:device:all:address'];

const CloserStoreHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'tiendasCercanas';
    },
     async handle(handlerInput) {
      
      const { requestEnvelope, serviceClientFactory, responseBuilder } = handlerInput;
  
      const consentToken = requestEnvelope.context.System.apiAccessToken;
      if (!consentToken) {
        return responseBuilder
          .speak(messages.NOTIFY_MISSING_PERMISSIONS)
          .withAskForPermissionsConsentCard(PERMISSIONS)
          .getResponse();
      }
  
      // const { deviceId } = requestEnvelope.context.System.device;
      // const deviceAddressServiceClient = serviceClientFactory.getDeviceAddressServiceClient();
      // const address = await deviceAddressServiceClient.getFullAddress(deviceId);
      
      // console.log(address);
  
      function httpGet(query, callback) {
        return new Promise(resolve => {
          const url = 'https://www.massimodutti.com/itxrest/2/bam/store/34009450/physical-store?favouriteStores=true&lastStores=false&closerStores=true&latitude=41.491936599999995&longitude=2.3575048&min=10&radioMax=100&receiveEcommerce=false&showBlockedMaxPackage=false&countryCode=ES&languageId=-5&appId=1';
          request.get(url, (error, response, body) => {
              resolve(JSON.parse(body));
          });
          
        });
      };
      
      const stores = await httpGet();
      const closerStoreMessage = messages.CLOSER_STORE + ' ' + stores.closerStores[0].name;
      return responseBuilder.speak(closerStoreMessage).getResponse();
  
    },
};

module.exports = CloserStoreHandler;