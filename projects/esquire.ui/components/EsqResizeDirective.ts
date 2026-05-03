/*
*  Esquire frameworks (tm)
*
*  Copyright(c) 2001, 2025 mir0n&co www.mir0n.me
*  mailto:mir0n.the.programmer@gmail.com
*
* based on https://dev.to/chintanonweb/mastering-resizable-columns-in-angular-table-a-step-by-step-guide-for-developers-4f5n
*
* History :
* 05/03/2026 mir0n Mobile point device friendly
*/
import {
  Directive,
  ElementRef,
  Renderer2,
  NgZone,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[esqResize]',
})

export class EsqResizeDirective implements OnInit, OnDestroy {
  @Input() resizableTable: HTMLElement | null = null;

  private startX!: number;
  private startWidth!: number;
  private isResizing = false;
  private home!: HTMLElement;
  private sidecontent!: HTMLElement;
  private resizer!: HTMLElement;
  private destroy$ = new Subject<void>();
  private sideNavigationMode:boolean = false;
  private activePointerId: number | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private zone: NgZone
  ) {
  }

  ngOnInit() {
    const prnt = this.el.nativeElement;
    if (prnt.
      nodeName == 'MAT-SIDENAV-CONTAINER') {
      var sn!:HTMLElement;
      var sc!:HTMLElement;
      for (let i = 0; i < prnt.children.length; i++) {
        if ( prnt.children[i] instanceof HTMLElement) { 
          if (prnt.children[i].nodeName == 'MAT-SIDENAV') {
            sn = prnt.children[i] as HTMLElement;
          } else  if (prnt.children[i].nodeName == 'MAT-SIDENAV-CONTENT') {
            sc = prnt.children[i] as HTMLElement;
          }
        }
      }
      if (sn && sc) {
        this.sideNavigationMode = true;
        this.sidecontent = sc;
        this.home = sn;
      }
    }
    if (!this.home) {
      this.home = prnt;
    }
    this.createResizer();
    this.initializeResizeListener();
  }

  private createResizer() {
    this.resizer = this.renderer.createElement('div');
    //this.renderer.addClass(this.resizer, 'column-resizer');
    this.renderer.setStyle(this.resizer, 'position', 'absolute');
    this.renderer.setStyle(this.resizer, 'right', '0');
    this.renderer.setStyle(this.resizer, 'top', '0');
    this.renderer.setStyle(this.resizer, 'width', '8px');
    this.renderer.setStyle(this.resizer, 'cursor', 'col-resize');
    this.renderer.setStyle(this.resizer, 'touch-action', 'none');
    if (this.sideNavigationMode) {
      const h:number = this.home.offsetHeight; 
      this.renderer.setStyle(this.resizer, 'height', `${h}px`);
    } else { // for a header column
      this.renderer.setStyle(this.resizer, 'height', '100%');
//    const h:number = this.home.offsetHeight; 
//    this.renderer.setStyle(this.resizer, 'height', `${h}px`);
    }
    //this.renderer.createText('.');
    this.renderer.appendChild (this.home, this.resizer);
  }

  private initializeResizeListener() {
    this.zone.runOutsideAngular(() => {
      fromEvent(this.resizer, 'pointerdown')
        .pipe(takeUntil(this.destroy$))
        .subscribe((event: Event) => this.onPointerDown(event as PointerEvent));
      fromEvent(this.resizer, 'pointerover')
        .pipe(takeUntil(this.destroy$))
        .subscribe((event: Event) => this.onPointerOver(event as PointerEvent));
      fromEvent(document, 'pointermove')
        .pipe(takeUntil(this.destroy$))
        .subscribe((event: Event) => this.onPointerMove(event as PointerEvent));

      fromEvent(document, 'pointerup')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.onPointerEnd());
      fromEvent(document, 'pointercancel')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.onPointerEnd());
    });
  }

  private onPointerOver(event: PointerEvent):void {
    if (this.isResizing) return;
    if (this.sideNavigationMode) {
      const h:number = this.home.offsetHeight;
      this.renderer.setStyle(this.resizer, 'height', `${h}px`);
    }
    this.renderer.setStyle(this.resizer, 'border-right', '1px solid black');
  }

  private onPointerDown(event: PointerEvent):void {
    event.preventDefault();
    this.isResizing = true;
    this.startX = event.pageX;
    this.startWidth = this.home.offsetWidth;
    this.activePointerId = event.pointerId;
    try { this.resizer.setPointerCapture(event.pointerId); } catch {}
  }

  private onPointerMove(event: PointerEvent):void {
    if (!this.isResizing) return;
    const delta = event.pageX - this.startX;
    var width = Math.max(this.startWidth + delta, 10); // just in case it has no min-width defined
    this.renderer.setStyle(this.home, 'width', `${width}px`);
    if (this.sidecontent) {
      width = this.home.offsetWidth;
      this.renderer.setStyle(this.sidecontent, 'margin-left', `${width}px`);
    }
  }

  private onPointerEnd() {
    if (!this.isResizing) return;
    this.isResizing = false;
    this.renderer.setStyle(this.resizer, 'border-right', '0');
    if (this.activePointerId !== null) {
      try { this.resizer.releasePointerCapture(this.activePointerId); } catch {}
      this.activePointerId = null;
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

/*
  <mat-sidenav-container class="treelistview-container" appColumnResize>
 */

/*
<div>
  <table mat-table [dataSource]="dataSource">
    @for (column of displayedColumns; track column; let i = $index) {
    <ng-container [matColumnDef]="column">
      <th style="position:relative !important;" mat-header-cell *matHeaderCellDef appColumnResize>{{ column }}</th>
      <td mat-cell *matCellDef="let element">{{ element[column] }}</td>
    </ng-container>
    }
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
</div>
*/
