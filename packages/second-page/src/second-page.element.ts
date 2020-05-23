import { LitElement, html, customElement } from 'lit-element';

@customElement('osk-second-page')
export class SecondPageElement extends LitElement {
  render() {
    return html`Second Page`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'osk-second-page': SecondPageElement;
  }
}
