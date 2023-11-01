import { Component, Directive, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DesignService } from '../services/design.service';
import { Design } from '../models/design';
import { HtmlTagDefinition } from '@angular/compiler';

@Component({
  selector: 'app-design-details',
  templateUrl: './design-details.component.html',
  styleUrls: ['./design-details.component.css']
})
export class DesignDetailsComponent  {
  designs:Design[]
  isValid:boolean=false
  initialValue:Design[]
  previousCol:string=null
  edit:boolean=null
  selectedCol:string
  editableList=["Comment","Index","CommentOn","CommentId","Subject","Date","Class"]
  editableColumn:string=null
  previousIndex:number
  constructor(private designService:DesignService) 
  {
      this.designService.getDesigns().subscribe(res=>{
        this.designs=res
        console.log(this.designs)
        this.initialValue =  JSON.parse(JSON.stringify(res)); 
        this.check()
      })
     
  }
  
  // ngOnInit() {
  //   // Add a click event listener to the whole document
  //   document.addEventListener('paste', this.handleClick);
  // }

  // handleClick(event: Event) {
  //   // Handle the click event here
  //   console.log('Click event occurred:');
  // }
  onUndo(){
    this.designs = this.initialValue
    this.initialValue =  JSON.parse(JSON.stringify(this.designs)); 
    this.designs.forEach(des=>{
        des[this.editableColumn]=false
    })
    // console.log(this.initialValue)
    // console.log(this.designs)
  }
  onCol(col:string,design){
      if(this.editableColumn==null){
        this.editableColumn=col
      }
      else{
        if(this.editableColumn!=col){
          this.editableColumn=col
          this.designs.forEach(des=>{
            des.isActive=false
            des.isSelectedCol=false
          })
        }
        
      }
  }
 
//  onColumn(col:string ,design:Design){
//   console.log(design)
//     if(this.editableColumn==null){
//       this.editableColumn=col
//       console.log(this.editableColumn)
//       design.isEditable=true
//     }
//     else{
//       if(this.editableColumn==col){
//           design.isEditable=true
//           console.log(col)
//       }
//       else{
//           this.designs.every(des=>des.isEditable=false)
//           design.isEditable=true
//           this.editableColumn=col
//       }
      
//     }
//     console.log(this.editableColumn)
//  }
 
  onPaste(event: ClipboardEvent,index:any) {
    let clipboardData = event.clipboardData
    let pastedText = clipboardData.getData("text");
    this.designs[index][this.editableColumn]=null
    for(var i=0;i<this.designs.length;i++){
        if(i!=index){
          if(this.designs[i].isSelectedCol){
            this.designs[i][this.editableColumn]=pastedText
            console.log(this.designs[i])
          }
        }
    }
  }
  onSave(){
    this.designService.update(this.designs).subscribe(res=>{
        if(res){
          this.designService.getDesigns().subscribe(res=>{
            this.designs=res
          })
        }
    })
  }
  check(){
    this.isValid=true
    this.designs.forEach(des=>{
      des.mandatroyColumns.forEach(col=>{
        if(des[col] == null){
            this.isValid=false
        }
      })
    })
    // console.log(this.isValid)
  }
  setActive(index:any){
    this.designs.forEach(des=>{
      des.isActive=false
    })
    this.designs[index].isActive=true
    this.designs[index].isSelectedCol=true
  }
}
