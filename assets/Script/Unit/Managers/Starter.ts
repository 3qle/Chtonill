import { _decorator, Component, Node } from 'cc';
import { InputController } from '../../InputController';
import { Cam } from '../../Cam';
import { Unit } from '../Unit';
const { ccclass, property } = _decorator;

@ccclass('Starter')
export class Starter extends Component {
    @property(InputController)
    public controller : InputController;

    @property(Cam)
    public camera : Cam;

    @property (Unit)
	public Unit : Unit;

    onLoad() {
       this.setUnit(this.Unit);
    }

    update(deltaTime: number) {
        this.controller.updateController();
        this.camera.updateCamera();
    }

    public setUnit(unit : Unit)
    {
        this.camera.SetUnit(unit);
        this.controller.setUnit(unit);
    }
}


