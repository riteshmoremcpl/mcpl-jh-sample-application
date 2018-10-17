import { NgModule } from '@angular/core';

import { McplJhSampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [McplJhSampleApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [McplJhSampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class McplJhSampleApplicationSharedCommonModule {}
