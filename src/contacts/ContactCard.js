import React from 'react';

export default function ContactCard(props) {

    let { id, name, email, empresa, cargo } = {...props.data};

    if (id != null) {
        return (
            <div>
                <div className="mb-2 mt-2 flex flex-col p-4 bg-white items-start text-gray-600 rounded-lg w-full">
                    <span className="block text-2xl font-semibold">Nome: {name}</span>
                    <span className="block text-base text-gray-500">Email: {email}</span>
                    <span className="block text-base text-gray-500">Empresa: {empresa}</span>
                    <span className="block text-base text-gray-500">Cargo: {cargo}</span>
                </div>
                <button className="px-4 py-2 rounded shadow-lg bg-blue-400 text-base" onClick={()=>props.edit(props.data)} >Editar </button>
                &nbsp;&nbsp;
                <button className="px-4 py-2 rounded shadow-lg bg-red-400 text-base" onClick={()=>props.del(id)}> Excluir </button>
            </div>
        )
    } else {
        return null;
    }
}
