import { _decorator, CCInteger, Component, RigidBody2D, Vec2 } from 'cc';
import { Stamina } from './Stamina';
import { DashParticle } from './DashParticle';
const { ccclass, property } = _decorator;

@ccclass('Legs')
export class Legs extends Component{

    private currentWalkSpeed: number;
    @property({type: CCInteger})
    private defaultWalkSpeed: number;
    @property({type: CCInteger})
    private dashSpeed: number ;
    @property({type: CCInteger})
    public dashCost : number;

    _rb : RigidBody2D;
  
     start()
    {
        this._rb = this.getComponent(RigidBody2D);
        this.currentWalkSpeed = this.defaultWalkSpeed;
    }

    
    public walk(direction)
    {
        this._rb.applyForceToCenter( 
            new Vec2( (direction.left + direction.right) * this.currentWalkSpeed, 
            (direction.up + direction.down) * this.currentWalkSpeed ), true );
    }
        

    public dash(canDash: boolean, stamina: Stamina, particle: DashParticle)
    {
        if(canDash && stamina.hasStamina())
            {
                this.currentWalkSpeed =  this.dashSpeed;
                stamina.spend(this.dashCost);
                particle.dashParticle(true);
            }
        else
           this.currentWalkSpeed = this.defaultWalkSpeed;
    }
}


