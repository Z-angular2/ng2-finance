import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InfoActions } from './info.actions';
import { CoreApiStateService } from '../../../../core/state/api-state.service';

@Injectable()
export class InfoStateService extends CoreApiStateService {
  constructor(public store$:Store<any>,
              public actions: InfoActions) {
    super(store$, 'info', actions);
  }
}
