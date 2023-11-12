import { motion } from "framer-motion";
import { useState } from "react";

function Tabs({ tabs, setActiveTab, activeTab }) {
  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "text-white" : "text-accent"
          } relative rounded-full px-3 py-1.5 text-sm font-medium  transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 text-white rounded-lg bg-accent mix-blend-difference"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
