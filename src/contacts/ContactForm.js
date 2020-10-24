import React, { useState } from 'react'

function getId() {
    return (5999 - Math.round(Math.random() * 392));
} 

function validateContact(data) {
    if (data.name === '') {
        alert('Preencha o campo "Nome".')
        return false;
    }else if (data.empresa === ''){
        alert('Preencha o campo "Empresa".')
        return false;
    }else if (data.email !== ''){
        if (!(validateEmail(data.email))){
            return false;
        };
    }
    
    return true;
}

function validateEmail(data) {
    let usuario = data.substring(0, data.indexOf("@"));
    let dominio = data.substring(data.indexOf("@")+ 1, data.length);
    
    if (!((usuario.length >=1) &&
          (dominio.length >=3) &&
          (usuario.search("@") == -1) &&
          (dominio.search("@") == -1) &&
          (usuario.search(" ") == -1) &&
          (dominio.search(" ") == -1) &&
          (dominio.search(".") != -1) &&
          (dominio.indexOf(".") >= 1) &&
          (dominio.lastIndexOf(".") < dominio.length - 1))) {
        alert("E-mail inválido");
        return false;
    }
    
    return true;
}


export default function ContactForm(props) {
    const [data, setData] = useState({id: null, name:'', email: '', empresa: '', cargo: '' });
    let Action = 'Adicionar';

    let { id } = {...props.itemEdit};

    if (id != undefined){
        Action = 'Salvar';
    }

    const changeField = (field) => {
        const change = (evt) => setData({ ...data, [field]: evt.target.value });
        return change;
    }

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""));
        setData({id: null, name:'', email: '', empresa: '', cargo: '' });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (validateContact(data)) {
            if (props.itemEdit){
                props.update({ ...data, id: id });
            }else {
                props.save({ ...data, id: getId() });
            }
    
            handleReset();
        }
    }

    return (
        <form onSubmit={handleSubmit} className="p-2 flex flex-col">
            <div className="flex flex-row items-stretch mb-2 justify-between">
                <label className="text-lg">Nome</label>
                <input name="name" type="text" className="p-2 rounded text-gray-600 text-lg"
                    maxLength={35} onChange={changeField('name')}/>
            </div>

            <div className="flex flex-row mb-2 items-stretch justify-between">
                <label className="text-lg">E-mail</label>
                <input name="email" type="mail" className="p-2 rounded text-gray-600 text-lg " 
                    maxLength={50} onChange={changeField('email')}/>
            </div>

            <div className="flex flex-row mb-2 items-stretch justify-between">
                <label className="text-lg">Empresa</label>
                <input name="empresa" type="text" className="p-2 rounded text-gray-600 text-lg " 
                    maxLength={50} onChange={changeField('empresa')}/>
            </div>

            <div className="flex flex-row mb-2 items-stretch justify-between">
                <label className="text-lg">Cargo</label>
                <input name="cargo" type="text" className="p-2 rounded text-gray-600 text-lg " 
                    maxLength={50} onChange={changeField('cargo')}/>
            </div>

            <div>
                <button className="px-4 py-2 rounded shadow-lg bg-green-400 text-base" type="submit">{Action}</button>
            </div>
        </form>
    )
}
