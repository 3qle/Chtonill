import { _decorator, CCInteger, Component, Node, input, Input, EventKeyboard, KeyCode, Prefab, Script } from 'cc';
import { Unit } from './Unit';
const { ccclass, property } = _decorator;

@ccclass('Controller')
export class Controller extends Component {

   @property (Unit)
   Unit : Unit;
   
   direction: any = { horizontal:0, vertical:0 };
   isDashing: boolean;

    protected onLoad(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown,this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp,this);
    }

    start () {
   
    }

    update () {
        this.Unit.ControlUnit(this.direction,this.isDashing);
    }

    
    onKeyDown(event: EventKeyboard)
    {
          switch(event.keyCode)
       {
        case KeyCode.KEY_W:
            this.direction.vertical = 1;
            break;
           case KeyCode.KEY_S:
            this.direction.vertical = -1;
            break;
          case KeyCode.KEY_A:
            this.direction.horizontal = -1;
            break;
          case KeyCode.KEY_D:
            this.direction.horizontal = 1;
            break;
            case KeyCode.SPACE:
            this.isDashing = true;
            break;

       }
    }

    onKeyUp (event: EventKeyboard)
    {
        switch(event.keyCode)
        {
         case KeyCode.KEY_W:
           this.direction.vertical = 0;
             break;
            case KeyCode.KEY_S:
           this.direction.vertical = 0;
             break;
           case KeyCode.KEY_A:
          this.direction.horizontal = 0;
             break;
           case KeyCode.KEY_D:
          this.direction.horizontal = 0;
             break;
             case KeyCode.SPACE:
              this.isDashing = false;
              break;
        }
}

}
