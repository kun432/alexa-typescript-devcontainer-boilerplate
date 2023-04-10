import * as Alexa from "ask-sdk-core";

import { LaunchRequestHandler } from "./handlers/launchRequestHandler";
import { HelloWorldIntentHandler } from "./handlers/helloWorldIntentHandler";
import { HelpIntentHandler } from "./handlers/helpIntentHandler";
import { CancelAndStopIntentHandler } from "./handlers/cancelAndStopIntentHandler";
import { SessionEndedRequestHandler } from "./handlers/sessionEndedRequestHandler";
import { ErrorHandler } from "./handlers/errorHandler";

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
