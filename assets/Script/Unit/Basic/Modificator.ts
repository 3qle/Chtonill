import { _decorator, Component, Node } from 'cc';
import { Unit } from '../Unit';
const { ccclass, property } = _decorator;

@ccclass('Modificator')
export abstract class Modificator extends Component {
    
    protected unit: Unit;
    public duration: number;
    protected readyToUse :boolean = false;
    
    public abstract Modify(pressed : boolean, additionalProperty);

    constructor(unit : Unit){
        super();
        this.unit = unit;
    }

}


