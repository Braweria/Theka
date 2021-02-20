import type { AppProps } from 'next/app'
import "../components/SCSS/Global.global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}