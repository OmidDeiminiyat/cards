import image1 from './../../assets/images/im1.jpeg';
import image2 from './../../assets/images/im2.jpeg';
import image3 from './../../assets/images/im3.jpeg';
import style from './Cards.module.scss';
export const Cards = () => {

    return (
        <>
        <section className={style.threeCards}>
            <figure>
                <h3>The right beans</h3>
                <p>Our journey begins with a deep-rooted connection to the land, as we seek out farmers who uphold environmentally-friendly practices and prioritize the well-being of their communities. Through personal relationships and mutual respect, we collaborate closely with these farmers, understanding their methods and values.</p>
                <img src={image3} alt="Coffee" />
            </figure>
            <figure>
                <h3>Carefully handled</h3>
                <p>Each bean is carefully handpicked at the peak of ripeness, ensuring optimal flavor and aroma. We embrace diversity in our selection, cherishing the unique characteristics of each region and varietal. From the lush mountainsides to the sun-kissed valleys, we traverse the landscapes in search of perfection..</p>
                <img src={image2} alt="Coffee" />
            </figure>
            <figure>
                <h3>From us to you</h3>
                <p>Our commitment to organic farming means that our beans are free from harmful chemicals, allowing the natural flavors to shine through. We believe in transparency and traceability, providing our customers with a genuine connection to the origins of their coffee.</p>
                <img src={image1} alt="Coffee" />
            </figure>
        </section>
        <hr />
        </>
    )
}