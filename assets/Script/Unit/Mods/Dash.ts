import { _decorator, CCInteger, Component, Node } from 'cc';
import { Unit } from '../Unit';
import { Modificator } from '../Basic/Modificator';


const { ccclass, property } = _decorator;

@ccclass('Dash')
export class Dash extends Modificator{

    @property({type: CCInteger})
    private dashSpeed: number  = 5;

    @property({type: CCInteger})
    public dashCost : number = 1;

    public holdable: boolean = false;

    public actionDuration: number = 0.1;
    

    public Modify(unit : Unit, canDash : boolean)
    {
        if(canDash &&  unit.stats.Stamina.hasStamina())
            {
                unit.stats.Flow.addExtraAmount(this.dashSpeed);
                unit.stats.Stamina.spend(this.dashCost);
                unit.particle.dashParticle(true);
            }
        else
            unit.stats.Flow.resetToCurrent();

    }
}


