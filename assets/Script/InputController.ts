import { _decorator, CCInteger, Component, Node, input, Input, EventKeyboard, KeyCode, Prefab, Script, Vec2 } from 'cc';
import { Unit } from './Unit/Unit';
import ActionType from './Unit/Experimental/ActionType';
import DirectionType from './Unit/Experimental/DirectionType';
const { ccclass, property } = _decorator;
@ccclass('InputController')
export class InputController extends Component {

	private Unit : Unit;
	
	protected onLoad(): void {
	input.on(Input.EventType.KEY_DOWN, this.onKeyDown,this);
	input.on(Input.EventType.KEY_UP, this.onKeyUp,this);
	input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing,this);
	}

	setUnit = (unit: Unit) =>
		this.Unit = unit;	
	

	press(type : ActionType ) 
	{
		this.Unit.ActionOnPress(true, type, null);
		this.scheduleOnce(() => this.Unit.ActionOnPress(false, type, null), 0.1);
	}

	hold = (type: ActionType, additionalProperty) =>    
		this.Unit.ActionOnPress(true,type,additionalProperty);
	

	release = (type: ActionType, additionalProperty) =>
		 this.Unit.ActionOnPress(false,type,additionalProperty);
	

	
	onKeyDown(event: EventKeyboard)
	{
		switch(event.keyCode)
		{
			case KeyCode.SPACE:
			this.press(ActionType.Dash);
			break;
		}
	}
	
	onKeyPressing(event: EventKeyboard)
	{
		switch(event.keyCode)
		{
		case KeyCode.KEY_W:
			this.hold(ActionType.Movement,DirectionType.Up);
			break;
		case KeyCode.KEY_S:
			this.hold(ActionType.Movement,DirectionType.Down);
			break;
		case KeyCode.KEY_A:
			this.hold(ActionType.Movement,DirectionType.Left);
			break;
		case KeyCode.KEY_D:
			this.hold(ActionType.Movement,DirectionType.Right);
			break;
		}
	}
	
	onKeyUp (event: EventKeyboard)
	{
		switch(event.keyCode)
		{
			case KeyCode.KEY_W:
			this.release(ActionType.Movement,DirectionType.Up);
			break;
		case KeyCode.KEY_S:
			this.release(ActionType.Movement,DirectionType.Down);
			break;
		case KeyCode.KEY_A:
			this.release(ActionType.Movement,DirectionType.Left);
			break;
		case KeyCode.KEY_D:
			this.release(ActionType.Movement,DirectionType.Right);
			break;
		}
	}



}
