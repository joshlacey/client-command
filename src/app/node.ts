export class Node {
  color: string;
  inc: number;
  parentVal: number;
  value: number;
  child: Node;
  branch: Node;
  canDelete: boolean;
  deleteSelf: any;
  constructor(color: string, parentVal: number){
    this.color = color;
    this.parentVal = parentVal;
    this.inc = this.getInc(color)
    this.value = parentVal + this.inc;
    this.canDelete = color === 'green';
  }
  _delete(node) {
    return function() {
      this[node] = undefined;
    }.bind(this);
  }
  addChild(child: Node): void {
    this.child = child;
    if (this.color === 'red') this.child.canDelete = false;
    this.child.deleteSelf = this._delete('child');
  }
  addBranch(branch: Node): void {
    this.branch = branch;
    if (this.color === 'red') this.branch.canDelete = false;
    this.branch.deleteSelf = this._delete('branch');
  }
  getInc(color: string): number {
    return color === 'green' ? 2 : color === 'red' ? 1 : 0;
  }
  flipColor(): void {
    if(this.color === 'purple') return;
    this.color = this.color === 'green' ? 'red' : 'green';
    if (this.color === 'red') {
      if(this.branch) this.branch.canDelete = false;
      if(this.child) this.child.canDelete = false;
    } else if (this.color === 'green'){
      if(this.branch) this.branch.canDelete = true;
      if(this.child) this.child.canDelete = true;
    }
    this.inc = this.getInc(this.color);
    this.value = this.parentVal + this.inc;
  }
}
