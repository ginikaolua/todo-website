import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import Feedbackstats from "./components/Feedbackstats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./components/pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"


function App(){
  return (
    <FeedbackProvider>
      <Router>
        <Header />
          <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
              <FeedbackForm />
              <Feedbackstats/>
              <FeedbackList />
              </>
            }>
            
            </Route>

            <Route path='/about' element={<AboutPage/>}/>
            </Routes>
          </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App