const OrderStatusHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'estadoPedido';
    },
    async handle(handlerInput) {

      const speakOutput = 'El estado del pedido ' + handlerInput.requestEnvelope.request.intent.slots[0].value  + ' es en Transportista. La fecha de llegada es Mañana';

      return handlerInput.responseBuilder
        .speak(speakOutput) // The text passed to speak, is what Alexa will say.
        .getResponse();
    },
  };

  module.exports = OrderStatusHandler;