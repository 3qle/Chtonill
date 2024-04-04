import { _decorator, CCInteger, Component, Node, input, Input, EventKeyboard, KeyCode, Prefab, Script } from 'cc';
import { Unit } from './Unit';
const { ccclass, property } = _decorator;

@ccclass('Controller')
export class Controller extends Component {

	@property (Unit)
	Unit : Unit;

	direction: any =  {up: 0, left:0, right:0, down:0};
	buttons = {dash : false};

	protected onLoad(): void {
	input.on(Input.EventType.KEY_DOWN, this.onKeyDown,this);
		input.on(Input.EventType.KEY_UP, this.onKeyUp,this);
		
	}

	start () {

	}

	update () {
		this.Unit.ControlUnit(this.direction,this.buttons);
	}

	buttonPress(button)
	{
		this.buttons[button] = true;
		this.scheduleOnce(()=> {this.buttons[button] = false},0.1);
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
			this.buttonPress('dash');
			break;
		}
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
	}

}
