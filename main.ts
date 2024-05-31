//  { Advanced Todo app .}

import chalk from "chalk";
import inquirer from "inquirer";

// 3 - Steps we have to apply on it .

// Step-01  arry[] .
// Step-02  function.
// Step-03  Oprations Perform .


let todos:string[] = ["Asad","Bilal","Ummar"]

let condition = true
async function getTodos (arr:string[]){

   while (condition){console.log(chalk.bold.yellow("___________________________"));
   console.log(chalk.bold.magenta("| WelCome")+chalk.bold.green(" To")+chalk.bold.cyan(" Todo App |"));
   console.log(chalk.bold.yellow("___________________________\n"));
   console.log(chalk.bold.cyan("Which Operation Would You Like to perform .?"));
   
   


   
   let answers = await inquirer.prompt(
       [
           {
               name : "options",
               message : chalk.bold.yellow("Select Option :"),
               type : "list",
               choices : ["Add Todos |","Update Todos |","View Todos |","Deleted Todos |","Exit |"]
           }
       ]
   )
   if(answers.options === "Add Todos |"){
       let addTodos = await inquirer.prompt(
           [
               {
                   name : "add",
                   message  : chalk.bold.magenta("Enter Todo :"),
                   type : "input"
               }
           ]
       )
       todos.push(addTodos.add)
       console.log(todos);
       
   } if(answers.options === "Update Todos |"){
       let update =  await inquirer.prompt(
           [
               {
                   name : "updateNew",
                   message : chalk.bold.cyan("Select Todo To Update :"),
                   type : "list",
                   choices : todos.map(elem => elem)
               }
           ]
       )
       let selectNew = await inquirer.prompt(
           [
               {
                   name : "newTodo",
                   message : chalk.bold.blue("Enter New Todo :"),
                   type : "input"
               }
           ]
       )
       let newTodos = todos.filter(elem => elem  !== update.updateNew)
       todos = [...newTodos,selectNew.newTodo]
       console.log(todos);
       

   }else if (answers.options === "View Todos |"){
       console.log(todos);
       
   }else if (answers.options ==="Deleted Todos |"){
       let dlt_todos =  await inquirer.prompt(
           [
               {
                   name : "delete",
                   message : "Select Todo To Update :",
                   type : "list",
                   choices : todos.map(elem => elem)
               }
           ]
       )
       let deleteTodos = todos.filter(elem => elem !== dlt_todos.delete)
       todos = [...deleteTodos]
       console.log(todos);
       
   }if (answers.options ==="Exit |"){
    let conformation = await inquirer.prompt(
        [
            {
                name : "conformOP",
                type : "confirm",
                message : chalk.bold.red("Are You Sure You want to Exit .?"),
                default : (false)
            
            }
            
        ]
        
    )
       
        if(conformation.conformOP === true){
            condition = false
        console.log(chalk.bold.green(" Thanks For Choosing ")+chalk.bold.cyan(" Todo App ~")) 
      
        }
       
   
   }
   
  }

    
}



getTodos(todos)