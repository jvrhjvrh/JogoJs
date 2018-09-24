export class personagem
{
    nome:   string;
    maxVida: number;
    atualVida:   number;
    ataque: number;
    defesa: number;
    mana: number;
    public TomaDano(dano : number): boolean
    {
        var danoTotal = this.VeDano(dano);
        if(danoTotal > 0)
            this.atualVida -= this.VeDano(dano);
        return this.ChecaMorte();
    }

    public VeDano(dano : number): number
    {
        return (dano - this.defesa);
    }

    private ChecaMorte():boolean
    {
        if(this.atualVida <= 0)
        {
            return true;
        }
        return false;
    }
}

export class jogador extends personagem
{
    inventario = [];
}

export class monstro extends personagem
{
    id:number;
    loot =[];
}