import { Component, AfterContentInit, ViewChildren, ContentChildren, QueryList, Input } from '@angular/core';
import { ColumnDirective } from "./column.directive";

@Component({
  selector: 'gym-grid',
  templateUrl: './grid.component.html',
	styleUrls: ["./grid.component.css"]
})
export class GridComponent implements AfterContentInit {
	@ContentChildren(ColumnDirective) columnDefinitions : QueryList<ColumnDirective>
	@Input() data: Array<any>;

	columns: Array<ColumnDirective>
	ngAfterContentInit() {
		this.columns = this.columnDefinitions.toArray();
	}
}
