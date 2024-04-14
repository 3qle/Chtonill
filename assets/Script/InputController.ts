import { _decorator, CCInteger, Component, Node, input, Input, EventKeyboard, KeyCode, Prefab, Script } from 'cc';
import { Unit } from './Unit/Unit';
import ActionType from './Unit/Experimental/ActionType';
const { ccclass, property } = _decorator;
@ccclass('InputController')
export class InputController extends Component {

	private Unit : Unit;

	direction: any =  {up: 0, left:0, right:0, down:0};
	
	protected onLoad(): void {
	input.on(Input.EventType.KEY_DOWN, this.onKeyDown,this);
	input.on(Input.EventType.KEY_UP, this.onKeyUp,this);
	}

	setUnit(unit: Unit)
	{
 		this.Unit = unit;	
	}

	updateController() {
		this.Unit.ControlOnUpdate(this.direction);
	}


	onKeyDown(event: EventKeyboard)
	{
		switch(event.keyCode)
		{
		case KeyCode.KEY_W:
			this.direction.up = 1;
			break;
		case KeyCode.KEY_S:
			this.direction.down= -1;
			break;
		case KeyCode.KEY_A:
			this.direction.left = -1;
			break;
		case KeyCode.KEY_D:
			this.direction.right = 1;
			break;
		case KeyCode.SPACE:
			this.press(ActionType.Dash);
			break;
		}
		this.Unit.ControlOnKeyPressing(this.direction);
	}
	
	press(type : ActionType ) 
	{
		this.Unit.Action(true, type);
		this.scheduleOnce(() => this.Unit.Action(false, type), 0.1);
	}
	
	onKeyUp (event: EventKeyboard)
	{
		switch(event.keyCode)
		{
			case KeyCode.KEY_W:
				this.direction.up = 0;
				break;
			case KeyCode.KEY_S:
				this.direction.down = 0;
				break;
			case KeyCode.KEY_A:
				this.direction.left = 0;
				break;
			case KeyCode.KEY_D:
				this.direction.right = 0;
				break;      
		}
		this.Unit.ControlOnKeyPressing(this.direction);
	}

}
