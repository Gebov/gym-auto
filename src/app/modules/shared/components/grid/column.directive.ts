import { Directive, TemplateRef, Input } from "@angular/core";

@Directive({
    selector: "[gymColumnTemplate]"
})
export class ColumnDirective {
    @Input() title;
    constructor(public template: TemplateRef<Object>) {
    }
}
