import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React', concluida: false },
    { id: 2, titulo: 'Criar projeto Solicitações', concluida: true },
  ])

  const [novaTarefa, setNovaTarefa] = useState('')

  function adicionarTarefa() {
    if (novaTarefa.trim() === '') {
      return
    }

    const tarefa = {
      id: Date.now(),
      titulo: novaTarefa,
      concluida: false,
    }

    setTarefas([...tarefas, tarefa])
    setNovaTarefa('')
  }

  function concluirTarefa(id) {
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          concluida: !tarefa.concluida,
        }
      }

      return tarefa
    })

    setTarefas(tarefasAtualizadas)
  }

  function excluirTarefa(id) {
    const tarefasAtualizadas = tarefas.filter(
      (tarefa) => tarefa.id !== id
    )

    setTarefas(tarefasAtualizadas)
  }

  return (
    <main>
      <h1>Solicitações</h1>

      <input
        type="text"
        placeholder="Digite uma solicitação"
        value={novaTarefa}
        onChange={(event) => setNovaTarefa(event.target.value)}
      />

      <button onClick={adicionarTarefa}>
        Adicionar
      </button>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => concluirTarefa(tarefa.id)}
            />

            <span
              style={{
                textDecoration: tarefa.concluida
                  ? 'line-through'
                  : 'none',
              }}
            >
              {tarefa.titulo}
            </span>

            <button onClick={() => excluirTarefa(tarefa.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App