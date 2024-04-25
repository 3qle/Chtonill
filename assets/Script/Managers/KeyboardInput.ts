import { _decorator, Component,  input, Input, EventKeyboard, KeyCode} from 'cc';
import ActionType from '../Enum/ActionType';
import DirectionType from '../Enum/DirectionType';
import { Unit } from '../Unit/Unit';

const { ccclass, property } = _decorator;
@ccclass('KeyboardInput')
export class KeyboardInput extends Component {

	private unit : Unit;

	private buttons = {
		[KeyCode.SPACE] : {isPressed : false, type :[ActionType.Dash]},
		[KeyCode.KEY_W] : {isPressed : false, type :[ActionType.Movement], direction : [DirectionType.Up]},
		[KeyCode.KEY_S] : {isPressed : false, type :[ActionType.Movement], direction : [DirectionType.Down]},
		[KeyCode.KEY_A] : {isPressed : false, type :[ActionType.Movement], direction : [DirectionType.Left]},
		[KeyCode.KEY_D] : {isPressed : false, type :[ActionType.Movement], direction : [DirectionType.Right]},
	};

	public Init(unit : Unit) {
		this.unit = unit;	
		input.on(Input.EventType.KEY_DOWN, this.onKey,this);
		input.on(Input.EventType.KEY_UP, this.onKeyUp,this);
	}

	public UpdateHoldingButtons()
	{
		Object.keys(this.buttons).forEach(key => {
			this.unit.Action(this.buttons[key].isPressed, this.buttons[key]);})
	} 

	private onKey = (button: EventKeyboard) => 
		this.buttons[button.keyCode].isPressed = true;
	private onKeyUp = (button: EventKeyboard) => 
		this.buttons[button.keyCode].isPressed = false;
}
