export default class StateSetter {
  constructor(context) {
    this.context = context;
    this.cancelled = false;
  }

  cancell() {
    this.cancelled = true;
  }

  setState(...args) {
    if (!this.cancelled) {
      this.context.setState(...args);
    }
  }
}
