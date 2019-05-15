import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../node';

@Component({
  selector: 'app-node',
  template: `
    <div>
      <button *ngIf="!root.child" (click)="addChild('green')"> Add Child </button>
      <div (click)="flipColor()" [ngClass]="{green: root.color === 'green', red: root.color === 'red'}">
        {{root.parentVal}} + {{root.inc}} = {{root.value}}
      </div>
      <span *ngIf="!root.branch" (click)="addBranch()">Add Branch</span>
      <button *ngIf="this.root.canDelete && !this.root.child && !this.root.branch" (click)="deleteNode()">delete</button>
      <div *ngIf="root.branch" style="margin: 0 10px">
        | <app-node [root]="root.branch"></app-node>
      </div>
      <div *ngIf="root.child">
        <app-node [root]="root.child"></app-node>
      </div>
    </div>
  `,
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() root: Node;

  constructor() {
  }

  ngOnInit() {
  }

  deleteNode() {
    this.root.deleteSelf();
  }

  addChild(color): void {
    this.root.addChild(new Node(color, this.root.value));
  }

  addBranch(): void {
    this.root.addBranch(new Node('green', this.root.value));
  }

  flipColor() {
    this.root.flipColor();
  }

}
