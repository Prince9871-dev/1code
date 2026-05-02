"use client";

import dynamic from "next/dynamic";

export type { TerminalRef } from "./terminal-client";

const TerminalComponent = dynamic(
  () => import("./terminal-client"),
  { ssr: false }
);

export default TerminalComponent;