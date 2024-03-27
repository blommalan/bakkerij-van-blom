import '../globals.css';
import Footer from "@/src/components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer></Footer>
    </div>
  )
}

export default MyApp;