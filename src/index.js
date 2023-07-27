import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/index'; //providing theme structure to theme prop in ChakraProvider
import RequirementSmallPreview from './components/iframe/RequirementSmallPreview';
import RequirementLargePreview from './components/iframe/RequirementLargePreview';
import SearchSelectorUi from './components/SearchSelectorUi';
import { BrowserRouter } from 'react-router-dom';

class LargePreview extends HTMLElement {
  static get observedAttributes() {
    return ['title']
  }
  connectedCallback() {
   this.render();
  }

  render() {

    const props = {};
    for (let i=0; i<this.attributes.length;i++) {
      props[this.attributes[i].name] = this.attributes[i].value;
    }

    const rootElement = document.getElementById("oslc-large-preview-id");
    const root = createRoot(rootElement);

    root.render(
      <React.StrictMode>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
          <RequirementLargePreview {...props}/>
          </BrowserRouter>
        </ChakraProvider>
      </React.StrictMode>,
      this
    );
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
}
window.customElements.define('oslc-large-preview', LargePreview);


class SmallPreview extends HTMLElement {
  static get observedAttributes() {
    return ['title']
  }
  connectedCallback() {
   this.render();
  }

  render() {

    const props = {};
    for (let i=0; i<this.attributes.length;i++) {
      props[this.attributes[i].name] = this.attributes[i].value;
    }

    const rootElement = document.getElementById("oslc-small-preview-id");
    const root = createRoot(rootElement);

    root.render(
      <React.StrictMode>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
          <RequirementSmallPreview {...props}/>
          </BrowserRouter>
        </ChakraProvider>
      </React.StrictMode>,
      this
    );
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
}
window.customElements.define('oslc-small-preview', SmallPreview);


class Search extends HTMLElement {
  static get observedAttributes() {
    return ['title']
  }
  connectedCallback() {
   this.render();
  }

  render() {

    const props = {};
    for (let i=0; i<this.attributes.length;i++) {
      props[this.attributes[i].name] = this.attributes[i].value;
    }

    const rootElement = document.getElementById("oslc-selector-id");
    const root = createRoot(rootElement);

    root.render(
      <React.StrictMode>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
          <SearchSelectorUi {...props}/>
          </BrowserRouter>
        </ChakraProvider>
      </React.StrictMode>,
      this
    );
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
} 
window.customElements.define('oslc-selector', Search);
