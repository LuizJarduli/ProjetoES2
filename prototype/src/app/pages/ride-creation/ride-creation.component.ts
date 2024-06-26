import { Component } from '@angular/core';
import { MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ride-creation',
  standalone: true,
  templateUrl: './ride-creation.component.html',
  imports: [MatBottomSheetModule, RouterModule],
  styles: `
    ::ng-deep .mat-bottom-sheet-container {
      padding: unset;
    }
  `,
})
export class RideCreationComponent {
  private _accepted: boolean = false

  constructor(private _bottomSheet: MatBottomSheetRef<RideCreationComponent>) {}

  public close() {
    this._bottomSheet.dismiss()
  }

  public set accepted(hasAccepted: boolean) {
    this._accepted = hasAccepted
  }

  public get accepted(): boolean {
    return this._accepted
  }
}
