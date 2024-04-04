import { _decorator, Component, Node, Camera } from 'cc';
import { Unit } from './Unit';
const { ccclass, property } = _decorator;

@ccclass('Cam')
export class Cam extends Component {
   
    @property (Unit)
	Unit : Unit;

    private _camera: Camera;
    start() {
       this._camera =  this.node.getComponent(Camera);
    }

    update(deltaTime: number) {
        let targetPos = this.Unit.node.getPosition();
        let currentPos = this.node.getPosition();

        currentPos.lerp(targetPos, 0.075);
        this.node.setPosition(currentPos);
        
      //  this._camera.orthoHeight = this._camera.orthoHeight + (currentPos.x - targetPos.x);
    }
}


