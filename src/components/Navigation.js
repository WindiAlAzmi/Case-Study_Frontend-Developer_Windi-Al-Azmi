import React , {useState}from 'react';
import { FaBars } from "react-icons/fa";
import { useTransition, animated } from "@react-spring/web";
import NavigationMenu from './NavigationMenu';

const Navigation = () => {
    const [menu, setMenu] = useState(false);

    const menuTransitions = useTransition(menu, {
    from: { opacity: 0, transform:'translateX(-100%)' },
    enter: { opacity: 1 , transform:'translateX(0)'},
    leave: { opacity: 0 , transform:'translateX(-100%)'},
  })

    const backgroundTransitions = useTransition(menu, {
      from: { opacity: 0 , position:'absolute'},
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });
    return (
      <>
        <div className="">
          <FaBars size="24" onClick={() => setMenu(!menu)} />
        </div>
        {backgroundTransitions((style, item) => ( item &&
          <animated.div style={style} className="bg-black/50 top-0 left-0 h-full w-full z-50 fixed" onClick={() => setMenu(false)}>
           
          </animated.div>
        ))}

        {menuTransitions((style, item) => (  item && 
          <animated.div style={style} className="bg-white w-80 top-0 left-0 h-full z-50 fixed text-black">
            <NavigationMenu setMenu={setMenu} />
          </animated.div>
        ))}
      </>
    );
 
}

export default Navigation;