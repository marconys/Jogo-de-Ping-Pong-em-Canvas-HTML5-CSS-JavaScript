class Jogador {
    constructor(ctx, teclado) {
        this.ctx = ctx
        this.teclado = teclado
        this.x = 0
        this.y = 0
        this.vel = 3

        this.nave = new Image()
        this.nave.src ="./img/nave.jpg"
        this.nave.addEventListener('load', () => {
            desenhar()
        })

    }

    //Método para gerenciar as direções
    gerenciar() {
        //Direção esquerda e direita
        if (this.teclado.esquerda) {
            if(this.x>0)
            this.x -= this.vel
        }
        if (this.teclado.direita) {
            if(this.x < this.ctx.canvas.width-this.nave.width)
            this.x += this.vel
        }
        //Direção para cima e para baixo
        if (this.teclado.cima) {
            if(this.y>0)
            this.y -= this.vel
        }
        if (this.teclado.baixo) {
            if(this.y <this.ctx.canvas.height-this.nave.height)
            this.y += this.vel
        }
    }
    //Método para desenhar
    desenhar() {
        this.gerenciar()
        this.ctx.drawImage(this.nave, this.x, this.y)
    }
}