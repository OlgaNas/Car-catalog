import styles from './CreateCarForm.module.css';
import { useState } from 'react';

const clearData = {
    price: '',
    name: '',
    image: ''
}

const CreateCarForm = ({ setCars }) => {
    const [data, setData] = useState(clearData);


    const createCar = e => {
        e.preventDefault();

        setCars(prev => [
            { id: prev.length + 1, ...data },
            ...prev])

        setData(clearData)

    };


    return (
        <form className={styles.form}>
            <p><input
                placeholder='Name'
                onChange={e => setData(prev => ({
                    ...prev, name: e.target.value
                }))}
                value={data.name} /></p>
            <p><input
                placeholder='Price'
                onChange={e => setData(prev => ({
                    ...prev, price: e.target.value
                }))}
                value={data.price} /></p>
            <p><input
                placeholder='Image'
                onChange={e => setData(prev => ({
                    ...prev, image: e.target.value
                }))}
                value={data.image} /></p>

            <button
                className='btn'
                onClick={e => createCar(e)}>Create</button>
        </form >
    )
};

export default CreateCarForm;