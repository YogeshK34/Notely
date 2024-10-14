"use client";
import Description from "@/components/description";
import Footer from "@/components/footer";
import App from "@/components/title";

export default function PricingPage() {
  return (
    <div> {/* Ensure full width and height */}
      <div> {/* Center content and control its width */}
        <App />
        <Description />
      </div>

      
      <div className="w-full mt-auto gap-4">
        <Footer />
      </div>

    </div>
  );
}
