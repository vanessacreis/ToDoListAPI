class Tarefa{
    constructor(titulo, descricao, status){
        this.titulo = titulo
        this.descricao = descricao
        this.status = this._validaStatus(status)
        this.dataCriacao = new Date().toLocaleString()
    }

    _validaStatus = (status)=>{
        const statusPermitidos = ["Feito", "Fazendo", "A fazer"]
        if(statusPermitidos.includes(status)){
            return status
        }
        else{
            throw new Error("Status não permitido. O status deve ser: Feito, Fazendo, A fazer")
        }
    }

}

export default Tarefa