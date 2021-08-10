import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for ExampleReflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  initialize() {
    this.keydownHandler = this.save.bind(this);
  }
  
  connect() {
    super.connect();
    this.element.focus();
    this.element.addEventListener("debounced:input", this.keydownHandler)
  }

  disconnect() {
    this.element.removeEventListener("debounced:input", this.keydownHandler)
  }
  
  save() {
    this.stimulate("ExampleReflex#save", this.element, {resolveLate: true}, this.element.innerHTML);
  }
}
