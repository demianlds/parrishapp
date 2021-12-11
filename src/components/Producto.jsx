import React, { useState } from 'react';
import Formulario from '../components/Formulario'
import '../App.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Field, ErrorMessage } from 'formik';
import { Collapse } from '@mui/material';
import axios from 'axios';
import * as Yup from 'yup';





const Producto = ({ nombreProducto, id, imagen, botonProducto }) => {

    const baseUrl = 'http://localhost:5050/api'

    const [form, setForm] = useState(false)

    const producto = [{
        id: id,
        nombre: nombreProducto,
        imagen: imagen,
        boton: botonProducto
    }];

    const validate = Yup.object().shape({
        nombre: Yup.string()
          .max(15, 'Debe tener 15 caracteres o menos')
          .required('Required'),
        apellido: Yup.string()
          .max(20, 'Debe tener 20 caracteres o menos')
          .required('Required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('El Email es requerido'),
        telefono: Yup.string()
          .max(10,'Debe tener maximo 10 caracteres')
          .required('Confirm password is required'),
      })

    const nuevoProducto = async (values) => {
        try {
            const { data } = await axios.post(`${baseUrl}/producto`, values)

        } catch (ex) {
            alert('OCURRIO UN ERROR')
        }
    }

    return (


        <div>

            <Collapse in={form} >
                <Formulario classname="formulario" valoresIniciales={{
                    nombre: '',
                    apellido: '',
                    email: '',
                    telefono: ''
                }}

                    accion={(values, { resetForm }) => {
                        console.log(values);
                        resetForm();
                        console.log("formulario enviado")
                        nuevoProducto(values)
                    }}

                    validacionFormulario={validate}
                >


                    <Box
                        
                        sx={{
                            width: 150,
                            height: 150
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h3 style={{ color: 'white', fontFamily: 'cursive' }}>Compra</h3>
                        
                        <Field className="field" id="nombre" name="nombre" placeholder="Nombre" />
                        <ErrorMessage component="div" name="nombre" className="field-error text-danger" />
                        <Field className="field" id="apellido" name="apellido" placeholder="Apellido" />
                        <ErrorMessage component="div" name="apellido" className="field-error text-danger" />
                        <Field className="field" id="email" name="email" placeholder="correo@correo.com" type="email" />
                        <ErrorMessage component="div" name="email" className="field-error text-danger" />
                        <Field className="field" id="telefono" name="telefono" placeholder="Telefono" />
                        <ErrorMessage component="div" name="telefono" className="field-error text-danger" />

                    </Box>
                </Formulario>
            </Collapse>

            {producto.map((item) => {
                return (
                    <Card key={item.id} sx={{ maxWidth: 250 }}>
                        <CardMedia
                            component="img"
                            alt="imagen"
                            height="200"
                            image={item.imagen} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.nombre}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => {

                                setForm(() => {
                                    if (form) {
                                        return false
                                    } else {
                                        return true
                                    }
                                })
                            }}>{item.boton}</Button>
                        </CardActions>
                    </Card>
                );
            })}

        </div>

    );


}

export default Producto
