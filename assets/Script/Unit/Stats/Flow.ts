import { _decorator, Component, Node } from 'cc';
import { Stat } from '../Basic/Stat';
import { InitialValues } from '../Basic/InitialValues';
import { Unit } from '../Unit';
const { ccclass, property } = _decorator;

@ccclass('Flow')
export class Flow extends Stat {
    
    public Init(values : InitialValues, unit : Unit)
    {

        this.defaultAmount = values.defaultFlow;
        this.currentAmount = this.defaultAmount;
    }

    public isOverZero(): boolean {
        return
    }

    public Spend(amount: number) {
        
    }
}


