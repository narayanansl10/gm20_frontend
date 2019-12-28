import { Pipe, PipeTransform } from "@angular/core";
/**Pipe added by Siddeshwar on 27/12/19 */
@Pipe({
  name: "filterEventsBasedOnTitle"
})
export class FilterEventsBasedOnTitlePipe implements PipeTransform {
  transform(items: any, searchText: String): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(it => {
      if (it.title != undefined) {
        return it.title.toLowerCase().includes(searchText);
      } else {
        return true;
      }
    });
  }
}
