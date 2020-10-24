import React, { useState } from 'react'
import ContactForm from './ContactForm'
import ContactCard from './ContactCard'

export default function ContactList() {
    let [list, setList] = useState([{id: null, name:'', email: '', empresa: '', cargo: '' }]);

    let [itemEdit, setItemEdit] = useState({ id: null, name: '', email: '', empresa: '', cargo: '' });
    let [editing, setEditing] = useState(false);
    
    const addItem = (item) => setList([...list, item]);
    const delItem = (id) => {
        const itens = list.filter(list => list.id !== id);
        setList(itens);

        setEditing(false);
    }
    const editItem = (item) => {
        setEditing(true);

        setItemEdit(item);
    }
    const updateItem = (item) => {
        setEditing(false);

        setList(list.map((list) => (list.id === item.id ? item : list)));
    }
    const cancel = () => {
        setEditing(false);
    }

    let cards = list.map(contact => (
        <ContactCard key={contact.id} data={contact} del={delItem} edit={editItem} />
    ))

    return (
        <div className="w-6/12">       
            {editing ? (
                <div>
                    <h2>Edição do contato: {itemEdit.name}</h2>
                    <ContactForm setEditing={setEditing} itemEdit={itemEdit} update={updateItem} />
                </div>
                ) : (
                <div>
                    <h2>Cadastro de contatos</h2>
                    <ContactForm save={addItem} />
                </div>
            )}
            {cards}
        </div>
    )
}
