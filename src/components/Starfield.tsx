import React from "react";

export default function Starfield() {
  return (
    <div aria-hidden className="fixed inset-0 -z-50 bg-space">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,.5) 50%, transparent 51%),
                         radial-gradient(1px 1px at 80% 40%, rgba(255,255,255,.35) 50%, transparent 51%),
                         radial-gradient(1.5px 1.5px at 60% 70%, rgba(255,255,255,.4) 50%, transparent 51%),
                         radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,.25) 50%, transparent 51%)`,
          backgroundRepeat: "repeat",
          backgroundSize: "700px 700px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(31,215,187,0.12),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,138,0,0.12),transparent_55%)]" />
    </div>
  );
}
