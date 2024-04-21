import { _decorator, Component, KeyCode, RigidBody2D} from 'cc';
import { DashParticle } from './DashParticle';
import ActionType from '../Enum/ActionType';
import { Action } from './Basic/Action';
import { Dash } from './Mods/Dash';
import { Movement } from './Mods/Movement';
import { Model } from './Basic/Model';
import DirectionType from '../Enum/DirectionType';
import { StatsManager } from './Basic/StatsManager';
import { InitialValues } from './Basic/InitialValues';


const { ccclass, property } = _decorator; 

@ccclass('Unit')

export class Unit extends Component {

    public initValues : InitialValues;
    public stats : StatsManager;
    private model: Model;

    particle: DashParticle;
    rb : RigidBody2D;
    isLookingLeft: boolean;

    Actions = {
        [ActionType.Dash]: new Action (ActionType.Dash, new Dash()),
        [ActionType.Movement]: new Action (ActionType.Movement, new Movement())
    }
  
    onLoad() {

        this.rb = this.getComponent(RigidBody2D);
        this.particle = this.getComponent(DashParticle);
        this.particle = this.getComponent(DashParticle);
        this.model = this.getComponent(Model);
        this.initValues = this.getComponent(InitialValues);
        this.stats = new StatsManager(this.initValues);
    }

    public ControlAnimation(direction)
    {
        if(direction != null && (direction == DirectionType.Left || direction == DirectionType.Right)) 
            this.isLookingLeft = direction == DirectionType.Left? true:false;
        this.model.animateUnit(direction);
        this.model.changeFaceDirection(direction)
        this.particle.changeParticleDirection(this.model.GetSprite());
    }


    public actionOnPress(press: boolean, action : any)
    {
        this.Actions[action.type].Do(this,press, action);
    }

    public isActionHoldable = (type : ActionType): boolean =>  this.Actions[type].holdable;

    public getActionDuration = (type : ActionType) : number => this.Actions[type].actionDuration;
    

}

