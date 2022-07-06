import styled from 'styled-components';
import Link from 'next/link'

export const Header=()=>{
    return(
        <div className='flex justify-between items-center'>
        <h3 className='font-Pacifico text-3xl text-primary'>Realtorx</h3>
      <NavList className='flex justify-between font-Poppins'>
        <li className='mx-6'>
            Housing
        </li>
        <li className='mx-6'>
            Resources
        </li>
        <li className='mx-6'>
            Support
        </li>
        <li className='mx-6'>
            Company
        </li>
      </NavList>
      <HeaderCta>
      <Link href="/" >
          <a className='text-primary font-semibold'>Login</a>
        </Link>
        /
        <Link href="/">
          <a className='text-primary font-semibold'>Register</a>
        </Link>
      </HeaderCta>

        </div>
    )
 
}

const NavList  = styled.ul`
list-style-type: none;
li{
position: relative;
text-decoration: none;
padding: 0 10px;
}
li:after{
  content: "";
  position: absolute;
  background-color: #3232a7;
  height: 3px;
  width: 0;
  left:0;
  bottom: -10px;
  transition: 0.3s
}
li:hover:after{
  width: 100%;
}
li:hover{
  cursor: pointer;
}

@media (max-width: 768px) {
    display: none;
  }
`;
const HeaderCta = styled.div`

`;