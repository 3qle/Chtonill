import { _decorator, Vec2 } from 'cc';
import DirectionType from '../../Enum/DirectionType';
import { Modificator } from '../Basic/Modificator';
import StatType from '../../Enum/StatType';

const { ccclass, property } = _decorator;

@ccclass('Movement')
export class Movement extends Modificator {

    private walkSpeed: number;
    private step : any = {none : 0, positive: 1, negative: -1};
    private vector : Vec2;

    public Modify( moving : boolean, action)
    {
        if(moving)
            {
                this.walkSpeed = this.unit.Stat(StatType.Flow).currentAmount;
                this.setDirection(action.direction);
               
                this.move();
            }
    }

    private setVelocity = (x,y) =>
         this.vector = new Vec2(x * this.walkSpeed,y * this.walkSpeed);
    
    private move = () =>
         this.unit.rb.applyForceToCenter(this.vector , true );
    

    private setDirection(direction){
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


