import { _decorator, animation, Component, Node, Sprite, SpriteFrame } from 'cc';
import { Stamina } from './Stamina';
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

    public animateUnit(direction)
    {
        let isWalking = direction.left || direction.right || direction.up || direction.down;
        this._animator.setValue('isWalking',isWalking);
    }

    public changeFaceDirection(direction)
    { 
        if(direction.left != 0)
            {
                this.sprite.spriteFrame = this.sprites[0];
                this.outline.spriteFrame = this.outlines[0];
            }
          
        if(direction.right != 0)
            {
                this.sprite.spriteFrame = this.sprites[1];
                this.outline.spriteFrame = this.outlines[1]; 
            }
    }

    public noStamina(hasStamina: boolean)
    {
        console.log(hasStamina);
        this._animator.setValue('noStamina',!hasStamina);
    }

    public GetSprite() : SpriteFrame
    {
        return this.sprite.spriteFrame;
    }
}


