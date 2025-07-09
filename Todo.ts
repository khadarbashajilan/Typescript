
// Using class-based approach
{
class Todo{
    public Todo:string[]=[];   
    public idx:number=0;
    public AddT(task:string){
        this.Todo[this.idx++]=task;
    }
    public RemoveT(task:string):void{
        const idx:number = this.Todo.indexOf(task);
        if(idx==-1){
            console.log("Not Exists");
            return;
        }
        this.Todo.splice(idx,1);
    }
    public showT(){
        for(let ele of this.Todo){
            console.log(ele);
        }
    }
}
    
    const myTodo:Todo=new Todo();
    myTodo.AddT("Eatie")
    myTodo.AddT("Traine")
    myTodo.AddT("Sleepie")
    myTodo.showT();
    myTodo.RemoveT("Sleepie");
    myTodo.RemoveT("Sle");
    myTodo.showT();
}

// Beginner approach
{
let ListT:string[]=[];
let IdxT:number=0;
function addtasks(a:string):void{
    ListT[IdxT++]=a;
}
function showtasks(arr:string[]):void{
    for(let ele of arr){
        console.log(ele);
    }
}
function removetasks(a:string):void{
    const IDX:number = ListT.indexOf(a);
    if(IDX==-1){
        console.log("Not Exists");
        return;
    }
    ListT.splice(IDX,1);
    }
addtasks("Eat");
addtasks("Code");
addtasks("Sleep");
showtasks(ListT);
removetasks("Sleep");
showtasks(ListT);
}