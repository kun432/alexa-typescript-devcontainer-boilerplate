import * as Alexa from "ask-sdk-core";
import { createUtterance } from "../factories/utteranceFactory";
import { HelpUtterance as Utterance } from "../utterances/helpUtterance";

export const HelpIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === "AMAZON.HelpIntent"
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
