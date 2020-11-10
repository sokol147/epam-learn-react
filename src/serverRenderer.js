import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./js/App";
import configureStore from "./js/store";

function renderHTML(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link href="/css/main.css" rel="stylesheet" type="text/css"></link>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/js/main.js">
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
                /</g,
                "\\u003c"
            )}
          </script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
    const store = configureStore();
    return (req, res) => {
        const renderRoot = () => (
            <App location={req.url} Router={StaticRouter} store={store} />
        );

        renderToString(renderRoot());
        const htmlString = renderToString(renderRoot());
        const preloadedState = store.getState();

        res.send(renderHTML(htmlString, preloadedState));
    };
}
