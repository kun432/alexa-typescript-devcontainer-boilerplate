import { UtteranceBase } from "./utteranceBase";
import { IUtteranceResultBase } from "../entities/utteranceResultBase";

export class LaunchRequestUtterance extends UtteranceBase {
  constructor() {
    super();
  }

  public respond(): IUtteranceResultBase {
    const speechText =
      "Welcome, you can say Hello or Help. Which would you like to try?";

    return {
      speech: speechText,
    };
  }
}
