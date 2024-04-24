import { _decorator, CCInteger, Component, Enum, KeyCode, Node } from 'cc';
import { Unit } from '../Unit';
const { ccclass, property } = _decorator;

import { Modificator } from './Modificator';
import ActionType from '../../Enum/ActionType';

@ccclass('Action')
export  class Action extends Component {
   
    public actionType : ActionType;
   
    @property({type : Modificator})
    public mainAction : Modificator;
    public mods : Modificator[] = [];
    protected unit : Unit;

    constructor(unit : Unit, type : ActionType, mod : Modificator) {
        super();
        this.actionType = type;
        this.mainAction = mod;
        this.unit = unit;
    }

    public StartAction(buttonPressed : boolean, action) {
                this.mainAction.Modify(buttonPressed, action);
    }
}


