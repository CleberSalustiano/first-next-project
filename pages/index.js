import Head from 'next/head'
import { useState } from 'react';
import { Container } from './style'

export default function Home() {

  const [cor, setCor] = useState(false);

  return (
    <Container cor={cor}>
      <Head>
        <title>Teste do Next</title>
      </Head>

      <h1>Teste para o container</h1>
      <button onClick={
        () => {
          setCor(!cor);
        }
      }>
        Alterna cor
      </button>
    </Container>
  )
}
