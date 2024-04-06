import { _decorator, CCFloat, CCInteger, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Health')
export class Health extends Component {
    
    @property(CCInteger)
    amount: number;
}


