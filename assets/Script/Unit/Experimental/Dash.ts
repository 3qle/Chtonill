import { _decorator, CCInteger, Component, Node } from 'cc';
import { Action } from './Action';
import { Unit } from '../Unit';
import ActionType from './ActionType';
import { Modificator } from './Modificator';
const { ccclass, property } = _decorator;

@ccclass('Dash')
export class Dash extends Modificator{

    @property({type: CCInteger})
    private dashSpeed: number  = 5;
    @property({type: CCInteger})
    public dashCost : number = 1;


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


