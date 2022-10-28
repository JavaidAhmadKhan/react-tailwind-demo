import { Carousel } from 'flowbite-react'
import React from 'react'

const SliderHome = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-[36rem] 2xl:h-[38rem] rounded-none ">
            <Carousel className='rounded-none'>
                <img
                    src="https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg"
                    alt="..."
                />
                <img
                    src="https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg"
                    alt="..."
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg"
                    alt="..."
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNySMhdOQgJqRFQi1DTAOIjFZlQKx21slUBw&usqp=CAU"
                    alt="..."
                />
                <img
                    src="https://static.toiimg.com/thumb/msid-92233948,width-1070,height-580,resizemode-75/92233948,pt-32,y_pad-40/92233948.jpg"
                    alt="..."
                />
            </Carousel>
        </div>

    )
}

export default SliderHome