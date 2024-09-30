"use client"
import Link from "next/link";
import React, { useMemo, useState } from "react";
import Ivs from "../../src/components/secury/Ivs";
import Csp from "../../src/components/secury/Csp";
import Csrf from "../../src/components/secury/Csrf";

const Securiry = () => {
  const [key, setKey] = useState("ivs")
  const component = useMemo(() => ({
    'ivs': <Ivs />,
    'csp': <Csp />,
    'csrf': <Csrf />
  }), []);
  let methods = [
    {
      key: "ivs",
      description: "Input Validation and Sanitization",
    },
    {
      key: "csp",
      description: "Content Security Policy (CSP)",
    },
    {
      key: "csrf",
      description: "Cross-Site Request Forgery (CSRF) Protection",
    },
    {
      key: "secure-cookies",
      description: "Secure Cookies",
    },
    {
      key: "secure-storage",
      description: "Secure Storage of Sensitive Data",
    },
    {
      key: "https",
      description: "HTTPS Everywhere",
    },
    {
      key: "hsts",
      description: "Strict Transport Security (HSTS)",
    },
    {
      key: "tird-party",
      description: "Avoid Third-Party Libraries from Untrusted Sources",
    },
    {
      key: "sensitive-info",
      description: "Limit Exposure of Sensitive Information",
    },
    {
      key: "clickjacking",
      description: "Prevent Clickjacking",
    },
    {
      key: "secure-headers",
      description: "Security Headers",
    },
    {
      key: "autocomplete",
      description: "Disable Autocomplete for Sensitive Inputs",
    },
    {
      key: "authentication",
      description: "Use Strong Authentication Mechanisms",
    },
  ];
  return (
    <div>
      <Link href="/">Home</Link>
      <br />
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            width: "30%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "8px",
            cursor: 'pointer'
          }}
        >
          {methods.map((method) => {
            return <div key={method.key} onClick={() => setKey(method.key)}>{method.description}</div>;
          })}
        </div>
        <div  style={{ width: "60%" }}>
          {
            component[key]
          }
        </div>
      </div>
    </div>
  );
};

export default Securiry;
