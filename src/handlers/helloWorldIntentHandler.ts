import * as Alexa from "ask-sdk-core";
import { createUtterance } from "../factories/utteranceFactory";
import { HelloWorldUtterance as Utterance } from "../utterances/helloWorldUtterance";

export const HelloWorldIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === "HelloWorldIntent"
    );
  },
  handle(handlerInput: Alexa.HandlerInput) {
    const currentHours = new Date().getHours();
    const uttranceResult = createUtterance(Utterance).respond(currentHours);

    return handlerInput.responseBuilder
      .speak(uttranceResult.speech)
      .reprompt(uttranceResult.speech)
      .getResponse();
  },
};
