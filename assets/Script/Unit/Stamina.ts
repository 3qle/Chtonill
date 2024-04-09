import { _decorator, CCBoolean, CCInteger, Component, Node } from 'cc';
import { Model } from './Model';
const { ccclass, property } = _decorator;

@ccclass('Stamina') 
export class Stamina extends Component {

    @property(CCInteger)
    maxStamina : number;
   
    @property(CCInteger)
    refillSpeed : number;

    @property(CCInteger)
    refillDelay : number;
    
    @property(CCInteger)
    private amount : number;

    @property(Model)
    model : Model;
    
    protected start = () => this.amount = this.maxStamina;    
    
    public hasStamina() : boolean 
    {
        this.model.noStamina(this.amount > 0);
        return  this.amount > 0 ;
    }
    
    public refill = () => this.amount += 1;

    public spend(a : number)
    {
        this.amount -= a;
        console.log(this.maxStamina);
        this.unschedule(this.refill);
        this.schedule(this.refill,this.refillSpeed,(this.maxStamina - this.amount) - 1, this.refillDelay);
    }

}
