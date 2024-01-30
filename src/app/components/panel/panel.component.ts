import { Component } from '@angular/core';
import { PanelData } from 'src/app/panel-data';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  panelData: PanelData[] = [
    { id: 1, title: 'Panel 1', parameter: 'param1', additionalData: 'Data for panel 1' },
  ];

  loadData(parameter: string) {
    // Simulate fetching data based on the parameter
    this.panelData[0].additionalData = `Fetched data for ${parameter}`;
  }

}
