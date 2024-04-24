import { _decorator, Component, Node } from 'cc';
import { Flow } from '../Stats/Flow';
import { InitialValues } from './InitialValues';
import { Stamina } from '../Stats/Stamina';
import { Unit } from '../Unit';
import StatType from '../../Enum/StatType';
const { ccclass, property } = _decorator;

@ccclass('StatsManager')
export class StatsManager extends Component {

    public Stats = {
        [StatType.Stamina]: new Stamina(),
        [StatType.Flow]: new Flow()
    }

    public constructor(values : InitialValues, unit : Unit)
    {
        super();
        this.Stats[StatType.Stamina].Init(values,unit);
        this.Stats[StatType.Flow].Init(values,unit);
    }
}


