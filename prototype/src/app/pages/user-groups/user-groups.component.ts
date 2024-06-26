import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { RouterModule } from '@angular/router';
import { RideCreationComponent } from '../ride-creation/ride-creation.component';

@Component({
  selector: 'app-user-groups',
  standalone: true,
  templateUrl: './user-groups.component.html',
  imports: [MatBottomSheetModule, RouterModule],
  styles: `
    ::ng-deep .mat-bottom-sheet-container {
      padding: unset;
    }
  `,
})
export class UserGroupsComponent {
  constructor(private _bottomSheet: MatBottomSheetRef<UserGroupsComponent>, private _bottomSheetService: MatBottomSheet) {}

  public close() {
    this._bottomSheet.dismiss()
  }

  public openRideCreation(): void {
    this._bottomSheetService.open(RideCreationComponent);
  }
}
