import { UtteranceBase } from "./utteranceBase";
import { IUtteranceResultBase } from "../entities/utteranceResultBase";

export class ErrorUtterance extends UtteranceBase {
  constructor() {
    super();
  }

  public respond(): IUtteranceResultBase {
    const speechText = `Sorry, I had trouble doing what you asked. Please try again.`;
    return {
      speech: speechText,
    };
  }
}
