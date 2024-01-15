import Button from './Button';
import { popular } from '../utils/constants';

const ButtonList = () => {
    return (
        <div className='flex px-5'>
            {popular.map(item => (
                <Button key={item.name} text={item.name} />
            ))}

        </div>
    )
}

export default ButtonList;