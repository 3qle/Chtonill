import { _decorator, Component, Node, ParticleSystem2D, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('DashParticle')
export class DashParticle extends Component {

    @property(ParticleSystem2D)
    private particle: ParticleSystem2D;

    activeEmission: number = 15;
    stoppedEmission: number = 0;
    particleLifeTime: number = 0.5;


    public dashParticle()
    {
        this.setEmission(this.activeEmission);
        this.scheduleOnce(() => this.setEmission(this.stoppedEmission),this.particleLifeTime);
    }   

    public changeParticleDirection(spriteFrame : SpriteFrame)
    {
        this.particle.spriteFrame = spriteFrame;
    }

    private setEmission(emission : number)
    {
        this.particle.emissionRate = emission;
    }
}

