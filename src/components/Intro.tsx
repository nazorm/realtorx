import { PrimaryButton, TransparentButton } from "./Button"
import styled from 'styled-components';
import Image from 'next/image';
import favicon from '/public/vercel.svg'
import { FaBeer } from 'react-icons/fa';

export const Intro = () => {
    return (
        <Wrapper>
            <div className="intro-text">
                <h1 className="heading leading-tight" style={{position:'relative'}}>Find the perfect <span className="animated-text text-primary"></span><br/> with Realtorx</h1>
                <p>We know finding a perfect home can be an hassle, lets take care of this hassle.
                    Browse our array of available spaces </p>
                <div className="intro-cta">
                    <PrimaryButton content={'Browse'} />
                    <TransparentButton content={'Learn More'} />

                </div>
            </div>
            <Circle>
                <div className="big-circle">
                    <div className="circle-main-image">
                        <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" width={250} height={300}
                        />
                    </div>
                    <ul className="rotating-circle">
                        <li className="small-circle">
                            <Image src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80" alt="circle-component" className="circle-image" width={80}
                                height={80}
                                layout="responsive"
                                style={{ borderRadius: '50%' }}


                            />
                        </li>
                        <li className="small-circle">
                            <Image src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80" alt="circle-component" className="circle-image" width={80}
                                height={80}
                                layout="responsive"
                                style={{ borderRadius: '50%' }}


                            />
                        </li>
                        <li className="small-circle">
                            <Image src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="circle-component" className="circle-image" width={80}
                                height={80}
                                layout="responsive"
                                style={{ borderRadius: '50%' }}


                            />
                        </li>
                        <li className="small-circle">
                            <Image src="https://images.unsplash.com/photo-1595231583135-e4bf563b4806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80" alt="circle-component" className="circle-image" width={80}
                                height={80}
                                layout="responsive"
                                style={{ borderRadius: '50%' }}


                            />
                        </li>
                        <li className="small-circle">
                            <Image src="https://images.unsplash.com/photo-1596997000103-e597b3ca50df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="circle-component" className="circle-image" width={80}
                                height={80}
                                layout="responsive"
                                style={{ borderRadius: '50%' }}


                            />
                        </li>
                        <li className="small-circle">
                            <Image src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="circle-component" className="circle-image" width={80}
                                height={80}
                                layout="responsive"
                                style={{ borderRadius: '50%' }}


                            />
                        </li>
                        <li className="small-circle">
                            <Image src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80" alt="circle-component" className="circle-image" width={80}
                                height={80}
                                layout="responsive"
                                style={{ borderRadius: '50%' }}


                            />
                        </li>
                        <li className="small-circle">
                            <Image src="https://images.unsplash.com/photo-1595231583135-e4bf563b4806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80" alt="circle-component" className="circle-image" width={80}
                                height={80}
                                layout="responsive"
                                style={{ borderRadius: '50%' }}


                            />
                        </li>
                    </ul>


                </div>
            </Circle>
        </Wrapper>
    )
}

const Wrapper = styled.section`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justify-content: space-between;

@media (max-width: 768px) {
    flex-direction: column;
  }
  .intro-text{
    width: 700px;
    .heading{
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    p{
        width: 500px;
    }
.intro-cta{
    margin-top: 20px;
    text-align: start;
    .btn{
        padding: 10px 20px;
        font-weight: bold;
        background-color: blue;
        border-radius: 4px;
        margin-right: 20px;
        border: transparent;
    }
}
  }

  .animated-text {
  text-indent: 8px;
}

.animated-text:before {
  content: "Home";
  animation: changeText 5s infinite 0s;
}

@keyframes changeText {
  0% {
    content: "Home";
  }
  25% {
    content: "Apartment";
  }
  50% {
    content: "Roommate";
  }
  75% {
    content: "Office Space";
  }
  100% {
    content: "Home";
  }
}
`;
const Circle = styled.div`
position:relative;
margin-top: 10%;
.big-circle {
}
.circle-main-image{
 position: absolute;
  top: 30%;
  left: 18%;
  @media (max-width: 768px) {
    /* flex-direction: column; */
  }
}
.rotating-circle{
    position:relative;
    /* border: 2px solid #d87272; */
    border-radius: 50%;
    width: 400px;
    height: 400px;
    -webkit-animation: spin 12s infinite linear;
    -moz-animation: spin 12s infinite linear; 
    animation: spin 12s infinite linear;
}
@-webkit-keyframes spin {
100%{-webkit-transform: rotate(360deg)}
}
@-moz-keyframes spin{
    100%{-webkit-transform: rotate(360deg)}
}
@keyframes spin{
    100%{-webkit-transform: rotate(360deg)}
}
.small-circle {
    list-style-type: none;
    position: absolute;
    left: calc(50% - 41px);
    top: calc(50% - 41px);
    height: 60px;
    width: 60px;
    /* border: 2px solid #d87272; */
    border-radius: 50%;
}

.small-circle:nth-child(1) {
    transform: translateX(200px);
}
.small-circle:nth-child(2) {
    transform: rotate(45deg) translateX(200px);
}
.small-circle:nth-child(3) {
    transform: rotate(90deg) translateX(200px);
}
.small-circle:nth-child(4) {
    transform: rotate(135deg) translateX(190px);
}
.small-circle:nth-child(5) {
    transform: rotate(180deg) translateX(190px);  
}
.small-circle:nth-child(6) {
    transform: rotate(225deg) translateX(180px);
}
.small-circle:nth-child(7) {
    transform: rotate(270deg) translateX(180px);
}
.small-circle:nth-child(8) {
    transform: rotate(320deg) translateX(190px);
}
`;
