import { _decorator, CCInteger, Component, Node, input, Input, EventKeyboard, KeyCode, Prefab, Script } from 'cc';
import { Unit } from './Unit';
const { ccclass, property } = _decorator;

@ccclass('Controller')
export class Controller extends Component {


   @property (Unit)
   Unit : Unit;

  dir = { hor:0, vert:0 };

    protected onLoad(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown,this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp,this);
    }

    start () {
   
    }

    update (deltaTime: number) {
          this.Unit.walk(this.dir);
    }

    onKeyDown(event: EventKeyboard)
    {
       switch(event.keyCode)
       {
        case KeyCode.KEY_W:
            this.dir.vert = 1;
            break;
           case KeyCode.KEY_S:
            this.dir.vert = -1;
            break;
          case KeyCode.KEY_A:
            this.dir.hor = -1;
            break;
          case KeyCode.KEY_D:
            this.dir.hor = 1;
            break;
       }
    }

    onKeyUp (event: EventKeyboard){
        switch(event.keyCode)
        {
         case KeyCode.KEY_W:
           this.dir.vert = 0;
             break;
            case KeyCode.KEY_S:
           this.dir.vert = 0;
             break;
           case KeyCode.KEY_A:
          this.dir.hor = 0;
             break;
           case KeyCode.KEY_D:
          this.dir.hor = 0;
             break;
        }
}

}
