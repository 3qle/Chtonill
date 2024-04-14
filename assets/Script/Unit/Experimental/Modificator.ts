import { _decorator, Component, Node } from 'cc';
import { Unit } from '../Unit';
const { ccclass, property } = _decorator;

@ccclass('Modificator')
export abstract class Modificator extends Component {
    
    public abstract Modify(unit : Unit, canDash : boolean);
}


