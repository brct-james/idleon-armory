import { Component, OnInit, Input } from '@angular/core';

import {Character} from '../Character'
import {Item} from '../Item'

@Component({
  selector: 'app-equipment-category',
  templateUrl: './equipment-category.component.html',
  styleUrls: ['./equipment-category.component.sass']
})
export class EquipmentCategoryComponent implements OnInit {
  @Input() category: any;
  @Input() items: any;
  @Input() char: Character;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.category, this.items, this.char)
    // this.setSlotItemVisibility()
  }

  //Stolen from https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case for convenience
  //modified to simultaneously remove 's and !s
  camelize(str) {
    return str.replace(/(?:['!])/g, "").replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

  filterItems(slot: any):Array<object> {
    //TODO: this is being called 4x in dev mode - sounds like this might just be an angular quirk and a prod build will fix? otherwise look into this at some point for performance
    return this.items.filter(item => item.slots.includes(slot));
  }

  ddItemClicked(event: Event, item: Item) {
    //TODO: Figure out how to implement this in the context of the Character - should there be an Equipment arr?
    console.log(event, item)
    //TODO: tie the below to a var instead with [active]="" in the html once equipment is figured out
    event.currentTarget.classList.toggle("active");
  }

  setSlotItemVisibility() {
    let listOfActions = this.items.map(function(item) {
        let res = {name: item.name, show:true};
        if (item.requirements["Unobtainable"]) {
            res.show = false;
            return res;
        }
        if (this.char.class != "Nothing" && item.requirements["Class"]) {
            let allowsAll = item.requirements["Class"] == "All";
            let allowsCurrent = item.requirements["Class"] == this.char.class;
            if (!(allowsAll || allowsCurrent)) {
                res.show = false;
                return res;
            }
        }
        if (item.requirements["Main Level"]) {
            if (item.requirements["Main Level"] > this.char.level) {
                res.show = false;
                return res;
            }
        }
        return res;
    }, this);
    listOfActions.forEach(action => {
        console.log(action.name, action.show)
        if (action.show) {
            // $("#" + this.camelize(action.name + "DDItemweaponSlot")).removeClass("noDisplay");
        }
        else {
            // $("#" + this.camelize(action.name + "DDItemweaponSlot")).addClass("noDisplay");
        }
    });
  }
}
