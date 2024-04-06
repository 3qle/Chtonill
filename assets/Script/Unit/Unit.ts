import { _decorator, Component, Node, RigidBody2D, CCInteger , Vec2, animation, SpriteFrame, Sprite, ParticleSystem2D} from 'cc';
import { DashParticle } from './DashParticle';
import { Health } from './Health';
import { Legs } from './Legs';
import { Stamina } from './Stamina';
const { ccclass, property } = _decorator; 

@ccclass('Unit')

export class Unit extends Component {

    private _animator: animation.AnimationController;

    private health: Health;
    private legs: Legs;
    private stamina: Stamina;
    private particle: DashParticle;

    @property({type: Sprite})
    private sprite: Sprite;

    @property({type: [SpriteFrame]})
    private sprites: SpriteFrame[] = [];

   
    start() {
        this._animator = this.node.getComponent(animation.AnimationController);
        this.legs = this.getComponent(Legs);
        this.health = this.getComponent(Health);
        this.stamina = this.getComponent(Stamina);
        this.particle = this.getComponent(DashParticle);
        
        this.legs.Init();
    }

    public ControlUnit(direction, buttons)
    {
        this.legs.controlLegs(direction, buttons.dash,this.stamina);
        this.animateUnit(direction);
        this.changeFaceDirection(direction);
    }

   

    private animateUnit(direction)
    {
        let isWalking = direction.left || direction.right || direction.up || direction.down;
        this._animator.setValue('isWalking',isWalking);
    }

    private changeFaceDirection(direction)
    { 
         if(direction.left != 0)
            this.sprite.spriteFrame = this.sprites[0];
         if(direction.right != 0)
            this.sprite.spriteFrame = this.sprites[1]; 
        
         this.particle.changeParticleDirection(this.sprite.spriteFrame);
    }
}

