import Navbar from "@/components/navbar";
import "../styles/global.css"
import Index from "@/page";
import About from "@/page/about";
import Footer from "@/page/footer";
import Contact from "@/page/contact";
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Index />
      <About />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Contact />
      <Footer/>
    </main>
  );
}
