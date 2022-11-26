/**
 * @description       : Sample usage of the custom component
 * @group             : Generic Components
 * @author            : samuel@pipelaunch.com
 * @last modified on  : 11-26-2022
 * @last modified by  : samuel@pipelaunch.com
 **/
import { LightningElement, wire } from "lwc";

import apex_getSampleAccountId from "@salesforce/apex/SampleGetAccountId.getSampleAccountId";

import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class Samples extends LightningElement {
  accountId = null;

  @wire(apex_getSampleAccountId)
  wiredGetSampleAccountId({ error, data }) {
    if (data) {
      this.accountId = data;
    } else if (error) {
      console.error("Error in getSampleAccountId", error);
    }
  }

  handleChange(evt) {
    const value = evt.detail;
    console.log("Lookup value", value);
    this.accountId = value;
  }

  handleClickValidate() {
    const isValid = this.template
      .querySelector("c-lwc-lookup-native[data-selector='lookup-values']")
      .reportValidity();
    console.log("Lookup is valid", isValid);

    this.dispatchEvent(
      new ShowToastEvent({
        message: `Validation result: ${isValid}`,
        variant: isValid ? "success" : "error",
      })
    );
  }

  handleClickGetValue() {
    const value = this.template.querySelector(
      "c-lwc-lookup-native[data-selector='lookup-values']"
    ).value;
    console.log("Lookup value", value);

    this.dispatchEvent(
      new ShowToastEvent({
        message: `Value: ${value}`,
      })
    );
  }
}
