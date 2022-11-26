/**
 * @description       : LWC Lookup Native with the lightning-record-edit-form hack
 * @author            : samuel@pipelaunch.com
 * @group             : Generic Components
 * @last modified on  : 11-26-2022
 * @last modified by  : samuel@pipelaunch.com
 **/
import { LightningElement, api } from "lwc";

export default class LwcLookupNative extends LightningElement {
  /**
   * lookup value
   */
  @api get value() {
    return this._value;
  }
  _value = null;
  set value(value) {
    this._value = value;
  }

  /**
   * The API name of the field to be displayed.
   */
  @api fieldName = "AccountId";

  /**
   * The variant changes the label position of an input field.
   * Accepted variants include standard, label-hidden, label-inline, and label-stacked.
   * The variant, if specified, determines the label position.
   * Otherwise, the density setting of the parent form determines the label position.
   */
  @api variant = "label-hidden";

  /**
   * If present, the input field must be filled out before the form is submitted.
   */
  @api required = false;

  /**
   * If present, the field is grayed out and users can't interact with it.
   * Disabled fields don't receive focus and are skipped in tabbing navigation.
   */
  @api disabled = false;

  /**
   * If true the change event will be propagated (composed an bubbles = true)
   * The event listener should stop the propagation
   */
  @api propagateEvents = false;

  /**
   * The API name of the object.
   */
  @api objectApiName = "Contact";

  /**
   * A CSS class for the form element.
   */
  @api formClass = "";

  /**
   * @description check if the input is valid
   * @returns {Boolean}
   */
  @api
  reportValidity() {
    return this._value === null && this.required ? false : true;
  }

  /**
   * @description Handle change of the value
   * @param {HTMLElement} evt
   */
  handleChange(evt) {
    evt.stopPropagation();

    this._value =
      evt.detail &&
      evt.detail.value &&
      Array.isArray(evt.detail.value) &&
      evt.detail.value.length > 0
        ? evt.detail.value[0]
        : null;

    this.dispatchEvent(
      new CustomEvent("change", {
        detail: this._value,
        composed: this.propagateEvents,
        bubbles: this.propagateEvents,
      })
    );
  }
}
