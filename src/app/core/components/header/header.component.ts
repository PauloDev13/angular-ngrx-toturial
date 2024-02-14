import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideBarSignal } from '../../../shared/signals/sidebar.signal';
import {RouterLink} from "@angular/router";
import {CartStore} from "../../../store/cart.store";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, JsonPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly sidebarSignal = inject(SideBarSignal);

  private cartStore = inject(CartStore);
  protected countProduct = this.cartStore.countProductsInCart;

  toggle() {
    this.sidebarSignal.sidebarOpen.update(val => !val);
  }

}
