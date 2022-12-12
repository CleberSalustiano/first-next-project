import Image from "next/image";
import Link from "next/link";
import { Container } from "./style";

export default function proxima() {
	return (
		<Container>
			<h1>Teste navegação de páginas</h1>

			<Link href="/">
				Voltando para o inicio
			</Link>
		</Container>
	);
}
