import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string) {

    if (searchText === undefined) return items;

    return items.filter(function(i){
        if(i.name &&  i.name.toLowerCase().includes(searchText.toLowerCase()))
        { return i;}
        else if( i.department && i.department.toLowerCase().includes(searchText.toLowerCase()))
        {  return i;}
        else if( i.email &&  i.email.toLowerCase().includes(searchText.toLowerCase()))
        {  return i;}

    });
  }
}
