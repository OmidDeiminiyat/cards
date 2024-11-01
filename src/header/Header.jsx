import coffee from "./../assets/images/header_image.jpg";
import style from './Header.module.scss';
import CoffeeIcon from '@mui/icons-material/Coffee';
export const Header = () => {

    return (
        <>
            <section className={style.Header} >
            <div className={style.halfCircleVertical}> <span><CoffeeIcon style={{ fontSize: '50px' }}  /></span> </div> 
                <hgroup>
                    <p>We love Coffee</p>
                    <p>And all the people who make it</p>
                </hgroup>
                
            </section>
            <hr />
        </>
    )
}