import React from "react";
import { Button } from "antd";
import styles from "./RedButton.module.less";

export default function RedButton() {
  return (
    <div>
      <Button type="primary" className={styles.bg} id="myButton">
        My Button
      </Button>
    </div>
  );
}
