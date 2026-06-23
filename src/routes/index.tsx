import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CountdownGate } from "@/components/birthday/CountdownGate";
import { Nav } from "@/components/birthday/Nav";
import { Hero } from "@/components/birthday/Hero";
import { Story } from "@/components/birthday/Story";
import { Reasons } from "@/components/birthday/Reasons";
import { Lessons } from "@/components/birthday/Lessons";
import { Messages } from "@/components/birthday/Messages";
import { Promises } from "@/components/birthday/Promises";
import { Letter } from "@/components/birthday/Letter";
import { MemoryJar } from "@/components/birthday/MemoryJar";
import { FinalSurprise } from "@/components/birthday/FinalSurprise";
import { UNLOCK_DATE } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "28 Years of You — For Faeezah" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Index,
});

function Index() {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setMounted(true);
    const bypass =
      new URLSearchParams(window.location.search).has("preview") ||
      window.location.hash === "#preview";
    setUnlocked(bypass || Date.now() >= new Date(UNLOCK_DATE).getTime());
  }, []);

  return (
    <div className="bg-ivory text-espresso">
      {mounted && !unlocked && <CountdownGate onUnlock={() => setUnlocked(true)} />}
      <Nav />
      <main>
        <Hero />
        <Story />
        <Reasons />
        <Lessons />
        <Messages />
        <Promises />
        <Letter />
        <MemoryJar />
        <FinalSurprise />
      </main>
      <footer className="bg-espresso text-mutedink text-center py-8 text-xs uppercase tracking-[0.3em]">
        Made with love · July 2026
      </footer>
    </div>
  );
}
