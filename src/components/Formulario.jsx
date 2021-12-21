import React from 'react'
import '../App.css'
import { Formik, Form } from 'formik';


const Formulario = ({ valoresIniciales, accion, children, validacionFormulario }) => {

    return <Formik initialValues={valoresIniciales}
        onSubmit={accion} validationSchema={validacionFormulario}
    >

        <Form className="form">
            {children}
            <button className="submit" type="submit">Comprar</button>
        </Form>




    </Formik>

}


export default Formulario
