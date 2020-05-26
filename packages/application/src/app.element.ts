import { LitElement, html, customElement, query, css } from 'lit-element';
import '@material/mwc-icon-button';
import '@material/mwc-drawer';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon';
import 'router-slot';
import type { PropertyValues } from 'lit-element';
import type { Drawer } from '@material/mwc-drawer';
import type { RouterSlot } from 'router-slot';
import type { TopAppBar } from '@material/mwc-top-app-bar';

import './navigation.element';
import type { Pages } from './navigation.element';

const value: string = 5;

@customElement('osk-app')
export default class AppElement extends LitElement {
  static styles = css`
    :host {
      --mdc-theme-primary: #6200ee;
    }

    mwc-top-app-bar {
      position: absolute;
      width: 100%;
      z-index: 7;
    }

    mwc-drawer {
      height: 100vh;
    }

    mwc-icon {
      position: absolute;
      top: 18px;
    }

    main {
      display: flex;
      flex-direction: column;
      overflow: auto;
      height: 100vh;
    }

    osk-navigation {
      height: 100%;
      overflow: auto;
    }

    main::-webkit-scrollbar,
    osk-navigation::-webkit-scrollbar {
      width: 10px; /* width of the entire scrollbar */
    }
    main::-webkit-scrollbar-track,
    osk-navigation::-webkit-scrollbar-track {
      background: #ebebeb;
    }
    main::-webkit-scrollbar-thumb,
    osk-navigation::-webkit-scrollbar-thumb {
      background-color: #757575;
    }

    router-slot {
      display: flex;
      flex-direction: inherit;
      padding: 64px 0;
    }
  `;

  @query('router-slot') private _routerSlot!: RouterSlot;
  @query('mwc-drawer') private _drawer!: Drawer;
  @query('mwc-top-app-bar') private _topAppBar!: TopAppBar;
  @query('main') private _main!: HTMLElement;

  private _pages: Pages = [
    {
      path: '/first-page',
      title: 'First Page',
    },
    {
      path: '/second-page',
      title: 'Second Page',
    },
  ];

  protected firstUpdated(props: PropertyValues) {
    super.firstUpdated(props);

    this._topAppBar.scrollTarget = this._main;
    this._routerSlot.add([
      {
        path: 'first-page',
        // @ts-ignore
        component: () => import('first-page'),
      },
      {
        path: 'second-page',
        // @ts-ignore
        component: () => import('second-page'),
      },
      {
        path: '**',
        redirectTo: 'first-page',
      },
    ]);
  }

  protected render() {
    return html`
      <mwc-top-app-bar .scrollTarget="${this._routerSlot}">
        <mwc-icon-button
          slot="navigationIcon"
          icon="menu"
          @click="${() => (this._drawer.open = !this._drawer.open)}"
        ></mwc-icon-button>
        <span slot="title">Title</span>
      </mwc-top-app-bar>

      <mwc-drawer hasHeader type="dismissible" open>
        <mwc-icon slot="header">eco</mwc-icon>

        <osk-navigation .pages="${this._pages}">
          <input />
        </osk-navigation>

        <main slot="appContent">
          <router-slot></router-slot>
        </main>
      </mwc-drawer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'osk-app': AppElement;
  }
}
