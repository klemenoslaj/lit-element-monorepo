import { LitElement, html, customElement, css, queryAll, property, queryAsync } from 'lit-element';
import { isPathActive } from 'router-slot';
import '@material/mwc-list/mwc-list';
import '@material/mwc-list/mwc-list-item';
import type { PropertyValues } from 'lit-element';
import type { ListItem } from '@material/mwc-list/mwc-list-item';

interface Anchor extends HTMLAnchorElement {
  readonly firstElementChild: ListItem;
}

interface Page {
  readonly title: string;
  readonly path: string;
}

export type Pages = readonly Page[];

@customElement('osk-navigation')
export default class NavigationElement extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }

    :host a {
      text-decoration: none;
    }
  `;

  @property({ type: Array }) pages: Pages = [];

  @queryAll('a') private _anchors!: Anchor[];

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('navigationend', this._onNavigationEnd);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('navigationend', this._onNavigationEnd);
  }

  protected firstUpdated(props: PropertyValues) {
    super.firstUpdated(props);
  }

  protected render() {
    return html`
      <mwc-list activatable>
        ${this.pages.map(page => this._renderItem(page))}
      </mwc-list>
    `;
  }

  private _renderItem(page: Page) {
    return html`<a href="${page.path}"><mwc-list-item>${page.title}</mwc-list-item></a>`;
  }

  private _onNavigationEnd = () => {
    const anchors = Array.from(this._anchors);
    const nextActive = anchors.find(anchor => isPathActive(anchor.getAttribute('href') ?? ''))?.firstElementChild;
    const previousActive = anchors.find(anchor => anchor.firstElementChild.activated)?.firstElementChild;

    previousActive && (previousActive.activated = false);
    nextActive && (nextActive.activated = true);
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'osk-navigation': NavigationElement;
  }
}
