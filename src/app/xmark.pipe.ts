import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'xmark'
})

export class XmarkPipe implements PipeTransform {
    transform(value: any, args?: any) {
        
    }
}