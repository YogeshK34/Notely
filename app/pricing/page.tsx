"use client";
import Description from "@/components/description";
import App from "@/components/title";

export default function PricingPage() {
  return (
    <div> {/* Ensure full width and height */}
      <div className="max-w-screen-lg mx-auto p-4"> {/* Center content and control its width */}
        <App/>
        <Description />
      </div>
    </div>
  );
}
