import Hero from "./hero";
import Features from "./features";
import Benefits from "./benefits";
import Cta from "./cta";

export default function Main() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Benefits Section */}
      <Benefits />

      {/* CTA Section */}
      <Cta />
    </main>
  );
}
