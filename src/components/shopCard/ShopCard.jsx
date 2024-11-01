import style from './ShopCard.module.scss';
export const ShopCard = () => {
    return (
        <>
        <section className={style.shopCard} >
            <h3>Shop now</h3>
            <p>Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in no time at all. And the best part of it? It is totally organic, fair trade and sustainably sourced. So get brewing</p>
            <button>Go to products</button>
        </section>
        </>
    )
}