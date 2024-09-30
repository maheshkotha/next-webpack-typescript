import React from "react";

const Csrf = () => {
  return (
    <div>
      <pre>
        {`
        How CSRF Tokens Work:

        Server Generates Token: When the user authenticates (e.g., logs in), the server generates a unique CSRF token and sends it to the client.
        Client Stores Token: The React frontend stores the token (usually in a cookie or in local storage).
        Client Sends Token: For each sensitive request (like form submissions or API calls that modify data), the frontend sends the CSRF token to the backend.
        Server Verifies Token: The server checks that the token matches the expected value before allowing the request to proceed.
        `}
      </pre>
    </div>
  );
};

export default Csrf;
