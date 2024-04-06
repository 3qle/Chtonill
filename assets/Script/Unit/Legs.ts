import { _decorator, CCInteger, Component, Node, ParticleSystem2D, RigidBody2D, Vec2 } from 'cc';
import { DashParticle } from './DashParticle';
import { Stamina } from './Stamina';
const { ccclass, property } = _decorator;

@ccclass('Legs')
export class Legs extends Component{

    private currentWalkSpeed: number;
    @property({type: CCInteger})
    private defaultWalkSpeed: number;
    @property({type: CCInteger})
    private dashSpeed: number ;
    @property({type: CCInteger})

    _rb : RigidBody2D;
    _particle : DashParticle;
   

    public Init()
    {
        this._rb = this.getComponent(RigidBody2D);
        this._particle = this.getComponent(DashParticle);

        this.currentWalkSpeed = this.defaultWalkSpeed;
    }

    public controlLegs(direction,isDashing, Stamina)
    {
        this.walk(direction);
        this.dash(isDashing, Stamina);
    }

    public walk(direction)
    {
        this._rb.applyForceToCenter( 
            new Vec2( (direction.left + direction.right) * this.currentWalkSpeed, 
            (direction.up + direction.down) * this.currentWalkSpeed ), true );
    }
        

    public dash(isDashing, Stamina : Stamina)
    {
        this.currentWalkSpeed =  isDashing && Stamina.amount > 0? this.dashSpeed : this.defaultWalkSpeed;
        this._particle.dashParticle(isDashing && Stamina.amount > 0);  
    }
}


