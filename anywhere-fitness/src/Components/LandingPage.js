import React from 'react'
import Header from './Header'
import Textband from './Textband'
export default function LandingPage() {
    return (
        <div>
           <Header />
           <Textband text="The world is your gym" />
           <Hero />
            <Button btntext="For Clients" btn2text="For Instructors"/>

        </div>
    )
}
