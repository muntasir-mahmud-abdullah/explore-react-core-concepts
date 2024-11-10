export default function Todo({task,isDone}){
    let listItem;
  if(isDone)
  {
    listItem = <li> {isDone}  Finished :  {task}</li>
  }
   else {
    listItem = <li>Not Yet : {task}</li>
   }
   return listItem;
   
}