import './app.css'
import {Exemplo} from './Exemplo'
export default function App() {
const listaAlunos = [
    {nome: "Moniky", idade: 15, cidade: "Nova Andradina"},
    {nome: "Anielly", idade: 16, cidade: "Nova Andradina"},
    {nome: "Mafer", idade: 16, cidade: "Nova Andradina"}
];
    return (
        <div>
            <h1> Hello World!</h1>
            <Exemplo lista =  {listaAlunos}/>
        </div>
    );
}