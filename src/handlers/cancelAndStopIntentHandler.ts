import * as Alexa from "ask-sdk-core";
import { createUtterance } from "../factories/utteranceFactory";
import { CancelAndStopUtterance as Utterance } from "../utterances/cancelAndStopUtterance";

export const CancelAndStopIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      (Alexa.getIntentName(handlerInput.requestEnvelope) ===
        "AMAZON.CancelIntent" ||
        Alexa.getIntentName(handlerInput.requestEnvelope) ===
          "AMAZON.StopIntent")
    );
  },
  handle(handlerInput: Alexa.HandlerInput) {
    const uttranceResult = createUtterance(Utterance).respond();
    return handlerInput.responseBuilder
      .speak(uttranceResult.speech)
      .getResponse();
  },
};
