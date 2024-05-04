import EmailList from "@/components/Footer/EmailList";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Reviews from "@/components/Home/Reviews";
import ShowCase from "@/components/Home/ShowCase";

export default function Home() {
  return (
    <main role="main">
      <Hero />
      <About />
      <ShowCase />
      <Reviews />
      <EmailList />
    </main>
  );
}
