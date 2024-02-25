import React, { memo } from "react";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 py-4">
      <div className="container mx-auto">
        <h1
          className={`text-white text-4xl font-bold tracking-wide text-center ${styles["shine-text"]}`}
        >
          SQL Buddy
        </h1>
      </div>
    </header>
  );
};

export default memo(Header);
