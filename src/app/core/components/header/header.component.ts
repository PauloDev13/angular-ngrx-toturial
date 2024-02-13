import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideBarSignal } from '../../../shared/signals/sidebar.signal';
import {RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {selectCartProducts} from "../../../state/cart/cart.selector";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly sidebarSignal = inject(SideBarSignal);
  private store = inject(Store<AppState>)
  protected count = signal(0);
  toggle() {
    this.sidebarSignal.sidebarOpen.update(val => !val);
  }

  constructor() {
    this.store.select(selectCartProducts).subscribe({
      next: products => {
        this.count.set(products.length)
      }
    })
  }

  countTest = toSignal(this.store.select(selectCartProducts))
}
