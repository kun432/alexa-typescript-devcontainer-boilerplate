import { UtteranceBase } from "./utteranceBase";
import { IUtteranceResultBase } from "../entities/utteranceResultBase";

export class HelpUtterance extends UtteranceBase {
  constructor() {
    super();
  }

  public respond(): IUtteranceResultBase {
    const speechText = "You can say hello to me! How can I help?";

    return {
      speech: speechText,
    };
  }
}
