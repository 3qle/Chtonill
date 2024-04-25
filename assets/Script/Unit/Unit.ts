import { _decorator, Component, math, RigidBody2D} from 'cc';
import { DashParticle } from './DashParticle';
import ActionType from '../Enum/ActionType';
import { Action } from './Basic/Action';
import { Dash } from './Mods/Dash';
import { Movement } from './Mods/Movement';
import { Model } from './Basic/Model';
import { StatsManager } from './Basic/StatsManager';
import { InitialValues } from './Basic/InitialValues';
import StatType from '../Enum/StatType';
import { Stat } from './Basic/Stat';


const { ccclass, property } = _decorator; 

@ccclass('Unit')

export class Unit extends Component {

    public initValues : InitialValues;
    private stats : StatsManager;
    public model: Model;

    particle: DashParticle;
    rb : RigidBody2D;
    isLookingLeft: boolean;

    Actions = {
        [ActionType.Dash]: new Action (this,ActionType.Dash, new Dash(this)),
        [ActionType.Movement]: new Action (this,ActionType.Movement, new Movement(this))
    }
  
    onLoad() {

        this.rb = this.getComponent(RigidBody2D);
        this.particle = this.getComponent(DashParticle);
        this.particle = this.getComponent(DashParticle);
        this.model = this.getComponent(Model);
        this.initValues = this.getComponent(InitialValues);
        this.stats = new StatsManager(this.initValues, this);
    }

    public ControlAnimation()
    {
        this.model.animateUnit(this.rb.linearVelocity);
        this.model.changeFaceDirection(this.rb.linearVelocity.x)
        this.particle.changeParticleDirection(this.model.GetSprite());
    }


    public Action(press: boolean, action : any)
    {
       
        this.Actions[action.type].StartAction(press, action);
    }

    public Stat = (type : StatType) : Stat => this.stats.Stats[type];
   
   
}

