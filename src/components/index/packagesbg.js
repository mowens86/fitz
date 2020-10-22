import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import packageStyle from "../styles/packagesbg.module.css"
import BackgroundImage from 'gatsby-background-image'

const PackageSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "fitzpackages_bg_1920x1080.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className={packageStyle.packageWrapper}>

            <div className={packageStyle.packageContentWrapper}>
              
              <div className={packageStyle.packageBox}>
                <h2 className={packageStyle.packageH2}>Starter <span className={packageStyle.packageSpan}>$10/month</span></h2>
                <ul className={packageStyle.packageList}>
                  <li>2 Day a Week</li>
                  <li>GYM Access & Equipment</li>
                  <li>Get Suplement</li>
                  <li>Personal Trainers</li>
                  <li>Diet Guides</li>
                </ul>
                <a href="/" className={packageStyle.packageButton}>Join Starter</a>
              </div>

              <div className={packageStyle.packageBox}>
                <h2 className={packageStyle.packageH2}>Regular <span className={packageStyle.packageSpan}>$20/month</span></h2>
                <ul className={packageStyle.packageList}>
                  <li>2 Day a Week</li>
                  <li>GYM Access & Equipment</li>
                  <li>Get Suplement</li>
                  <li>Personal Trainers</li>
                  <li>Diet Guides</li>
                </ul>
                <a href="/" className={packageStyle.packageButton}>Join Regular</a>
              </div>

              <div className={packageStyle.packageBox}>
                <h2 className={packageStyle.packageH2}>Advanced <span className={packageStyle.packageSpan}>$30/month</span></h2>
                <ul className={packageStyle.packageList}>
                  <li>2 Day a Week</li>
                  <li>GYM Access & Equipment</li>
                  <li>Get Suplement</li>
                  <li>Personal Trainers</li>
                  <li>Diet Guides</li>
                </ul>
                <a href="/" className={packageStyle.packageButton}>Join Advanced</a>
              </div>
            
            </div>
          </div>

        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(PackageSection)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`

export default StyledBackgroundSection