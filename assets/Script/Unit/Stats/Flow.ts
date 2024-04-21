import { _decorator, Component, Node } from 'cc';
import { Stat } from '../Basic/Stat';
import { InitialValues } from '../Basic/InitialValues';
const { ccclass, property } = _decorator;

@ccclass('Flow')
export class Flow extends Stat {
    
    constructor(values : InitialValues)
    {
        super();
        this.defaultAmount = values.defaultFlow;
        this.currentAmount = this.defaultAmount;
    }
}


