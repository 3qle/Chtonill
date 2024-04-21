import { _decorator, Component, Node } from 'cc';
import { Stat } from './Stat';
import { Flow } from '../Stats/Flow';
import { InitialValues } from './InitialValues';
import { Stamina } from '../Stats/Stamina';
const { ccclass, property } = _decorator;

@ccclass('StatsManager')
export class StatsManager extends Component {

    public Flow : Flow;
    public Stamina : Stamina;

    public constructor(values : InitialValues)
    {
        super();
        this.Flow = new Flow(values);
        this.Stamina = new Stamina(values);
       
    }
}


