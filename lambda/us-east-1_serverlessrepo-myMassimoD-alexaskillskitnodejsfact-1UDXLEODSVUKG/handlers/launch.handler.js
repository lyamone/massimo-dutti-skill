const LaunchRequestHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
      // Executed on 'Open Massimo Dutti'
      console.log(handlerInput);
      const speakOutput = 'Hola Lucas, Bienvenido a Massimo Dutti. En que puedo ayudarte?';
  
      return handlerInput.responseBuilder
        .speak(speakOutput) // The text passed to speak, is what Alexa will say.
        .getResponse();
    },
  };

module.exports = LaunchRequestHandler;
