import { _decorator, Vec2 } from 'cc';

import { Unit } from '../Unit';
import DirectionType from '../../Enum/DirectionType';
import { Modificator } from '../Basic/Modificator';

const { ccclass, property } = _decorator;

@ccclass('Movement')
export class Movement extends Modificator {

    private walkSpeed: number;
    public holdable = true;
    direction: any =  {horizontal: 0, vertical : 0, none : 0, positiveStep: 1, negativeStep: -1};

    step : any = {none : 0, positive: 1, negative: -1};

    vector : Vec2;

    public Modify(unit : Unit, moving : boolean, action)
    {
        this.walkSpeed = unit.stats.Flow.currentAmount;
        this.setDirection(action.direction);
        unit.ControlAnimation(this.direction); 
        this.move(unit);
       
    }

    setVelocity(x,y) 
    {
       this.vector = new Vec2(x * this.walkSpeed,y * this.walkSpeed);
       
    }

    move(unit : Unit)
    {
        unit.rb.applyForceToCenter(this.vector , true );
    }
   

    setDirection(direction)
    {
        if(direction == DirectionType.Up)  
            this.setVelocity(this.step.none,this.step.positive);
        if(direction == DirectionType.Down) 
            this.setVelocity(this.step.none,this.step.negative);
        if(direction == DirectionType.Left)
            this.setVelocity(this.step.negative,this.step.none);
        if(direction == DirectionType.Right) 
            this.setVelocity(this.step.positive,this.step.none);
       

     
    }

}


