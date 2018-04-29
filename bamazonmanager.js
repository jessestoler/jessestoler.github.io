const inquirer = require('inquirer');
const mysql = require('mysql');
let amount;
let amountB;
let eyeD;
let productList;




require('events').EventEmitter.defaultMaxListeners = 155;

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

inquirer
  .prompt([
    {
      type: 'list',
      name: 'theme',
      message: 'What do you want to do?',
      choices: [
        'View Products for Sale',
        'View Low Inventory',
        'Add to Inventory',
        'Add New Product',
      ]
    },
  
  ])
  .then(answers => {

    if (answers.theme == "View Products for Sale") {
      viewProducts();

      }

    if (answers.theme == "View Low Inventory") {
        lowInventory();
  
        }

       
            if (answers.theme == "Add to Inventory") {
                addInventory();
          
                }

                if (answers.theme == "Add New Product") {
                  newProduct();
            
                  }

               

        });

        function addInventory() {
          connection.query('SELECT item_id, product_name, stock_quantity FROM products', function (error, results, fields) {
            
              if (error) throw error;
              for (i = 0; i < results.length; i++) {
      
                  productList = results[i].product_name;
                  eyeD = results[i].item_id;
                  console.log(eyeD + " " + productList);
              }
         
              
              inquirer
        .prompt([
          {
            type: 'input',
            name: 'products',
            message: 'Pick the item id number for the product you want to add inventory to',
            validate: function(value) {
          
          
              let valid = !isNaN(parseFloat(value));
              return valid || 'Please enter a number';
            },
            filter: Number
           
          }
          
        
        ])
        .then(answers => {
      
          
        amountB = answers.products;
        
        amount = results[amountB - 1].stock_quantity;
      
        
        
        setTimeout(function() { addInvetoryTwo(); }, 2000);
      });  
       
      
                });
                
              }


function addInvetoryTwo() {
  connection.end();
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'addition',
      message: 'How many would you like to add?',
      validate: function(value) {
    
    
        let valid = !isNaN(parseFloat(value));
        return valid || 'Please enter a number';
      },
      filter: Number
     
    }
    
  
  ])
  .then(answers => {

  connectionTwo.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [amount + answers.addition, amountB],function (error, results, fields) {
   
  
    connectionTwo.end();
    console.log("Inventory added!");

      if (error) throw error;
    
          });
});

}

function lowInventory() {

    connection.query('SELECT product_name, stock_quantity FROM products', function (error, results, fields) {
      
        if (error) throw error;
        for (i = 0; i < results.length; i++) {
            if (results[i].stock_quantity < 5) {
          console.log(results[i].product_name + ": " + results[i].stock_quantity);
            }
        }
           
          });
         
          connection.end();
    
}

function newProduct() {
    
      
      
        var questions = [
            {
              type: 'input',
              name: 'product',
              message: "What is the product?"
            },
            {
              type: 'input',
              name: 'department',
              message: "Which department should it be in?"
            },
            {
              type: 'input',
              name: 'price',
              message: "What is the price?",
              validate: function(value) {
    
    
                let valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
              },
              filter: Number
             
            },
            {
              type: 'input',
              name: 'stock',
              message: "How many to sell?",
              validate: function(value) {
    
    
                let valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
              },
              filter: Number
             
            }
            
          ];
          
          inquirer.prompt(questions).then(answers => {
          
               connection.query("INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES(?, ?, ?, ?)", [answers.product, answers.department, answers.price, answers.stock], function (error, results, fields) {
                if (error) throw error;
                console.log("Product is in the system!");
                   
                  });
                 
                  connection.end();
          });
    
}





function viewProducts() {
    connection.query("SELECT * FROM products", function (error, results, fields) {
        
        if (error) throw error;
        for (i = 0; i < results.length; i++) {
            if (results[i].stock_quantity > 0) {
          console.log("Product name: " + results[i].product_name + ", Department: " + results[i].department_name + ", Price: " + results[i].price + ", Stock: " + results[i].stock_quantity);
            }
        }
           
          });
         
          connection.end();
}