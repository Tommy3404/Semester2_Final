import mysql from "npm:mysql2"

export const connection = mysql.createConnection({
  host: "localhost",
  user: "web",
  password: "AGoodPassword",
  database: "Sem2Final"
})

connection.connect((err)=> {
  if(err) console.log(err);
})
//INSERT INTO `Event`(`eventName`, `host`, `aboutHost`, `address`, `game`, `date`) VALUES ('event', 'host','about','address','date', 'game');
connection.query(`SELECT * FROM Event`, (err, results)=> {
        if(err) throw err
        console.log(results);
        
      })

      connection.query(`SELECT * FROM Game`, (err, results)=> {
              if(err) throw err
              console.log(results);
              
            })

            connection.query(`SELECT * FROM Host`, (err, results)=> {
                    if(err) throw err
                    console.log(results);
                    
                  })