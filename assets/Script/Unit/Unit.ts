import { _decorator, Component} from 'cc';
import { DashParticle } from './DashParticle';
import { Health } from './Health';
import { Legs } from './Legs';
import { Stamina } from './Stamina';
import { Model } from './Model';
import { Action } from './Experimental/Action';
import ActionType from './Experimental/ActionType';
import { Dash } from './Experimental/Dash';

const { ccclass, property } = _decorator; 

@ccclass('Unit')

export class Unit extends Component {

    private model: Model;
    private health: Health;
    legs: Legs;
    stamina: Stamina;
    particle: DashParticle;

    Actions = {
        [ActionType.Dash]: new Action (ActionType.Dash, new Dash())
    }
  
    start() {
        this.particle = this.getComponent(DashParticle);
        this.legs = this.getComponent(Legs);
        this.health = this.getComponent(Health);
        this.stamina = this.getComponent(Stamina);
        this.particle = this.getComponent(DashParticle);
        this.model = this.getComponent(Model);
    }

    public ControlOnUpdate(direction)
    {
        this.ControlLegs(direction);
    }

    public ControlOnKeyPressing(direction)
    {
        this.ControlAnimation(direction);
    }

    private ControlLegs(direction)
    {
        this.legs.walk(direction);
    }

    private ControlAnimation(direction)
    {
        this.model.animateUnit(direction);
        this.model.changeFaceDirection(direction)
        this.particle.changeParticleDirection(this.model.GetSprite());
    }


    public Action(press: boolean, type: ActionType)
    {
        switch (type)
        {
            case ActionType.Dash:
                this.Actions[ActionType.Dash].Use(this,press);
            break;
        }
    }
}

