const Persona = require('./clases/Persona.js');

(async () => {
  try {
    // Metodo que nos permite crear la tabla 
    await Persona.sync();

    //Metodo Build y Save para insertar registros en la tabla
    // const persona1 = Persona.build({
    //   rut: '12.345.678-9',
    //   nombre: 'Maria',
    //   apellido: 'Ramirez'
    // });
    // await persona1.save();

    //Metodo create para insertar registros en la tabla
    // const registroPersona = await Persona.create({
    //   rut: '33.333.333-3',
    //   nombre: 'Luisa',
    //   apellido: 'Roa'
    // })
    // console.log('++++++++++++++++++++++++++++++++++++++++++++++++');
    // console.log('Registro de Persona', registroPersona.id);
    // console.log('++++++++++++++++++++++++++++++++++++++++++++++++');

    // Metoodo BulkCreate para insertar varios registros en la tabla
    // const listadoPersonas = [
    //   {rut: '44.444.444-4', nombre: 'Juan', apellido: 'Gutierrez'},
    //   {rut: '55.5555.555-5', nombre: 'Monica', apellido: 'Alvarado'},
    //   {rut: '66.666.666-6', nombre: 'Luisa', apellido: 'Parra'}
    // ]
    // await Persona.bulkCreate(listadoPersonas)

    // Metodo findAll para consultar varios registros de la tabla
    // const listadoCompleto = await Persona.findAll({raw: true});
    // const listadoOrdenado = await Persona.findAll({raw: true, order: [['rut', 'ASC']]});
    // console.table(listadoOrdenado);

    // Metodo findByPK para consultar condicionado por la clase primaria
    // const consulta1 =  await Persona.findByPk(2)
    // if(consulta1) {
    //   console.log(consulta1.get({ plain: true }));
    // }

    // Metodo findOne para consultar 1 registro
    // const consulta2 = await Persona.findOne({
    //   where: {
    //     id: 1,
    //   }
    // })
    // if (consulta2) {
    //   console.log(consulta2.get({ plain: true }));
    // }
    
    // Metodo update para modificar registro
    // await Persona.update({ nombre: 'Monica', apellido:'Alvarez'}, 
    //   { where: {
    //       id: 5
    //     }
    //   }
    //   );

    // Metodo destroy para eliminar registro
    await Persona.destroy({ where:{ id: 1 }});

    console.log('Ejecucion exitosa');
  } catch (error) {
    console.log(error);    
  }
})()