import { _decorator, Component, Node, RigidBody2D, CCInteger , Vec2} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Unit')

export class Unit extends Component {

@property({type: CCInteger})
private walkSpeed: number ;
private _rb: RigidBody2D;


    start() {
        this._rb = this.node.getComponent(RigidBody2D);
    
    }

   

   public walk(dir) {
        this._rb.applyForceToCenter( 
            new Vec2( dir.hor * this.walkSpeed,  dir.vert * this.walkSpeed ), true );

    }
}


