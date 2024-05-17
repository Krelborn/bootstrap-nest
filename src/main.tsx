import React from "react";
import ReactDOM from "react-dom/client";

import Button from "react-bootstrap/Button";

// Import both the global and our custom, scoped bootstrap styles together
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

// Import the styles for a fake component that uses sandbox variables
import styles from "./component.module.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-info p-3">
      <h1 className="outside-sandbox">Global Bootstrap</h1>
      <Button variant="primary">Outside</Button>
      <div className="sandbox">
        <section className="sandbox-root">
          <div className="bg-info p-3">
            <h1>Sandboxed Bootstrap</h1>
            <Button variant="primary">Inside</Button>
            <FakeComponent />
          </div>
        </section>
      </div>
    </div>
  </React.StrictMode>
);

function FakeComponent() {
  return (
    <div className={styles.root}>
      <h2>Fake Component</h2>
      <Button variant="light">Fake</Button>
    </div>
  );
}
