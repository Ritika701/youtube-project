import { categories } from '../utils/constants'
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const show = useSelector((store) => store.app.toggle);
    if(show === false) return null;
    return (
        <div className='grid-cols-1 p-5 shadow-lg'>
            {categories.map(item => (
                <div>
                    <div className='flex p-2'><span className='text-xl mr-5'>{item.icon}</span> {item.name}</div>
                    {item.divider && <hr className="my-5 border-black/[0.2]" />}
                </div>
            ))}
        </div>
    )
}

export default Sidebar;