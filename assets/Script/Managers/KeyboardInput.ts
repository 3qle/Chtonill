import { _decorator, Component,  input, Input, EventKeyboard, KeyCode} from 'cc';
import ActionType from '../Enum/ActionType';
import DirectionType from '../Enum/DirectionType';
import { Unit } from '../Unit/Unit';

const { ccclass, property } = _decorator;
@ccclass('KeyboardInput')
export class KeyboardInput extends Component {

	private unit : Unit;
	private holdingButtons = [];

	private buttons = {
		[KeyCode.SPACE] : {type :[ActionType.Dash]},
		[KeyCode.KEY_W] : {type :[ActionType.Movement], direction : [DirectionType.Up]},
		[KeyCode.KEY_S] : {type :[ActionType.Movement], direction : [DirectionType.Down]},
		[KeyCode.KEY_A] : {type :[ActionType.Movement], direction : [DirectionType.Left]},
		[KeyCode.KEY_D] : {type :[ActionType.Movement], direction : [DirectionType.Right]},
	};

	protected onLoad() {
		input.on(Input.EventType.KEY_DOWN, this.onKeyDown,this);
		input.on(Input.EventType.KEY_UP, this.onKeyUp,this);
	}

	public SetUnit = (unit: Unit) => 
		this.unit = unit;	

	public UpdateHoldingButtons = () => 
		this.holdingButtons.forEach(action => {this.doUnitAction(true,action)});


	private onKeyDown = (event: EventKeyboard) => 
		this.buttonPress(this.buttons[event.keyCode]);


	private onKeyUp = (event: EventKeyboard) => 
		this.buttonRelease(this.buttons[event.keyCode]);


	private buttonIsHolding = (action : any) : boolean => 
		this.holdingButtons.indexOf(action) == -1? false: true;


    private doUnitAction = (doAction : boolean , action : any) => 
		this.unit.actionOnPress(doAction, action);


	private buttonPress(action : any) {
		if(this.unit.isActionHoldable(action.type))	{
			if(!this.buttonIsHolding(action))
				this.holdingButtons.push(action);
		}
		else {
			this.doUnitAction(true, action);
			this.scheduleOnce(() => this.doUnitAction(false, action), this.unit.getActionDuration(action.type));
		}
	} 
	

	private buttonRelease (action : any) {
		if(this.unit.isActionHoldable(action.type) && this.buttonIsHolding(action))
			this.holdingButtons.splice(this.holdingButtons.indexOf(action),1);
	}

	
	
	
	
}
