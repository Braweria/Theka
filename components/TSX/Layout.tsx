import Header from "../../components/TSX/Header";
import Footer from "../../components/TSX/Footer";

export default function Layout({ children }) {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}