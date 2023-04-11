import React from "react";
import styles from "@/styles/Sidebar.module.css";
import Image from "next/image";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <Image
        alt="logo"
        className={styles.logo}
        src="/assets/monday_logo_icon.png"
        width={40}
        height={40}
      />
      <hr></hr>
      <div className={styles.siderbaroptions}>
        <Image
          alt="workspace"
          className={styles.workspace}
          src="/assets/twitter.png"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default Sidebar;
