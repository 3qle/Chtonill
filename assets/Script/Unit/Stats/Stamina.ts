import { _decorator, CCBoolean, CCInteger, Component, Node } from 'cc';
import { Model } from '../Basic/Model';
import { Stat } from '../Basic/Stat';
import { InitialValues } from '../Basic/InitialValues';


const { ccclass, property } = _decorator;

@ccclass('Stamina') 
export class Stamina extends Stat {

    @property(CCInteger)
    refillSpeed : number;

    @property(CCInteger)
    refillDelay : number;


    @property(Model)
    model : Model;

    constructor(values : InitialValues)
    {
        super();
        this.defaultAmount = values.staminaDefault;
        this.currentAmount = values.staminaDefault;
        this.refillSpeed = values.staminaRefillSpeed;
        this.refillDelay = values.staminaRefillDelay;

    }
      
    public hasStamina() : boolean 
    {
     //   this.model.noStamina(this.currentAmount > 0);
        return  this.currentAmount > 0 ;
    }
    
    public refill = () => this.currentAmount += 1;

   
    public spend(a : number)
    {
        this.currentAmount -= a;
        this.unschedule(this.refill);
        this.schedule(this.refill,this.refillSpeed,(this.defaultAmount - this.currentAmount) - 1, this.refillDelay);
    }

}
