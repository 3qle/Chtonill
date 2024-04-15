import { _decorator, Vec2 } from 'cc';
import { Modificator } from './Modificator';
import { Unit } from '../Unit';
import DirectionType from './DirectionType';
const { ccclass, property } = _decorator;

@ccclass('Movement')
export class Movement extends Modificator {

    private currentWalkSpeed: number = 5;
    defaultWalkSpeed: number = 20;

    direction: any =  {up: 0, left: 0, right: 0, down: 0, none : 0, positiveStep: 1, negativeStep: -1};

    public Modify(unit : Unit, moving : boolean, additionalProperty)
    {
        this.setDirection(additionalProperty,moving);
        unit.ControlAnimation(this.direction); 
        unit.rb.applyForceToCenter(  new Vec2( ( this.direction.left + this.direction.right) * this.currentWalkSpeed,  
         (this.direction.up + this.direction.down) * this.currentWalkSpeed ), true );
    }
   

    setDirection(direction, pressed)
    {
        if(direction == DirectionType.Up)
            this.direction.up = pressed? this.direction.positiveStep : this.direction.none;  

        if(direction == DirectionType.Down)
            this.direction.down = pressed? this.direction.negativeStep : this.direction.none;  

        if(direction == DirectionType.Left)
            this.direction.left = pressed? this.direction.negativeStep : this.direction.none; 

        if(direction == DirectionType.Right)
            this.direction.right = pressed? this.direction.positiveStep : this.direction.none;

        
    }

    setSpeed(speed : number)
    {
        this.currentWalkSpeed = speed;
    }

    setDefaultSpeed()
    {
        this.currentWalkSpeed = this.defaultWalkSpeed;
    }
    
}


