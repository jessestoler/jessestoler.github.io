const inquirer = require('inquirer');
const mysql = require('mysql');
let cost = [];
let costB;
let first;
let inventory = [];
let inventoryB;
let inventoryC;


const connection = mysql.createConnection({
    host     : 'localhost',
    port: 8889,
    user     : 'root',
    password : 'root',
    database : 'bamazon'
  });

  const connectionTwo = mysql.createConnection({
    host     : 'localhost',
    port: 8889,
    user     : 'root',
    password : 'root',
    database : 'bamazon'
  });

  const connectionThree = mysql.createConnection({
    host     : 'localhost',
    port: 8889,
    user     : 'root',
    password : 'root',
    database : 'bamazon'
  });

  start();

  function howMany() {
  

    const questionTwo = [
      {
        type: 'input',
        name: 'stock',
        message: "How many would you like to purchase?",
        validate: function(value) {
      
      
          let valid = !isNaN(parseFloat(value));
          return valid || 'Please enter a number';
        },
        filter: Number
       
      }
     
  ];
  
    
  inquirer.prompt(questionTwo).then(answers => {
    if (answers.stock <= inventoryB) {
      console.log("Order is successful!");
      let final = answers.stock * costB;
      console.log("The final price is " + final);
      connectionTwo.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [inventoryC - answers.stock, first],function (error, results, fields) {
  
        if (error) throw error;
          console.log(results);
  
          
           
          });
          connectionTwo.end();
  
      
    }
  
    else {
      console.log("Insufficient quantity :(");
    }
  
    });
  }

  function selectStock() {
    connectionThree.query('SELECT stock_quantity FROM products WHERE item_id = ?', [first], function (error, results, fields) {
         
      if (error) throw error;
       
      inventoryC = results[0].stock_quantity;
         
        });
       
        connectionThree.end();
      }
  

   

function start() {
    
    const questionOne = [
        {
          type: 'input',
          name: 'itemNumber',
          message: 'Enter the ID number of the item you would like to purchase! \n',
          validate: function(value) {
            

            let valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number
           
        }
       
       
      ];


    connection.query('SELECT item_id, product_name, price, stock_quantity FROM products', function (error, results, fields) {
      
    if (error) throw error;
      for (i = 0; i < results.length; i++) {
        console.log("Item ID: " + results[i].item_id + " Product: " + results[i].product_name + " Price: " + results[i].price);
       inventory.push(results[i].stock_quantity);
       cost.push(results[i].price);
      }

       
      });
     
      connection.end();

  inquirer.prompt(questionOne).then(answers => {
    
    

    first = answers.itemNumber;
    inventoryB = inventory[first - 1];
    costB = cost[first - 1];
    
   
   setTimeout(function() { howMany(); }, 3000);
   setTimeout(function() { selectStock(); }, 2000);
   
  });
}
