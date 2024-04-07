import { _decorator, animation, Component, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Model')
export class Model extends Component {

    private _animator: animation.AnimationController;

    @property({type: Sprite})
    private sprite: Sprite;

    @property({type: [SpriteFrame]})
    private sprites: SpriteFrame[] = [];

    start() {
        this._animator = this.node.getComponent(animation.AnimationController);
      //  this.sprite.spriteFrame = this.sprites[0];
    }

    public animateUnit(direction)
    {
        let isWalking = direction.left || direction.right || direction.up || direction.down;
        this._animator.setValue('isWalking',isWalking);
    }

    public changeFaceDirection(direction)
    { 
         if(direction.left != 0)
            this.sprite.spriteFrame = this.sprites[0];
         if(direction.right != 0)
            this.sprite.spriteFrame = this.sprites[1]; 
    }

    public GetSprite() : SpriteFrame
    {
        return this.sprite.spriteFrame;
    }
}


