import { _decorator, Component, Node, RigidBody2D, CCInteger , Vec2, Vec3, animation} from 'cc';
const { ccclass, property } = _decorator; 

@ccclass('Unit')

export class Unit extends Component {
private _rb: RigidBody2D;
private _animator: animation.AnimationController;


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

   public ControlUnit(direction, isDashing)
   {
    this.walk(direction);
    this.dash(isDashing);
    this.animateUnit(direction);
   }

   public walk(direction) {
        this._rb.applyForceToCenter( 
            new Vec2( direction.horizontal * this.currentWalkSpeed,  direction.vertical * this.currentWalkSpeed ), true );
        }

    public dash(isDashing)
    {
        if(isDashing && this.stamina > 0)
        {
            this.currentWalkSpeed =  this.dashSpeed;
        }
        else
        this.currentWalkSpeed = this.defaultWalkSpeed;
            
    }

    private animateUnit(direction)
    {
        this._animator.setValue('isWalking',direction.vertical || direction.horizontal);
        this.changeFaceDirection(direction);
    }

    private changeFaceDirection(direction)
    { 
        if(direction.horizontal !=0)
          this.node.scale = new Vec3 (direction.horizontal,this.node.scale.y, this.node.scale.z);   
    }
}


