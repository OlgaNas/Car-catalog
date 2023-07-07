import { useParams } from 'react-router-dom';

const CarDetail = () => {

    const { id } = useParams()

    return <div>Car Details {id} </div>
}

export default CarDetail;