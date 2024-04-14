import { _decorator, CCInteger, Component, Node } from 'cc';
import { Action } from './Action';
import { Unit } from '../Unit';
import ActionType from './ActionType';
import { Modificator } from './Modificator';
const { ccclass, property } = _decorator;

@ccclass('Dash')
export class Dash extends Modificator{

    @property({type: CCInteger})
    private dashSpeed: number ;
    @property({type: CCInteger})
    public dashCost : number;


    // protected start(): void {
    //     this.actionType = ActionType.Dash;
    // }

    public Modify(unit : Unit, canDash : boolean)
    {

        if(canDash && unit.stamina.hasStamina())
            {
                unit.legs.setSpeed(this.dashSpeed);
                unit.stamina.spend(this.dashCost);
                unit.particle.dashParticle(true);
            }
        else
           unit.legs.setDefaultSpeed();
    }
}


