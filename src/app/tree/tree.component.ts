import { Component, OnInit } from '@angular/core';
import { Node } from '../node';

@Component({
  selector: 'app-tree',
  template: `
    <div>
      <div style="background: purple; width: 15px; color: white;">5</div>
      <div class="branch__wrapper"*ngFor="let branch of branches">
        <app-node [root]="branch"></app-node>
        <button *ngIf="branch.color === 'green' && branch.child" (click)="deleteLast(branch)">
          Delete Last Node
        </button>
      </div>
      <div *ngIf="!root">
        <button (click)="addBranch('green')">Add Green Branch</button>
        <button (click)="addBranch('red')">Add Red Branch</button>
      </div>
      <span>Total: {{totalBranches()}}</span>
    </div>
  `,
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  public branches: Node[] = [];

  constructor() {}

  ngOnInit() {
  }

  addBranch(color: string) {
    this.branches.push(new Node(color, 5));
  }

  total(node) {
    if(!node.child) return node.value;
    return node.value + this.total(node.child);
  }

  totalBranches() {
    let theTotal = 5;
    this.branches.forEach(branch => {
      theTotal += this.total(branch);
    })
    return theTotal;
  }

  deleteLast(root) {
    if(root.child.child) return this.deleteLast(root.child);
    root.child = undefined;
  }
}
