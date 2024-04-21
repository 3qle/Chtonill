import { _decorator, CCInteger, Component, Enum, KeyCode, Node } from 'cc';
import { Unit } from '../Unit';
const { ccclass, property } = _decorator;

import { Modificator } from './Modificator';
import ActionType from '../../Enum/ActionType';

@ccclass('Action')
export  class Action extends Component {
   
    public actionType : ActionType;
    public holdable : boolean;
    public actionDuration : number;
    @property({type : Modificator})
    public mainAction : Modificator;
    public mods : Modificator[] = [];
    protected unit : Unit;

    public  Do(unit : Unit, buttonPressed : boolean, action)
    {
     //   this.mods.forEach((mod,index)=>{mod.Modify(unit,buttonPressed)})
        this.mainAction.Modify(unit,buttonPressed, action);
    }
    

    constructor(type : ActionType, mod : Modificator) {
        super();
        this.actionType = type;
        this.mainAction = mod;
        this.holdable = mod.holdable;
        this.actionDuration = mod.actionDuration;
       
    }
}


