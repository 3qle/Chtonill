import { _decorator, CCInteger, Component, RigidBody2D, Vec2 } from 'cc';
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
        

    public dash(canDash)
    {
        this.currentWalkSpeed =  canDash? this.dashSpeed : this.defaultWalkSpeed;
    }
}


