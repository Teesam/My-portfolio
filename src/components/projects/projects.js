import React from 'react';
import './projects.css';
import { Context } from '../../store';
import Nav from '../nav/nav';
import PopMenu from '../pop-menu/popMenu';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';


const Projects = () => {

    const { state }  = React.useContext(Context);

    return(
        <div className = 'Projects' >
            <Nav />

            { state.checked === true ? '' : <PopMenu id = 'pop' /> }

            <div id = 'p-div'>

                <div className = 'Projects-keeper'>

                    <div className = 'Project-holder'>
                        <Link to = '/' className = 'Project-list'>My Portfolio Site</Link>
                    </div>

                    <div className = 'Project-holder'>
                        <a href = 'http://elastic-leakey-7ef9d9.netlify.app' className = 'Project-list'>Sa Forum</a>
                    </div>

                </div>

                <div className = 'Projects-keeper'>

                    <div className = 'Project-holder'>
                        <Link to = 'https://sharp-kalam-92cd0e.netlify.app' className = 'Project-list'>Vasiti App</Link>
                    </div>

                    <div className = 'Project-holder'>
                        <Link to = 'https://evolve-technologies-test.netlify.app' className = 'Project-list'>Exolve Web App</Link>
                    </div>

                </div>

                <div className = 'Projects-keeper'>

                    <div className = 'Project-holder'>
                        <Link to = 'https://drugstock-web-app.herokuapp.com' className = 'Project-list'>Drugstoc App</Link>
                    </div>

                    <div className = 'Project-holder'>
                        <Link to = 'https://sad-mcnulty-3406b8.netlify.app' className = 'Project-list'>E Learning App</Link>
                    </div>

                </div>

            </div>

            <Footer />




        </div>
    )
}

export default Projects;
