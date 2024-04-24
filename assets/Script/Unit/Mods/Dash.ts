import { _decorator, CCInteger, Component, Node } from 'cc';
import { Modificator } from '../Basic/Modificator';
import StatType from '../../Enum/StatType';


const { ccclass, property } = _decorator;

@ccclass('Dash')
export class Dash extends Modificator{

    @property({type: CCInteger})
    private dashSpeed: number  = 5;

    @property({type: CCInteger})
    public dashCost : number = 1;
    
    public duration: number = 0.1;
    dashDone :boolean = false;

    public Modify(canDash : boolean)
    {
        if(canDash && this.readyToUse && this.unit.Stat(StatType.Stamina).isOverZero()){
                this.unit.Stat(StatType.Flow).addExtraAmount(this.dashSpeed);
                this.unit.Stat(StatType.Stamina).Spend(this.dashCost);
                this.unit.particle.dashParticle();
                this.readyToUse = false;
                this.scheduleOnce(this.unmodify, this.duration);
            }

        if(!canDash)
            this.readyToUse = true;;
    }

    private unmodify()
    {
        this.unit.Stat(StatType.Flow).resetToCurrent();
    }
}


