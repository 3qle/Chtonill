import { _decorator, Component, Node, Camera, Vec2, Vec3 } from 'cc';
import { Unit } from './Unit/Unit';
const { ccclass, property } = _decorator;

@ccclass('Cam')
export class Cam extends Component {
   
    @property (Unit)
	Unit : Unit;

    private _camera: Camera;

    currentPos: Vec3;
    targetPos: Vec3;
    defaultCameraDistance : number;
    start() {
       this._camera =  this.node.getComponent(Camera);
       this.defaultCameraDistance = this._camera.orthoHeight;
    }

    update(deltaTime: number) {
        this.targetPos = this.Unit.node.getPosition();
        this.currentPos = this.node.getPosition();

        this.currentPos.lerp(this.targetPos, 0.075);
        this.node.setPosition(this.currentPos);
       
        this.zoomCamera();
    
    }

    zoomCamera()
    {
        let zoom = (this.targetPos.x - this.currentPos.x  + this.targetPos.y - this.currentPos.y);
        zoom = zoom < 0? -zoom:zoom;
        this._camera.orthoHeight = this.defaultCameraDistance + zoom;
    }
}


