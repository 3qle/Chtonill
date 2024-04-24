import { _decorator, Component, Node } from 'cc';
import {KeyboardInput} from './KeyboardInput'
import { Unit } from '../Unit/Unit';
import { Cam } from './Cam';

const { ccclass, property } = _decorator;

@ccclass('Starter')
export class Starter extends Component {
    @property(KeyboardInput)
    public controller : KeyboardInput;

    @property(Cam)
    public camera : Cam;

    @property (Unit)
	public Unit : Unit;

    onLoad() {
       this.setUnit(this.Unit);
    }

    update(deltaTime: number) {
        this.controller.UpdateHoldingButtons();
        this.camera.updateCamera();
    }

    public setUnit(unit : Unit)
    {
        this.camera.SetUnit(unit);
        this.controller.Init(unit);
    }
}


