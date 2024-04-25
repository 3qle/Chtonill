import { _decorator, animation, Component, Node, Sprite, SpriteFrame, Vec2 } from 'cc';
import DirectionType from '../../Enum/DirectionType';
const { ccclass, property } = _decorator;

@ccclass('Model')
export class Model extends Component {

    private _animator: animation.AnimationController;

    @property({type: Sprite})
    private sprite: Sprite;

    @property({type: Sprite})
    private outline: Sprite;

    @property({type: [SpriteFrame]})
    private sprites: SpriteFrame[] = [];

    @property({type: [SpriteFrame]})
    private outlines: SpriteFrame[] = [];

    start() {
        this._animator = this.node.getComponent(animation.AnimationController);
    }

    public animateUnit(velocity : Vec2)
    {
        let treshold = 0.6;
        let moving = velocity.x > treshold || velocity.x < -treshold || velocity.y > treshold || velocity.y < -treshold ;
        this._animator.setValue('isWalking',moving);
    }

    public changeFaceDirection(velocity)
    { 
        if(velocity < 0) {
            this.sprite.spriteFrame = this.sprites[0];
            this.outline.spriteFrame = this.outlines[0];
        }
          
        if(velocity > 0){
            this.sprite.spriteFrame = this.sprites[1];
            this.outline.spriteFrame = this.outlines[1]; 
        }
    }

    public noStamina(hasStamina: boolean)
    {
        this._animator.setValue('noStamina',!hasStamina);
    }

    public GetSprite() : SpriteFrame
    {
        return this.sprite.spriteFrame;
    }
}


