import styled from 'styled-components';
import Image from 'next/image';
import Slider from "react-slick";

export const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
      };
    const testimonials = [
        {
            id: 1,
            name: 'Shina Peters',
            testimony: 'I have the best roommates thank to Realtorx',
            role: 'Student',
        },
        {
            id: 2,
            name: 'Anthony Peter',
            testimony: 'Realtorx ticked all my boxes',
            role: 'Event Planner',
        },
        {
            id: 3,
            name: 'Shina Rambo',
            testimony: 'Finding our Office space was seamless',
            role: 'Founder, Martel and Co',
        },
        {
            id: 4,
            name: 'Rambo',
            testimony: 'Finding our Office space was seamless',
            role: 'Ceo, Rambo group',
        }, {
            id: 5,
            name: 'Evelyn Martell',
            testimony: 'Moving to a new space was so seamless',
            role: 'Founder, Martel and Co',
        }, {
            id: 6,
            name: 'Anthony Peters',
            testimony: 'I have the best roommates thank to Realtorx',
            role: 'Student',
        }, {
            id: 7,
            name: 'Rambo',
            testimony: 'Finding our Office space was seamless',
            role: 'Ceo, Rambo group',
        }, {
            id: 8,
            name: 'Evelyn Martell',
            testimony: 'Moving to a new space was so seamless',
            role: 'Founder, Martel and Co',
        }

    ]
    return (
        <Wrapper>
            <h2 className='newofers-heading text-primary text-4xl font-bold'>What people have said</h2>
            <div className='testimonials'>
                <Slider {...settings}>
                    {testimonials.map((testimonial) => {
                        return (
                            <div className='testimonial' key={testimonial.id}>
                                <Image src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Avatar" width={50}
                                    height={50} style={{ borderRadius: '50%',  zIndex: 1 }} />
                                <h4 className='testifier-name text-primary font-semibold'>{testimonial.name}</h4>
                                <h5 className='testifier-role text-primary text-sm font-semibold'>{testimonial.role}</h5>
                                <p className='testifier-testimony'>{testimonial.testimony}</p>
                            </div>
                        )
                    })}
                </Slider>
            </div>

        </Wrapper>
    )

}

const Wrapper = styled.section`
text-align: center;
margin: 10% auto 5%;
width: 90%;
.testimonials{
    margin: 5% auto;
    .slick-dots li.slick-active button:before, .slick-prev:before, .slick-next:before{
    color: #3232a7;
  }
}
.testimonial{
    width: 300px;
    height: 200px;
    padding: 0 12px;
    text-align: center;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
}
.testifier-testimony{
    margin: 15px 25px;
}
`;