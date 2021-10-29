import React from 'react'
import { Button } from '../Button/Button'
import { ColumnLeft, ColumnRight, Container, Section } from './InfoSectionElement'
import { motion } from "framer-motion"
import "./InfoSection.css";



const InfoSection = ({heading, paraOne, paraTwo, buttonLabel, reverse, image, heading2, paraOne2, paraTwo2, buttonLabel2, image2}) => {
    return (
        <Section>
            <Container
              
            >
                <ColumnLeft>
                    <h1 style={{letterSpacing: '2px', padding: '5px'}}>{heading}</h1>
                    <p style={{letterSpacing: '2px', padding: '5px'}}>{paraTwo}</p>
                    <Button primary="true" to="/service">{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse= {reverse}>
                <img  src={image} alt="" /></ColumnRight>
            </Container>
            
        </Section>
    )
}

export default InfoSection