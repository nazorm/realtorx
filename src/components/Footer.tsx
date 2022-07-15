import styled from 'styled-components';
import Link from 'next/link'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'

export const Footer = () => {
    return (
        <Wrapper>
            <div className='logo-and-socials w-96'>
                <div className='footer-content'>
                    <h3 className='font-Pacifico text-3xl text-slate-200'>Realtorx</h3>
                </div>
                <div className='footer-content'>
                    <p className='mt-20 text-slate-200'>Reach Out</p>
                    <div className='socials flex mt-1.5'>
                        <Link href="https://www.facebook.com" target='_blank' rel='noopener noreferrer' prefetch={false}>
                            <FaFacebookSquare size={30} fill={'whitesmoke'} style={{ marginRight: '5px' }} />
                        </Link>
                        <Link href="https://www.twitter.com/" target='_blank' rel='noopener noreferrer' prefetch={false}>
                            <FaTwitterSquare size={30} fill={'whitesmoke'} style={{ marginRight: '5px' }} />
                        </Link>
                        <Link href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer' prefetch={false}>
                            <FaInstagramSquare size={30} fill={'whitesmoke'} style={{ marginRight: '5px' }} />
                        </Link>
                        <Link href="https://www.linkedin.com/" target='_blank' rel='noopener noreferrer' prefetch={false}>
                            <FaLinkedin size={30} fill={'whitesmoke'} style={{ marginRight: '5px' }} />
                        </Link>
                    </div>
                    <p className='text-slate-200 mt-6' style={{ display: 'flex' }}><SiGmail size={20} fill={'whitesmoke'} style={{ marginRight: '10px' }} />
                        <Link href="mailto:company@example.com" target='_blank' rel='noopener noreferrer' prefetch={false}>
                            company@example.com
                        </Link>
                    </p>
                </div>
            </div>
            <div className='product-snd-contact'>
                <ul className='products'>
                    <p className='text-xl text-slate-200 mb-2'>Products</p>
                    <li className='text-slate-200'>
                        Sesame Butter / Tahini
                    </li>
                    <li className='text-slate-200'>
                        Nut Butters
                    </li>
                    <li className='text-slate-200'>
                        Honey
                    </li>
                    <li className='text-slate-200'>
                        Marmalades
                    </li>

                </ul>
                <ul className='contact'>
                    <p className='text-xl text-slate-200 mb-2'>Contact</p>
                    <li className='text-slate-200'>
                        <Link href="mailto:user@example.com" target='_blank' rel='noopener noreferrer' prefetch={false}>
                            user@example.com
                        </Link>

                    </li>
                    <li className='text-slate-200'>
                        +123 4023 345 2345
                    </li>
                </ul>
            </div>
            <div className='compsny-snd-help'>
                <ul className='company'>
                    <p className='text-xl text-slate-200 mb-2'>Company</p>
                    <li className='text-slate-200'>
                        Who we are
                    </li>
                    <li className='text-slate-200'>
                        Our wild culture
                    </li>
                    <li className='text-slate-200'>
                        Team
                    </li>
                    <li className='text-slate-200'>
                        Concept store
                    </li>
                    <li className='text-slate-200'>
                        Newsletter
                    </li>
                </ul>
                <ul className='help'>
                    <p className='text-xl text-slate-200 mb-2'>Help</p>
                    <li className='text-slate-200'>
                        Terms and Conditions
                    </li>
                    <li className='text-slate-200'>
                        Privacy Policy
                    </li>
                    <li className='text-slate-200'>
                        Cookies
                    </li>
                    <li className='text-slate-200'>
                        Payment Methods
                    </li>

                </ul>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
display: flex;
background-color: #3232a7;
justify-content: space-between;
margin: 0 -98px; 
height: 400px;
padding: 20px 100px;
li{
    list-style-type: none;
    line-height: 1.8;
}
.help, .contact{
    margin-top: 20px;
}
`;