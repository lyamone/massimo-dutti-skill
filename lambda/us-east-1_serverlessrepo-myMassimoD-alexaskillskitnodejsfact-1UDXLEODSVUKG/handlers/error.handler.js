const ErrorHandler = {
    canHandle() {
      return true;
    },
    handle(handlerInput, error) {
      console.log(`Error handled: ${error.message}`);
      console.log(error.trace);
  
      return handlerInput.responseBuilder
        .speak('Disculpa, no pude entender el comando. Podrias repetirlo?')
        .getResponse();
    },
  };

  module.exports = ErrorHandler;