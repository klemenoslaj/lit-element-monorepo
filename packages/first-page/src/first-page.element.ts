import { LitElement, html, customElement, css } from 'lit-element';

@customElement('osk-first-page')
export class FirstPageElement extends LitElement {
  static styles = css`
    mwc-top-app-bar {
      --mdc-theme-primary: black;
    }

    .card {
      margin-bottom: 10px;
    }

    .card__title {
      position: sticky;
      top: 0;
      margin: 0;
      padding: 0.83em 0;
      background: #fff;
    }
  `;

  protected render() {
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
