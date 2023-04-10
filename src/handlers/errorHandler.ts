import * as Alexa from "ask-sdk-core";
import { createUtterance } from "../factories/utteranceFactory";
import { ErrorUtterance as Utterance } from "../utterances/errorUtterance";

export const ErrorHandler: Alexa.ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput: Alexa.HandlerInput, error: Error) {
    console.log(`~~~~ Error handled: ${error.stack}`);
    const uttranceResult = createUtterance(Utterance).respond();

    return handlerInput.responseBuilder
      .speak(uttranceResult.speech)
      .reprompt(uttranceResult.speech)
      .getResponse();
  },
};
