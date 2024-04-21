import { _decorator, Component, Node } from 'cc';
import { Unit } from '../Unit';
const { ccclass, property } = _decorator;

@ccclass('Modificator')
export abstract class Modificator extends Component {
    
    protected unit: Unit;
    public holdable : boolean;
    public actionDuration: number;
    public abstract Modify(unit : Unit, pressed : boolean, additionalProperty);

   
}


