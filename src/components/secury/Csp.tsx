import React from "react";

const Csp = () => {
  return (
    <div>
      <p>
        To implement Content Security Policy (CSP) alongside DOMPurify in your
        React application, the CSP adds an extra layer of security by
        controlling what sources of content are allowed to load on your page,
        preventing certain types of attacks, including Cross-Site Scripting
        (XSS).
      </p>

      <ul>
        <ol>
          <h2>What is CSP?</h2>
          <p>
            CSP is an HTTP header that instructs the browser about which
            resources (scripts, styles, images, etc.) are trusted and allowed to
            load and execute. It can help mitigate XSS by only allowing
            resources from trusted domains.
          </p>
        </ol>
        <ol>
          <h2>Basic CSP Header Example</h2>
          <p>
            In your server configuration (e.g., using Node.js with Express), you
            can add a CSP header like this:
          </p>
          <pre>
            {`
              app.use((req, res, next) => {
                res.setHeader(
                  "Content-Security-Policy",
                  "default-src 'self'; script-src 'self' https://trusted-scripts.com; 
                  style-src 'self' 'unsafe-inline';"
                );
                next();
              })
              `}
          </pre>
        </ol>
      </ul>
    </div>
  );
};

export default Csp;
