const Alexa = require('ask-sdk');

// Generic Handlers
const LaunchRequestHandler = require('./handlers/launch.handler');
const ErrorHandler = require('./handlers/error.handler');
const HelpHandler = require('./handlers/help.handler');
const SessionEndedRequestHandler = require('./handlers/session-ended.handler');
const CancelAndStopHandler = require('./handlers/cancel-stop.handler');
// Custom Handlers
const CloserStoreHandler = require('./handlers/closer-stores.handler');
const OrderStatusHandler = require('./handlers/order-status.handler');
const OrderReturnHandler = require('./handlers/order-return.handler');


const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    OrderStatusHandler,
    OrderReturnHandler,
    CloserStoreHandler,
    HelpHandler,
    CancelAndStopHandler,
    SessionEndedRequestHandler,
  )
  .addErrorHandlers(ErrorHandler)
  .withTableName('md-data')
  .withAutoCreateTable(true)
  .lambda();