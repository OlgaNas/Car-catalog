import styles from '../Home.module.css';


function CarItem({ car }) {
    return (
        <div className={styles.item}>
            <div
                className={styles.image}
                style={{
                    backgroundImage: `url(${car.image})`,
                }}
            />
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>
                    {new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'EUR',
                        currencyDisplay: 'narrowSymbol'
                    }).format(car.price)}
                </p>
                <button>Read more</button>
            </div>
        </div>
    )

}

export default CarItem;