import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../node';

@Component({
  selector: 'app-node',
  template: `
    <div class="wrapper">
      <div (click)="flipColor()" [ngClass]="{green: root.color === 'green', red: root.color === 'red'}">
        {{root.parentVal}} + {{root.inc}} = {{root.value}}
      </div>
      <div *ngIf="root.child">
        <app-node [root]="root.child" ></app-node>
      </div>
      <button *ngIf="!root.child" (click)="addChild('green')"> Add Green Child </button>
      <button *ngIf="!root.child" (click)="addChild('red')"> Add Red Child </button>
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

  addChild(color): void {
    this.root.addChild(new Node(color, this.root.value));
  }

  flipColor() {
    this.root.flipColor();
  }

}
