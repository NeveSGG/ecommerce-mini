import { FC, useState } from "react";
import logoImage from '../assets/images/medusa.svg'
import cartIcon from '../assets/images/bxs-cart-alt.svg'
import cn from 'classnames'
import { ICartItem } from "../types";

const cartItems:ICartItem[] = [
    {
        _id: '1kjhs8as7dh23r8a233',
        imagePath: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/175bef84e67cd279a2952c4897613161/2ad5f7a59706e53d1415c3f4101e387dbfb86858192bcc52e679606dead4ff18.png.webp',
        name: 'Ноутбук MSI GT77 Titan 12UHS-066RU',
        count: 1,
        price: 359999
    },
    {
        _id: '1kjhs8as7d23da23r8a',
        imagePath: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/175bef84e67cd279a2952c4897613161/2ad5f7a59706e53d1415c3f4101e387dbfb86858192bcc52e679606dead4ff18.png.webp',
        name: 'Ноутбук MSI GT77 Titan 12UHS-066RU',
        count: 1,
        price: 359999
    },
    {
        _id: '1kjhs8as1asah23r8a',
        imagePath: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/175bef84e67cd279a2952c4897613161/2ad5f7a59706e53d1415c3f4101e387dbfb86858192bcc52e679606dead4ff18.png.webp',
        name: 'Ноутбук MSI GT77 Titan 12UHS-066RU',
        count: 1,
        price: 359999
    },
    {
        _id: '1kjhs8as7d254g28a',
        imagePath: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/175bef84e67cd279a2952c4897613161/2ad5f7a59706e53d1415c3f4101e387dbfb86858192bcc52e679606dead4ff18.png.webp',
        name: 'Ноутбук MSI GT77 Titan 12UHS-066RU',
        count: 1,
        price: 359999
    },
]

const Header:FC = () => {

    const [isCartShown, setIsCartShown] = useState(false)
    const total = cartItems.reduce((acc, item) => 
        acc + item.price
    , 0)

    const removeHandler = (id:string) => {
        console.log(id)
    }

    return (
        <div 
        className='flex items-center justify-between relative bg-slate-200 py-2 px-4'
        style={{
            backgroundColor: 'rgb(232,232,232)',
            background: 'linear-gradient(90deg, rgba(232,232,232,1) 0%, rgba(133,59,195,1) 100%)',
            WebkitBoxShadow: '0px 5px 10px 2px rgba(0, 0, 0, 0.2)',
            MozBoxShadow: '0px 5px 10px 2px rgba(0, 0, 0, 0.2)',
            boxShadow: '0px 5px 10px 2px rgba(0, 0, 0, 0.2)'
        }}
        >
            <img src={logoImage} alt='' width='190'/>

            <button className='bg-transparent border-none w-9' onClick={() => setIsCartShown((cart) => !cart)}>
                <img src={cartIcon} alt=''/>
            </button>

            <div 
            className={cn('flex flex-col divide-y absolute top-3 right-0 p-5 mr-4 rounded-md border ', {
                hidden: !isCartShown
            })}
            style={{
                top: '80px',
                WebkitBoxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
                MozBoxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
                boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)'
            }}
            >

                {cartItems.map(item => (

                    <div key={item._id} className='flex items-center'>
                        <img className='mr-3' src={item.imagePath} alt={item.name} width={'400'} height={'400'}/>
                    

                        <div>
                            <div className='font-semibold text-2xl font-inter'>{item.name}</div>
                            <div>{`${item.count} x ₽${item.price}`}</div>
                            <button 
                            className='text-red-600 bg-transparent border-0S'
                            onClick={() => removeHandler(item._id)}
                            >Удалить</button>
                        </div>

                    </div>

                ))}
                
                <div className='text-lg'>
                    Total: <b>₽{total}</b>
                </div>

            </div>
        </div>
    )
}

export default Header