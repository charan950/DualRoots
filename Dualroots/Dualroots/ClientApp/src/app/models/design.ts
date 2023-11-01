export class Design{
    id:any
    commentId:any
    index:any
    subject:string
    comment:string
    commentOn:string
    file:string
    class:string
    type:string
    isSelectedCol:boolean
    isActive:boolean
    isEditable:boolean
    editIndex:boolean
    editCommentId:boolean
    editSubject:boolean
    editComment:boolean
    editDate:boolean
    editFile:boolean
    editCommentOn:boolean
    editClass:boolean
    editType:boolean
    editableField:string
    date:Date
    isMandatory:boolean
    mandatroyColumns:string[]
    editableColumns:string[]=[]
    constructor(args:any={}){
        this.id= args.id
        this.commentId = args.commentId
        this.index = args.index
        this.subject = args.subject
        this.comment = args.comment
        this.commentOn = args.commentOn
        this.file = args.file
        this.class = args.class
        this.type = args.type
        this.isEditable = false
        this.editableField= args.editableField
        this.editCommentId=false
        this.editIndex=false
        this.editSubject=false
        this.editClass=false
        this.editCommentOn=false
        this.editDate=false
        this.editComment=false
        this.editType=false
        this.date = args.date
        this.isMandatory=Boolean(args.isMandatory)
        this.mandatroyColumns = args.mandatroyColumns==null?[]:JSON.parse(args.mandatroyColumns) 
        this.editableColumns = args.editableColumns==null? []: JSON.parse(args.editableColumns)
        this.isSelectedCol=false
        this.isActive=false
    }
}