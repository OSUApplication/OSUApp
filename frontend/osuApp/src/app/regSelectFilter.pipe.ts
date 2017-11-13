import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'myfilter'
})
export class RegFilterPipe implements PipeTransform {
  transform(items: any[], searchText: any[]) {

    if (searchText === undefined || searchText.length == 0) return items;


    console.log("searchText is",searchText);
    console.log("items are ",items);
    return items.filter(function(i){

          if(!searchText.includes(i)){
              return i;
          }
    });
  }
}
