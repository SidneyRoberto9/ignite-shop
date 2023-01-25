import { AppProps } from "next/app";
import Image from "next/image";

import logoImg from "../assets/logo.svg";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image alt="" src={logoImg} />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
