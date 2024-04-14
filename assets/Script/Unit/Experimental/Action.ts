import { _decorator, CCInteger, Component, Enum, Node } from 'cc';
import { Unit } from '../Unit';
const { ccclass, property } = _decorator;
import ActionType from './ActionType';
import { Modificator } from './Modificator';

@ccclass('Action')
export  class Action extends Component {
   
    public actionType : ActionType;

    @property({type : Modificator})
    public mainAction : Modificator;
    public mods : Modificator[] = [];

    public  Use(unit : Unit, buttonPressed : boolean)
    {
     //   this.mods.forEach((mod,index)=>{mod.Modify(unit,buttonPressed)})
        this.mainAction.Modify(unit,buttonPressed);
    }
    
    constructor(type : ActionType, mod : Modificator) {
        super();
        this.actionType = type;
        this.mainAction = mod;
    }
}


