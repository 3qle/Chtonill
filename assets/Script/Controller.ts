import { _decorator, CCInteger, Component, Node, SpriteRenderer, input, Input, EventKeyboard, KeyCode, RigidBody2D, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Controller')
export class Controller extends Component {

    @property({type: CCInteger})
    private walkSpeed: number = 1000;
    private walkDirX: number = 0;
    private walkDirY: number = 0;
    private _rb: RigidBody2D;

    protected onLoad(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown,this);
         input.on(Input.EventType.KEY_UP, this.onKeyUp,this);
    }

    start () {
        this._rb = this.node.getComponent(RigidBody2D);
    }

    update (deltaTime: number) {
        this._rb.applyForceToCenter( new Vec2( this.walkDirX * this.walkSpeed,  this.walkDirY * this.walkSpeed ), true );
    
    }

    onKeyDown(event: EventKeyboard)
    {
       switch(event.keyCode)
       {
        case KeyCode.KEY_W:
            this.walkDirY = 1;
            break;
           case KeyCode.KEY_S:
            this.walkDirY = -1;
            break;
          case KeyCode.KEY_A:
            this.walkDirX = -1;
            break;
          case KeyCode.KEY_D:
            this.walkDirX = 1;
            break;
       }
    }

    onKeyUp (event: EventKeyboard){
        switch(event.keyCode)
        {
         case KeyCode.KEY_W:
             this.walkDirY = 0;
             break;
            case KeyCode.KEY_S:
             this.walkDirY = 0;
             break;
           case KeyCode.KEY_A:
             this.walkDirX = 0;
             break;
           case KeyCode.KEY_D:
             this.walkDirX = 0;
             break;
        }
}

}
