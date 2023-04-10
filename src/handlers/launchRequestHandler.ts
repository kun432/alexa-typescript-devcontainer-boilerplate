import * as Alexa from "ask-sdk-core";
import { createUtterance } from "../factories/utteranceFactory";
import { LaunchRequestUtterance as Utterance } from "../utterances/launchRequestUtterance";

export const LaunchRequestHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "LaunchRequest"
    );
  },
  handle(handlerInput: Alexa.HandlerInput) {
    const uttranceResult = createUtterance(Utterance).respond();
    return handlerInput.responseBuilder
      .speak(uttranceResult.speech)
      .reprompt(uttranceResult.speech)
      .getResponse();
  },
};
