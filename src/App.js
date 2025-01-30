import { useState } from "react";
import "./style.scss";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState("");
  const [segundoValor, setSegundoValor] = useState("");
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  const porcentagem = () => {
    setResultado((primeiroValor / 100) * segundoValor);
  };

  const raizQuadrada = () => {
    setResultado(Math.sqrt(primeiroValor));
  };

  // Função para resetar os valores
  const resetar = () => {
    setPrimeiroValor("");
    setSegundoValor("");
    setResultado(0);
  };

  return (
    <main>
      <h1>Calculadora</h1>
      <input
        placeholder="Digite um número"
        type="Number"
        value={primeiroValor}
        onChange={capturandoPrimeiroValor}
      />
      <input
        placeholder="Digite um número"
        type="Number"
        value={segundoValor}
        onChange={capturandoSegundoValor}
      />

      <section className="botao">
        <button onClick={soma}>+</button>
        <button onClick={subtracao}>-</button>
        <button onClick={multiplicacao}>x</button>
        <button onClick={divisao}>/</button>
        <button onClick={porcentagem}>%</button>
        <button onClick={raizQuadrada}>√</button> {/* Botão de raiz quadrada */}
        <div>
          <button onClick={resetar} className="botao-resetar">
            Reset
          </button>
        </div>
      </section>
      <h3>Result: {resultado}</h3>
    </main>
  );
}
