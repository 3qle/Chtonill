import { _decorator, Component, RigidBody2D} from 'cc';
import { DashParticle } from './DashParticle';
import { Health } from './Health';
import { Stamina } from './Stamina';
import { Model } from './Model';
import { Action } from './Experimental/Action';
import ActionType from './Experimental/ActionType';
import { Dash } from './Experimental/Dash';
import { Movement } from './Experimental/Movement';
import DirectionType from './Experimental/DirectionType';

const { ccclass, property } = _decorator; 

@ccclass('Unit')

export class Unit extends Component {

    private model: Model;
    private health: Health;
    stamina: Stamina;
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
        this.health = this.getComponent(Health);
        this.stamina = this.getComponent(Stamina);
        this.particle = this.getComponent(DashParticle);
        this.model = this.getComponent(Model);
    }

    public ControlAnimation(direction)
    {
        if(direction != null && (direction == DirectionType.Left || direction == DirectionType.Right)) 
            this.isLookingLeft = direction == DirectionType.Left? true:false;
        this.model.animateUnit(direction);
        this.model.changeFaceDirection(direction)
        this.particle.changeParticleDirection(this.model.GetSprite());
    }


    public ActionOnPress(press: boolean, type: ActionType, additionalProperty)
    {
        this.Actions[type].Do(this,press, additionalProperty);
    }

}

