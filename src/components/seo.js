/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, url, meta, title, pageData }) => {
  console.log(pageData)

  const WebSite = {
    "@type": "WebSite",
    "@id": `${url}/#webpage`,
    "url": `${url}/`,
    "name": title,
    "description": description,
  }

  // const WebPage = {
  //   "@type":"WebPage",
  //   "@id":`${websiteUrl}/${slug}/#webpage`,
  //   "url": `${websiteUrl}/${slug}/`,
  //   "inLanguage":"en-US",
  //   "name": seo.title,
  //   "description": seo.metaDesc,
  //   "isPartOf":{"@id":`${websiteUrl}/#webpage`},
  //     "datePublished": new Date(dateCompanyFormed).toISOString(),
  //     "dateModified": new Date().toISOString(),
  //     "description": description
  //   }

  // const Logo = {
  //   "@type": "Organization",
  //   "url": `${websiteUrl}/`,
  //   "logo": `${websiteUrl}${logo.imageFile.childImageSharp.fixed.src}`,
  //   "description": description,
  //   "telephone": phoneNumber
  // };

  // const LocalBusiness = {
  //   "@type": "LocalBusiness",
  //   "image": [
  //     `${websiteUrl}${logo.imageFile.childImageSharp.fixed.src}`
  //    ],
  //   "@id": websiteUrl,
  //   "name": companyName,
  //   "address": {
  //     "@type": "PostalAddress",
  //     "streetAddress": location.streetAddress,
  //     "addressLocality": location.state,
  //     "addressRegion": location.stateShort,
  //     "postalCode": location.postCode,
  //     "addressCountry": location.countryShort
  //   },
  //   "geo": {
  //     "@type": "GeoCoordinates",
  //     "latitude": location.latitude,
  //     "longitude": location.longitude
  //   },
  //   "url": websiteUrl,
  //   "telephone": phoneNumber,
  //   "email": "bcw1995@gmail.com", //this needs to be updated
  //   "sameAs": [
  //     "https://www.facebooks.com" //this needs to be updated
  //   ],
  //   "priceRange": priceRange,
  //   "openingHoursSpecification": [
  //     {
  //       "@type": "OpeningHoursSpecification",
  //       "dayOfWeek": [
  //         "Monday",
  //         "Tuesday",
  //         "Wednesday",
  //         "Thursday",
  //         "Friday"
  //       ],
  //       "opens": "11:30",
  //       "closes": "22:00"
  //     },
  //     {
  //       "@type": "OpeningHoursSpecification",
  //       "dayOfWeek": "Saturday",
  //       "opens": "16:00",
  //       "closes": "23:00"
  //     },
  //     {
  //       "@type": "OpeningHoursSpecification",
  //       "dayOfWeek": "Sunday",
  //       "opens": "16:00",
  //       "closes": "22:00"
  //     }
  //   ]
  // }


  const All = {
    "@context": "http://schema.org",
    "@graph": [
      WebSite,
      //WebPage,
      //Logo,
      //LocalBusiness
    ]
  }

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteURL
            siteDescription
            siteSocial {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.siteDescription

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      titleTemplate={`%s | ${site.siteMetadata.siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.siteSocial.twitter,
        },
        {
          name: `twitter:title`,
          content: siteTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(All)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
