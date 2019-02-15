const LaunchRequestHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    async handle(handlerInput) {
      // Executed on 'Open Massimo Dutti'
      const attributesManager =  handlerInput.attributesManager;
      const responseBuilder = handlerInput.responseBuilder;
      const speakOutput = 'Bienvenido a Massimo Dutti!';
      const attributes = await attributesManager.getPersistentAttributes() || {};

      if(Object.keys(attributes).length==0){
        attributes.nameValue= 'pedro';
        attributesManager.setPersistentAttributes(attributes);
        const result = await attributesManager.savePersistentAttributes();
      } else {
         speakOutput = 'Hola de nuevo . En que puedo ayudarte hoy';
      }
      
      
      return responseBuilder
        .speak(speakOutput) // The text passed to speak, is what Alexa will say.
        .getResponse();
    },
  };

module.exports = LaunchRequestHandler;
