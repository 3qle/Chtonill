import { _decorator, Component} from 'cc';
import { DashParticle } from './DashParticle';
import { Health } from './Health';
import { Legs } from './Legs';
import { Stamina } from './Stamina';
import { Model } from './Model';
const { ccclass, property } = _decorator; 

@ccclass('Unit')

export class Unit extends Component {

    private model: Model;
    private health: Health;
    private legs: Legs;
    private stamina: Stamina;
    private particle: DashParticle;
  
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

    public dash(dashPressed)
    {
            this.legs.dash(dashPressed, this.stamina, this.particle);  
    }

}

