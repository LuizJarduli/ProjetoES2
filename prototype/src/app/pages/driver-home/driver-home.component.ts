import { Component } from '@angular/core'
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet'
import { RideCreationComponent } from '../ride-creation/ride-creation.component'
import { UserGroupsComponent } from '../user-groups/user-groups.component'
import { debounceTime, delay } from 'rxjs'
import { RideRequestComponent } from '../ride-request/ride-request.component'

@Component({
  selector: 'app-driver-home',
  standalone: true,
  imports: [MatBottomSheetModule],
  templateUrl: './driver-home.component.html',
})
export class DriverHomeComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openRideCreation(): void {
    this._bottomSheet
      .open(RideCreationComponent)
      .afterDismissed()
      .pipe(delay(2000))
      .subscribe(() => {
        this._bottomSheet.open(RideRequestComponent)
      })
  }

  openUserGroupsList(): void {
    this._bottomSheet.open(UserGroupsComponent)
  }
}
