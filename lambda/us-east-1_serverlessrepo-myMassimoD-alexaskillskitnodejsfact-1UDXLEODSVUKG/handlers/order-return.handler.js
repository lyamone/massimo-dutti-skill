const OrderReturnHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'orderReturn';
    },
    handle(handlerInput) {
      console.log(handlerInput);
      const speakOutput = 'Deseas devolver el ultimo pedido realizado?';

      return handlerInput.responseBuilder
        .speak(speakOutput) // The text passed to speak, is what Alexa will say.
        .getResponse();
    },
  };

  module.exports = OrderReturnHandler;