import { LitElement, html, customElement, css, queryAll } from 'lit-element';
import { isPathActive } from 'router-slot';
import '@material/mwc-list/mwc-list';
import '@material/mwc-list/mwc-list-item';
import type { PropertyValues } from 'lit-element';
import type { ListItem } from '@material/mwc-list/mwc-list-item';

interface Anchor extends HTMLAnchorElement {
  readonly firstElementChild: ListItem;
}

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

  @queryAll('a') _anchors!: Anchor[];

  renderSlot = false;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('navigationend', this._onNavigationEnd);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('navigationend', this._onNavigationEnd);
  }

  firstUpdated(props: PropertyValues) {
    super.firstUpdated(props);
  }

  render() {
    return html`
      <mwc-list activatable>
        <a href="/first-page"><mwc-list-item>First Page</mwc-list-item></a>
        <a href="/second-page"><mwc-list-item>Second Page</mwc-list-item></a>
        <a href="/first-page"><mwc-list-item>First Page</mwc-list-item></a>
        <a href="/second-page"><mwc-list-item>Second Page</mwc-list-item></a>
        <a href="/first-page"><mwc-list-item>First Page</mwc-list-item></a>
        <a href="/second-page"><mwc-list-item>Second Page</mwc-list-item></a>
        <a href="/first-page"><mwc-list-item>First Page</mwc-list-item></a>
        <a href="/second-page"><mwc-list-item>Second Page</mwc-list-item></a>
        <a href="/first-page"><mwc-list-item>First Page</mwc-list-item></a>
        <a href="/second-page"><mwc-list-item>Second Page</mwc-list-item></a>
        <a href="/first-page"><mwc-list-item>First Page</mwc-list-item></a>
        <a href="/second-page"><mwc-list-item>Second Page</mwc-list-item></a>
        <a href="/first-page"><mwc-list-item>First Page</mwc-list-item></a>
        <a href="/second-page"><mwc-list-item>Second Page</mwc-list-item></a>
      </mwc-list>
    `;
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
