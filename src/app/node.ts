export class Node {
  color: string;
  inc: number;
  parentVal: number;
  value: number;
  child: Node;
  constructor(color: string, parentVal: number){
    this.color = color;
    this.parentVal = parentVal;
    this.inc = this.getInc(color)
    this.value = parentVal + this.inc;
  }
  addChild(child: Node) {
    this.child = child;
  }
  getInc(color) {
    return color === 'green' ? 2 : color === 'red' ? 1 : 0;
  }
  flipColor() {
    this.color = this.color === 'green' ? 'red' : 'green';
    this.inc = this.getInc(this.color);
    this.value = this.parentVal + this.inc;
  }
}
