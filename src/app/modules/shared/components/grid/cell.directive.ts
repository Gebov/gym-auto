import { ComponentFactoryResolver, Directive, ViewContainerRef, ViewRef, ComponentRef, Input, TemplateRef } from "@angular/core";

@Directive({
    selector: "[gymCellTemplate]"
})
export class CellDirective {
    constructor(private viewContainerRef: ViewContainerRef) {
    }

    @Input("gymCellTemplate")
    set sfListCellTemplate(context: IDataContext) {
		this.viewContainerRef.clear();
		this.viewContainerRef.createEmbeddedView(context.template, { context: context.dataItem });
    }
}

interface IDataContext {
	template: TemplateRef<any>;
	dataItem: any;
}
