import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from '../../core/core.module';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [RouterOutlet, CoreModule],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss',
})
export class BlankLayoutComponent {}
