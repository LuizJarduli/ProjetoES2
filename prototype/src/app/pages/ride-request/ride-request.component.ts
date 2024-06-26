import { Component } from '@angular/core';
import { MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ride-request',
  standalone: true,
  templateUrl: './ride-request.component.html',
  imports: [MatBottomSheetModule, RouterModule],
  styles: `
    ::ng-deep .mat-bottom-sheet-container {
      padding: unset;
    }
  `,
})
export class RideRequestComponent {
  private _accepted: boolean = false

  constructor(private _bottomSheet: MatBottomSheetRef<RideRequestComponent>) {}

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
