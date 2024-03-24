import Card from "../shared/Card"
import Footer from "../shared/Footer"

const AboutPage = () => {
  return (
    <>
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>This is basically a todo list app</p>
            <p>Version: 1.0.0</p>
            <p>
                <a href="/">Back to home</a>
            </p>
        </div> 
    </Card>
      <Footer/>
      </>
  )
}

export default AboutPage
