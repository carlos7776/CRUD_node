const { Router } = require('express');
const userController = require('../../../controllers/userController');

const router = Router();

router.get("/",userController.getAllUsers);

router.get("/:userId",userController.getUser);

router.post("/",userController.createUser);

router.put("/:userId",userController.updateUser);

router.delete("/:userId",userController.deleteUser);



module.exports = router;







// router.post("/new", async (req, res) => {
//   let name = req.body.name;
//   let email = req.body.email;
//   let password = req.body.password;
//   try {
//     const user = await db.User.create({
//       name: name,
//       email: email,
//       password: password,
//     });
//     res.status(200).json(user);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error creating user');
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const users = await db.User.findAll();
//     res.status(200).json(users);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error retrieving users');
//   }
// });

// router.get('/all',async(req,res) =>{
// try {
//     let users = await db.User.findAll();
//     res.status(200).send(users);
// } catch (error) {
//     res.status(400).send('no se optiene usuaitio')
// }
// })

// router.get('/:id', async (req,res) =>{
// try {
//     let id = req.params.id;
//     let users = await db.User.findByPk(id);
//     res.status(200).send(users);
    
// } catch (error) {
//     res.status(400).send('no se puede obtener usuario')
// }
// })

// router.put('/:id', async (req, res) =>{
// try {
//     let id = req.params.id;
//     let {name,email,password} = req.body;
//     await db.User.update(
//         {name,email,password},
//         {
//                 where:{id,}
//         }
//         );
//     res.status(200).send("usuario actializado")
// } catch (error) {
//     res.status(400).send("no se puede actualizar usuario")
// }

// })


// router.delete('/:id', async(req,res)=>{

// try {
    
//     let id = req.params.id;
//     await db.User.destroy({
//         where:{id,}
//     });
//     res.status(200).send("se elimino el usuario")
// } catch (error) {
//     res.status(400).send("no se elimino el usuario")
// }

// });


