import styled from 'styled-components';
import Image from 'next/image';
import { DialogModal } from './Modal';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

export const NewOffers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    const primaryAction = () => {
        alert('Sucessful')
        setIsModalOpen(false);
    }
    const secondaryBtn = () => {
        setIsModalOpen(false);
    }

    return (
        <Wrapper>
            <h2 className='newofers-heading text-primary text-4xl font-bold'>What&apos;s new at Realtorx?</h2>

            <FlipCardContainer>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Avatar" width={350}
                                height={300} style={{ borderRadius: '8px' }} />
                            <div className='flip-text'>
                                Switch from showers to bath and back again. You Decide.
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <Image src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Avatar" width={350}
                                height={300} style={{ borderRadius: '8px' }} />
                            <div className='flip-text'>
                                Testing
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image src="https://images.unsplash.com/photo-1595231583135-e4bf563b4806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80" alt="Avatar" width={350}
                                height={300} style={{ borderRadius: '8px' }} />
                            <div className='flip-text'>
                                Switch from showers to bath and back again. You Decide.
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <Image src="https://images.unsplash.com/photo-1596997000103-e597b3ca50df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Avatar" width={350}
                                height={300} style={{ borderRadius: '8px' }} />
                            <div className='flip-text'>
                                Easily switch from a regular back yard to a playground.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Avatar" width={350}
                                height={300} style={{ borderRadius: '8px' }} />
                            <div className='flip-text'>
                                Switch from showers to bath and back again. You Decide.
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <Image src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Avatar" width={350}
                                height={300} style={{ borderRadius: '8px' }} />
                            <div className='flip-text'>
                                Switch from showers to bath and back again. Your choice.
                            </div>
                        </div>
                    </div>
                </div>
            </FlipCardContainer>
            <Services>
                <h2 className='newofers-heading text-primary text-4xl font-bold'>Our Services</h2>
                <div className='service-container'>
                    <div className='service'>
                        <Image src="https://images.unsplash.com/flagged/photo-1594051723956-b14e836bdeb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmUlMjBkYXl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Avatar" width={250}
                            height={200} />
                        <div className='service-text'>
                            Find the perfect space
                        </div>
                        <button className='service-cta text-primary font-semibold' onClick={toggleModal}>Book now</button>
                    </div>
                    <div className='service'>
                        <Image src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMTQyODE4NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="Avatar" width={250}
                            height={200} />
                        <div className='service-text'>
                            Find roommates in your desired location
                        </div>
                        <button className='service-cta text-primary font-semibold' onClick={toggleModal}>Get started</button>
                    </div>
                    <div className='service'>
                        <Image src="https://images.unsplash.com/photo-1614359835514-92f8ba196357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aW5nJTIwdHJ1Y2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Avatar" width={250}
                            height={200} />
                        <div className='service-text'>
                            Make use of our truck on moving day
                        </div>
                        <button className='service-cta text-primary font-semibold' onClick={toggleModal}>Schedule now</button>
                    </div>
                    <div className='service'>
                        <Image src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Avatar" width={250}
                            height={200} />
                        <div className='service-text'>
                            Find and checkout your roommates before you decide
                        </div>
                        <button className='service-cta text-primary font-semibold' onClick={toggleModal}>Book now</button>
                    </div>
                </div>

            </Services>

            <ExpectaionContainer>
                <h2 className='newofers-heading text-primary text-4xl font-bold'>What to expect from Realtorx</h2>
                <div className='expectations-wrapper'>
                    <div className='expectations-1'>
                        <div className='expectation expectation-a'>
                            <Image src="https://images.unsplash.com/photo-1590613607026-15c463e30ca5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="security" width={200}
                                height={200} layout="responsive" style={{ borderRadius: '50%', zIndex: '1' }} />
                            <label className='expectation-text font-bold'>Security</label>
                        </div>
                        <div className='expectation expectation-h'>
                            <Image src="https://images.unsplash.com/photo-1590613607026-15c463e30ca5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="security" width={200}
                                height={200} layout="responsive" style={{ borderRadius: '50%', zIndex: '1' }} />
                            <label className='expectation-text font-bold'>Up to par</label>
                        </div>
                        <div className='expectation expectation-g'>
                            <Image src="https://images.unsplash.com/photo-1590613607026-15c463e30ca5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="security" width={200}
                                height={200} layout="responsive" style={{ borderRadius: '50%', zIndex: '1' }} />
                            <label className='expectation-text font-bold'>Access</label>
                        </div>
                    </div>
                    <div className='expectations-2'>
                        <div className='expectation expectation-c'>
                            <Image src="https://images.unsplash.com/photo-1590613607026-15c463e30ca5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="security" width={200}
                                height={200} layout="responsive" style={{ borderRadius: '50%', zIndex: '1' }} />
                            <label className='expectation-text font-bold'>Security</label>
                        </div>
                        <div className='expectation expectation-e'>
                            <Image src="https://images.unsplash.com/photo-1590613607026-15c463e30ca5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="security" width={200}
                                height={200} layout="responsive" style={{ borderRadius: '50%', zIndex: '1' }} />
                            <label className='expectation-text font-bold'>Security</label>
                        </div>
                    </div>
                </div>
            </ExpectaionContainer>
            <DialogModal
                isModalOpen={isModalOpen}
                toggleModal={toggleModal}
                primaryBtnText='Submit'
                primaryAction={primaryAction}
                secondaryBtn={secondaryBtn}
                secondaryBtnText='cancel'
            >
                Get Started
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Full Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="What service do you want rendered?"
                    type="text"
                    fullWidth
                    variant="standard"
                />

            </DialogModal>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: 10% auto 5%;
.newofers-heading{
    text-align: center;
}
`;
const FlipCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3% auto;
.flip-text{
    padding: 0 5px;
}
.flip-card {
  background-color: #fff;
  width: 350px;
  height: 450px;
  perspective: 1500px;
  border-radius: 8px;
  overflow: hidden;
  @media only screen and (max-width: 1056px){
    width: 280px;
    height: 350px;
        }
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: start;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #fff;
  color: black;
}

.flip-card-back {
    background-color: #fff;
    transform: rotateY(180deg);
}
`;

const ExpectaionContainer = styled.section`
  position: relative;
.expectations-wrapper{
    position: relative;
    height: 400px;
}
.expectations-1, .expectations-2{
    display: flex;
    justify-content: space-between;
    margin: 3% auto;
}
.expectations-2{
    width: 60%;
}
.expectation{
    position: relative;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border: 1px solid #3232a7;
     padding: 8px;
  
}
.expectation-text{
    position: absolute;
    top: 45%;
    left: 35%;
    color: white;
    z-index:2;
}
.expectation-a{
    position: absolute;
    left: 8;
    animation: bounce 5s linear infinite;
}
@keyframes bounce{
    0%{
        top: 0%;
    }
    50%{
        top: 70%;
        transform:  rotate(-40deg);
    }
    80%{
        transform:  rotate(40deg);
    }
    100%{
        top: 0%;
    }
}
.expectation-h{
    position: absolute;
    animation: bounce 5s linear infinite;
    -webkit-animation-delay:2s;
    left: 40%;
}
.expectation-g{
      position: absolute;
      animation: bounce 5s linear infinite;
      -webkit-animation-delay:4s;
      left: 82%;
}
.expectation-c{
    position: absolute;
    animation: bounce 5s linear infinite;
    -webkit-animation-delay:3s;
}
.expectation-e{
    position: absolute;
    animation: bounce 5s linear infinite;
    -webkit-animation-delay:6s;
    left: 60%;
}
`;


const Services = styled.section`
 margin: 5% auto;
 .service-container{
   display: flex;
   justify-content: space-between;
 }
 .service{
    position:relative;
   margin: 5% auto;
   border-radius: 8px;
   width: 250px;
   height: 325px;
   overflow: hidden;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   @media only screen and (max-width: 1056px){
    width: 210px;
    height: 280px;
        }
 }
 .service-text{
    padding: 15px;
 }
 .service-cta{
    position: absolute;
    left: 6%;
    bottom: 2%;
 }
`;
