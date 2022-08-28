import React from 'react'
import { ContactRow, ContactWrapper, HeadContent, MainContent, SubTitle, TitleHead } from './Contact.styles'

const Contact = () => {
  return (
    <ContactWrapper>
        <div className="v-container">
            <ContactRow>
                <HeadContent>
                    <TitleHead></TitleHead>
                    <SubTitle></SubTitle>
                </HeadContent>
                <MainContent></MainContent>
            </ContactRow>
        </div>
    </ContactWrapper>
  )
}

export default Contact