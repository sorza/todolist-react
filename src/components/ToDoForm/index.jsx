import './todo-form.style.css'
import { TextInput } from '../TextInput'
import { Botao } from '../Botao'

export function ToDoForm(onSubmit) {
    return (
        <form action={onSubmit} className="todo-form">
            <TextInput placeholder="Digite o item que deseja adicionar" />
            <Botao>
                Salvar item
            </Botao>
        </form>
    )
}