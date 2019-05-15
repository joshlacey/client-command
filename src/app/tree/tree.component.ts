import { Component, OnInit } from '@angular/core';
import { Node } from '../node';

@Component({
  selector: 'app-tree',
  template: `
    <div>
      <div style="background: purple; width: 15px; color: white;">5</div>
      <app-node [root]="node.child"></app-node>
      <span> Total: {{total(node)}}</span>
    </div>
  `,
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  public node: Node = new Node('purple', 0);

  constructor() {}

  ngOnInit() {
    this.node.addChild(new Node('green', 5))
  }

  total(node) {
    if(node === undefined) return 0;
    return node.value + this.total(node.child) + this.total(node.branch);
  }
}
