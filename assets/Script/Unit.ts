import { _decorator, Component, Node, RigidBody2D, CCInteger , Vec2, Vec3, animation, KeyCode, ParticleSystem2D} from 'cc';
const { ccclass, property } = _decorator; 

@ccclass('Unit')

export class Unit extends Component {
private _rb: RigidBody2D;
private _animator: animation.AnimationController;

@property({type: ParticleSystem2D})
private particle: ParticleSystem2D;

private currentWalkSpeed: number;
@property({type: CCInteger})
private defaultWalkSpeed: number;
@property({type: CCInteger})
private dashSpeed: number ;
@property({type: CCInteger})
private stamina: number ;

start() {
    this._rb = this.node.getComponent(RigidBody2D);
    this._animator = this.node.getComponent(animation.AnimationController);
    this.currentWalkSpeed = this.defaultWalkSpeed;
}

public ControlUnit(direction, buttons)
{
    this.walk(direction);
    this.dash(buttons.dash);
    this.animateUnit(direction);
}

public walk(direction) {
   
    this._rb.applyForceToCenter( 
        new Vec2( (direction.left + direction.right) * this.currentWalkSpeed, 
         (direction.up + direction.down) * this.currentWalkSpeed ), true );
    }
    

public dash(isDashing)
{
  
    if(isDashing && this.stamina > 0)  
    {
        this.currentWalkSpeed =  this.dashSpeed;
        this.dashParticle();
    }
   
    
    else
    {
        this.currentWalkSpeed = this.defaultWalkSpeed;
      
    }
        
}

private dashParticle()
{
    this.particle.emissionRate = 15;
    this.scheduleOnce( () => this.particle.emissionRate = 0,0.5);
}

private animateUnit(direction)
{
    this._animator.setValue('isWalking',direction.left || direction.right || direction.up || direction.down);
 // this.changeFaceDirection(direction.left,direction.right);
  
}

private changeFaceDirection(left:number,right:number)
{ 
    if(left !=0 )
        this.node.scale = new Vec3 (left,this.node.scale.y, this.node.scale.z);
    else   
    this.node.scale = new Vec3 (right,this.node.scale.y, this.node.scale.z);
}
}

