import { _decorator, Component, Node, ParticleSystem2D, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('DashParticle')
export class DashParticle extends Component {

    @property(ParticleSystem2D)
    private particle: ParticleSystem2D;

    activeEmission: number = 15;
    stoppedEmission: number = 0;
    particleLifeTime: number = 0.5;


    public dashParticle(isDashing:Boolean)
    {
        if(isDashing)
            {
                this.particle.emissionRate = this.activeEmission;
                this.scheduleOnce( () => this.particle.emissionRate = this.stoppedEmission,this.particleLifeTime);
            }
    }   

    public changeParticleDirection(spriteFrame : SpriteFrame)
    {
        this.particle.spriteFrame = spriteFrame;
    }
}

