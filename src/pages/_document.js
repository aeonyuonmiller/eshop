import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
          />
          <link
            rel="stylesheet"
            href="/snipcart.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
          ></script>
          <div
            id="snipcart"
            data-config-modal-style="side"
            data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
            hidden
          >
            <address-fields section="top">
              <div className="snipcart-form__field">
                <snipcart-label for="phone">Phone number</snipcart-label>
                <snipcart-input name="phone"></snipcart-input>
              </div>
            </address-fields>

            <div id="snipcart-templates">
              <component-to-override section="top">
                  <div class="root">
                      This will be inserted into the section named `top`.
                  </div>
              </component-to-override>
            </div>

          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
