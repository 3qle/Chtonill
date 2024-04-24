import { _decorator, Component, Node } from 'cc';
import { InitialValues } from './InitialValues';
const { ccclass, property } = _decorator;

@ccclass('Stat')
export abstract class Stat extends Component {

    public currentAmount : number;
    public defaultAmount : number;
    public bonusAmount : number;


    public setDefault()
    {
        this.currentAmount = this.defaultAmount;
    }

    public addExtraAmount(amount : number)
    {
        this.currentAmount += amount;
       
    }

    public resetToCurrent()
    {
        this.currentAmount = this.defaultAmount;
    }

   public abstract isOverZero(): boolean;
   public abstract Spend(amount : number);


}


