import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>

            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-s.jpg"
                leftButtonText="custom order"
                rightButtonText="existing inventory"
            />

            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-3.jpg"
                leftButtonText="custom order"
                rightButtonText="existing inventory"
            />

            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-x.jpg"
                leftButtonText="custom order"
                rightButtonText="existing inventory"
            />
            
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-y.jpg"
                leftButtonText="custom order"
                rightButtonText="existing inventory"
            />

            <Section
                title="Lowest Cost Solar Panel in America"
                description="Money-back guarantee"
                backgroundImage="solar-panel.jpg"
                leftButtonText="order now"
                rightButtonText="learn more"
            />

            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImage="solar-roof.jpg"
                leftButtonText="custom order"
                rightButtonText="existing inventory"
            />

            <Section
                title="Accesories"
                description=""
                backgroundImage="accessories.jpg"
                leftButtonText="shop now"
            />  

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`