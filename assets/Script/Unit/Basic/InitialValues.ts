import { _decorator, CCInteger, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Values')
export class InitialValues extends Component {

    
    @property({type : CCInteger, group : {name : 'Stats'}})
    defaultFlow : number;

    @property({type : CCInteger, group : {name : 'Stamina'}})
    staminaDefault : number;
    @property({type : CCInteger, group : {name : 'Stamina'}})
    staminaRefillSpeed : number;
    @property({type : CCInteger, group : {name : 'Stamina'}})
    staminaRefillDelay : number;
    
    
}


