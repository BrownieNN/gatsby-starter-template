import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Footer from "../components/sections/Footer"
import HeroSection from "../components/sections/HeroSection"
import Blog from "./blog"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <Blog />
      <Footer />
    </Layout>
  )
}

export default IndexPage
