import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string) {
    if (searchText === undefined) return items;

    return items.filter(function(i){
        return i.name.toLowerCase().includes(searchText.toLowerCase());

    });
   }
}
