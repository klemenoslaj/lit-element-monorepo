import { LitElement, html, customElement, css } from 'lit-element';
import style from 'bundle-text:./first-page.element.scss';

@customElement('osk-first-page')
export class FirstPageElement extends LitElement {
  static styles = css(<TemplateStringsArray>(<unknown>[style]));

  render() {
    return html`
      <div class="card">
        <h2 class="card__title">Panel 1</h2>
        <article>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </article>
      </div>

      <div class="card">
        <h2 class="card__title">Panel 2</h2>
        <article>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </article>
      </div>

      <div class="card">
        <h2 class="card__title">Panel 3</h2>
        <article>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </article>
      </div>

      <div class="card">
        <h2 class="card__title">Panel 4</h2>
        <article>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </article>
      </div>

      <div class="card">
        <h2 class="card__title">Panel 5</h2>
        <article>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </article>
      </div>

      <div class="card">
        <h2 class="card__title">Panel 6</h2>
        <article>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </article>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'osk-first-page': FirstPageElement;
  }
}
