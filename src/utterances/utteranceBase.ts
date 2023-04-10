import { IUtteranceResultBase } from "../entities/utteranceResultBase";

export abstract class UtteranceBase {
  /* tslint:disable:no-empty */
  constructor() {}

  public abstract respond(...args: any[]): IUtteranceResultBase;
}
