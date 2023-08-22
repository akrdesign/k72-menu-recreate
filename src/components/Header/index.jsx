"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Hamburger from "./Hamburger";
import Stairs from "./Stairs";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

export default function Index() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <Hamburger
        openMenu={() => {
          setMenuIsOpen(true);
        }}
      />
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <Stairs />
            <Menu
              closeMenu={() => {
                setMenuIsOpen(false);
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
