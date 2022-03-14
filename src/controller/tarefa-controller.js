import Tarefa from '../model/tarefa-modeltarefa'

const tarefaController = (app, bd)=>{
    app.get('/tarefa', (req, res)=>{
        const todasTarefas = bd.tarefas

        res.json({
            "tarefas": todasTarefas,
            "erro": false
        })
    })

    app.get('/tarefa/titulo/:titulo', (req, res)=>{
        const titulo = req.params.titulo

        const tarefaEncontrada = bd.tarefas.filter(tarefa=>(tarefa.titulo == titulo))

        res.json({
            "tarefa": tarefaEncontrada,
            "erro": false
        })
    })

    app.post('/tarefa',(req, res)=>{
        const body = req.body

        try {
            const novaTarefa = new Tarefa(body.titulo, body.descricao, body.status)

            bd.tarefas.push(novaTarefa)

            res.json({
                "msg": `Tarefa com título ${novaTarefa.titulo} inserida com sucesso`,
                "tarefas": novaTarefa,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/tarefa/titulo/:titulo', (req, res)=>{
        const titulo = req.params.titulo

        const novoDB = bd.tarefas.filter(tarefa=>(tarefa.titulo !== titulo))
        bd.tarefas = novoDB

        res.json({
            "msg": `Tarefa de título ${titulo} excluida com sucesso`,
            "erro": false
        })
    })

    app.put('/tarefa/titulo/:titulo', (req, res)=>{
        const titulo = req.params.titulo
        const body = req.body

        try {
            const tarefaAtualizada = new Tarefa(body.titulo, body.descricao, body.status)


            bd.tarefas = bd.tarefas.map(tarefa => {
                if(tarefa.titulo === titulo){
                    return tarefaAtualizada
                }
                return tarefa    
            });

            res.json({
                "msg": `Tarefa de titulo ${tarefaAtualizada.titulo} atualizada com sucesso`,
                "tarefa": tarefaAtualizada,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
}

export default tarefaController