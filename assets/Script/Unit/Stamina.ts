import { _decorator, CCInteger, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Stamina') 
export class Stamina extends Component {

    @property(CCInteger)
    amount : number;
}


