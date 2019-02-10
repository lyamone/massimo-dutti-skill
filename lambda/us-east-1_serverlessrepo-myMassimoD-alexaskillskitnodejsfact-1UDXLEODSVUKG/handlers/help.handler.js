const HelpHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
      const speakOutput = 'Aqui podras saber el estado de tu pedido, conocer la tienda mas cercana y las ultimas novedades de Massimo Dutti';
  
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    },
  };

  module.exports = HelpHandler;